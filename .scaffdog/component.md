---
name: "component"
root: "src"
output: "**/*"
ignore: []
questions:
  name: "Please enter a component name (no blanket)."
---

# `{{ inputs.name | pascal }}/index.tsx`

```typescript
import React from 'react';
import styles from './style.module.scss';

type Props = {
  children :React.ReactNode;
};

export const {{inputs.name | pascal }}: React.FC<Props> = ({children}) =>(<div>{children}</div>)
```

# `{{ inputs.name | pascal }}/style.module.scss`

```scss
.{{inputs.name}} {}
```

# `{{ inputs.name | pascal }}/index.stories.tsx`

```typescript
import { {{inputs.name | pascal }} } from "./";

export default {
  component: {{inputs.name | pascal }},
};

export const Template = {};
```