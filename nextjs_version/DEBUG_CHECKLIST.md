# 🔍 Debugging Checklist

## Check These in Browser DevTools:

### 1. Open DevTools Console (F12)
Look for errors like:
- ❌ Failed to load CSS
- ❌ Failed to load JavaScript
- ❌ CORS errors
- ❌ 404 errors

### 2. Network Tab
Check if these files are loading:
- `/assets/dist/build.min.css` (should be ~200KB+)
- `/assets/dist/build.min.js` (should be ~500KB+)
- `/assets/img/intro-animation.json`

### 3. Elements Tab
Check if `<body>` has the class:
- Should see: `<body class="template-homepage">`
- If not, the ClientLayout isn't working

### 4. Console Commands
Run these in the console:
```javascript
// Check if CSS loaded
document.styleSheets.length

// Check if body class exists
document.body.className

// Check if Lottie/animation library loaded
window.lottie || window.bodymovin
```

## Quick Fixes:

### If CSS isn't loading:
The file might be at wrong path. Check: http://localhost:3000/assets/dist/build.min.css

### If JS isn't loading:
Check: http://localhost:3000/assets/dist/build.min.js

### If animation JSON isn't loading:
Check: http://localhost:3000/assets/img/intro-animation.json

## Copy these URLs and paste in browser to test:
- http://localhost:3000/assets/dist/build.min.css
- http://localhost:3000/assets/dist/build.min.js
- http://localhost:3000/assets/img/intro-animation.json
