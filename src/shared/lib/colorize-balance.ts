export const colorizeBalance = (balance: number): string => {
  if (balance < 1000) {
    return "red.400";
  } else if (balance < 10000) {
    return "orange.400";
  } else if (balance < 100000) {
    return "yellow.400";
  } else {
    return "green.400";
  }
};
