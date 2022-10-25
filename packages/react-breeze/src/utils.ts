/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/* Safelist */
// @ts-ignore
import shader from 'shader';

export function generateSafelist() {
  const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];
  return [
    ...new Set([
      ...generateAlertSafelist(colors),
      ...generateButtonSafelist(colors),
      ...generateSpinnerSafelist(colors),
      ...generateFormSafelist(colors),
    ]),
  ];
}

function generateAlertSafelist(colors: string[]) {
  return colors.reduce(
    (safeList: string[], color) => [...safeList, `bg-${color}-100`, `text-${color}-800`, `border-${color}-200`],
    [],
  );
}

function generateButtonSafelist(colors: string[]) {
  return colors.reduce(
    (safeList: string[], color) => [
      ...safeList,
      `bg-${color}-500`,
      `border-${color}-500`,
      `hover:bg-${color}-600`,
      `active:bg-${color}-700`,
      `text-${color}-500`,
      `border-${color}-500`,
      `hover:bg-${color}-50`,
      `active:bg-${color}-100`,
    ],
    ['bg-light', 'text-light'],
  );
}

function generateSpinnerSafelist(colors: string[]) {
  return [...colors, 'light', 'dark'].reduce((safeList: string[], color) => [...safeList, `text-${color}-500`], []);
}

function generateFormSafelist(colors: string[]) {
  return colors.reduce(
    (safeList: string[], color) => [...safeList, `focus:border-${color}-500`, `border-${color}-500`, `border-${color}-300`],
    ['border-gray-300', 'focus:border-blue-500', 'border-red-300'],
  );
}

/* Colors */

type ColorGenerationArgs = {
  primary?: string;
  secondary?: string;
  success?: string;
  info?: string;
  warning?: string;
  danger?: string;
  light?: string;
  dark?: string;
};

type Shades = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  DEFAULT: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

type GeneratedColor = {
  primary: Shades;
  secondary: Shades;
  success: Shades;
  info: Shades;
  warning: Shades;
  danger: Shades;
  light: Shades;
  dark: Shades;
};

const shades = [
  [50, 0.9],
  [100, 0.8],
  [200, 0.6],
  [300, 0.4],
  [400, 0.2],
  [600, -0.2],
  [700, -0.4],
  [800, -0.6],
  [900, -0.8],
];

function generateColorShades(color500: string) {
  return shades.reduce(
    (accumulator, [name, modifier]) => {
      return {
        ...accumulator,
        [name]: shader(color500, modifier),
      };
    },
    {
      500: color500,
      DEFAULT: color500,
    },
  );
}

export function generateColors(colors: ColorGenerationArgs = {}) {
  const {
    primary = '#0d6efd',
    secondary = '#6c757d',
    success = '#28a745',
    info = '#17a2b8',
    warning = '#ffc107',
    danger = '#dc3545',
    light = '#ffffff',
    dark = '#000000',
  } = colors;

  return Object.entries({ primary, secondary, success, info, warning, danger, light, dark }).reduce(
    (accumulator, [name, value]) => {
      return {
        ...accumulator,
        [name]: generateColorShades(value),
      };
    },
    {} as GeneratedColor,
  );
}
