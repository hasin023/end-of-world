# End of the World greetings

This is a simple package to console the text that might go nicely with the end of the world.

## Installation

```bash
npm install end-of-world
```

## Usage

Both CommonJS and ES6 import styles are supported. The package exports a single function `goodbye` that logs a message to the console. The function takes in a single optional argument that is a string. If the argument is provided, the message will be logged with the provided string. If the argument is not provided, the message will be logged with a default string.

### ES6

```javascript
import { goodbye } from 'end-of-world';

goodbye(); // Goodbye World 🔥
goodbye('Pansy'); // Goodbye Pansy 🔥
```

### CommonJS

```javascript
const { goodbye } = require('end-of-world');

goodbye(); // Goodbye World 🔥
goodbye('Pansy'); // Goodbye Pansy 🔥
```

## Work in Progress

This package is a work in progress. More features will be added in the future. If you have any suggestions, feel free to open an issue or a pull request.
