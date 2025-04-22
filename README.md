# GitHub Pages Deployment Instructions

This project is set up to be deployed on GitHub Pages.

## Steps to deploy

1. Push your code to a GitHub repository.

2. In your GitHub repository, go to **Settings** > **Pages**.

3. Under **Source**, select the branch you want to publish from (usually `main` or `master`).

4. For the folder, select `/root` (if your `index.html` is in the root directory of the repository, as it is here).

5. Save the settings.

6. Your site will be published at `https://<your-github-username>.github.io/<repository-name>/`.

## Notes

- The `index.html` file is located in the root directory.

- CSS and JS files are located in the `css` folder.

- The favicon image is in the root directory.

- Make sure all paths in `index.html` are relative and correct (already configured).

## Local Testing

You can test the site locally by opening `index.html` in a browser.

## Troubleshooting

If you make changes and do not see them reflected, try clearing your browser cache or wait a few minutes for GitHub Pages to update.
