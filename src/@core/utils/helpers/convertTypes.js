const convertTypeToString = value => {
  if (typeof value === "string") {
    return value;
  } else {
    return String(value);
  }
};

export { convertTypeToString };
