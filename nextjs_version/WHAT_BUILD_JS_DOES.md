# What build.min.js Does

Based on analysis of the site and hydration errors, here's what the `build.min.js` file does:

## 🎨 **Main Functionality:**

### 1. **Custom Cursor System**
- Creates SVG cursor elements
- Adds them to the `<body>` dynamically
- Tracks mouse movement and animates cursor
- **Causes hydration error**: Server doesn't have these SVGs, but client adds them

### 2. **Lottie Animations**
- Loads Bodymovin/Lottie library
- Finds elements with `data-animation` attribute
- Loads and plays JSON animations (like the intro animation)
- Example: `<div class="intro-anim" data-animation="/assets/img/intro-animation.json">`

### 3. **Video Lazy Loading**
- Finds all `.js-main-video` elements
- Loads videos from `data-src` attributes
- Manages video playback (autoplay, muted, loop)
- Controls video slider on homepage

### 4. **Routing/Navigation**
- Uses Navigo router for client-side navigation
- Handles `data-navigo` links
- Does page transitions without full reload
- Manages browser history

### 5. **Page Content Management**
- `extractPageContent()` - Parses HTML content
- `initializeFisrtPage()` - Sets up initial page
- Manages page templates (homepage, about, works, contact)

### 6. **Project Filtering** (Works page)
- Filters by category: featured-film, commercials, music-videos
- Uses `.js-filter-cat` class
- Shows/hides project items

### 7. **Video Popups**
- Opens video in popup overlay
- Uses Plyr video player
- Handles `.js-open-popin-video` buttons

### 8. **Smooth Scrolling & Interactions**
- Custom scroll animations
- Parallax effects on cursor text (`mooving-elements`)
- Timeline animations

## ⚠️ **Why It Causes Hydration Errors:**

### **DOM Modifications:**
```javascript
// The script does things like:
document.body.appendChild(cursorSVG)           // ❌ Adds SVG to body
element.classList.add('is-active')            // ❌ Changes classes
element.style.transform = 'translate(x, y)'   // ❌ Adds inline styles
lottie.loadAnimation(...)                     // ❌ Injects animation HTML
```

### **The Problem:**
1. **Server renders**: Clean HTML without modifications
2. **Client hydrates**: Expects same clean HTML
3. **Script runs**: Modifies DOM (adds cursors, changes classes)
4. **React sees mismatch**: "Hey! This HTML is different!"
5. **Hydration error**: ❌

## ✅ **Solution - suppressHydrationWarning:**

We added `suppressHydrationWarning` to elements that the script modifies:

```tsx
<html suppressHydrationWarning>           // For body class changes
<body suppressHydrationWarning>           // For cursor SVGs
<main suppressHydrationWarning>           // For content mods
<div className="page-inner-content" suppressHydrationWarning>  // For animations
```

This tells React: "Yes, I know these will be different. It's OK!"

## 📦 **Libraries Included:**

Based on the minified code and functionality:
- **Lottie/Bodymovin** - Animation library
- **Navigo** - Router for SPA navigation
- **Plyr** - Video player
- **Custom cursor system**
- **Lazy loading utilities**
- **GSAP** (likely) - For animations

## 🎯 **Key DOM Elements It Targets:**

- `.js-main-video` - Video elements
- `.js-filter-cat` - Category filter buttons
- `.js-has-cursor-text` - Elements with custom cursor
- `.js-cursor-text-animated` - Animated cursor text
- `.js-open-popin-video` - Video popup triggers
- `.js-player` - Video players
- `.intro-anim` - Lottie animation containers
- `[data-animation]` - Elements with animation data

## 💡 **Why We Keep It:**

The script provides all the interactive functionality:
- ✅ Beautiful animations
- ✅ Custom cursor effects
- ✅ Smooth video playback
- ✅ Client-side routing
- ✅ Project filtering
- ✅ Interactive UI elements

**Trade-off**: Accept hydration warnings (suppressed) to keep all this functionality working!
