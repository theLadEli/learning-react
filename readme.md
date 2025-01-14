# learning-react
A repository documenting my react.js journey, including an example project and comprehensive documentation

## React + Vite
Creating a react app can take time and computational effort. Vite is a simple and lightweight tool to get your react app up and running in no time. It also swiftly updates the app without having to rebuild for every change.

## Creating a Project
To get started, in the repository run the command:
```
npm create vite@latest
```

You'll then be asked for a project name, you can simply input `.` so the current repository is set as the vite project and it's not added as a sub-directory.

If you have any existing files, you'll be asked what you want to do with them.

Next, you'll be asked to select a framework. Using arrow-keys to navigate, select `react`. And after, when asked to select variant, select `JavaScript` or for much larger and more complex projects you can use `JavaScript + SWC`.

Lastly, you need to run the command `npm init` to install any dependencies and you're good to go!

## Running the Project
The project can simply be run locally with the command:
```
npm run dev
```
Now you can visit (http://localhost:5173/)[http://localhost:5173/] to see your project live with the default Vite contents. You can proceed to make changes to the application without needing to rerun your project each time, it'll simply update without even reloading the page. It'll just re-render the necessary modules.

You can also host the project so it's accessible by other devices on the same network, a good usecase is for testing the application on mobile. To do this, run this command:
```
npm run dev --host
```
And if this does not work, try add another "`''`", like this:
```
npm run dev --  --host
```
Once you run that, the URL to visit will be shown in console. The format is (http://yourip:5173/)[http://yourip:5173/]

## Removing Boilerplate Files
When the Vite project is created, it adds many boilerplate files and assets to demonstrate the app. These can simply be removed to clean up the repository before starting coding your own application.

These files and directories can simpy be removed:
```
src/App.css
src/App.jsx
src/index.css
src/assets/
```
This leaves `src/` with just the `main.jsx` file. Inside the `main.jsx` don't forget to remove references to deleted files.

## Starting Your App
Create a new file inside `src/` called `App.jsx` with the following code:
```js
function App() {
    return (
        <>
            <div>Hello World</div>
        </>
    );
}

export default App;
```
Note you can alternatively just prefix the function with `export default`:
```js
export default function App() {
    return (
        <>
            <div>Hello World</div>
        </>
    );
}
```
## Misc

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
