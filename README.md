# Trade Demos

One React template, many local trade businesses. Each client is a data file; the template skins itself from it, so a new demo is a new file instead of a new site.

Live routes:

- `/` or `/tonkin` - Tonkin Plumbing (default)
- `/luna` - Luna Plumbing Service

The floating **Switch Client** button (bottom right) flips between demos.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run lint
```

Stack: React 19, Vite, Tailwind CSS v3 (via PostCSS), react-router, lucide-react icons.

## Project layout

```
src/
  App.jsx                         routes: / and /:clientId
  components/
    MasterTradeTemplate.jsx       the page itself
    DemoSwitcher.jsx              floating client picker
  data/
    index.js                      CLIENTS registry + DEFAULT_CLIENT
    clients/
      tonkin.js
      luna.js
```

## Adding a client

1. Copy an existing file in `src/data/clients/` (e.g. `luna.js` to `acme.js`) and fill in the details.
2. Register it in `src/data/index.js`:

   ```js
   import { acme } from './clients/acme';

   export const CLIENTS = { tonkin, luna, acme };
   ```

3. Visit `/acme`.

The `id` field must match the key in `CLIENTS` and the URL.

### Fields the template reads

| Field | Used for |
| --- | --- |
| `id` | URL and switcher |
| `name` | Header and footer |
| `shortName` | Switcher button label |
| `phone` | All call/text buttons; the dial number is derived from it, so any format works |
| `license` | Residential card and footer |
| `city` | Hero banner ("Serving <city> Since …") and footer fallback |
| `estYear` | Hero banner |
| `address` | Footer (optional, falls back to `city`) |
| `legalName` | Copyright line (optional, falls back to `name`) |
| `logoText` | Logo box (optional, defaults to the first word of `name`) |

> Heads up: most of the body copy in `MasterTradeTemplate.jsx` (service cards, slab leak section, job gallery) is still written for Tonkin and not yet driven by client data.
