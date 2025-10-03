export const SOLVE_STATES = {
  SOLVED: 'Solved',
  WRONG: 'Wrong',
  NOT_SOLVED: 'NotSolved',
} as const;

export const ICONS = {
  bookmarkOn: require('@src/assets/images/bookmark_16_Selected.png'),
  bookmarkOff: require('@src/assets/images/bookmark_16_Default.png'),
  checkBlue: require('@src/assets/images/check_16_Selected.png'),
  xRed: require('@src/assets/images/folderBtn/redX.png'),
  xGray: require('@src/assets/images/folderBtn/grayX.png'),
} as const;

export const BOOKMARK_HITSLOP = {
  top: 8,
  bottom: 8,
  left: 8,
  right: 8,
} as const;
