import { Search, Bell, Globe, Menu } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function Header({ searchQuery, onSearchChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b bg-[var(--sv-bg-secondary)] border-[var(--sv-border-primary)]">
      <div className="flex items-center justify-between px-16 py-4 gap-8">

        {/* Logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
            <rect width="38" height="38" rx="8" fill="var(--sv-bg-tertiary)"/>
            {/* Body */}
            <path d="M10 28 C10 22 13 18 19 17 C25 18 28 22 28 28Z" fill="var(--sv-text-primary)"/>
            {/* Head */}
            <path d="M14 18 C14 13 16 11 19 11 C22 11 24 13 24 18 C24 21 22 23 19 23 C16 23 14 21 14 18Z" fill="var(--sv-text-primary)"/>
            {/* Left ear */}
            <path d="M14 18 L11 12 L15 16Z" fill="var(--sv-text-primary)"/>
            {/* Right ear */}
            <path d="M24 18 L27 12 L23 16Z" fill="var(--sv-text-primary)"/>
            {/* Face detail */}
            <circle cx="17" cy="17" r="1.2" fill="var(--sv-bg-secondary)"/>
            <circle cx="21" cy="17" r="1.2" fill="var(--sv-bg-secondary)"/>
            {/* Nose */}
            <ellipse cx="19" cy="19.5" rx="1" ry="0.7" fill="var(--sv-bg-secondary)"/>
          </svg>
          <span className="text-lg font-semibold text-[var(--sv-text-primary)] tracking-wide whitespace-nowrap">
            Secure Vault
          </span>
        </div>

        {/* Search Bar - centered */}
        <div className="flex-1 max-w-2xl mx-auto">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--sv-text-muted)]"
              size={16}
            />
            <input
              type="text"
              placeholder="Search files and folders"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-[var(--sv-bg-primary)] text-[var(--sv-text-primary)] pl-10 pr-4 py-3 rounded-xl border border-[var(--sv-border-primary)] focus:border-[var(--sv-accent-blue)] focus:outline-none transition-colors text-sm placeholder:text-[var(--sv-text-muted)]"
            />
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-[var(--sv-bg-hover)] rounded transition-colors"
              aria-label="Filter options"
            >
              <Menu size={15} className="text-[var(--sv-text-muted)]" />
            </button>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-5 flex-shrink-0">
          <button
            className="p-2 hover:bg-[var(--sv-bg-hover)] rounded-lg transition-colors"
            aria-label="Notifications"
          >
            <Bell size={19} className="text-[var(--sv-text-secondary)]" />
          </button>
          <button
            className="p-2 hover:bg-[var(--sv-bg-hover)] rounded-lg transition-colors"
            aria-label="Language"
          >
            <Globe size={19} className="text-[var(--sv-text-secondary)]" />
          </button>
          <button
            className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--sv-accent-blue)] to-[var(--sv-accent-cyan)] flex items-center justify-center text-white font-semibold text-sm flex-shrink-0"
            aria-label="User profile"
          >
            GA
          </button>
        </div>

      </div>
    </header>
  );
}