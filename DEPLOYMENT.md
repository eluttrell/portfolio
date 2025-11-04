# Deployment Guide - GitHub Pages with Custom Domain

This guide walks you through deploying your portfolio to GitHub Pages with the custom domain `elijah.luttrell.dev`.

## Prerequisites

- GitHub account
- Domain `luttrell.dev` with DNS access
- Git configured locally

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `portfolio` or `elijah-portfolio`
3. Keep it public (required for free GitHub Pages)
4. **Do not** initialize with README, .gitignore, or license (we already have these)

## Step 2: Push Your Code to GitHub

```bash
# Add the remote repository (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/portfolio.git

# Push your code to GitHub
git push -u origin main
```

## Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** > **Pages** (in the left sidebar)
3. Under **Source**, select:
   - **Source**: GitHub Actions (not "Deploy from a branch")
4. Click **Save**

The GitHub Actions workflow will automatically trigger and deploy your site.

## Step 4: Configure DNS for Custom Domain

You need to create DNS records with your domain registrar (whoever you purchased `luttrell.dev` from):

### Option A: Using CNAME Record (Recommended)

Add the following DNS records:

| Type  | Name    | Value                          | TTL  |
|-------|---------|--------------------------------|------|
| CNAME | elijah  | USERNAME.github.io.            | 3600 |

Replace `USERNAME` with your actual GitHub username.

### Option B: Using A Records (Alternative)

If CNAME doesn't work, use A records:

| Type  | Name    | Value           | TTL  |
|-------|---------|-----------------|------|
| A     | elijah  | 185.199.108.153 | 3600 |
| A     | elijah  | 185.199.109.153 | 3600 |
| A     | elijah  | 185.199.110.153 | 3600 |
| A     | elijah  | 185.199.111.153 | 3600 |

## Step 5: Verify Custom Domain in GitHub

1. Go to your repository **Settings** > **Pages**
2. Under **Custom domain**, enter: `elijah.luttrell.dev`
3. Click **Save**
4. Wait for DNS check to complete (may take a few minutes to a few hours)
5. Once verified, check **Enforce HTTPS**

## Step 6: Wait for Deployment

- The GitHub Actions workflow will run automatically on every push to `main`
- Check the **Actions** tab in your repository to see deployment progress
- First deployment typically takes 2-5 minutes
- DNS propagation can take up to 24-48 hours (usually much faster)

## Troubleshooting

### DNS Check Failed
- **Wait**: DNS changes can take up to 48 hours to propagate
- **Check DNS**: Use [DNS Checker](https://dnschecker.org) to verify your records
- **Clear Cache**: Try accessing your site in an incognito/private window

### Build Failed
- Check the **Actions** tab for error messages
- Ensure all dependencies are in `package.json`
- Test locally with `npm run build`

### 404 Errors
- Ensure `trailingSlash: true` is set in `next.config.ts`
- Check that all internal links use relative paths (e.g., `/contact`, not `contact`)

### CNAME File Missing
- The CNAME file in `public/CNAME` should contain only: `elijah.luttrell.dev`
- This file is automatically copied to the `out` directory during build

## Updating Your Site

Simply push changes to the `main` branch:

```bash
# Make your changes, then:
git add .
git commit -m "Update portfolio content"
git push
```

The site will automatically rebuild and deploy!

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (test before pushing)
npm run build
```

Visit `http://localhost:3000` to see your site locally.

## Project Structure for GitHub Pages

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   ├── CNAME                   # Custom domain configuration
│   ├── .nojekyll               # Disable Jekyll processing
│   └── Resume 2025.pdf         # Static assets
├── src/                        # Next.js application code
├── content.json                # Site content (easy to update!)
├── next.config.ts              # Next.js config for static export
└── package.json
```

## Content Management

To update your portfolio content without touching code:

1. Edit `content.json`
2. Commit and push changes
3. Site automatically rebuilds and deploys

### Adding Projects

Edit `content.json` and add to the `projects` array:

```json
{
  "id": 1,
  "title": "My Awesome Project",
  "description": "A detailed description of what this project does",
  "technologies": ["React", "TypeScript", "Node.js"],
  "link": "https://github.com/username/project"
}
```

The Projects link in the navigation will automatically appear when you add projects!

## Support

- [Next.js Documentation](https://nextjs.org/docs)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
