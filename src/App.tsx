import { useState } from 'react';
import { Header } from './components/Header';
import { Breadcrumb } from './components/Breadcrumb';
import { FileTree } from './components/FileTree';
import { PropertiesPanel } from './components/PropertiesPanel';
import { ContextMenu } from './components/ContextMenu';
import { mockFileData, FileNode } from './data/mockData';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNode, setSelectedNode] = useState<FileNode | null>(null);
  const [breadcrumbPath, setBreadcrumbPath] = useState<string[]>([]);
  const [contextMenu, setContextMenu] = useState<{ node: FileNode; x: number; y: number } | null>(null);

  // Build full path by searching the tree
  const findPath = (
    nodes: FileNode[],
    targetId: string,
    currentPath: string[] = []
  ): string[] | null => {
    for (const node of nodes) {
      const newPath = [...currentPath, node.name];
      if (node.id === targetId) return newPath;
      if (node.children) {
        const found = findPath(node.children, targetId, newPath);
        if (found) return found;
      }
    }
    return null;
  };

  const handleSelectNode = (node: FileNode) => {
    setSelectedNode(node);
    const path = findPath(mockFileData, node.id);
    if (path) setBreadcrumbPath(path);
  };

  const handleBreadcrumbNavigate = (index: number) => {
    if (index === -1) {
      setBreadcrumbPath([]);
      setSelectedNode(null);
    } else {
      setBreadcrumbPath(breadcrumbPath.slice(0, index + 1));
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col bg-[var(--sv-bg-primary)]">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <Breadcrumb path={breadcrumbPath} onNavigate={handleBreadcrumbNavigate} />
      <div className="flex-1 flex overflow-hidden">
        <div className="w-[60%] border-r border-[var(--sv-border-primary)] flex flex-col bg-[var(--sv-bg-secondary)] p-16">
          <FileTree
            data={mockFileData}
            selectedNode={selectedNode}
            onSelectNode={handleSelectNode}
            searchQuery={searchQuery}
          />
        </div>
        <div className="w-[40%] bg-[var(--sv-bg-secondary)]">
          <PropertiesPanel selectedNode={selectedNode} />
        </div>
      </div>
      {contextMenu && (
        <ContextMenu
          node={contextMenu.node}
          position={{ x: contextMenu.x, y: contextMenu.y }}
          onClose={() => setContextMenu(null)}
        />
      )}
    </div>
  );
}
