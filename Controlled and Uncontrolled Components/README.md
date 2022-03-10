# Controlled and Uncontrolled Components

### Controlled Components

The form data is handled by the state within the component. The state within the component serves as “the single source of truth” for the input elements that are rendered by the component.

### Uncontrolled Components

Uncontrolled components act more like traditional HTML form elements. The data for each input element is stored in the DOM, not in the component. Instead of writing an event handler for all of your state updates, you use a ref to retrieve values from the DOM.
