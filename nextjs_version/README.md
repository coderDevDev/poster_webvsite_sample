# Poster.co Next.js Version

Complete Next.js migration using **EXACT original assets** from posterco.tv

## 🎯 Strategy

This version uses the **original HTML/CSS/JS** assets with Next.js routing:
- ✅ Original `build.min.css`
- ✅ Original `build.min.js`  
- ✅ Original fonts, images, animations
- ✅ Original class names and structure
- ✅ Next.js for routing only

## 📁 Setup Required

### Step 1: Copy Assets

You MUST copy the `assets` folder from the original site:

```bash
# From posterco.tv root directory
cp -r assets nextjs_version/public/assets
```

Or manually copy:
- `assets/dist/` → `nextjs_version/public/assets/dist/`
- `assets/img/` → `nextjs_version/public/assets/img/`
- `assets/fonts/` → `nextjs_version/public/assets/fonts/`
- `assets/css/` → `nextjs_version/public/assets/css/`
- `assets/favicons/` → `nextjs_version/public/assets/favicons/`

### Step 2: Install Dependencies

```bash
cd nextjs_version
npm install
```

### Step 3: Run Development Server

```bash
npm run dev
```

Open: **http://localhost:3000**

## 🔧 How It Works

### Original Assets

```tsx
// app/layout.tsx
<link href="/assets/dist/build.min.css" rel="stylesheet" />
<Script src="/assets/dist/build.min.js" strategy="afterInteractive" />
```

All original CSS, JavaScript, fonts, and animations are loaded exactly as in the HTML version.

### Next.js Routing

- `/` → `app/page.tsx` (index.html)
- `/about` → `app/about/page.tsx` (about.html)
- `/works` → `app/works/page.tsx` (works.html)
- `/contact` → `app/contact/page.tsx` (contact.html)

### Original JavaScript

The `build.min.js` file handles:
- Lottie animations
- Video slider
- Cursor physics
- Menu interactions
- Category filtering
- All interactive features

## ✅ What's Included

### Pages
- ✅ Homepage (with video slider)
- ✅ About
- ✅ Works
- ✅ Contact

### Features
- ✅ All original animations
- ✅ All original interactions
- ✅ All original styling
- ✅ Next.js Link components
- ✅ SEO metadata
- ✅ TypeScript support

## 🚀 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

```bash
vercel
```

## 📊 File Structure

```
nextjs_version/
├── app/
│   ├── layout.tsx          # Root layout with original CSS/JS
│   ├── globals.css         # Minimal reset styles
│   ├── page.tsx            # Homepage
│   ├── about/page.tsx      # About page
│   ├── works/page.tsx      # Works page
│   └── contact/page.tsx    # Contact page
├── public/
│   └── assets/             # COPY FROM ORIGINAL! ⚠️
│       ├── dist/
│       │   ├── build.min.css
│       │   └── build.min.js
│       ├── img/
│       ├── fonts/
│       ├── css/
│       └── favicons/
├── package.json
├── next.config.js
├── tsconfig.json
└── README.md
```

## ⚠️ Important Notes

### Must Copy Assets!

The `public/assets` folder is NOT included in this repo. You MUST copy it from the original site:

```bash
cp -r ../assets public/assets
```

Without the assets folder, the site won't work!

### Original JS Manages Content

Most dynamic content (video slider, projects list, etc.) is managed by the original `build.min.js`. The Next.js pages provide the HTML structure, and the original JS populates it.

### Class Names

All class names are preserved exactly:
- `.box--home`
- `.mooving-elements`
- `.js-has-cursor-text`
- `.template-homepage`
- etc.

## 🎨 Customization

### To modify content:
Edit the original HTML structure in the Next.js page files

### To modify styles:
Edit `public/assets/dist/build.min.css` (or the source SCSS files)

### To modify interactions:
Edit `public/assets/dist/build.min.js` (or the source JS files)

## 🔍 Differences from Original

| Aspect | Original | Next.js Version |
|--------|----------|-----------------|
| **Routing** | Navigo.js | Next.js Router |
| **Links** | `<a href>` | `<Link href>` |
| **Pages** | HTML files | TSX components |
| **Assets** | Relative paths | `/assets/...` |
| **Build** | Static HTML | Next.js build |
| **Everything Else** | Exact same | Exact same |

## ✅ Advantages

1. **Exact Design** - Uses original CSS 100%
2. **Exact Functionality** - Uses original JS 100%
3. **Modern Routing** - Next.js Link components
4. **SEO** - Server-side rendering
5. **Performance** - Automatic optimization
6. **Type Safety** - TypeScript support

## 🎉 Result

A Next.js application that looks and works EXACTLY like the original, but with modern routing and deployment capabilities!
