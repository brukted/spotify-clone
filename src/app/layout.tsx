import { Urbanist } from "next/font/google";
import Header from "./components/header";
import SideBar from "./components/sidebar/side-bar";
import "./globals.css";
import AuthContext from "./components/auth-context";
import PlayerBar from "./components/player-bar";
import { Providers } from "./providers";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify Clone",
  description: "A Spotify clone built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AuthContext>
            <main className="grid grid-cols-[auto_1fr] grid-rows-1 h-screen items-stretch justify-between p-2 pb-0 gap-2">
              <SideBar></SideBar>
              <section className="bg-[#121212] flex-grow rounded-lg grid grid-cols-1 grid-flow-row relative overflow-clip w-full h-full">
                <Header></Header>
                <div className="overflow-scroll">{children}</div>
              </section>
              <PlayerBar></PlayerBar>
            </main>
          </AuthContext>
        </Providers>
      </body>
    </html>
  );
}
