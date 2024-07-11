# Project Summary

This project helped me understand and implement several key concepts in React and web development. Below is a summary of the concepts I learned:

## Key Concepts

### Utilization of React Router DOM

- **Multi-page App**:
  - **Routes and Route**: Used in `App.js` to create a multi-page application without needing to refresh the page every time.
  - **Example**:
    ```javascript
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import Home from './Home';
    import About from './About';
    
    function App() {
      return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      );
    }
    ```

- **Persistent Navbar**:
  - **Always Present**: The `Navbar` component is always present on the page because it is placed outside of the `Routes`.
  - **Example**:
    ```javascript
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import Navbar from './Navbar';
    import Home from './Home';
    import About from './About';

    function App() {
      return (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      );
    }
    ```

- **Link vs NavLink**:
  - **Link**: Basic navigation component.
    ```javascript
    import { Link } from 'react-router-dom';
    <Link to="/about">About</Link>
    ```
  - **NavLink**: Similar to `Link`, but with additional features like active styling.
    ```javascript
    import { NavLink } from 'react-router-dom';
    <NavLink to="/about" activeClassName="active">About</NavLink>
    ```

- **useParams**:
  - **Extract URL Parameters**: Allows you to take a specific value from a path URL.
  - **Example**:
    ```javascript
    import { useParams } from 'react-router-dom';

    function Profile() {
      const { userId } = useParams();
      return <div>User ID: {userId}</div>;
    }
    ```

- **BrowserRouter**:
  - **Wrapper**: Must wrap `App` in the main `index.js` to use the router features.
  - **Example**:
    ```javascript
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { BrowserRouter as Router } from 'react-router-dom';
    import App from './App';

    ReactDOM.render(
      <Router>
        <App />
      </Router>,
      document.getElementById('root')
    );
    ```

### React useContext

- **Global Context**:
  - **Directory Structure**: Create a `context` directory and make `index.js`. This is where you can create `GlobalContext` with `createContext` and create a `GlobalState` component to use states globally.
  - **Example**:
    ```javascript
    import React, { createContext, useState } from 'react';

    const GlobalContext = createContext();

    function GlobalState({ children }) {
      const [state, setState] = useState('Hello, World!');
      
      return (
        <GlobalContext.Provider value={{ state, setState }}>
          {children}
        </GlobalContext.Provider>
      );
    }

    export { GlobalContext, GlobalState };
    ```

- **Consuming State**:
  - **useContext**: Consume the states by using `useContext(GlobalContext)`.
  - **Example**:
    ```javascript
    import React, { useContext } from 'react';
    import { GlobalContext } from '../context';

    function MyComponent() {
      const { state } = useContext(GlobalContext);
      return <div>{state}</div>;
    }

    export default MyComponent;
    ```

### Extra

- **Optional Chaining (`?.`)**:
  - **Purpose**: Without optional chaining, you would need to perform explicit checks to avoid runtime errors.
  - **Example**:
    ```javascript
    const country = weatherData?.sys?.country;
    ```

By understanding these concepts, you can efficiently build and manage React applications with enhanced navigation, state management, and error handling.
