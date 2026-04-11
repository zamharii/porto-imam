# Firebase Hosting (Static)

This Nuxt app can be deployed to Firebase Hosting as static files.

## Build

```bash
npm run generate
```

Static output will be in `.output/public`.

## Firebase setup

```bash
npm i -g firebase-tools
firebase login
firebase init hosting
```

- Choose your Firebase project
- Set hosting directory to `.output/public` (or keep `firebase.json` as-is)
- Configure as a single-page app: **Yes** (rewrites to `index.html`)

## Deploy

```bash
firebase deploy
```

