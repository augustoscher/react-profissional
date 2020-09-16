# react-profissional

![CircleCI](https://img.shields.io/circleci/build/github/augustoscher/react-profissional)

React Profissional course. Improving React skills.

## Links

[App](https://react-profissional.vercel.app/)
[Storybook](https://www.chromatic.com/library?appId=5f601b7f82be0d00226cb172)

## Running

### Storybook

To run storybook, open terminal and type:

```bash
yarn storybook
```

## Code Snippet

Open VSCode and follow steps:

1. File - Preferences - User Snippets
2. Type javascript on open box
3. Add following custom snippet to create react component

React Component and Component Storybook

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

  "Component Unit Test": {
    "prefix": "mycut",
    "description": "Component Unit Test",
    "body": [
      "import React from 'react';",
      "import { render } from 'test-utils';",
      "",
      "import ${TM_FILENAME_BASE/(.test)//} from './${TM_FILENAME_BASE/(.test)//}';",
      "",
      "test('renders', () => {",
      "  const { asFragment } = render(",
      "    <${TM_FILENAME_BASE/(.test)//}></${TM_FILENAME_BASE/(.test)//}>",
      "  );",
      "",
      "  expect(asFragment()).toMatchSnapshot();",
      "});"
    ]
  },

  "Component Storybook": {
    "prefix": "mycs",
    "description": "Component Storybook",
    "body": [
      "import React from 'react';",
      "import ${TM_FILENAME_BASE/(.stories)//} from './${TM_FILENAME_BASE/(.stories)//}';",
      "",
      "export default {",
      "  title: \"Components/${1|Atoms, Molecules, Organisms, Pages, Templates|}/${TM_FILENAME_BASE/(.stories)//}\",",
      "  component: ${TM_FILENAME_BASE/(.stories)//},",
      "};",
      "",
      "export const usage = () => (",
      "  <${TM_FILENAME_BASE/(.stories)//}>$2</${TM_FILENAME_BASE/(.stories)//}>",
      ");",
    ]
  }
}
```
