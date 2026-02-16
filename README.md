# SecureVault Dashboard

A file explorer interface built for SecureVault Inc., a cloud security platform used by law firms and financial institutions.

**Live Demo:** https://secure-vault-dashboard-taupe.vercel.app/  
**Design File:** (https://www.figma.com/design/FcVzuXbsXb5v6LEns8Org3/Secure-Vault---File-Explorer?node-id=1-7534&t=AQSkYkWbwtPjfUG5-1)

---

## What This Is

This was a project I worked on for about 7 days as part of my Amalitech NSS application. The goal was to build a dark-themed file explorer that could handle deeply nested folder structures, keyboard navigation, search, and a properties panel — all without using any component libraries like Bootstrap or Material UI.

---

## Running It Locally
```bash
git clone https://github.com/Gabriel-Amewoyi/SecureVault-Dashboard.git
cd SecureVault-Dashboard
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

---

## What It Does

- Browse folders and files in a recursive tree that handles any depth
- Search across all files and folders — matching folders open automatically
- Click any file or folder to see its metadata in the properties panel
- Navigate entirely with your keyboard using arrow keys and Enter
- Breadcrumb trail at the top always shows where you are

---

## The Wildcard Feature — Breadcrumb Navigation

When I was going through the requirements I kept thinking about what it actually feels like to navigate a deeply nested file structure. Once you go 4 or 5 levels deep you genuinely lose track of where you are and the only way back is clicking through everything again.

So I built the breadcrumb navigation as my wildcard feature. Every time you click into a folder the breadcrumb updates to show your full path. Each segment is clickable so you can jump straight back to any level. It also updates as you move through files with your keyboard so it stays in sync the whole time.

It felt like the most practical thing I could add for people who actually use this kind of tool every day.

---

## How the Tree Works

The file tree is built with a recursive React component called `TreeItemWrapper`. When a folder is expanded it renders a new `TreeItemWrapper` for each of its children, which in turn does the same for their children. There is no hardcoded depth limit — it works the same way whether the structure is 2 levels deep or 20.

---

## Keyboard Navigation

| Key | Action |
|-----|--------|
| Arrow Down | Move to next item |
| Arrow Up | Move to previous item |
| Arrow Right | Expand folder |
| Arrow Left | Collapse folder |
| Enter | Select file or toggle folder |

---

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Lucide React for icons

---

## Folder Structure
```
src/
├── components/
│   ├── Header.tsx
│   ├── Breadcrumb.tsx
│   ├── FileTree.tsx
│   ├── TreeItemWrapper.tsx
│   ├── PropertiesPanel.tsx
│   └── ContextMenu.tsx
├── data/
│   └── mockData.ts
└── App.tsx
```

---

## Author

Gabriel Amewoyi  
Amalitech NSS Application  
github.com/Gabriel-Amewoyi
