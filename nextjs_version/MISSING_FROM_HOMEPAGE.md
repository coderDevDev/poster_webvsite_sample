# Missing from Homepage (page.tsx)

## ✅ What We Have:
- Header with navigation
- Intro animation (`bloc-intro`)
- Video slider box (`box--home`)
  - Counter (1/7)
  - Timeline
  - Main videos (7 videos at 1080p)
  - Cursor text animation
  - Mobile buttons

## ❌ What's MISSING:

### 1. **Project List in `box--home__info`** (Lines 191-318 in original)
The original has a `<ul class="list list--home js-has-cursor-player">` with:
- 7 project links that control the video slider
- Each link has: Title, Director, Category
- First item has `class="is-active"`

### 2. **Cursor Player Animation** (Lines 192-249 in original)
Inside the project list, there's a `<div class="cursor-player-animated js-cursor-player-animated">` with:
- 7 mini video players (720p versions)
- These show on hover over the project list items

### 3. **Projects Grid Section** (Lines 417-644 in original)
The `<div class="bloc-projects-listing">` contains:
- `<ul id="works" class="list list--works">`
- Multiple `<li class="box box--work" data-cat="category">` items
- Each project has:
  - Link to project page
  - Project info (title, director, category)
  - Video with poster image
  - Cursor text animation

This entire section displays the projects grid that shows after intro completes.

## 🔧 What Needs to be Added:

1. Add project list to `box--home__info`
2. Add cursor player animation
3. Add complete `bloc-projects-listing` section with all projects

The projects grid is what makes the homepage complete!
