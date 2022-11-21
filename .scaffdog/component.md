---
name: 'component'
root: 'src'
output: '**/*'
ignore: []
questions:
  name: 'Please enter a component name (no blanket).'
---

# `{{ inputs.name | pascal }}/index.tsx`

```typescript
import styles from './style.module.scss';

type Props = {
  children :React.ReactNode;
};

export const {{inputs.name | pascal }}: React.FC<Props> = () => {
  return<></>
}

```

# `{{ inputs.name | pascal }}/style.module.scss`

```scss

```

# `{{ inputs.name | pascal }}/index.stories.tsx`

```typescript
import { {{inputs.name | pascal }} } from "./";

export default {
  component: {{inputs.name | pascal }}
};

export const Template = {};
```

# `{{ inputs.name | pascal }}/index.test.tsx`

```typescript
import { render } from "@testing-library/react"

import { {{inputs.name | pascal }} } from "."


describe('{{inputs.name | pascal }}', () => {
  it('propsから渡されたものが表示されているか', () => {
    const props = {}
    const { getByTestId } = render(<{{inputs.name | pascal }} {...props} />)
    expect(getByTestId(〇〇)).toHaveTextContent(〇〇)
  })
})
```
