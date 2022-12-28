type Previous = string | null;
type Next = string | null;

export type PathKeys = "select" | "images" | "nopage";

export interface Neighbours {
  previous: Previous;
  next: Next;
}
// export interface Data{
//   location:
//   user:
//   urls: string;
// }

export interface Result {
  data: any;
  neighbours: Neighbours;
}
export interface Details {
  location: string;
  author: string;
  twitter: string;
  profileImage: string;
  urls: string;
  previous: Previous;
  next: Next;
}
