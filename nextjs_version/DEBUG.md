# 🔍 Debug Checklist

## Browser Console Check

1. **Open Browser DevTools**: Press `F12` or `Ctrl+Shift+I`
2. **Go to Console Tab**
3. **Look for these errors**:

### Common Errors to Check:

```
❌ Failed to load resource: /assets/dist/build.min.css
❌ Failed to load resource: /assets/dist/build.min.js
❌ TypeError: Cannot read property
❌ 404 Not Found
```

## Network Tab Check

1. **Go to Network Tab** in DevTools
2. **Refresh page** (Ctrl+R)
3. **Check if these files loaded**:

✅ Should see **200 OK**:
- `build.min.css` (should be ~26KB)
- `build.min.js` (should be ~519KB)
- `intro-animation.json`
- `poster-logo-dark-bolder.svg`

❌ If you see **404 Not Found**, assets aren't copied correctly

## Quick Test Commands

Run these in PowerShell from nextjs_version folder:

```powershell
# Check if CSS exists
Test-Path public\assets\dist\build.min.css

# Check if JS exists  
Test-Path public\assets\dist\build.min.js

# Check if images exist
Test-Path public\assets\img\poster-logo-dark-bolder.svg

# List what's in public folder
Get-ChildItem public -Recurse -Depth 2
```

## Manual Test in Browser

Open these URLs directly:
- http://localhost:3000/assets/dist/build.min.css
- http://localhost:3000/assets/dist/build.min.js
- http://localhost:3000/assets/img/poster-logo-dark-bolder.svg

If any return 404, assets aren't copied!

## Common Issues & Fixes

### Issue 1: Assets Not Copied
**Symptom**: Black screen, 404 errors
**Fix**:
```powershell
cd c:\MY_XAMPP\htdocs\DUBAI_DUBAI_POSTERECO\posterco\posterco.tv
Copy-Item -Recurse -Force assets nextjs_version\public\assets
```

### Issue 2: JavaScript Not Running
**Symptom**: Page loads but no functionality
**Check**: 
- Browser console for JS errors
- Network tab shows build.min.js loaded
- Script tag in layout.tsx

### Issue 3: Styles Not Applied
**Symptom**: White text on white background
**Check**:
- Network tab shows build.min.css loaded
- Link tag in layout.tsx
- CSS file is not empty

### Issue 4: Port Already in Use
**Symptom**: Can't start server
**Fix**:
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use different port
PORT=3001 npm run dev
```

## Expected File Structure

```
nextjs_version/
└── public/
    └── assets/
        ├── dist/
        │   ├── build.min.css  ← MUST EXIST
        │   └── build.min.js   ← MUST EXIST
        ├── img/
        │   ├── intro-animation.json
        │   ├── poster-logo-dark-bolder.svg
        │   └── poster-logo-bolder.svg
        ├── fonts/
        │   └── monument-extended-bold.woff2
        └── css/
            └── templates/
                └── about.css
```

## Test Each Asset

```powershell
# Run these commands from nextjs_version folder
Write-Host "Checking CSS..." -ForegroundColor Yellow
if (Test-Path "public\assets\dist\build.min.css") {
    $size = (Get-Item "public\assets\dist\build.min.css").Length
    Write-Host "✓ CSS found: $size bytes" -ForegroundColor Green
} else {
    Write-Host "✗ CSS missing!" -ForegroundColor Red
}

Write-Host "Checking JS..." -ForegroundColor Yellow
if (Test-Path "public\assets\dist\build.min.js") {
    $size = (Get-Item "public\assets\dist\build.min.js").Length
    Write-Host "✓ JS found: $size bytes" -ForegroundColor Green
} else {
    Write-Host "✗ JS missing!" -ForegroundColor Red
}

Write-Host "Checking Logo..." -ForegroundColor Yellow
if (Test-Path "public\assets\img\poster-logo-dark-bolder.svg") {
    Write-Host "✓ Logo found" -ForegroundColor Green
} else {
    Write-Host "✗ Logo missing!" -ForegroundColor Red
}
```

## Still Not Working?

### Step-by-step Debug:

1. **Stop the server** (Ctrl+C)

2. **Verify assets copied**:
```powershell
Get-ChildItem public\assets\dist
# Should show: build.min.css, build.min.js
```

3. **Check file sizes**:
```powershell
Get-Item public\assets\dist\build.min.css | Select-Object Length
# Should be ~26KB (26000+ bytes)

Get-Item public\assets\dist\build.min.js | Select-Object Length  
# Should be ~519KB (519000+ bytes)
```

4. **Start server**:
```bash
npm run dev
```

5. **Open DevTools** and check Console + Network

6. **Share the errors** you see in console

## Screenshot Your Console

If still having issues, take a screenshot of:
1. Browser Console (F12 → Console tab)
2. Network tab showing red 404 errors
3. Terminal where npm run dev is running

This will help identify the exact problem!
