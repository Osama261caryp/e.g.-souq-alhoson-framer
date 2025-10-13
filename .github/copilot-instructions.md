# GitHub Copilot Instructions for SOUQ ALHOSON Framer Plugin

## Project Overview
This repository contains a Framer plugin and landing page components for SOUQ ALHOSON. The project includes:
- **Framer CMS Plugin** (`plugin.ts`) - Configure and sync functionality
- **Static Landing Page** (`SouqAlHosonLandingPage.tsx`) - Static React component
- **CMS-powered Landing Page** (`SouqAlHosonCMSLanding.tsx`) - Dynamic component with CMS integration

## General Guidelines

### Code Style and Standards
- Use **TypeScript/TSX** for all component and plugin files
- Follow modern ES6+ JavaScript syntax
- Use `const` and `let` instead of `var`
- Prefer arrow functions for functional components
- Use TypeScript type annotations for improved type safety

### File Organization
- Keep component files in the root directory
- Use clear, descriptive file names following PascalCase for components
- Separate static components from CMS-integrated components

### TypeScript/TSX Development
- Always include proper TypeScript types and interfaces
- Export components and types clearly
- Use React functional components with TypeScript
- Include proper prop types for all components

### Framer-Specific Guidelines
- Follow Framer plugin API conventions for `plugin.ts`
- Implement required `configure()` and `sync()` functions for CMS integration
- Use Framer's built-in components and utilities where appropriate
- Ensure compatibility with Framer's component system

### CMS Integration
- CMS-powered components should support dynamic data from Framer CMS
- Maintain clear separation between static and dynamic components
- Use proper data fetching patterns for CMS content
- Handle loading and error states appropriately

### Component Development
- Create reusable, modular components
- Keep components focused on a single responsibility
- Use clear prop naming conventions
- Document complex component logic with comments
- Ensure responsive design considerations

### Documentation
- Update README.md when adding new features or components
- Include clear descriptions of component usage
- Document any new plugin functionality
- Add examples for complex implementations

### Testing and Quality
- Ensure code builds without errors before committing
- Test components in Framer environment when possible
- Validate TypeScript compilation
- Check for console errors and warnings

### Best Practices
- Keep code DRY (Don't Repeat Yourself)
- Write self-documenting code with clear variable and function names
- Handle edge cases and potential errors gracefully
- Consider performance implications for large datasets
- Maintain backwards compatibility when modifying existing components

## Specific Instructions

### When modifying `plugin.ts`
- Ensure `configure()` function is properly implemented
- Implement `sync()` with appropriate demo/real data
- Follow Framer CMS plugin API specifications
- Handle errors and edge cases in data synchronization

### When working with Landing Page components
- Maintain consistent styling and layout patterns
- Ensure components are Framer-compatible
- Use proper React hooks for state management
- Keep static and CMS components functionally separate but visually consistent

### When updating dependencies
- Use npm for package management
- Test thoroughly after dependency updates
- Update package.json with appropriate version constraints
- Document any breaking changes in dependencies
