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

**HTML Example:**

```html
    <div class="buttons">
        <button class="dagon-trigger-new">News</button>
        <button class="dagon-trigger-blog">Blogs</button>
        <button class="dagon-trigger-other">Others</button>
    </div>

    <div class="panels">
        <div class="dagon-target-new">New</div>
        <div class="dagon-target-new">New</div>
        <div class="dagon-target-new">New</div>
        <div class="dagon-target-new">New</div>
        <div class="dagon-target-blog">Blog</div>
        <div class="dagon-target-blog">Blog</div>
        <div class="dagon-target-blog">Blog</div>
        <div class="dagon-target-blog">Blog</div>
        <div class="dagon-target-other">Other</div>
        <div class="dagon-target-other">Other</div>
        <div class="dagon-target-other">Other</div>
        <div class="dagon-target-other">Other</div>
        <div class="dagon-target-other">Other</div>
        <div class="dagon-target-other">Other</div>
    </div>

    <script src="./index.js" type="module"></script>
```

**Basic Usage:**

```javascript
import { Dagon } from './dagon.js';

const myMenu = new Dagon({
  elements: ['menu'], // Element you want to control (can be an array of elements)
  type: 'toggle' // Type of menu (toggle or dropdown)
});
```

**Advanced Usage:**

```javascript
import { Dagon } from './dagon.js';

const myMenu = new Dagon({
  elements: ['menu'],
  type: 'dropdown',
  prefix: 'my-custom-prefix', // Customize the CSS prefix
  trigger: 'open-menu', // Customize the trigger class
  target: 'menu-content', // Customize the target class
  seperator: '__', // Customize the separator string
  toggle: 'is-open', // Customize the toggle class name
  itSelf: true, // Close menu on clicking outside the menu itself
  switch: true, // Allow multiple menus to be open at the same time
});
```

### Documentation

- ```type: ('toggle' | 'dropdown')``` - Defines the type of menu (default: 'toggle').
- ```prefix: (string)``` - Prefix used for generating CSS class names (default: 'dagon').
- ```trigger: (string)``` - Class name used for the trigger element (default: 'trigger').
- ```target: (string)``` - Class name used for the target element (default: 'target').
- ```seperator: (string)``` - String used to separate class name parts (default: '-').
- ```toggle: (string)``` - Class name added/removed to show/hide the menu (default: 'active').
- ```itSelf: (boolean)``` - Close the menu on clicking outside the menu itself (default: false).
- ```switch: (boolean)``` - Allow multiple menus to be open at the same time (default: true).
- ```elements: (string[] | null)``` - Array of element IDs or classes you want to control.

### Contributing
We welcome contributions to this project. Feel free to fork the repository and submit a pull request with your changes.

