# REACT

## Key Points
* UI Library - helps us build the "view" part of MVC
* Declarative - we tell React what we want the screen to look like, React figures out how to do it
* Virtual DOM - No direct manipulation of the DOM, React compares Virtual DOM to real one to decide what to update and when

## Components
* React is component based - bite sized pieces sections of code, often reuseable
* Components take in props to customize behavior, like parameters in functions
* Components can be built with either functions or classes
* Class components if you need state (stateful components)
* Functional components for stateless (for now)
* Components look like HTML element tags

ex: `<SomeComponent> child elements </SomeComponent>`

## Props
* Information passed into a component
* Looks like attributes

ex: `<SomeComponent name={someValue} theme={someOtherValue} />`

## State
* React is super efficient and doesn't update more than necessary
* It knows to update a component if state changes
* Change state by calling this.setState({key: value})
* Props + State = all React needs to know to render component

## JSX
* Looks like HTML inside our javascript
* Can add actual javascript inside JSX with { }

## Events
* Attach event handlers to JSX elements to add extra functionality

ex: 
<br>
`let clickHandler = (event) => {your code};`
<br>
`<div onClick={clickHandler}></div>`

## Life Cycle
* React gives us ways to access certain phases of the component's life cycle
* ComponentDidMount, ComponentDidUpdate, ComponentWillUnmount, etc

## React Router
* Lets us make a Single Page Application (SPA)
* Create routes to navigate between section of our React app...routes in our frontend, whaaaaaaaa?
* Really just switches components out based on current URL

