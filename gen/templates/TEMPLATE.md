# Generator Templates

This directory contains all of the templates your generator will use.

Template variables use lodash syntax `%= var %` wrapped in inclusion tags `< >`:
    * Note the spaces are added in this example to prevent yo from compiling the tags.

```javascript
    < %= name % >
    < %= classyName % >
    < %= upperName % >
    < %= lowerName % >
```

The name variable are included by default, all other will have to be defined in `index.js`.

Feel free to remove this file.