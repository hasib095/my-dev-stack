# DevStack

DevStack is a simple and interactive React web application where users can explore different technologies and build their own technology stack.

Users can select technologies, add them to their stack, remove individual technologies, or remove the entire stack.

## Technologies Used

* React
* TypeScript
* Tailwind CSS
* Vite
* JSON

## Key Features

### 1. Explore Technologies

Users can see different technologies with their name, category, icon, rating, and description.

### 2. Build Your Stack

Users can add their favorite technologies to their own stack. Duplicate technologies cannot be added.

### 3. Manage Your Stack

Users can remove a single technology or remove all selected technologies at once. Toast notifications are also shown for different actions.

---

# Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that allow us write HTML inside JavaScript.It makes React code easier to read and helps us create the UI.

---

## 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.

**State** is data that can change over time.


---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to create and manage changing data in a React component.

In this project, I used it to store the technologies selected by the user.


---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to run some code after a component renders.

I used it to load the technology data from the `data.json` file when the page loads.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to identify each item in a list.It helps React understand which item was added, removed, or changed.

---

## 6. What is conditional rendering?
Conditional rendering means showing different UI based on a condition.In this project, I used it to show a message when the stack is empty.
---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using **props**.

Example:

```jsx
<YourStack
  stack={stack}
  onRemove={handleRemove}
/>
```

Here, `stack` and `onRemove` are passed to the `YourStack` component.

The child can send something back by calling a **function received through props**.

---