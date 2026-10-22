# Amber Coaching & Counselling Services: Website

A simple, fast, 6-page website (plain HTML, CSS and a little JavaScript). No build tools, no accounts, no monthly fees.

```
index.html          Home
about.html          About
services.html       Services
fees.html           Sliding scale fees, payment, cancellations
how-it-works.html   Getting started, privacy, FAQ
contact.html        Service request form + contact + crisis resources
css/style.css       All colours, fonts, layout
js/main.js          Mobile menu, fade-ins, contact form
images/logo-emblem.png  Her logo emblem (cropped from her letterhead)
images/favicon.png      Browser tab icon
```

## Put it online with GitHub Pages (free)

1. Make a free account at https://github.com (use your own email).
2. Click the **+** at the top right, then **New repository**.
3. Name it something like `amber-counselling`. Keep it **Public** (free Pages needs this). Click **Create repository**.
4. On the new repository page, click **uploading an existing file**.
5. Unzip this folder on your computer. Open it, select **everything inside** (the 5 `.html` files, `css`, `js`, `images`, `README.md`) and drag it into the GitHub page. Make sure `index.html` is at the top level, not inside another folder.
6. Scroll down and click **Commit changes**.
7. Go to **Settings**, then **Pages** (left menu).
8. Under **Build and deployment**, set Source to **Deploy from a branch**, choose branch **main** and folder **/ (root)**, then **Save**.
9. Wait 1 to 2 minutes and refresh. GitHub shows your live link, like `https://yourusername.github.io/amber-counselling/`.

### Updating the site later
Open a file in your repository, click the pencil icon, change the text, and click **Commit changes**. The site updates in about a minute.

## Things to finish before sharing it with clients

- **Logo:** the emblem was cropped from the image of her letterhead, so it is a bit soft on large or high-resolution screens. If she has the original file (SVG or large transparent PNG), save it over `images/logo-emblem.png` with the same name and it updates everywhere.
- **About page:** two `TODO` comments mark where to add her personal story and her credentials or registration details. Her regulatory body may require certain wording, so have her check.
- **Fees:** they are on `fees.html`, written as a sliding scale. Edit the wording and the table there once she confirms exactly how the scale works.
- **Photo:** a professional photo of her on the About page would help build trust.
- **Custom domain:** to use something like `ambercounselling.ca`, buy the domain, then in GitHub go to Settings, Pages, Custom domain and follow GitHub's instructions.

## About the service request form

It is on `contact.html`. It opens the visitor's email app with the message filled in, so it works with zero setup. If you later want a form that sends the email directly without the visitor's email app, sign up for a free Formspree account and replace the form's behaviour with their instructions.

## Changing colours or fonts

Open `css/style.css`. All the brand colours are at the very top under `:root`.
