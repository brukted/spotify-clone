import Card from "../components/search/card";
import Category from "../types/category";

export default async function Search() {
  const categories: Category[] = [
    {
      id: 0,
      name: "Afro",
      image: "https://i.scdn.co/image/ab67fb8200005caf04faccb4f5e1828600921f37",
      backgroundColor: "#d84000",
    },
    {
      id: 1,
      name: "Pop",
      image: "https://i.scdn.co/image/ab67fb8200005cafa862ab80dd85682b37c4e768",
      backgroundColor: "#148a08",
    },
    {
      id: 2,
      name: "Hip-Hop",
      image: "https://i.scdn.co/image/ab67fb8200005caf7e11c8413dc33c00740579c1",
      backgroundColor: "#bc5900",
    },
    {
      id: 3,
      name: "R&B",
      image: "https://i.scdn.co/image/ab67fb8200005cafbe6a6e705e1a71117c2d0c2c",
      backgroundColor: "#dc148c",
    },
    {
      id: 4,
      name: "Charts",
      image:
        "https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg",
      backgroundColor: "#8D67AB",
    },
    {
      id: 5,
      name: "Workout",
      image: "https://i.scdn.co/image/ab67706f000000029249b35f23fb596b6f006a15",
      backgroundColor: "#777777",
    },
    {
      id: 6,
      name: "Dance/Electronic",
      image: "https://i.scdn.co/image/ab67fb8200005cafdfdaac1cf9574a196ca25196",
      backgroundColor: "#d84000",
    },
    {
      id: 7,
      name: "Mood",
      image: "https://i.scdn.co/image/ab67fb8200005caf271f9d895003c5f5561c1354",
      backgroundColor: "#e1118c",
    },
    {
      id: 8,
      name: "Indie",
      image: "https://i.scdn.co/image/ab67fb8200005cafa1a252e3a815b65778d8c2aa",
      backgroundColor: "#e91429",
    },
    {
      id: 9,
      name: "Discover",
      image: "https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg",
      backgroundColor: "#8D67AB",
    },
    {
      id: 10,
      name: "Latin",
      image: "https://i.scdn.co/image/ab67fb8200005cafa59f90c077c9f618fd0dde30",
      backgroundColor: "#e1118c",
    },
    {
      id: 11,
      name: "Country",
      image: "https://i.scdn.co/image/ab67fb8200005cafc0d2222b4c6441930e1a386e",
      backgroundColor: "#d84000",
    },
    {
      id: 12,
      name: "Rock",
      image: "https://i.scdn.co/image/ab67fb8200005cafae7e69beb88f16969641b53e",
      backgroundColor: "#e91429",
    },
    {
      id: 13,
      name: "K-pop",
      image: "https://i.scdn.co/image/ab67fb8200005caf013ee3c983e6f60bf28bad5a",
      backgroundColor: "#148a08",
    },
    {
      id: 14,
      name: "Chill",
      image: "https://i.scdn.co/image/ab67fb8200005caf47e942f5bea637f4f4760170",
      backgroundColor: "#d84000",
    },
    {
      id: 15,
      name: "Sleep",
      image: "https://i.scdn.co/image/ab67706f00000002b70e0223f544b1faa2e95ed0",
      backgroundColor: "#1E3264",
    },
    {
      id: 16,
      name: "Party",
      image: "https://i.scdn.co/image/ab67fb8200005cafcbf80f8ea695536eace4fd2c",
      backgroundColor: "#537aa1",
    },
    {
      id: 17,
      name: "At Home",
      image: "https://i.scdn.co/image/ab67fb8200005cafe914a07d20cec7a65e2e5dad",
      backgroundColor: "#5179a1",
    },
    {
      id: 18,
      name: "Decades",
      image: "https://i.scdn.co/image/ab67fb8200005caff005a355830c374754d32868",
      backgroundColor: "#ba5d07",
    },
    {
      id: 19,
      name: "Love",
      image: "https://i.scdn.co/image/ab67fb8200005cafb03c6f8e7efca2ae36f41b31",
      backgroundColor: "#e61e32",
    },
    {
      id: 20,
      name: "Metal",
      image: "https://i.scdn.co/image/ab67fb8200005cafefa737b67ec51ec989f5a51d",
      backgroundColor: "#e91429",
    },
    {
      id: 21,
      name: "Jazz",
      image: "https://i.scdn.co/image/ab67fb8200005cafe289743024639ea8f202364d",
      backgroundColor: "#777777",
    },
    {
      id: 22,
      name: "Trending",
      image: "https://i.scdn.co/image/ab67fb8200005caf1867113f5218598847550acd",
      backgroundColor: "#b02897",
    },
    {
      id: 23,
      name: "Wellness",
      image: "https://i.scdn.co/image/ab67fb8200005caf8dec632effd9735fa8aba06e",
      backgroundColor: "#a56752",
    },
    {
      id: 24,
      name: "Classical",
      image: "https://i.scdn.co/image/ab67fb8200005caf12809992dfc5b318892ea07b",
      backgroundColor: "#7d4b32",
    },
    {
      id: 25,
      name: "Anime",
      image: "https://i.scdn.co/image/ab67706f00000002c19c5f13f8b3ff2d73ff00bc",
      backgroundColor: "#e41d63",
    },
    {
      id: 26,
      name: "Folk & Acoustic",
      image: "https://i.scdn.co/image/ab67fb8200005cafcc70a3c2e4c71398708bdc4a",
      backgroundColor: "#bc5900",
    },
    {
      id: 27,
      name: "Focus",
      image: "https://i.scdn.co/image/ab67706f00000002e4eadd417a05b2546e866934",
      backgroundColor: "#503750",
    },
    {
      id: 28,
      name: "Soul",
      image: "https://i.scdn.co/image/ab67fb8200005cafd82e2c83fe100a89e9cbb2a2",
      backgroundColor: "#dc148c",
    },
    {
      id: 29,
      name: "Children & Family",
      image: "https://i.scdn.co/image/ab67fb8200005caf8a04560a209b3f32165ea8a2",
      backgroundColor: "#8d67ab",
    },
    {
      id: 30,
      name: "Gaming",
      image: "https://i.scdn.co/image/ab67fb8200005caf26dd3719e8824756914ae61f",
      backgroundColor: "#e8115b",
    },
    {
      id: 31,
      name: "TV & Films",
      image: "https://i.scdn.co/image/ab67fb8200005cafb4c4523336133ec3c7fd1744",
      backgroundColor: "#af2896",
    },
    {
      id: 32,
      name: "Instrumental",
      image: "https://i.scdn.co/image/ab67706f000000028ed1a5002b96c2ea882541b2",
      backgroundColor: "#537aa1",
    },
    {
      id: 33,
      name: "Punk",
      image: "https://i.scdn.co/image/ab67fb8200005cafb2cdd7a95b0a5444aa15cfb5",
      backgroundColor: "#1e3264",
    },
    {
      id: 34,
      name: "Ambient",
      image: "https://i.scdn.co/image/ab67fb8200005cafa6ee95dc83af715115f40522",
      backgroundColor: "#477d95",
    },
    {
      id: 35,
      name: "Blues",
      image: "https://i.scdn.co/image/ab67fb8200005caff22ac5cab318d550b593ffac",
      backgroundColor: "#b06239",
    },
    {
      id: 36,
      name: "Cooking & Dining",
      image: "https://i.scdn.co/image/ab67fb8200005cafe53d71d0920a4f1f441d803c",
      backgroundColor: "#ba5d07",
    },
    {
      id: 37,
      name: "Alternative",
      image: "https://i.scdn.co/image/ab67fb8200005cafda178a834e4f87371e9fa543",
      backgroundColor: "#e91429",
    },
    {
      id: 38,
      name: "Travel",
      image: "https://i.scdn.co/image/ab67fb8200005caf4b36a2c31432ace68d90c4f2",
      backgroundColor: "#0d72ed",
    },
    {
      id: 39,
      name: "Caribbean",
      image: "https://i.scdn.co/image/ab67fb8200005caf8ba1febbb4f77336b6f9aace",
      backgroundColor: "#0d73ec",
    },
    {
      id: 40,
      name: "Songwriters",
      image: "https://i.scdn.co/image/ab67fb8200005cafb973ab1288f74f333e7e2e22",
      backgroundColor: "#8c1932",
    },
    {
      id: 41,
      name: "Nature & Noise",
      image: "https://i.scdn.co/image/ab67fb8200005cafbbf84e26e69a78883118913c",
      backgroundColor: "#477d95",
    },
    {
      id: 42,
      name: "Funk & Disco",
      image: "https://i.scdn.co/image/ab67fb8200005cafbb0e4ea229824157eee7467d",
      backgroundColor: "#e61e32",
    },
    {
      id: 43,
      name: "League of Legends",
      image: "https://i.scdn.co/image/ab67fb8200005caf2b1ff59a971dd399dea96009",
      backgroundColor: "#148a08",
    },
    {
      id: 44,
      name: "Spotify Singles",
      image: "https://i.scdn.co/image/ab67fb8200005caf14030380532b34badbf0a229",
      backgroundColor: "#777777",
    },
    {
      id: 45,
      name: "Summer",
      image: "https://i.scdn.co/image/ab67fb8200005caf097a46192e6bb67e52cdff60",
      backgroundColor: "#27856a",
    },
    {
      id: 46,
      name: "EQUAL",
      image: "https://i.scdn.co/image/ab67fb8200005caf9ed6e364e8839210dc4dbff7",
      backgroundColor: "#056952",
    },
    {
      id: 47,
      name: "Fresh Finds",
      image: "https://i.scdn.co/image/ab67fb8200005cafcc1499bbb8565f490858c2bc",
      backgroundColor: "#ff0090",
    },
    {
      id: 48,
      name: "RADAR",
      image: "https://i.scdn.co/image/ab67fb8200005cafdb2aa9c7caea42f900721497",
      backgroundColor: "#777777",
    },
  ];

  return (
    <div className="flex flex-col pt-24 px-5">
      <h1 className="text-2xl font-bold">Browse All</h1>
      <div className="grid my-4 gap-4 w-full grid-cols-[repeat(auto-fit,minmax(12rem,1fr))]">
        {categories.map((category) => (
          <Card key={category.id} category={category}></Card>
        ))}
      </div>
    </div>
  );
}
