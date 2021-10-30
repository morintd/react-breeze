# react-breeze

A component library made with TailWind.

This is still a WIP, next steps are:

- Set up a documentation
- Add tests for all components
- Improve accessibility
- Create other components

This library works with a primary/secondary/success/info/warning/danger variant:

```tsx
import React, { useState } from 'react';
import { Alert, Button, Card, Input, Title } from 'react-breeze';

function App() {
  const [loading, setLoading] = useState(false);

  const handle = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  const [value, setValue] = useState('');

  return (
    <div className="w-100">
      <Title className="mb-2">Buttons</Title>
      <Title as="h2">Basics</Title>
      <Button className="mr-1">Primary</Button>
      <Button color="secondary" className="mr-1">
        Secondary
      </Button>
      <Button color="success" className="mr-1">
        Success
      </Button>
      <Button color="info" className="mr-1">
        Info
      </Button>
      <Button color="warning" className="mr-1">
        Warning
      </Button>
      <Button color="danger" className="mr-1">
        Danger
      </Button>
      <Title as="h2">Disabled</Title>
      <Button disabled className="mr-1">
        Primary
      </Button>
      <Button disabled color="secondary" className="mr-1">
        Secondary
      </Button>
      <Button disabled color="success" className="mr-1">
        Success
      </Button>
      <Button disabled color="info" className="mr-1">
        Info
      </Button>
      <Button disabled color="warning" className="mr-1">
        Warning
      </Button>
      <Button disabled color="danger" className="mr-1">
        Danger
      </Button>
      <Title as="h2">Outline</Title>
      <Button outline className="mr-1">
        Primary
      </Button>
      <Button outline color="secondary" className="mr-1">
        Secondary
      </Button>
      <Button outline color="success" className="mr-1">
        Success
      </Button>
      <Button outline color="info" className="mr-1">
        Info
      </Button>
      <Button outline color="warning" className="mr-1">
        Warning
      </Button>
      <Button outline color="danger" className="mr-1">
        Danger
      </Button>
      <Title as="h2">Outline disabled</Title>
      <Button disabled outline className="mr-1">
        Primary
      </Button>
      <Button disabled outline color="secondary" className="mr-1">
        Secondary
      </Button>
      <Button disabled outline color="success" className="mr-1">
        Success
      </Button>
      <Button disabled outline color="info" className="mr-1">
        Info
      </Button>
      <Button disabled outline color="warning" className="mr-1">
        Warning
      </Button>
      <Button disabled outline color="danger" className="mr-1">
        Danger
      </Button>
      <Title as="h2">Behaviors</Title>
      <Button onClick={() => alert('Clicked')} className="mr-1">
        onClick
      </Button>
      <Button loading={loading} onClick={handle} className="mr-1">
        <div className="h-6 w-8">Load</div>
      </Button>
      <Button loading className="mr-1">
        <div className="h-6 w-8">Load</div>
      </Button>
      <Title className="mt-4 mb-2">Card</Title>
      <Card>
        <Card.Title>Card Title</Card.Title>
        <div>Content</div>
      </Card>
      <Title className="mt-4 mb-2">Alert</Title>
      <Alert className="mb-1">Primary</Alert>
      <Alert color="secondary" className="mb-1">
        Secondary
      </Alert>
      <Alert color="success" className="mb-1">
        Success
      </Alert>
      <Alert color="info" className="mb-1">
        Info
      </Alert>
      <Alert color="warning" className="mb-1">
        Warning
      </Alert>
      <Alert color="danger" className="mb-1">
        Danger
      </Alert>
      <Title className="mt-4 mb-2">Field</Title>
      <Title as="h2">Usable</Title>
      <Input onChange={(e) => setValue(e.target.value)} value={value} />
      <Title as="h2">Placeholder</Title>
      <Input placeholder="Placeholder..." />
      <Title as="h2">Error</Title>
      <Input error="Error" value="wrong-value" />
    </div>
  );
}

export default App;
```

Minimum Tailwind configuration:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        light: {
          DEFAULT: '#fff',
          600: '#e6e6e6',
          700: '#cccccc',
        },
        dark: {
          DEFAULT: '#d6d8d9',
        },
        primary: {
          50: '#e7f1ff',
          100: '#cfe2ff',
          200: '#9ec5fe',
          300: '#6ea8fe',
          400: '#3d8bfd',
          DEFAULT: '#0d6efd',
          600: '#0a58ca',
          700: '#084298',
          800: '#052c65',
          900: '#031633',
        },
        secondary: {
          50: '#f0f1f2',
          100: '#e2e3e5',
          200: '#c4c8cb',
          300: '#a7acb1',
          400: '#899197',
          DEFAULT: '#6c757d',
          600: '#565e64',
          700: '#41464b',
          800: '#2b2f32',
          900: '#161719',
        },
        success: {
          50: '#eaf6ec',
          100: '#d4edda',
          200: '#a9dcb5',
          300: '#7eca8f',
          400: '#53b96a',
          DEFAULT: '#28a745',
          600: '#208637',
          700: '#186429',
          800: '#10431c',
          900: '#08210e',
        },
        info: {
          50: '#e8f6f8',
          100: '#d1ecf1',
          200: '#a2dae3',
          300: '#74c7d4',
          400: '#45b5c6',
          DEFAULT: '#17a2b8',
          600: '#128293',
          700: '#0e616e',
          800: '#09414a',
          900: '#052025',
        },
        warning: {
          50: '#fff9e6',
          100: '#fff3cd',
          200: '#ffe69c',
          300: '#ffda6a',
          400: '#ffcd39',
          DEFAULT: '#ffc107',
          600: '#cc9a06',
          700: '#997404',
          800: '#664d03',
          900: '#332701',
        },
        danger: {
          50: '#fcebec',
          100: '#f8d7da',
          200: '#f1aeb5',
          300: '#ea868f',
          400: '#e35d6a',
          DEFAULT: '#dc3545',
          600: '#b02a37',
          700: '#842029',
          800: '#58151c',
          900: '#2c0b0e',
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
};
```
