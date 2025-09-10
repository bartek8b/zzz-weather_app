### 🚀 webpack-template

A starter repository for vanilla JavaScript front-end projects using [Webpack](https://webpack.js.org/).

### 📦 Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bartek8b/webpack-template.git
   cd webpack-template
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server (with live reload):**
   ```bash
   npm run dev
   ```
   ---

### 🛠️ NPM Scripts

| Script                   | Description                                                |
|--------------------------|------------------------------------------------------------|
| `npm run dev`            | Starts the development server (webpack-dev-server)         |
| `npm run build`          | Builds the production-ready version into the `dist` folder |
| `npm run lint-and-format`| Formats & runs ESLint to check & fix code quality          |
| `npm run set-branch`     | Creates the `gh-pages` branch (run once)                   |
| `npm run commit-dist`    | Adds and commits the `dist` folder                         |
| `npm run push-gh-pages`  | Pushes the `dist` folder to the `gh-pages` branch          |

---

### 🚀 Deploying to GitHub Pages

1. **Build the project:**
   ```bash
   npm run build
   ```
2. **Commit the dist folder:**
   ```bash
   npm run commit-dist
   ```
3. **Push to gh-pages branch:**
   ```bash
   npm run push-gh-pages
   ```
4. **Done!**  
   Your site will be available at:  
   `https://YOUR_USERNAME.github.io/REPO_NAME/`

---

### 🗂️ Project Structure

```
webpack-template/
├── src/              # Main source directory
├── dist/             # Production build output (generated)
├── .gitignore
├── .prettierrc
├── .prettierignore
├── .eslintignore
├── eslint.config.mjs
├── package.json
└── README.md
```

---

### 📚 Technologies

- [Webpack](https://webpack.js.org/)
- [Prettier](https://prettier.io/)
- [ESLint (flat config)](https://eslint.org/)
- [GitHub Pages](https://pages.github.com/)

---

### 📝 Author

- [Bartłomiej Balcerzak](https://github.com/bartek8b)

---

**Happy coding!** 😊