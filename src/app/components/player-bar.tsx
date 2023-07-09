import Image from "next/image";
import {
  Devices,
  Heart,
  MicrophoneStage,
  MonitorPlay,
  Pause,
  PauseCircle,
  PictureInPicture,
  Queue,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  SpeakerHigh,
} from "../components/icons";

export default function PlayerBar() {
  return (
    <section className="w-full bg-black flex h-[4.5rem] col-span-2 p-2">
      <div className="flex gap-4 items-center">
        <Image
          src="https://picsum.photos/200/200?random=2345"
          alt="current song"
          width={100}
          height={100}
          className="h-[3.5rem] w-[3.5rem] object-cover"
        ></Image>
        <div className="flex flex-col justify-center">
          <h1 className="text-white">Sharks</h1>
          <span className="text-neutral-400 text-xs">Imagine Dragon</span>
        </div>
        <Heart weight="bold" size={20} className="text-neutral-400"></Heart>
        <PictureInPicture
          weight="bold"
          size={20}
          className="text-neutral-400"
        ></PictureInPicture>
      </div>
      <div className="flex-grow flex flex-col items-center gap-1">
        <div className="flex items-center gap-4">
          <Shuffle
            weight="fill"
            size={20}
            className="text-neutral-400"
          ></Shuffle>
          <SkipBack
            weight="fill"
            size={20}
            className="text-neutral-400"
          ></SkipBack>
          <PauseCircle
            weight="fill"
            size={40}
            className="text-neutral-50"
          ></PauseCircle>
          <SkipForward
            weight="fill"
            size={20}
            className="text-neutral-400"
          ></SkipForward>
          <Repeat weight="fill" size={20} className="text-neutral-400"></Repeat>
        </div>
        <div className="flex gap-2 items-center w-full max-w-xl">
          <span className="text-neutral-400 text-xs">2:10</span>
          <div className="h-1 from-white via-white via-60% to-neutral-600 bg-gradient-to-r to-60% flex-grow rounded-full"></div>
          <span className="text-neutral-400 text-xs">3:00</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <MonitorPlay
          weight="bold"
          size={20}
          className="text-neutral-400"
        ></MonitorPlay>
        <Queue weight="bold" size={20} className="text-neutral-400"></Queue>
        <MicrophoneStage
          weight="bold"
          size={20}
          className="text-neutral-400"
        ></MicrophoneStage>
        <Devices weight="bold" size={20} className="text-neutral-400"></Devices>
        <div className="flex gap-2 items-center">
          <SpeakerHigh
            weight="bold"
            size={20}
            className="text-neutral-400"
          ></SpeakerHigh>
          <div className="h-1 bg-white w-20 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
