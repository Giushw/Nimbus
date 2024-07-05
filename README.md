# Nimbus
This Project was created with a Vite + React + Ts + Chakra Ui, an is an hypotetical app that display the current weather data for some selected cities.

## API
For data Fetching **the open-meteo API** and **nominatim.openstreetmap** where used.

## How to
After Downloading/cloning the repo all you need these simple but fundamental steps:

### Install
- Open app folder `cd .../toAppPath/Nimbus`;
- Install `npm install`;

### Run
- Inside the Nimbus folder `npm run dev`;

**Additional Notes:**
Sometime the openstreet map saturate and don't reply anymore. I've supplied mock data for a smother navigation.

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
