export default class Category {
  id: number;
  name: string;
  image: string;
  backgroundColor: string;

  constructor(
    id: number,
    name: string,
    image: string,
    backgroundColor: string
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.backgroundColor = backgroundColor;
  }
}
