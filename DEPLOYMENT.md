# Deployment Guide for HalalYT

Your Next.js application is ready to deploy! Here are the best options:

## Option 1: Deploy to Vercel (Recommended - Easiest)

Vercel is made by the creators of Next.js and offers the easiest deployment.

### Via Web Interface (Easiest):
1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "Add New Project"
3. Import your Git repository (GitHub, GitLab, or Bitbucket)
   - If you haven't pushed to a remote repo yet:
     - Create a repository on GitHub
     - Push your code: `git remote add origin <your-repo-url>` then `git push -u origin master`
4. Vercel will automatically detect Next.js and deploy
5. Your site will be live in minutes!

### Via CLI:
```bash
# Install Vercel CLI globally (optional)
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

## Option 2: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and sign up
2. Click "Add new site" → "Import an existing project"
3. Connect your Git repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Deploy!

## Option 3: Deploy to Other Platforms

### Railway:
- Connect GitHub repo
- Auto-detects Next.js
- Deploy in one click

### Render:
- Connect GitHub repo
- Build command: `npm run build`
- Start command: `npm start`

### AWS/Cloud:
- More complex setup
- Requires more configuration
- Better for enterprise needs

## Pre-deployment Checklist

✅ Build tested successfully
✅ Git repository initialized
✅ All files committed

## Environment Variables

If you need to add environment variables later:
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Environment Variables

## Custom Domain

After deployment, you can add a custom domain:
- Vercel: Project Settings → Domains
- Netlify: Domain Settings → Add custom domain

---

**Quick Start (Recommended):**
1. Push code to GitHub
2. Go to vercel.com
3. Import repository
4. Deploy!

Your site will be live at: `https://your-project-name.vercel.app`

