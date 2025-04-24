# Creating Your Project
To create your React project we'll use vite:
```
npm create vite@latest .
```
The '.' at the end significes we want the project created in the current directory. The directory will have to be empty for it to work. If you specify a name instead of '.', it'll create a new folder labeleld accordingly with your project inside.

After you run that it'll as you to select a framework, use arrow keys to select 'React', then for variant 'TypeScript' and finally once all is done you can run `npm install` to install all the dependencies.

# Project Structure
Here's a breakdown of the project structure after all the new files and directories have been created:
- **node_modules/** - this is where all the third party libraries are installed. You won't need to touch this
- **public/** - for public assets such as images to be stored
- **src/** - for the source code of the application
- **index.html** - has `<div id="root">` in it which is the container of the application
- **package.json** - the project details
- **tsconfig.json** - some settings to tell the TypeScript compiler how to compile to JS. You won't have to update this for most part

# Creating a Component
To create a component, inside the `src/` directory create a new file. Component files should be capitalised with a `.tsx` file type. So for example to create a component for a Message we'll call the file `Message.tsx`.

Inside the file you need to create a function, with the `return` containing what the component should display. For example:
```js
function Message() {
  return <h1>Hello World</h1>
}

export default Message;
```

At the end of component files you have to specify a default function export. Alternatively, you could specifiy it when defining the function, like this:
```js
export default function Message() {
  ...
}
```

In this case, the function is only exporting an `h1`, but if you want to export multiple elements, you need to ensure there is one high level parent HTML wrapper. So it should all be in either a Div, or alternatively you can wrap it in `<></>` and it will work fine without adding that to the loaded HTML. Example:
```js
export default function Message() {
  return (
    <>
      <h1>Hello World</h1>
      <p>More conent here...</p>
    </>
  )
}
```

# Using a Component
To use a created component, you first need to import it by adding this to the top of the file:
```js
import Message from "./Message";
```
And then you can reference the component like any HTML tag, for example:
```js
return (
  <div><Message/></div>
)
```

# Component Props
You can pass properties to a component like you can with regular HTML tags. When defining the component, just add the `props` keyword inside the parenthesis, and then specify the prop you'd like to display with dot notation. Like this:
```js
function Message(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </>
  )
}
```
If you don't want to use dot notation, you specify the propery names inside the parenthesis in curly braces, like this:
```js
function Message({title, body}) {
  return (
    <>
      <h1>{title}</h1>
      <p>{body}</p>
    </>
  )
}
```
Then you'd call the component with specified values like this:
```js
    <Message title="New Message" body="An example message content" />
```

# Conditional Rendering
When building UI you'd often want to set some elements to be dynamic depending on different variables. For example, if a user is logged in show X. There's multiple ways of handling it, for example:
```js
export default function Counter({count}) {
  if (count > 3) {
    return <p>Count is more then 3.<p>;
  } else {
    return <p>Count is less then 3.</p>;
  }
}
```
This works, but in some cases you might have a large amount of code and you only want snippets inside of to be dynamic, not the entire thing. You can still do this using something called the terniary operator, the terniary operator is using JSX, to add JavaScript inside the HTML you wrap it in curly braces `{}`.

## Terniary Operator
The terniary operator starts with a condition (for example, is a number equal: `num % 2 === 0`), followed by a question mark `?`. If the condition is true you add the first value, if false, you add a colon `:` followed by the alternative value. Example structure:
```js
{ condition ? if_true : if_false }
```
Example:
```js 
{ num % 2 === 0 ? <p>Number is even.</p> : <p>Number is odd.</p>}
```
React will rerender the output as soon as the prop value changes, so if `num` is ever updated, so will the output of the above be updated.

Terniary could also span onto multiple lines, for example:
```js
{ num % 2 === 0 ? 
  (<>
    <h1>Even</h1>
    <p>Your number is even.</p>
  </>) :
  (<>
    <h1>Odd</h1>
    <p>Your number is odd.</p>
  </>)
}
```

Sometimes, if a condition is false you don't want anything to display at all. To do this you can use a logical `&&`. For example, if we only want something to display if the number is even, but nothing if it is odd, we can do:
```js
{ num % 2 === 0 &&
  (<>
    <h1>Even</h1>
    <p>Your number is even.</p>
  </>)
}
```

# Loops
You may want to render an array of values, for example if you get a list of blog posts from a database and want a card for each post you can use `array.map()`.

So lets say we have the below data:
```js
const data = [
  { id: 1, name: 'Fido 🐕' },
  { id: 2, name: 'Snowball 🐈' },
  { id: 3, name: 'Murph 🐈‍⬛' },
  { id: 4, name: 'Zelda 🐈' },
];
```
And we want to render a list item for each animal, we'd do:
```js
export default function Animals() {
  return (
    <>
      <h1>List of Animals</h1>
      <ul>
        {data.map(animal => (
          <li key={animal.id}>{animal.name}</li>
          ))}
      </ul>
    </>
  )
}
```
You could also edit the code slightly like this to make it even cleaner:
```js
{data.map(({id, name}) => (
  <li key={id}>{name}</li>
  ))}
```

They Key is necessary in loops and allows React to keep track of each item so it can be rerendered individually in case of any changes in the future.

# Events
In react you can specify events when declaring the element, so inside the element as a property just start typing `on...` and a bunch of autofill suggestions will show up. For example, a click event:
```js
function Button() {
  return <button onClick={}>Click Me</button>
}
```
Now inside the `onClick` property either you can call an existing function, or just declare an arrow function. Examples of each below.

Using an arrow funtion:
```js
  return <button onClick={event => console.log(event)}>Click Me</button>
```

Calling a function:
```js
  const handleClick = (event) => {
    console.log(event)
  }
  return <button onClick={handleClick}>Click Me</button>
```
If you wanted to pass additional properties to the function, you'll have to call it as an arrow function:
```js
  const handleClick = (event, num) => {
    console.log(event)
  }
  return <button onClick={(e) => handleClick(e, 123)}>Click Me</button>
```

# State
Data that changes throughout the life cycle of the app. Props are immutable, so you can't just change the hardcoded value and expect the rendered elements to update. For this you need to use a react hook called `useState`, which you need to add `import { useState } from 'react';` to the top of the file to use. Example:
```js
import { useState } from 'react';

function State() {
  const [count, setCount] = useState(0)
}
```
The above has declared a variable `count` with the default value of `0`. You can leave `useState()` empty if you don't want a default value. To update the value of `count` you'd call setCount as a function with the new value inside, like: `setCount(2)`

Now every time `count` is changed, any component referencing it will be rerendered.

So, for example a simple counter that goes up on button click:
```jsx
export default function counter() {
  const [count, setCount] = useState(0);

  return(
    <>
    <h1>Press to increase the count</h1>
    <p>{count}</p>
    <button onClick={() => setCount(count+1)}>+</button>
    </>
  )
}
```