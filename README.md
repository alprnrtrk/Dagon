## Dagon.js - Yet Another Class Toggler
This is a lightweight JavaScript library for creating toggleable menus and dropdown elements.


### Features

* Supports two display types: toggle and dropdown.
* Customizable class names for triggers and targets.
* Optional closing of the menu on clicking outside the menu itself.


### Installation

There are two ways to use Dagon.js in your project:

1.  **Download the Script:**  Download the `dagon.js` file and include it in your HTML using a `<script>` tag.
2.  **Use a CDN (Coming Soon):** (placeholder text, functionality not currently implemented)


### Usage

**Basic Usage:**

```javascript
import { Dagon } from './dagon.js';

const myMenu = new Dagon({
  elements: ['menu'], // Element you want to control (can be an array of elements)
  type: 'toggle' // Type of menu (toggle or dropdown)
});
```
