npm install gh-pages --save-dev

In package.json:

"scripts": {
    ...
    "deploy": "gh-pages -d dist"
  }

npm run build

npm run deploy

