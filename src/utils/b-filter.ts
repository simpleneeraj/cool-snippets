const backgroundFilter = (value: string) => {
  const regex =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
  const color = /gradient|#|rgb|hsl/g;
  if (RegExp(regex).test(value)) {
    return `url(${value})`;
  }
  if (RegExp(color).test(value)) {
    return value;
  } else {
    return `url(${value})`;
  }
};

export default backgroundFilter;
