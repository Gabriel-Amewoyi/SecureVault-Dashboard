import { FileNode } from '../data/mockData';
import { ChevronRight, Folder, File } from 'lucide-react';
import { useState, useEffect } from 'react';

interface TreeItemWrapperProps {
  node: FileNode;
  level: number;
  selectedNodeId: string | null;
  focusedNodeId: string | null;
  onSelect: (node: FileNode) => void;
  onToggle: (nodeId: string) => void;
  expandedNodes: Set<string>;
  searchQuery?: string;
}

export function TreeItemWrapper({
  node,
  level,
  selectedNodeId,
  focusedNodeId,
  onSelect,
  onToggle,
  expandedNodes,
  searchQuery
}: TreeItemWrapperProps) {
  const isExpanded = expandedNodes.has(node.id);
  const hasChildren = node.children && node.children.length > 0;
  const isSelected = selectedNodeId === node.id;
  const isFocused = focusedNodeId === node.id;
  const [highlightedName, setHighlightedName] = useState(node.name);

  useEffect(() => {
    if (searchQuery && searchQuery.trim() !== '') {
      const regex = new RegExp(`(${searchQuery})`, 'gi');
      const parts = node.name.split(regex);
      const highlighted = parts.map((part, i) => 
        regex.test(part) 
          ? `<mark class="bg-[var(--sv-accent-yellow)] text-[var(--sv-bg-primary)] px-0.5 rounded">${part}</mark>`
          : part
      ).join('');
      setHighlightedName(highlighted);
    } else {
      setHighlightedName(node.name);
    }
  }, [searchQuery, node.name]);

  const handleClick = () => {
    onSelect(node);
    if (hasChildren && node.type === 'folder') {
      onToggle(node.id);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleClick();
    } else if (e.key === 'ArrowRight' && hasChildren && !isExpanded) {
      e.preventDefault();
      onToggle(node.id);
    } else if (e.key === 'ArrowLeft' && hasChildren && isExpanded) {
      e.preventDefault();
      onToggle(node.id);
    }
  };

  return (
    <div>
      <div
        role="button"
        tabIndex={isFocused ? 0 : -1}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={`
          flex items-center gap-2 px-4 py-2 cursor-pointer transition-colors group
          ${isSelected ? 'bg-[var(--sv-bg-selected)] border-l-2 border-[var(--sv-accent-blue)]' : ''}
          ${isFocused ? 'ring-2 ring-[var(--sv-accent-blue)] ring-inset' : ''}
          ${!isSelected && !isFocused ? 'hover:bg-[var(--sv-bg-hover)]' : ''}
        `}
        style={{ paddingLeft: `${level * 20 + 16}px` }}
      >
        {/* Expand/Collapse Icon */}
        {hasChildren ? (
          <ChevronRight
            size={16}
            className={`text-[var(--sv-text-muted)] transition-transform flex-shrink-0 ${
              isExpanded ? 'rotate-90' : ''
            }`}
          />
        ) : (
          <div className="w-4" />
        )}

        {/* Folder/File Icon */}
        {node.type === 'folder' ? (
            <Folder
                size={18}
                className="text-[var(--sv-icon-folder)] flex-shrink-0"
            />
        ) : (
          <File
            size={18}
            className="text-[var(--sv-icon-file)] flex-shrink-0"
          />
        )}

        {/* Name */}
        <span 
          className="text-sm text-[var(--sv-text-primary)] truncate"
          dangerouslySetInnerHTML={{ __html: highlightedName }}
        />

        {/* Item count for folders */}
        {node.type === 'folder' && node.items !== undefined && (
          <span className="ml-auto text-xs text-[var(--sv-text-muted)] flex-shrink-0">
            {node.items} {node.items === 1 ? 'item' : 'items'}
          </span>
        )}
      </div>

      {/* Render children recursively */}
      {hasChildren && isExpanded && (
        <div>
          {node.children!.map((child) => (
            <TreeItemWrapper
              key={child.id}
              node={child}
              level={level + 1}
              selectedNodeId={selectedNodeId}
              focusedNodeId={focusedNodeId}
              onSelect={onSelect}
              onToggle={onToggle}
              expandedNodes={expandedNodes}
              searchQuery={searchQuery}
            />
          ))}
        </div>
      )}
    </div>
  );
}
