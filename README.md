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

Required: `id`, `name`, `shortName`, `phone`, `city`, `license`, `theme`, `hero`, `services`.

| Field | Used for |
| --- | --- |
| `phone` | Every call/text link; the dial number is derived from it, so any format works |
| `theme` | `{ ink, signal, metal, paper }` hex colors. `ink` = dark sections and text, `signal` = call buttons, `metal` = pipe and accents (copper, steel, brass…), `paper` = light section background |
| `hero` | `{ headline, sub, urgent }` |
| `services` | `{ home: [{ title, desc }], business: [...] }` |
| `logoText`, `logoSub` | Two-part wordmark in the header (defaults to first word of `name`) |
| `serviceAreas` | Array of places, shown in the hero and footer |
| `facts` | Optional strip under the hero: `[{ value, label }]` |
| `offers` | Optional coupons: `[{ discount, title, sub }]` |
| `story` | Optional `{ headline, intro, timeline: [{ year, text }] }` |
| `reviews` | Optional `[{ author, date, text, quote }]`. Set `quote: true` only for the customer's exact words |
| `reviewsSource` | Optional link to the full reviews page |
| `email`, `address`, `locationNote`, `licenseClass`, `legalName` | Optional contact and footer details |

Sections with no data are skipped, so a bare-bones client still renders a complete page.

## Ground rules for client data

These go in front of real businesses, so: real license numbers (check the [CSLB lookup](https://www.cslb.ca.gov/onlineservices/checklicenseII/checklicense.aspx)), real offers, and real reviews only.
