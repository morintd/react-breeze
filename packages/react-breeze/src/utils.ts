export function generateSafelist(colors: string[]) {
  return [
    ...new Set([...generateAlertSafelist(colors), ...generateButtonSafelist(colors), ...generateSpinnerSafelist(colors)]),
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
      `text-${color}-inverted`,
      `border-${color}-500`,
      `hover:bg-${color}-600`,
      `active:bg-${color}-700`,
      `bg-${color}-inverted`,
      `font-semibold`,
      `text-${color}-500`,
      `border-${color}-500`,
      `hover:bg-${color}-50`,
      `active:bg-${color}-100`,
    ],
    [],
  );
}

function generateSpinnerSafelist(colors: string[]) {
  return colors.reduce((safeList: string[], color) => [...safeList, `text-${color}-inverted`, `text-${color}-500`], []);
}
