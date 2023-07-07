"use client";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function LoginButton() {
  const { data: session, status } = useSession();

  return (
    <button
      onClick={() => {
        signIn("spotify", { callbackUrl: "/" });
      }}
      className={
        "bg-white rounded-full h-8 text-black font-bold text-center text-sm px-4 py-1 hover:scale-105 transition ease-in-out " +
        (status != "authenticated" ? "" : "hidden")
      }
    >
      Log in
    </button>
  );
}
