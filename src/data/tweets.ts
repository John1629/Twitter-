export interface Tweet {
  id: number;
  name: string;
  username: string;
  text: string;
  imageUrl?: string;
}

export const tweets: Tweet[] = [
  {
    id: 1,
    name: "Say2Cups",
    username: "say2cups",
    text: "Conn asda;lskdjf",
    imageUrl:
      "https://wallpapers.com/images/hd/family-guy-stewie-griffin-z8if6xxqftztkwrk.jpg",
  },
  { id: 2, name: "Mvprinch", username: "Princh", text: "okokokkok" },
  { id: 3, name: "John", username: "john", text: "im weaker than princh" },
];
