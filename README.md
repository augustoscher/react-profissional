# react-profissional

React Profissional course. Improving React skills.

## Running

### Storybook

To run storybook, type:

```bash
yarn storybook
```

## Code Snippet

Open VSCode and follow steps:

1. File - Preferences - User Snippets
2. Type javascript on open box
3. Add following custom snippet to create react component

```javascript
{
  "React Component": {
    "prefix": "myrc",
    "description": "React Component",
    "body": [
      "import React from 'react';",
      "import PropTypes from 'prop-types';",
      "",
      "const ${TM_FILENAME_BASE} = () => (",
      "  $1",
      ");",
      "",
      "${TM_FILENAME_BASE}.defaultProps = {}",
      "",
      "${TM_FILENAME_BASE}.propTypes = {}",
      "",
      "export default ${TM_FILENAME_BASE};"
    ]
  }
}
```
