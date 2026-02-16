import { FileNode } from '../data/mockData';
import { Download, Share2, Copy, Trash2, Info, Lock, LucideIcon } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface ContextMenuProps {
  node: FileNode;
  position: { x: number; y: number };
  onClose: () => void;
}

type MenuItem =
  | { type: 'divider' }
  | { type?: never; icon: LucideIcon; label: string; shortcut?: string; danger?: boolean; action: () => void };

export function ContextMenu({ node, position, onClose }: ContextMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const menuItems: MenuItem[] = [
    { icon: Download, label: 'Download', shortcut: 'Ctrl+D', action: () => console.log('Download', node.name) },
    { icon: Share2, label: 'Share', shortcut: 'Ctrl+S', action: () => console.log('Share', node.name) },
    { icon: Copy, label: 'Copy Path', shortcut: 'Ctrl+C', action: () => console.log('Copy path', node.name) },
    { type: 'divider' },
    { icon: Info, label: 'Properties', shortcut: 'Ctrl+I', action: () => console.log('Properties', node.name) },
    { icon: Lock, label: 'Security Settings', action: () => console.log('Security', node.name) },
    { type: 'divider' },
    { icon: Trash2, label: 'Delete', shortcut: 'Del', danger: true, action: () => console.log('Delete', node.name) },
  ];

  return (
    <div
      ref={menuRef}
      className="fixed z-50 min-w-[200px] bg-[var(--sv-bg-secondary)] border border-[var(--sv-border-primary)] rounded-lg py-1"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      {menuItems.map((item, index) => {
        if (item.type === 'divider') {
          return <div key={`divider-${index}`} className="h-px bg-[var(--sv-border-secondary)] my-1" />;
        }
        const Icon = item.icon;
        return (
          <button
            key={item.label}
            onClick={() => { item.action(); onClose(); }}
            className={`w-full flex items-center gap-3 px-3 py-2 text-sm transition-colors ${
              item.danger ? 'text-red-400 hover:bg-red-500/10' : 'text-[var(--sv-text-primary)] hover:bg-[var(--sv-bg-hover)]'
            }`}
          >
            <Icon size={16} className="flex-shrink-0" />
            <span className="flex-1 text-left">{item.label}</span>
            {item.shortcut && <span className="text-xs text-[var(--sv-text-muted)]">{item.shortcut}</span>}
          </button>
        );
      })}
    </div>
  );
}