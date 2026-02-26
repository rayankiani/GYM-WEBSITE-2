# APEX GYM Website

<p align="center">
  <strong>Forge Your Legacy</strong><br>
  A cinematic, high-energy fitness landing page built with HTML, CSS, JavaScript, and GSAP animations.
</p>

<p align="center">
  <img alt="HTML" src="https://img.shields.io/badge/HTML5-Structure-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img alt="CSS" src="https://img.shields.io/badge/CSS3-Styling-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-Logic-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111">
  <img alt="GSAP" src="https://img.shields.io/badge/GSAP-Animations-88CE02?style=for-the-badge&logo=greensock&logoColor=white">
</p>

---

## Preview

A modern one-page gym website featuring immersive motion, premium visuals, pricing interactions, and conversion-focused sections.

## Highlights

- Hero intro timeline with branded loader
- Custom cursor + magnetic button effects (fine pointer devices)
- Scroll-based reveals and animated stat counters
- Parallax floating shapes and sticky navbar behavior
- Auto-scrolling testimonials carousel
- Monthly/Yearly pricing toggle with animated values
- Interactive gallery lightbox
- Responsive mobile menu with animated links
- Contact form validation with inline error feedback
- Smooth anchor scrolling across page sections

## Built With

- `HTML5`
- `CSS3` (custom styling, responsive layout)
- `Vanilla JavaScript`
- `GSAP` + `ScrollTrigger` + `TextPlugin` (via CDN)
- `Google Fonts` (Bebas Neue, Barlow, Barlow Condensed)

## Project Structure

```text
GYM-WEBSITE-2/
├── index.html      # Main single-page layout
├── style.css       # All styling and responsive design rules
└── script.js       # Interactions, animations, and form logic
```

## Getting Started

1. Clone the repository:

```bash
git clone <your-repo-url>
```

2. Open the project folder:

```bash
cd GYM-WEBSITE-2
```

3. Run locally (choose one):

- Open `index.html` directly in the browser, or
- Use VS Code Live Server for best development workflow.

## Customization Guide

- Brand text/content: edit `index.html`
- Colors, spacing, typography: edit CSS variables/styles in `style.css`
- Motion intensity/behavior: tune GSAP timelines in `script.js`
- Pricing values: update `data-monthly` and `data-yearly` attributes in `index.html`
- Contact validation rules: update form logic in `script.js`

## Responsive Behavior

The layout includes dedicated desktop/mobile navigation behavior and responsive sections for hero, cards, grid blocks, and forms.

## Performance Notes

- Uses CDN-hosted assets (GSAP, fonts, external images)
- Motion effects are reduced for users who prefer reduced motion
- Custom cursor/magnetic effects are enabled only on fine-pointer devices

## Future Improvements

- Connect contact form to a real backend service
- Add real trainer social links and profile pages
- Add a deployment workflow (GitHub Pages / Netlify / Vercel)
- Replace external placeholder imagery with project-owned assets

## Author

Developed as a frontend practice project for a premium fitness brand concept.

---

<p align="center">
  If you like this project, consider giving it a ⭐ on GitHub.
</p>
