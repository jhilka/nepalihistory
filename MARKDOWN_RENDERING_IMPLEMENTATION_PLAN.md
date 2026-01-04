# Markdown Rendering Implementation Plan - Senior Level Architecture

**Project:** Nepali History (Next.js + Tailwind CSS + React-Markdown)  
**Date Started:** January 4, 2026  
**Objective:** Implement enterprise-grade markdown rendering with plugin architecture for extensibility

---

## Architectural Overview

### Design Principles

- **Plugin Architecture**: Extensible system for markdown features (tooltips, admonitions, code highlighting, etc.)
- **Composition over Inheritance**: Component-based rendering strategy
- **Separation of Concerns**: Parsing logic, rendering logic, and styling are independently managed
- **Type Safety**: Full TypeScript implementation with strict typing
- **Configuration-Driven**: Centralized configuration for plugins, themes, and behavior
- **Performance-First**: Memoization, code splitting, lazy loading where applicable
- **Accessibility**: WCAG 2.1 AA compliance from the ground up
- **Testability**: Designed for future test coverage (tests deferred to Phase 2)

### Architecture Layers

```
┌─────────────────────────────────────────────┐
│  Components Layer (React Components)        │
│  - MarkdownRenderer (entry point)           │
│  - Custom component overrides               │
├─────────────────────────────────────────────┤
│  Hook Layer (Business Logic)                │
│  - useMarkdownConfig()                      │
│  - useMarkdownPlugins()                     │
│  - useTooltipData()                         │
├─────────────────────────────────────────────┤
│  Plugin System (Extensibility)              │
│  - BasePlugin interface                     │
│  - PluginRegistry                           │
│  - Built-in plugins (Tooltip, etc.)         │
├─────────────────────────────────────────────┤
│  Parser Layer (Remark plugins)              │
│  - Custom directive parsing                 │
│  - AST transformation                       │
├─────────────────────────────────────────────┤
│  Configuration Layer (Config & Types)       │
│  - MarkdownConfig type                      │
│  - PluginRegistry type definitions          │
│  - Theme configuration                      │
└─────────────────────────────────────────────┘
```

---

## Step 1: Setup Type Definitions & Configuration Structure

- [ ] Create `types/markdown.ts` with core interfaces:
  - `MarkdownConfig` - configuration object
  - `MarkdownPlugin` - plugin interface
  - `PluginRegistry` - registry type
  - `RenderComponentProps` - component props
- [ ] Create `config/markdown.config.ts` with default settings
- [ ] Define plugin capabilities (directives, processors, component overrides)

**Status:** Not Started  
**Notes:**

---

## Step 2: Install Dependencies (Only Missing Ones)

- [ ] Check and install: `react-markdown`, `remark-directive`, `unist-util-visit`
- [ ] Verify no version conflicts with existing Radix UI
- [ ] Update `package.json` documentation

**Status:** Not Started  
**Notes:**

---

## Step 3: Create Plugin Architecture Foundation

- [ ] Create `lib/markdown/plugins/base.plugin.ts` - Abstract plugin base class
- [ ] Create `lib/markdown/plugins/registry.ts` - Plugin registry system
- [ ] Create `lib/markdown/plugins/index.ts` - Plugin exports
- [ ] Implement plugin interface with lifecycle methods:
  - `beforeParse()`
  - `beforeRender()`
  - `afterRender()`
  - `getRemarkPlugins()`
  - `getComponentOverrides()`

**Status:** Not Started  
**Notes:**

---

## Step 4: Create Custom Hooks for Logic Abstraction

- [ ] Create `hooks/useMarkdownConfig.ts` - Config context hook
- [ ] Create `hooks/useMarkdownPlugins.ts` - Plugin management hook
- [ ] Create `hooks/useTooltipPlugin.ts` - Tooltip-specific plugin hook
- [ ] Implement context provider for configuration
- [ ] Add error handling and fallback logic

**Status:** Not Started  
**Notes:**

---

## Step 5: Create Remark Plugin System (Parsing Layer)

- [ ] Create `lib/markdown/plugins/tooltip.plugin.ts`:
  - Implement `remark-directive` integration
  - Parse `::tooltip{content}` directives
  - Transform AST to include tooltip metadata
  - Add error handling for malformed directives
- [ ] Create `lib/markdown/plugins/directive-processor.ts`:
  - Generic directive processor
  - Validation and error messages
  - Support for future custom directives
- [ ] Create unit tests for parser logic

**Status:** Not Started  
**Notes:**

---

## Step 6: Create React-Markdown Component Renderer

- [ ] Create `components/markdown/MarkdownRenderer.tsx`:
  - Main entry component with error boundary
  - Props: markdown content, config, plugins
  - Memoized component to prevent unnecessary re-renders
- [ ] Create `components/markdown/components/` directory:
  - `TooltipSpan.tsx` - Tooltip component override
  - `CodeBlock.tsx` - Code block with syntax highlighting
  - `Image.tsx` - Safe image rendering
  - `Link.tsx` - Link handling with validation
- [ ] Implement Radix UI Tooltip integration (leverage existing tooltip.tsx)

**Status:** Not Started  
**Notes:**

---

## Step 7: Create Configuration Provider & Context

- [ ] Create `components/markdown/MarkdownProvider.tsx`:
  - Context provider for markdown config
  - Default configuration injection
  - Plugin registration
- [ ] Create `lib/markdown/context.ts`:
  - React Context for configuration
  - Type-safe context hooks
  - Fallback to defaults if not provided

**Status:** Not Started  
**Notes:**

---

## Step 8: Integrate with EntityCard Component (Usage)

- [ ] Update `app/timeline/components/entity-card.tsx`:
  - Replace `dangerouslySetInnerHTML` with `<MarkdownRenderer>`
  - Pass description content to renderer
  - Add error boundary wrapper
  - Maintain backward compatibility
- [ ] Create migration path for existing HTML descriptions
- [ ] Test with existing timeline data

**Status:** Not Started  
**Notes:**

---

## Step 9: Styling & Theme Integration

- [ ] Create `components/markdown/styles/markdown.css`:
  - Base markdown typography styles
  - Utility classes for common markdown elements (p, h1-h6, lists, etc.)
  - Tooltip-specific styling (dotted underline, cursor)
  - Dark mode support using CSS variables
- [ ] Integrate with existing Tailwind configuration
- [ ] Update `globals.css` with markdown base styles

**Status:** Not Started  
**Notes:**

---

## Step 10: Create Custom Hooks for Consumer Components

- [ ] Create `hooks/useMarkdownRenderer.ts`:
  - Encapsulates markdown rendering logic
  - Returns memoized renderer and config
  - Handles error states
- [ ] Add performance monitoring hooks
- [ ] Document hook usage patterns

**Status:** Not Started  
**Notes:**

---

## Step 11: Accessibility & Performance Optimization

- [ ] Add ARIA attributes to all interactive elements (tooltips)
- [ ] Implement lazy loading for markdown content (if needed)
- [ ] Add performance metrics (memoization, component-level optimization)
- [ ] Test on mobile/touch devices (tooltips -> click to show)
- [ ] Validate with accessibility checker (axe, WAVE)
- [ ] Handle keyboard navigation for tooltips

**Status:** Not Started  
**Notes:**

---

## Step 12: Documentation & Examples

- [ ] Create `docs/markdown/` directory:
  - `README.md` - Overview and quick start
  - `PLUGIN_DEVELOPMENT.md` - How to create custom plugins
  - `CONFIGURATION.md` - Configuration options
  - `EXAMPLES.md` - Real-world usage examples
  - `MIGRATION.md` - Migration from current HTML approach
- [ ] Add JSDoc comments to all public APIs
- [ ] Create example plugin (future reference)

**Status:** Not Started  
**Notes:**

---

## Step 13: Deploy & Monitor

- [ ] Build and test in production environment
- [ ] Add error logging for failed markdown parsing
- [ ] Monitor performance metrics
- [ ] Create runbook for troubleshooting

**Status:** Not Started  
**Notes:**

---

## Summary of Changes

### New Files to Create

- Type definitions: `types/markdown.ts`
- Configuration: `config/markdown.config.ts`
- Plugin system: `lib/markdown/plugins/` (base, registry, tooltip)
- Remark plugins: `lib/markdown/plugins/directive-processor.ts`
- Context: `lib/markdown/context.ts`
- Components: `components/markdown/` (Renderer, Provider, component overrides)
- Custom hooks: `hooks/useMarkdownConfig.ts`, `hooks/useMarkdownPlugins.ts`, etc.
- Styles: `components/markdown/styles/markdown.css`
- Documentation: `docs/markdown/`

### Files to Modify

- `app/timeline/components/entity-card.tsx` - Replace HTML rendering with MarkdownRenderer
- `globals.css` - Add markdown base styles
- `package.json` - Add dependencies
- `tsconfig.json` - Ensure strict mode enabled

### Dependencies to Install

- `react-markdown` (if not present)
- `remark-directive` (if not present)
- `unist-util-visit` (if not present)
- Consider: `remark-gfm`, `@radix-ui/react-tooltip` (already present)

---

## Key Architectural Decisions

| Decision                    | Rationale                                             | Fallback                                       |
| --------------------------- | ----------------------------------------------------- | ---------------------------------------------- |
| Plugin Architecture         | Extensibility for future markdown features            | Monolithic approach with harder future changes |
| React Context for Config    | Type-safe, performant, follows React patterns         | Prop drilling (verbose, prone to errors)       |
| Radix UI Tooltip (existing) | Leverages existing UI library, consistent design      | react-tooltip library (unnecessary duplicate)  |
| Custom Hooks                | Logic reuse, easier testing, separation of concerns   | Component-level logic (harder to test/reuse)   |
| Error Boundary              | Prevents entire page crash from markdown parse errors | Unhandled errors break page                    |
| Memoization                 | Performance optimization for large timelines          | Component re-renders on every parent change    |

---

## Progress Log

| Date | Step | Status | Notes |
| ---- | ---- | ------ | ----- |
|      |      |        |       |
