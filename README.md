# Trade Demos

A collection of individually designed websites for local trade businesses. Each demo owns its layout, styling, and content. There is no shared business website template.

The home page lists available demos. The floating **Switch Client** control stays available on every page.

## Run locally

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Add an independent demo

1. Create a folder under `src/demos/` for the business.
2. Build its React page component and any assets or styles in that folder.
3. Import the page into `src/demos/index.js` and register it:

```js
import BusinessPage from './business/BusinessPage';

export const DEMOS = [
  { id: 'business', name: 'Business Name', Page: BusinessPage },
];
```

Visit `/business`. The hub and switcher update automatically. Use a unique URL slug for each ID. Scope CSS to the demo so styles do not affect other sites.

## Structure

- `src/App.jsx`: hub, independent demo routes, and missing-demo page.
- `src/components/DemoSwitcher.jsx`: shared demo navigation.
- `src/demos/index.js`: demo registry, currently empty.
- `src/demos/<business>/`: each future business's independent website.

The previous Tonkin and Luna demos and master template have been removed. Old demo URLs show a missing-demo page.

Use verified business details, approved offers, and authentic testimonials in client-facing demos.
