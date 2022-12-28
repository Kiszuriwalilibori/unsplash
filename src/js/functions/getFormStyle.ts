export const getFormStyle = (str: string, baseClass: string) => {
  switch (str) {
    case "/":
      return `${baseClass} form--search`;

    case "/images":
      return `${baseClass} form--images`;

    default:
      return `${baseClass} form--search`;
  }
};

export default getFormStyle;
