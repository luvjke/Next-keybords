export const mapSize = {
  60: '60%',
  75: '75%',
  100: '100%',
} as const;

export const mapType = {
  1: 'с проводом ',
  2: 'беспроводная',
} as const;

export const keyboardSizes = Object.entries(mapSize).map(([value, name]) => ({
  value,
  name,
}));

export const keyboardTypes = Object.entries(mapType).map(([value, name]) => ({
  value,
  name,
}));

export type KeyboardType = keyof typeof mapType;
export type KeyboardSize = keyof typeof mapSize;
