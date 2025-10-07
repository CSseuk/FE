export const pad2 = (n: number) => String(n).padStart(2, '0');

export const iso = (y: number, m: number, d: number) =>
  `${y}-${pad2(m + 1)}-${pad2(d)}`;

export const getDaysInMonth = (y: number, m: number) =>
  new Date(y, m + 1, 0).getDate();
