# TgDomainLink

A static GitHub Pages site that shows an animated pop-up inviting visitors to join a Telegram channel.

## Customize

| What | Where |
|------|-------|
| Telegram channel | `channel` in `script.js`: the name after `t.me/` (also update the `href` in `index.html` for visitors without JavaScript) |
| Background picture | Save it as `assets/popup-bg.jpg`, or change `--popup-image` in `style.css` |
| Title and text | `index.html` |
| Pop-up delay and auto-redirect | `CONFIG` in `script.js` |

If there is no background picture, the pop-up uses a gradient instead. A dark shade at the bottom keeps the text readable on any picture. A portrait image (about 900×1100) works best.

## Deploy

1. Push to GitHub.
2. Open **Settings → Pages**, then set **Source** to *Deploy from a branch*, **Branch** to `main`, and the folder to `/ (root)`.
3. The site goes live at `https://<user>.github.io/<repo>/`.

## Preview locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```
