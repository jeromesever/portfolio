# Mark Jerome Reves | Personal Web Portfolio

A responsive, minimalist portfolio built with plain **HTML5, CSS3, and vanilla JavaScript** (no frameworks).
Made for an OJT application as a Web Developer.

## Folder structure

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── profile-placeholder.png
└── README.md
```

## Run locally

**Option A: open the file directly**
Double-click `index.html`. It opens in your default browser. No server is needed.

**Option B: Visual Studio Code with Live Server (recommended)**
1. Open VS Code, then **File > Open Folder** and choose the `portfolio` folder.
2. Install the **Live Server** extension (by Ritwick Dey) from the Extensions tab.
3. Right-click `index.html` and choose **Open with Live Server**.
4. The page reloads automatically every time you save a file.

## Replace the profile photo

1. Pick a square, well-lit photo (about 360 x 360 px or larger, under 200 KB).
2. Save it in the `images/` folder, e.g. `images/mark.jpg`.
3. In `index.html`, find this line and update `src` (and the `alt` text):
   ```html
   <img src="images/profile-placeholder.png" alt="Profile photo placeholder for Mark Jerome Reves" ... />
   ```
   becomes
   ```html
   <img src="images/mark.jpg" alt="Photo of Mark Jerome Reves" ... />
   ```
   (Or simply save your photo with the same name, `profile-placeholder.png`.)

## Update skills honestly

In the **Skills** section, each skill is a `<li class="badge ...">`.
- `comfortable` = skills you use regularly.
- `learning` = skills you are still building.

Change the class, rename the skill, or delete the line to match your real level.
In the **Programming** card, replace `[Add language]` with languages you can genuinely use, and delete the rest.

## Update project information

Each project is one `<article class="card project-card">` block in `index.html`.

1. Edit the `<h3>` title and description.
2. Edit the technology list (`<ul class="tech-list">`).
3. Replace `href="#"` in the buttons with real URLs:
   ```html
   <a href="https://your-username.github.io/your-project/" class="btn btn-small btn-primary" data-link="demo">Live Demo</a>
   <a href="https://github.com/your-username/your-project" class="btn btn-small btn-outline" data-link="source">Source Code</a>
   ```
4. Buttons whose `href` is still `#` are automatically shown as disabled ("Link coming soon").
5. For the capstone (DDPMSS) and GalawGalaw cards, replace the bracketed notes with your confirmed contributions and the technologies actually used. Do not add achievements or statistics you cannot verify.

To add a new project, copy a whole `<article>` block and paste it inside `<div class="projects-grid">`.

## Add real GitHub, LinkedIn, and certificate links

**GitHub and LinkedIn** (Contact section): replace `href="#"` and the link text.
```html
<a href="https://github.com/your-username" data-link="social" target="_blank" rel="noopener noreferrer">github.com/your-username</a>
<a href="https://www.linkedin.com/in/your-profile" data-link="social" target="_blank" rel="noopener noreferrer">linkedin.com/in/your-profile</a>
```

**Certificates**: in each `cert-card`, replace the bracketed title, issuer, and date, remove the `Placeholder` tag line, and set the verification URL:
```html
<a href="https://example.com/verify/ABC123" class="text-link" data-link="verify">Verify certificate</a>
```
Only list certificates you have actually earned.

## Publish with GitHub Pages

1. Create a free account at <https://github.com>.
2. Click **New repository**. Name it `your-username.github.io` (for a main site) or any name such as `portfolio`. Set it to **Public**.
3. Upload your files: click **Add file > Upload files**, drag in everything inside the `portfolio` folder (`index.html` must be at the top level of the repository), then **Commit changes**.
   - Or use Git in the VS Code terminal:
     ```bash
     git init
     git add .
     git commit -m "Add portfolio"
     git branch -M main
     git remote add origin https://github.com/your-username/portfolio.git
     git push -u origin main
     ```
4. Go to **Settings > Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose **main** and **/ (root)**, then **Save**.
5. Wait 1 to 2 minutes. Your site will be live at:
   - `https://your-username.github.io/` (if the repo is named `your-username.github.io`), or
   - `https://your-username.github.io/portfolio/` (for other repo names).
6. Add this URL to your resume and to the Live Demo button of the "Personal Web Portfolio" project card.

## Customize colors

Open `css/style.css` and edit the variables at the top (`--accent`, `--bg`, `--text`, etc.).
