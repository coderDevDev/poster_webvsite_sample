# 🚀 Setup Instructions

## ⚠️ IMPORTANT: Copy Assets First!

Before running the Next.js app, you MUST copy the assets folder.

### Quick Setup (PowerShell)

```powershell
# Run from posterco.tv root directory
Copy-Item -Recurse assets nextjs_version\public\assets
cd nextjs_version
npm install
npm run dev
```

### Step-by-Step Guide

#### 1. Copy Assets Folder

**Option A: PowerShell (Windows)**
```powershell
cd c:\MY_XAMPP\htdocs\DUBAI_DUBAI_POSTERECO\posterco\posterco.tv
Copy-Item -Recurse assets nextjs_version\public\assets
```

**Option B: Manual Copy**
1. Open `posterco.tv/assets` folder
2. Copy the entire `assets` folder
3. Paste into `posterco.tv/nextjs_version/public/`
4. Result: `nextjs_version/public/assets/`

#### 2. Verify Assets Copied

Check that these exist:
```
nextjs_version/public/assets/
├── dist/
│   ├── build.min.css ✅
│   └── build.min.js ✅
├── img/
│   ├── intro-animation.json ✅
│   ├── poster-logo-dark-bolder.svg ✅
│   └── poster-logo-bolder.svg ✅
├── fonts/
│   └── monument-extended-bold.* ✅
├── css/
└── favicons/
```

#### 3. Install Dependencies

```bash
cd nextjs_version
npm install
```

This installs:
- Next.js 14
- React 18
- TypeScript

#### 4. Run Development Server

```bash
npm run dev
```

#### 5. Open Browser

Navigate to: **http://localhost:3000**

You should see the Poster homepage!

---

## 🔧 Troubleshooting

### Problem: Black screen or missing styles

**Solution:** Assets folder not copied
```powershell
# Copy assets from root
Copy-Item -Recurse ..\assets public\assets
```

### Problem: Images not loading

**Solution:** Check assets path
```
✅ Correct: nextjs_version/public/assets/img/
❌ Wrong: nextjs_version/assets/img/
```

### Problem: JavaScript not working

**Solution:** Verify build.min.js exists
```
nextjs_version/public/assets/dist/build.min.js
```

### Problem: Port 3000 already in use

**Solution:** Use different port
```bash
PORT=3001 npm run dev
```

---

## 📁 Required Assets

### Critical Files (MUST have these):

```
✅ assets/dist/build.min.css     - All styles
✅ assets/dist/build.min.js      - All JavaScript
✅ assets/img/intro-animation.json - Lottie animation
✅ assets/img/poster-logo-*.svg   - Logos
✅ assets/fonts/monument-*.woff2  - Custom fonts
```

### Optional But Recommended:

```
assets/favicons/*    - Favicon files
assets/css/*         - Additional CSS
assets/img/*         - All images
```

---

## ✅ Verification Checklist

After setup, verify:

- [ ] Assets folder copied to `public/assets`
- [ ] `npm install` completed
- [ ] Dev server starts without errors
- [ ] Page loads at http://localhost:3000
- [ ] Logos visible
- [ ] Styles applied (black background)
- [ ] Menu opens/closes
- [ ] Videos load (if on homepage)
- [ ] Links work (navigate between pages)

---

## 🎯 What You'll See

### Homepage (/)
- Lottie intro animation
- Video slider with 7 projects
- Custom cursor
- Projects grid

### About (/about)
- Light theme
- Office gallery
- Video reel popup

### Works (/works)
- Projects grid
- Category filter
- Video previews

### Contact (/contact)
- Light theme
- Team directory
- Contact information

---

## 🚀 Next Steps

### Development
```bash
npm run dev    # Start dev server
npm run lint   # Check for errors
```

### Production
```bash
npm run build  # Build for production
npm start      # Start production server
```

### Deploy
```bash
vercel         # Deploy to Vercel
```

---

## 💡 Tips

1. **Keep assets in sync**: If you update the original site's assets, re-copy them to `public/assets`

2. **Edit content**: Modify the TSX files in `app/` folder

3. **Edit styles**: Modify `public/assets/dist/build.min.css`

4. **Edit interactions**: Modify `public/assets/dist/build.min.js`

---

## 🎉 Success!

Once running, you'll have a Next.js version that's 100% identical to the original posterco.tv! 🎊
