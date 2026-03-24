# Griselda Ramirez Torres - Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## 🎨 Design

- **Color Palette**: Soft pink, mauve, cream, and muted plum tones
- **Typography**: Inter (body) + Playfair Display (headings)
- **Style**: Modern, elegant, and professional with subtle animations

## 🛠️ Tech Stack

- **React** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Fixed navigation with mobile menu
│   ├── Hero.jsx        # Landing section with intro
│   ├── About.jsx       # Professional summary
│   ├── Skills.jsx      # Skills categorized in cards
│   ├── Projects.jsx    # Featured project cards
│   ├── Education.jsx   # Education and coursework
│   ├── Contact.jsx     # Contact info and social links
│   └── Footer.jsx      # Simple footer
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles + Tailwind
```

## 🚀 Getting Started

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

## 🌐 Deploying to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. Push your code to GitHub
2. Go to Settings → Pages → Source → GitHub Actions
3. Create `.github/workflows/deploy.yml` (see below)

### Option 2: Manual Deploy

1. Build the project: `npm run build`
2. Push the `dist` folder to `gh-pages` branch

### GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ['main']

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

## ✏️ Customization

### To edit content:
- **Personal info**: Edit text in each component file
- **Projects**: Update the `projects` array in `src/components/Projects.jsx`
- **Skills**: Modify `skillCategories` in `src/components/Skills.jsx`
- **Contact**: Update links in `src/components/Contact.jsx`

### To change colors:
- Edit `tailwind.config.js` to modify the color palette

## 📝 License

© 2026 Griselda Ramirez Torres. All rights reserved.
