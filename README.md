# Angular Product Table Prototype

A minimal historical Angular and Angular Material experiment for rendering an in-memory product list with a paginator.

## Current scope

- One product-list component
- Angular Material table and paginator modules
- Two sample products stored directly in the component
- A catch-all route that displays the product-list view
- Starter component test scaffolding

## Technology

- Angular 16
- TypeScript 5
- Angular Material 16
- RxJS
- Jasmine and Karma scaffolding

## Install and run

```powershell
npm install
npm start
```

Open `http://localhost:4200` after the development server starts.

## Build and test

```powershell
npm run build
npm test -- --watch=false --browsers=ChromeHeadless
```

The build is the reliable verification for the current archive. The committed tests are still Angular starter scaffolding and need repair before they can be treated as meaningful coverage.

## Data model

The component uses a small local interface:

```ts
interface Product {
  name: string;
  image: string;
  price: number;
  discount: boolean;
}
```

There is no API, database, authentication, shopping cart, checkout flow, inventory management, payment integration, or deployed backend in this repository.

## Historical limitations

This is an incomplete UI prototype rather than a finished storefront.

- Product data is hardcoded and image values are placeholders.
- The table template defines only part of the configured columns and needs implementation work before the full row model renders correctly.
- The paginator is wired to the in-memory data source, but the tiny sample does not exercise pagination.
- Styling, responsive behavior, accessibility review, error states, loading states, and empty states are incomplete.
- The product-list test does not import its required Angular Material modules.
- The app-component starter test expects template content that is no longer present.
- The dependency graph is historical and should be upgraded before deployment.

## Status

Archived educational prototype. It is retained as evidence of early Angular Material experimentation and should remain unfeatured until the UI and tests are completed.

## License

No open-source license has been selected. The source is publicly viewable, but reuse rights are not granted until a license is added.
