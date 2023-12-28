import Image from "next/image";
import { Inter } from "next/font/google";
import { Tweet } from "@/components/Tweet";
import { tweets } from "@/data/tweets";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1 className="twitter-title">Web stand</h1>
      {tweets.map((tweet) => {
        return <Tweet key={tweet.id} tweet={tweet} />;
      })}
    </main>
  );
}
