import { Home, ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  path: string[];
  onNavigate: (index: number) => void;
}

export function Breadcrumb({ path, onNavigate }: BreadcrumbProps) {
  return (
    <div className="border-b border-[var(--sv-border-primary)] bg-[var(--sv-bg-tertiary)] px-6 py-3">
      <div className="flex items-center gap-2 text-sm">
        <button
          onClick={() => onNavigate(-1)}
          className="flex items-center gap-2 text-[var(--sv-text-secondary)] hover:text-[var(--sv-accent-blue)] transition-colors"
        >
          <Home size={16} />
          <span>Category</span>
        </button>
        {path.length > 0 && (
          <>
            {path.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <ChevronRight size={14} className="text-[var(--sv-text-muted)]" />
                <button
                  onClick={() => onNavigate(index)}
                  className={`transition-colors ${
                    index === path.length - 1
                      ? 'text-[var(--sv-accent-blue)] font-medium'
                      : 'text-[var(--sv-text-secondary)] hover:text-[var(--sv-accent-blue)]'
                  }`}
                >
                  {item}
                </button>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
