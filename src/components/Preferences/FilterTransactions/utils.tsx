interface Unit {
  unit?: string;
  raw: number;
  display?: string;
}

export const units: Unit[] = [
  {
    raw: Infinity,
  },
  {
    unit: "1000 Woof",
    raw: 1e29,
    display: "1 Woof",
  },
  {
    unit: "1 Woof",
    raw: 1e26,
    display: "1 Woof",
  },
  {
    unit: "0.001 Woof",
    raw: 1e23,
    display: `0.001 Woof`,
  },
  {
    unit: "1e+21 raw",
    raw: 1e21,
    display: "1e+21 raw",
  },
  {
    unit: "1e+18 raw",
    raw: 1e18,
    display: "1e+18 raw",
  },
  {
    unit: "raw",
    raw: 1,
    display: "1 raw",
  },
];

export const DEFAULT_UNITS: [number, number] = [units[0].raw, units[2].raw];
