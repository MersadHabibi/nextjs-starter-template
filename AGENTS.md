# AGENTS.md

## UI & Styling Rules (Mandatory)

### Tailwind & Colors

* Use **Tailwind token classes only** (e.g. `bg-primary-500`, `text-secondary-500`, `bg-info-500`).
* **Never use raw hex, rgb, or inline color values inside components.**
* Always prefer colors and utility classes defined in `globals.css`.
* The **main project color palette is defined in `globals.css`** and must be reused across the application.
* Reuse existing global utility classes from `globals.css` whenever possible.

---

### Class Name Handling

* Always use `cn` from `src/lib/utils.ts` for merging class names.
* Avoid manual string concatenation for class names.

---

### Styling Restrictions

* Do **NOT** use inline styles unless there is no possible Tailwind or global utility alternative.

---

### Component Organization

* Route-specific components must be placed inside the route’s `_components` directory.

* Shared reusable UI primitives:

```
src/components/ui
```

* Application/business-level components:

```
src/components/app
```

* Globally reusable feature modules:

```
src/components/modules
```

---

### Icons

* Always use icons from:

```
src/components/icons.tsx
```

(FontAwesome abstraction layer)

* If the required icon does not exist there, fallback to:

```
lucide-react
```

---

## Next.js Architecture Rules (Mandatory)

### Route-Level Organization

* If hooks, components, or types are specific to a route, they must be placed inside that route using the following structure:

```
_hooks
_components
_types
```

Example:

```
app/dashboard/_hooks
app/dashboard/_components
app/dashboard/_types
```

* Do NOT move route-specific logic to global folders unless it is reusable across multiple routes.

---

### Hooks

* Shared reusable hooks must be placed inside:

```
src/hooks
```

* Route-specific hooks must live inside the route `_hooks` folder.

---

### Utilities

* Shared utility/helper functions must be placed inside:

```
src/utils
```

---

## Type Definitions

### API Types

* API-related request/response types should be placed near their related domain or route when possible.
* Route-specific types must live inside the route `_types` folder.

---

### Global Types

* Shared global types must be defined in:

```
types.ts
```

---

### Global Enums

* Shared enums must be defined in:

```
enums.ts
```

---

## Existing Patterns & Reuse (Mandatory)

* Before adding new APIs, hooks, utilities, components, or types, always check existing implementations in the codebase.
* Follow the same structure, naming conventions, and usage patterns already used in the project.
* Do NOT introduce new patterns if a similar solution already exists.
* Prefer extending or reusing existing implementations instead of creating duplicates.
* Maintain consistency with how APIs, React Query hooks, and type definitions are currently implemented.

---

## General Expectations

* Follow the existing design system and architecture.
* Prefer consistency and reuse over introducing new patterns.
* Avoid duplicating logic, components, hooks, utilities, or types.
* Respect project folder boundaries and separation of concerns.
* Follow existing naming conventions and patterns already used in the codebase.
