import Chip from "../common/chip";
import { ListDashes, MagnifyingGlass, Plus } from "../icons";
import Tile from "./tile";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

async function getPlaylists() {
  const session = await getServerSession(authOptions);
  return (
    await (
      await fetch("https://api.spotify.com/v1/me/playlists", {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      })
    ).json()
  ).items;
}

async function getArtists() {
  const session = await getServerSession(authOptions);
  return (
    await (
      await fetch("https://api.spotify.com/v1/me/following?type=artist", {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      })
    ).json()
  ).artists.items;
}

export default async function YourLibrary() {
  const playlists = await getPlaylists();
  const artists = await getArtists();
  const items = [...playlists, ...artists];
  items.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));
  return (
    <div className="bg-[#121212] grid grid-cols-1 grid-rows-[auto_1fr] rounded-lg overflow-hidden">
      {/*Header Section*/}
      <div className="flex flex-col shadow-lg">
        <header className="flex w-full justify-between items-center text-neutral-400 px-4 py-2">
          <div className="flex items-center gap-3 hover:text-neutral-100 cursor-pointer px-2 py-1">
            <ListDashes weight="bold" size={20}></ListDashes>
            <span className="font-bold">Your Library</span>
          </div>
          <div className=" w-10 h-10 flex items-center justify-center cursor-pointer hover:text-neutral-100 hover:bg-neutral-800 rounded-full">
            <Plus weight="bold" size={16}></Plus>
          </div>
        </header>
        <div className="flex mx-4 py-2 gap-2 overflow-y-auto">
          <Chip text="Playlists"></Chip>
          <Chip text="Artists"></Chip>
          <Chip text="Albums"></Chip>
          <Chip text="Podcasts"></Chip>
          <Chip text="Podcasts"></Chip>
          <Chip text="Podcasts"></Chip>
          <Chip text="Podcasts"></Chip>
          <Chip text="Podcasts"></Chip>
        </div>
      </div>
      {/*List Section*/}
      <div className="flex overflow-auto flex-col px-2 flex-grow">
        {/*Search Bar*/}
        <div className="flex justify-between px-2 pt-1">
          <button className="p-2 flex items-center justify-center text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 rounded-full">
            <MagnifyingGlass weight="bold" size={16}></MagnifyingGlass>
          </button>
        </div>
        <div className="flex flex-col flex-grow mb-2">
          {items.map((item) => (
            <Tile key={item.id} item={item} isActive={false}></Tile>
          ))}
        </div>
      </div>
    </div>
  );
}
