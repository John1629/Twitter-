import Image from "next/image";
import { Inter } from "next/font/google";
import { Tweet } from "@/components/Tweet";
import { Tweet as TweetType } from "@/data/tweets";
import { ChangeEvent, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [tweetText, setTweetText] = useState("");
  const [tweets, setTweets] = useState<TweetType[]>([]);

  const onTweetChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTweetText(e.target.value);
  };

  const onTweet = () => {
    if (tweetText.length === 0) {
      return;
    }
    const tweet: TweetType = {
      id: tweets.length,
      name: "Say2Cups",
      username: "Say2Cups",
      text: tweetText,
      imageUrl:
        "https://wallpapers.com/images/hd/family-guy-stewie-griffin-z8if6xxqftztkwrk.jpg",
    };

    setTweets([...tweets, tweet]);
    setTweetText("");
  };

  return (
    <main>
      <h1 className="twitter-title">Twitter</h1>

      <div className="button-class">
        <input
          value={tweetText}
          className="change-white"
          onChange={onTweetChange}
        />
        <button className="button-blue" onClick={onTweet}>
          Tweet
        </button>
      </div>

      {tweets.map((tweet) => {
        return <Tweet key={tweet.id} tweet={tweet} />;
      })}
    </main>
  );
}
