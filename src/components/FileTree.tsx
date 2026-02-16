import { FileNode } from '../data/mockData';
import { TreeItemWrapper } from './TreeItemWrapper';
import { useEffect, useRef, useState } from 'react';

interface FileTreeProps {
  data: FileNode[];
  selectedNode: FileNode | null;
  onSelectNode: (node: FileNode) => void;
  searchQuery: string;
}

export function FileTree({ data, selectedNode, onSelectNode, searchQuery }: FileTreeProps) {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());
  const [flattenedNodes, setFlattenedNodes] = useState<FileNode[]>([]);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Flatten the tree structure for keyboard navigation
  useEffect(() => {
    const flatten = (nodes: FileNode[], result: FileNode[] = []): FileNode[] => {
      nodes.forEach(node => {
        result.push(node);
        if (node.children && expandedNodes.has(node.id)) {
          flatten(node.children, result);
        }
      });
      return result;
    };
    setFlattenedNodes(flatten(data));
  }, [data, expandedNodes]);

  // Auto-expand nodes that match search
  useEffect(() => {
    if (searchQuery.trim() === '') return;

    const findAndExpand = (nodes: FileNode[], parentIds: string[] = []): string[] => {
      let idsToExpand: string[] = [];
      
      nodes.forEach(node => {
        const matches = node.name.toLowerCase().includes(searchQuery.toLowerCase());
        
        if (matches) {
          // Expand all parent folders
          idsToExpand.push(...parentIds);
          if (node.type === 'folder') {
            idsToExpand.push(node.id);
          }
        }
        
        if (node.children) {
          const childIds = findAndExpand(node.children, [...parentIds, node.id]);
          idsToExpand.push(...childIds);
        }
      });
      
      return idsToExpand;
    };

    const idsToExpand = findAndExpand(data);
    setExpandedNodes(new Set(idsToExpand));
  }, [searchQuery, data]);

  const handleToggle = (nodeId: string) => {
    setExpandedNodes(prev => {
      const next = new Set(prev);
      if (next.has(nodeId)) {
        next.delete(nodeId);
      } else {
        next.add(nodeId);
      }
      return next;
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const visibleNodes = flattenedNodes;
    
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = Math.min(focusedIndex + 1, visibleNodes.length - 1);
      setFocusedIndex(nextIndex);
      onSelectNode(visibleNodes[nextIndex]);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = Math.max(focusedIndex - 1, 0);
      setFocusedIndex(prevIndex);
      onSelectNode(visibleNodes[prevIndex]);
    }
  };

  useEffect(() => {
    if (selectedNode && focusedIndex === -1) {
      const index = flattenedNodes.findIndex(node => node.id === selectedNode.id);
      if (index !== -1) {
        setFocusedIndex(index);
      }
    }
  }, [selectedNode, flattenedNodes, focusedIndex]);

  // Filter nodes based on search
  const filterNodes = (nodes: FileNode[]): FileNode[] => {
    if (!searchQuery.trim()) return nodes;

    return nodes.filter(node => {
      const nameMatches = node.name.toLowerCase().includes(searchQuery.toLowerCase());
      const hasMatchingChildren = node.children ? filterNodes(node.children).length > 0 : false;
      return nameMatches || hasMatchingChildren;
    }).map(node => {
      if (node.children) {
        return {
          ...node,
          children: filterNodes(node.children)
        };
      }
      return node;
    });
  };

  const filteredData = filterNodes(data);

  return (
    <div
      ref={containerRef}
      onKeyDown={handleKeyDown}
      className="flex-1 overflow-y-auto"
      tabIndex={0}
    >
      {filteredData.length === 0 ? (
        <div className="flex items-center justify-center h-32 text-[var(--sv-text-muted)]">
          No files or folders found
        </div>
      ) : (
        filteredData.map((node, index) => (
          <TreeItemWrapper
            key={node.id}
            node={node}
            level={0}
            selectedNodeId={selectedNode?.id || null}
            focusedNodeId={flattenedNodes[focusedIndex]?.id || null}
            onSelect={onSelectNode}
            onToggle={handleToggle}
            expandedNodes={expandedNodes}
            searchQuery={searchQuery}
          />
        ))
      )}
    </div>
  );
}