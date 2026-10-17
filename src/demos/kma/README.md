# KMA redesign concept

Route: /kma. This demo has its own component and scoped CSS; it does not use a master business template.

## Sources reviewed October 17, 2026

- https://kmahvacandconstruction.com/ — service scope, family-operated business, contractor license as published by KMA.
- https://kmahvacandconstruction.com/portfolio/ — Fallbrook and San Jacinto project scopes; 62 package-unit replacements at Temecula Valley Unified School District.
- https://kmahvacandconstruction.com/contact/ — office/mobile numbers, email, hours, service area.

Business details reflect KMA's published website, not an independent licensing or insurance verification. No invented reviews, offers, performance statistics, or emergency-response promises are included.

Project images are linked from KMA's original WordPress uploads. They are external dependencies and need permission and local copies before production handoff. The demo includes no third-party stock imagery or invented project photography.

Contact buttons open the phone dialer, email client, or the existing KMA contact form. There is no simulated submission or new lead-processing backend.

The page is an independent redesign concept. KMA's live website is unchanged.

## Homepage interactions and original destinations

The homepage now includes a hand-drawn SVG HVAC schematic, entrance and viewport reveals, an audience selector, and a project viewer. Tab groups support arrow keys, Home, and End. The pause-motion control stops animations, and prefers-reduced-motion disables motion while keeping content visible.

Original homepage DOM inspected October 17, 2026:
- Facebook: https://www.facebook.com/kmahvac/
- Instagram: https://www.instagram.com/kmahvac/
- Twitter/X: https://twitter.com/kmahvac
- Google Maps: original iframe embed retained, including KMA's business identifier. The embed is lazy-loaded and has a titled iframe; a direct Maps link is available outside it.

Social destinations match links published by KMA; account activity and ownership have not been independently audited. The map depends on Google Maps availability.

Scope: homepage only. Dedicated service and other pages remain future work.

Validation: local npm ci, npm run lint, npm run build. Manual desktop and mobile browser checks covered audience selection, keyboard tab selection, project switching, motion pause, mobile navigation, social destinations, rendered Google Maps marker, and horizontal overflow. No browser console errors were observed.
