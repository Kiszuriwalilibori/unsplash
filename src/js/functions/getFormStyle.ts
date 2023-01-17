export const getFormStyle = (str: boolean, baseClass: string) => {
  switch (str) {
    case true:
      return `${baseClass} form--search`;

    case false:
      return `${baseClass} form--images`;

    default:
      return `${baseClass} form--search`;
  }
};

export default getFormStyle;


// export const getFormStyle = (str: string, baseClass: string) => {
//   switch (str) {
//     case "/":
//       return `${baseClass} form--search`;

//     case "/images":
//       return `${baseClass} form--images`;

//     default:
//       return `${baseClass} form--search`;
//   }
// };

// export default getFormStyle;
