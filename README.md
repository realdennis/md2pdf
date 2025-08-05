![Deploy gh-pages](https://github.com/realdennis/md2pdf/actions/workflows/deploy.yaml/badge.svg)

# Markdown2PDF 
English | [简体中文(Simplified Chinese)](./README_cn.md) | [繁體中文(Traditional Chinese)](./README_tc.md)  
https://realdennis.github.io/md2pdf/


![It just works!](https://media.giphy.com/media/MuAtuqUGnn2PKsXhs6/giphy.gif)

![Upload](https://media.giphy.com/media/cZ1f4b46P3LGszuXuy/giphy.gif)

> Awesome Markdown to PDF!
```diff
- Online? Upload resume.md to stranger server?
+ Try Offline Web App!
```

## How to use md2pdf?
1. Click button choose `.md` file.
2. Edit in editor (left panel).
3. Click **Transform**!
4. Switch 'Destination' to **Save as PDF**.
4. **Chrome recommended**

## Using Docker

1. Install docker on your platform
2. Clone the repository
3. `cd` into `md2pdf`
4. Run `docker compose up -d` inside the directory

The docker compose binds the web server to `localhost:8080` by default. You can change this by finding the `ports` line in `docker-compose.yaml`.

**Note**: This docker compose uses the build directive, so your system will go build and optimize the code itself.
The application is hosted locally through nginx which is what binds to port 8080.

## Tips
- `Resize` the layout what you want.
- After click `Transform` button, inverse the checkbox of **'Headers and Footers'**. 
- **反選頁首與頁尾**.

## What's special?
- You can use <span style="color:#0984e3">html</span> tag!
<blockquote>Hey I'm in blockquote!</blockquote>

---

LICENSE MIT © 2019 realdennis
