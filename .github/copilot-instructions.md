# Copilot Instructions for MegaBlog

## Project Overview
- **MegaBlog** is a React application bootstrapped with Vite, using HMR and ESLint for code quality.
- The codebase is organized by feature: authentication, UI components, store (Redux), and configuration files.
- Major directories: `src/components/`, `src/appwrite/`, `src/store/`, `src/conf/`, `public/`.

## Architecture & Data Flow
- **Authentication**: Managed via Appwrite SDK in `src/appwrite/auth.js` and Redux slice in `src/store/authSlice.js`.
- **UI Components**: Reusable components in `src/components/` (e.g., `Input.jsx`, `Button.jsx`, `RTE.jsx`).
- **State Management**: Redux is used for global state (`src/store/store.js`, `authSlice.js`).
- **Rich Text Editor**: Integrated via TinyMCE (`@tinymce/tinymce-react`) in `RTE.jsx`.
- **Routing**: Not shown, but typically handled in `src/main.jsx` or a dedicated router file.

## Developer Workflows
- **Start Dev Server**: `npm run dev` (uses Vite)
- **Build**: `npm run build`
- **Lint**: `npm run lint` (uses ESLint config in `eslint.config.js`)
- **No explicit test setup** detected; add conventions here if tests are added.

## Conventions & Patterns
- **Component Props**: Use destructuring and default values (see `Input.jsx`).
- **Forwarding Refs**: Use `React.forwardRef` for input components.
- **Redux Slices**: Store logic in `src/store/`, slice per feature.
- **Appwrite Integration**: API calls abstracted in `src/appwrite/`.
- **Styling**: Utility classes (likely Tailwind or similar) for rapid UI development.
- **File Naming**: PascalCase for components, camelCase for config and store files.

## External Dependencies
- **Appwrite**: For authentication and backend services.
- **TinyMCE**: For rich text editing.
- **React Hook Form**: For form state management (`Controller` in `RTE.jsx`).

## Examples
- **Input Component**: See `src/components/Input.jsx` for prop patterns and ref forwarding.
- **Rich Text Editor**: See `src/components/RTE.jsx` for integration with React Hook Form and TinyMCE.
- **Redux Auth Slice**: See `src/store/authSlice.js` for authentication state logic.

## Integration Points
- **Appwrite**: All backend/auth logic should go through `src/appwrite/`.
- **Redux**: Use `store.js` and slices for global state.
- **Forms**: Use React Hook Form for complex forms, with custom components wrapped in `Controller`.

---
If any conventions or workflows are unclear, please ask for clarification or provide feedback to improve these instructions.
