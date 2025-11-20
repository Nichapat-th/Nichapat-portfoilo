# How to Deploy Your Portfolio Website

## Option 1: Vercel (Recommended - Easiest & Free)

### Step 1: Prepare Your Project
1. Make sure your code is ready
2. Test locally: `npm run dev`

### Step 2: Push to GitHub
```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"
7. Your site will be live in ~2 minutes!

**Your site URL will be:** `https://your-project-name.vercel.app`

---

## Option 2: Netlify (Also Free & Easy)

### Step 1: Build Your Project
```bash
npm run build
```

### Step 2: Deploy
1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login
3. Drag and drop the `dist` folder (created after `npm run build`)
4. Or connect to GitHub for automatic deployments

---

## Option 3: GitHub Pages

### Step 1: Install gh-pages
```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json
Add to scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

### Step 3: Update vite.config.js
```js
export default defineConfig({
  plugins: [react()],
  base: '/YOUR_REPO_NAME/',
})
```

### Step 4: Deploy
```bash
npm run deploy
```

---

## Option 4: Other Hosting Services

- **Cloudflare Pages**: Free, similar to Vercel
- **Firebase Hosting**: Google's hosting service
- **AWS Amplify**: Amazon's hosting
- **DigitalOcean App Platform**: Paid option

---

## Before Deploying - Checklist

- [ ] Test your site locally (`npm run dev`)
- [ ] Build your project (`npm run build`) - check for errors
- [ ] Verify all images load correctly
- [ ] Test all links (contact, navigation)
- [ ] Check mobile responsiveness
- [ ] Update any hardcoded localhost URLs

---

## Custom Domain (Optional)

After deploying, you can add a custom domain:
- Vercel: Settings → Domains → Add your domain
- Netlify: Domain settings → Add custom domain

---

## Quick Commands

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to Vercel (if using Vercel CLI)
npx vercel
```

