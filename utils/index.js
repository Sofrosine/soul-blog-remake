export const capitalizeEachWords = (sentences) => {
  let string = sentences
    ?.split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
  return string;
};
