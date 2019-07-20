# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.
   React JS is a JavaScript library which is used to build out and render user-interface to the DOM in a very elegant way. React works through a virtual DOM to keep track of which elements and state to render to the actual DOM, sending updates to the actual DOM when specific nodes within the app have changed and taking a lot of pressure off of the browser.

1. What does it mean to think in react?
   Thinking in react enables one to percive every rendered user-interface application as component based with reusable parts.
1. Describe state.
   State is a collection of variable data intialized, housed and managed by a component.

1. Describe props.
   Props are attributes which are passed from one component to another. For example, a parent componenet can pass down a prop to a child component with ease.

1) What are side effects, and how do you sync effects in a React component to state or prop changes?
   Side effects are anything that affects something outside the scope of the function being executed. The useEffect() function or command is used to sync effects in react components. A dependency array is passed into useEffect() command that will tell the effect hook when to fire.
