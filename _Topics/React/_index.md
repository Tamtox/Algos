- Component - is a reusable code that can be used in multiple places in your application. It can be a button, a form, a modal, a table, etc.
- JSX - is a syntax extension for JavaScript that looks similar to XML or HTML. It is used to describe what the UI should look like.
- Fragment - is a way to group a list of components and return them without adding extra nodes to the DOM.
- Props - is a way to pass data from parent to child components.
- State - is a way to store data that can change over time in a component.
- Lifecycle methods - are methods that are called at different stages of a component's life cycle.
- Context API - is a way to pass data through the component tree without having to pass props down manually at every level.
``` ts
const ThemeContext = React.createContext('light');
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}
function Toolbar() {
  const theme = useContext(ThemeContext);
  return (
    <div>
      {theme}
    </div>
  );
}
```
- Hooks - are functions that let you use state and other React features without writing a class.
- Keys - are used to identify which items have changed, are added, or are removed in a list to optimize rendering.
- Virtual DOM - is a lightweight in-memory copy of the actual DOM that React uses to update the UI efficiently.
- Error Boundaries - are React components that catch JavaScript errors anywhere in their child component tree and log those errors.
