import { FileNode } from '../data/mockData';
import { Folder, Tag, FileText, HardDrive, Shield, Calendar, Clock, Info, Download, Share2 } from 'lucide-react';

interface PropertiesPanelProps {
  selectedNode: FileNode | null;
}

export function PropertiesPanel({ selectedNode }: PropertiesPanelProps) {
  if (!selectedNode) {
    return (
      <div className="flex items-center justify-center h-full text-[var(--sv-text-muted)]">
        <div className="text-center">
          <Folder size={48} className="mx-auto mb-3 opacity-30" />
          <p>Select a file or folder to view properties</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto">
      {/* Header */}
      <div className="p-6 border-b border-[var(--sv-border-primary)]">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-3 bg-[var(--sv-bg-tertiary)] rounded-lg">
            <Folder size={24} className="text-[var(--sv-icon-folder)]" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[var(--sv-text-primary)]">Properties</h2>
            <p className="text-sm text-[var(--sv-text-secondary)]">File and Folder Metadata</p>
          </div>
        </div>
      </div>

      {/* Properties List */}
      <div className="p-6 space-y-4">
        {/* File Name */}
        <div className="flex items-start gap-3 p-3 bg-[var(--sv-bg-tertiary)] rounded-lg border border-[var(--sv-border-secondary)]">
          <Tag size={20} className="text-[var(--sv-text-secondary)] mt-0.5 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="text-xs text-[var(--sv-text-muted)] mb-1">File Name</div>
            <div className="text-sm text-[var(--sv-text-primary)] break-words">{selectedNode.name}</div>
          </div>
        </div>

        {/* File Type */}
        <div className="flex items-start gap-3 p-3 bg-[var(--sv-bg-tertiary)] rounded-lg border border-[var(--sv-border-secondary)]">
          <FileText size={20} className="text-[var(--sv-text-secondary)] mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <div className="text-xs text-[var(--sv-text-muted)] mb-1">File Type</div>
            <div className="text-sm text-[var(--sv-text-primary)] capitalize">{selectedNode.type}</div>
          </div>
        </div>

        {/* Items (for folders) */}
        {selectedNode.type === 'folder' && selectedNode.items !== undefined && (
          <div className="flex items-start gap-3 p-3 bg-[var(--sv-bg-tertiary)] rounded-lg border border-[var(--sv-border-secondary)]">
            <HardDrive size={20} className="text-[var(--sv-text-secondary)] mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <div className="text-xs text-[var(--sv-text-muted)] mb-1">Items</div>
              <div className="text-sm text-[var(--sv-text-primary)]">{selectedNode.items} items</div>
            </div>
          </div>
        )}

        {/* Size */}
        {selectedNode.size && (
          <div className="flex items-start gap-3 p-3 bg-[var(--sv-bg-tertiary)] rounded-lg border border-[var(--sv-border-secondary)]">
            <HardDrive size={20} className="text-[var(--sv-text-secondary)] mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <div className="text-xs text-[var(--sv-text-muted)] mb-1">Size</div>
              <div className="text-sm text-[var(--sv-text-primary)]">{selectedNode.size}</div>
            </div>
          </div>
        )}

        {/* Security */}
        {selectedNode.security && (
          <div className="flex items-start gap-3 p-3 bg-[var(--sv-bg-tertiary)] rounded-lg border border-[var(--sv-border-secondary)]">
            <Shield size={20} className="text-[var(--sv-text-secondary)] mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <div className="text-xs text-[var(--sv-text-muted)] mb-1">Security</div>
              <div className="text-sm">
                <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                  selectedNode.security === 'Maximum' 
                    ? 'bg-red-500/20 text-red-400'
                    : selectedNode.security === 'High'
                    ? 'bg-orange-500/20 text-orange-400'
                    : 'bg-blue-500/20 text-blue-400'
                }`}>
                  {selectedNode.security}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Date Modified */}
        {selectedNode.dateModified && (
          <div className="flex items-start gap-3 p-3 bg-[var(--sv-bg-tertiary)] rounded-lg border border-[var(--sv-border-secondary)]">
            <Calendar size={20} className="text-[var(--sv-text-secondary)] mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <div className="text-xs text-[var(--sv-text-muted)] mb-1">Date Modified</div>
              <div className="text-sm text-[var(--sv-text-primary)]">{selectedNode.dateModified}</div>
            </div>
          </div>
        )}

        {/* Date Created */}
        {selectedNode.dateCreated && (
          <div className="flex items-start gap-3 p-3 bg-[var(--sv-bg-tertiary)] rounded-lg border border-[var(--sv-border-secondary)]">
            <Clock size={20} className="text-[var(--sv-text-secondary)] mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <div className="text-xs text-[var(--sv-text-muted)] mb-1">Date Created</div>
              <div className="text-sm text-[var(--sv-text-primary)]">{selectedNode.dateCreated}</div>
            </div>
          </div>
        )}

        {/* Security Notice */}
        <div className="flex items-start gap-3 p-3 bg-[var(--sv-bg-secondary)] rounded-lg border border-[var(--sv-border-primary)]">
          <Info size={20} className="text-[var(--sv-accent-blue)] mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <div className="text-xs text-[var(--sv-text-muted)] mb-1">Security Notice</div>
            <div className="text-xs text-[var(--sv-text-secondary)] leading-relaxed">
              This file is stored in SecureVault's enterprise-grade encrypted cloud storage with multi-factor authentication and audit logging.
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[var(--sv-accent-blue)] hover:bg-[#2d85e6] text-white rounded-lg transition-colors font-medium">
            <Download size={18} />
            <span>Download</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[var(--sv-bg-tertiary)] hover:bg-[var(--sv-bg-hover)] text-[var(--sv-text-primary)] rounded-lg border border-[var(--sv-border-primary)] transition-colors font-medium">
            <Share2 size={18} />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}
