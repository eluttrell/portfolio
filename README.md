# Portfolio - Elijah Allstrom-Luttrell

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Deployed to GitHub Pages with a custom domain.

🌐 **Live Site**: [elijah.luttrell.dev](https://elijah.luttrell.dev)

## Features

- ✨ **Modern Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS 4
- 🎨 **Dark Mode**: Custom theme switcher with smooth transitions
- 📱 **Responsive Design**: Mobile-first, works on all devices
- 🚀 **Static Export**: Optimized for GitHub Pages deployment
- 📝 **Content Management**: Easy updates via `content.json`
- ♿ **Accessible**: Semantic HTML and ARIA labels
- 🔒 **Type Safe**: Full TypeScript coverage with centralized types

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

## Project Structure

```
portfolio/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── components/   # Reusable React components
│   │   ├── contact/      # Contact page
│   │   ├── projects/     # Projects page
│   │   └── utilities/    # Helper functions
│   └── types/            # TypeScript type definitions
├── public/               # Static assets
├── content.json          # Site content (edit here!)
└── .github/workflows/    # Automated deployment
```

## Updating Content

Edit `content.json` to update your portfolio without touching code:

```json
{
  "profile": {
    "name": "Your Name",
    "title": "Your Title",
    "contactEmail": "your@email.com",
    "bio_markdown": "Your bio in **Markdown**"
  },
  "skills": ["Skill 1", "Skill 2"],
  "projects": [
    {
      "id": 1,
      "title": "Project Name",
      "description": "Project description",
      "technologies": ["React", "TypeScript"],
      "link": "https://github.com/username/project"
    }
  ]
}
```

Commit and push changes - the site automatically rebuilds!

## Deployment

This portfolio is configured for automatic deployment to GitHub Pages. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

**Quick Deploy Steps:**
1. Create a GitHub repository
2. Push your code: `git push -u origin main`
3. Enable GitHub Pages in repository settings (Source: GitHub Actions)
4. Configure DNS for custom domain
5. Done! Updates deploy automatically on push

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server (not needed for static export)
npm run lint     # Run ESLint
```

## Tech Stack

**Frontend:**
- [Next.js 15](https://nextjs.org/) - React framework
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS 4](https://tailwindcss.com/) - Styling
- [Lucide React](https://lucide.dev/) - Icons
- [React Markdown](https://github.com/remarkjs/react-markdown) - Markdown rendering

**Deployment:**
- [GitHub Pages](https://pages.github.com/) - Static hosting
- [GitHub Actions](https://github.com/features/actions) - CI/CD

## Docker Deployment (Optional)

For Docker/Nginx deployment:

```bash
docker-compose up -d
```

See [Dockerfile](./Dockerfile) and [docker-compose.yml](./docker-compose.yml) for configuration.

## License

This is a personal portfolio project. Feel free to use the code structure as inspiration for your own portfolio!

## Contact

- **Email**: elijah.luttrell@protonmail.com
- **GitHub**: [@eluttrell](https://github.com/eluttrell)
- **LinkedIn**: [Elijah Allstrom-Luttrell](https://www.linkedin.com/in/alltrell/)
