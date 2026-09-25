# Varun Joshi — React + Vite Portfolio

A single-page React + Vite portfolio based on the approved static design, with restrained visual upgrades, responsive layout, project action links, technology-color skill hover states, and a contact form ready for an email service.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, normally `http://localhost:5173`.

Production build:

```bash
npm run build
npm run preview
```

## Theme changer

The navbar includes a single-button theme control. It remembers the selected light/dark theme in `localStorage` and uses the existing dark theme by default on first load. No extra package is required.

## Contact form / email notifications

The site uses Formspree as the external form/email service so no Python backend or database is required.

1. Create a form in your Formspree dashboard.
2. Copy the form endpoint, for example `https://formspree.io/f/xxxxxxxx`.
3. Create a file named `.env` in the project root from `.env.example`.
4. Set:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

5. Restart Vite after changing `.env`.

The form sends name, email, subject and message. The visitor's email is sent as the reply-to address by Formspree, so the notification email can be answered directly.

The form also has a small honeypot field and accessible loading/success/error states. When the Formspree endpoint is not configured locally, submitting the form opens the user's email client as a fallback.

## Where to replace photos

Replace these files with your real photos, keeping the filenames:

```text
src/assets/images/hero-photo-placeholder.jpg
src/assets/images/about-photo-placeholder.jpg
```

The containers use fixed aspect ratios plus `object-fit: cover`, so a replacement image does not require component changes.

Recommended sizes:
- Hero: around 4:5, at least 1000px on the long edge.
- About: square or 4:5, at least 800px on the long edge.

## Résumé

Replace:

```text
public/assets/Varun_Joshi_Resume.pdf
```

with the latest résumé while keeping the same filename/path, or update the résumé links in the Navbar and Hero components.

## Project demo / GitHub links

Project rows now have a right-side action area for Demo and GitHub links.

Edit the `projects` array in:

```text
src/components/Projects.jsx
```

Each project supports:

```js
github: 'https://github.com/your-user/your-repo',
demo: 'https://your-demo-url.example',
```

Empty URLs are intentionally hidden rather than rendered as broken links. The confirmed Elevate GitHub URL is already wired; add the other project URLs when you have them.

## Main UI/UX changes

- Wider content container and smaller horizontal gutters so the desktop layout breathes less at the edges.
- Clearer alignment between section titles, body content, and supporting information.
- About is now one cohesive layout: bio + photo, skills, education, and recognition are visually connected.
- Both quote bands use the same raised background so they read as one visual component.
- Experience gets its own raised section treatment; Projects remains its own editorial section.
- Projects is now labeled simply `Projects` and supports Demo/GitHub actions on the right.
- Skill names are individual hoverable tags with technology-specific colors.
- Buttons have clearer hover/focus feedback without introducing gradients or shadows.
- Contact is now a real form with validation, submission states, and email-service integration.
- Footer `Back to top` text is replaced with a fixed circular icon button.
- Existing restrained scroll/reveal motion and reduced-motion support are preserved.

## Notes

No router and no Python backend are used. The site remains a static frontend; Formspree handles form submission and email notifications.
