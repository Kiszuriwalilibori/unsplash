import { Neighbours } from "types";

export const createNeighbours = (index: number, images: any) => {
  const neighbours = {} as Neighbours;
  neighbours.previous = index === 0 ? null : images[index - 1].id;
  neighbours.next = index === images.length - 1 ? null : images[index + 1].id;
  return neighbours;
};

export default createNeighbours;
