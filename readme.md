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

## Components
Components are reusable elements that can be added throughout the app. You define the component in an individual file, and can then import and reference it wherever needed. They can be responsive and reference other components inside it.

### Creating a Component
Inside of the `src/` directory, create another directory called `components/`. This is where all the component files will sit.

Create a new file with a relevant title, for example `Welcome.jsx`. As it is a React component, the file name should be capitalised. Inside it, I'll paste the below code:
```js
export default function Welcome() {
    return (
        <>
            <div className="wrapper">
                <h1>Welcome to the App</h1>
                <p>This is a basic React.js application.</p>
            </div>
        </>
    )
}
```

### Working with HTML Inside React:
As many keywords are already reserved for JavaScript functionality, there's a few small things to note when writing HTML inside React:
- Instead of writing `class=""` inside a tag, you replace it with `className=""`

## Referencing Components
To reference a component, you need to create an `import` statement at the top of the file, like this:
```js
import Welcome from "./components/Welcome";
```
You import the function name (it has to have been exported first) and then specify the file path.

## Adding Images
You can add an image by importing it like with Modules. To do this, first save the image in your project, then at the top of the file write an `import` statement with the path being the exact file path. An example is:
```js
import Sammy from '../img/sammy.jpg'
```
Then, inside the HTML if you want to reference it, just wrap the module name inside curly braces. Example:
```js
<img src={Sammy} alt="Sammy image" width={200} height={200} />
```

## Adding CSS
Create a new directory inside `src/` called `css/`. Inside there create the CSS file `main.css` and add the necessary styling code.

Once you've done that, you can add the following `import` statement at the top of your components:
```js
import "../css/main.css"
```

## Building for Production
To create an optimised build to easily deploy to your server, run:
```
npm run build
```
This will create a new directory called `dist` which will contain a minimised and lightweight version of your app you can easily upload and deploy!

## Misc

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
