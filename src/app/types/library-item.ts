export default class LibraryItem {
  id: number;
  name: string;
  images: Array<{ url: string }>;
  owner: { display_name: string };
  type: string;

  constructor(
    id: number,
    name: string,
    images: Array<{ url: string }>,
    owner: { display_name: string },
    type: string
  ) {
    this.id = id;
    this.name = name;
    this.images = images;
    this.owner = owner;
    this.type = type;
  }
}
