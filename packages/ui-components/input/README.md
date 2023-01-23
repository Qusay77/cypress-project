# Concept

- You can use this package to generate different input fields , dropdowns and popup with dynamic attributes and content

# Usage

- To use this package import package from "@packages/core-input" and put it on your component.

# Props

- type (string) used for set specific type for input ("text" , "password" and "dropdown")

- value && setValue (used for type text or password to handle value and changed of the value inside input field) (state and set state invoke inside input package but send as props for first time)

- label (string) (render label above input) (optional)

- placeholder (string) (render placeholder to input) (optional)

- error (boolean) (input used this props to know if there is error or know) (optional)

- errorMessage (string) (render error message above input when error occurred) (optional)

- isOpen && setOpen (used for dropdown to handle close and open for dropdown) (state and set state invoke outside package)

- You can send multiple children inside dropdown to add it as content inside dropdown or popup

- styles (used for customize all style for input and dropdown) (styles send as object has many keys) :-

---

# Styling

(used for customize all style for input and dropdown) (styles send as object has many keys) :-

1. input : used to change layout and style for input field (object has react style keys and values) (used for input)

2. label : used to change style for label above input field (object has react style keys and values) (used for input)

3. error : used to change style for error Message above input field (object has react style keys and values) (used for input)

4. layerProps : used to change layer props for dropdown used from react-laag package (You can change many things for example :- placement for dropdown (bottom - top - left - right ) , container offset ) (used for dropdown)

5. layerStyles : used to change style and layout for dropdown (object has react style keys and values) (used for dropdown)

- For Example :-

```javascript
const inputStyles = {
  // input , label , error --- for customize style for input field
  // layerProps , layerStyles --- for customize position and style for tooltip and dropdown
  input: {
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "17px",
    color: "#333333",
  },
  label: {
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "15px",
    textTransform: "capitalize",
    color: "#808080",
  },
  error: {
    color: "#D83928",
  },
  layerProps: {
    placement: "top-start",
    possiblePlacements: [
      "top-start",
      "top-right",
      "bottom-start",
      "bottom-center",
      "bottom-end",
    ],
    triggerOffset: 5,
    containerOffset: 10,
  },
  layerStyles: {
    border: "1px solid black",
    borderRadius: "18px",
  },
};
```

- ** If you want to Read or Know more about react-laag you can use this link :- **

`link` : <https://github.com/everweij/react-laag>
