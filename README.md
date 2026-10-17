# Trade Demos

Custom website redesigns for local trade businesses. No shared template: every client gets a site built from scratch around their brand, their customers and their services.

## Layout

```
sites/
  <client-name>/    one standalone project per client
```

Each folder under `sites/` is its own project with its own `package.json`, dependencies and build, so one client's site never constrains another's.

## Starting a new client

```bash
cd sites
npm create vite@latest <client-name>
cd <client-name>
npm install
npm run dev
```

## Ground rules for client content

These sites go in front of real businesses and their customers, so everything on them has to be true:

- **License numbers:** verify on the [CSLB lookup](https://www.cslb.ca.gov/onlineservices/checklicenseII/checklicense.aspx) before using them.
- **Reviews:** real customer reviews only, pulled from the business's own site, Google or Yelp. Never write testimonials.
- **Offers and coupons:** only deals the business has actually agreed to honor. For a pitch before they've agreed, label them clearly as example offers.
