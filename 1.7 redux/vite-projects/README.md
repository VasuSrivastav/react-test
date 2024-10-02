# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

step 1- npm i @reduxjs/toolkit react-redux
step-2 - create store src/redux/store.js
step-3  - connect / provide redux store to react in main.jsx file (main file parent)
strep-4 - now create redux state slice  src/feature/counter/CounterSlice.js
and write slice action code
step -5 - update /add reducer  to store file 
step - 6 - use in any file first import then use as in test