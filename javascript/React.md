# React Notes

## What is React?

React is an open-source JavaScript library used for building fast and interactive user interfaces. It was developed by Meta Platforms and is widely used for creating single-page applications (SPAs).

## Key Features

* Component-Based Architecture
* Virtual DOM for efficient rendering
* Reusable UI components
* One-Way Data Binding
* Declarative Programming
* Strong Community Support

## React Components

Components are the building blocks of a React application.

### Functional Component

```jsx
function Welcome() {
  return <h1>Hello, World!</h1>;
}
```

## JSX

JSX (JavaScript XML) allows writing HTML-like syntax inside JavaScript.

```jsx
const element = <h1>Welcome to React</h1>;
```

## Props

Props (Properties) are used to pass data from a parent component to a child component.

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

## State

State is used to store and manage data that can change over time.

```jsx
const [count, setCount] = useState(0);
```

## React Hooks

Hooks allow functional components to use React features.

Common Hooks:

* useState()
* useEffect()
* useContext()
* useRef()
* useReducer()

## Benefits of React

* Faster UI updates
* Reusable components
* Easy maintenance
* Strong ecosystem
* SEO-friendly with modern frameworks

## Applications of React

* Web Applications
* Dashboard Systems
* E-commerce Websites
* Social Media Platforms
* Progressive Web Apps (PWAs)

## Conclusion

React simplifies the process of building modern, scalable, and interactive user interfaces through reusable components and efficient rendering techniques.
