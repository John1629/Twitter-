import { Tweet as TweetType } from "@/data/tweets";

interface TweetProps {
  tweet: TweetType;
}

export const Tweet: React.FC<TweetProps> = ({ tweet }) => {
  return (
    <div className="tweet">
      <div className="tweet-header">
        <img
          className="pfp"
          src={
            tweet.imageUrl
              ? tweet.imageUrl
              : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK8AAACUCAMAAADS8YkpAAAAM1BMVEXk5ueutLfr7O3n6eqqsLTh4+S3vL/d4OHU19nKztCnrrHb3d/GysyyuLvY29zR1da/xMYIdtfNAAAEIklEQVR4nO2c2a7jIAxAQ8wSSEj4/68d6KJppxtgYhNNzkul+3RkOWaz7zCcnJycnJycnJycnJyc/MdAglsigySpzLpZaxc7GXX9S6/AMG+LFs7JC84JvWxzr8ajssFLKZ6QwodtGLndXgEI4iNLbzEGY5387CulVR0ZA1j/xTbh9NSNMAxB/NC9JAW35w1Y/W/ZlBS+i5yA7d+a8JmJWzbq2lzZxMYe4SJdITfeUgzWFfkKx1omYCrUjax8wjDnVYZHpFZsvoMu1k3CXAGGJbuQPeIsjzCsVboRwyIM5cl7I7Do2trw8iwbpuZju6HpdQdEeIVcyXUVIrwR6mW5ZmV7wM3EGTxqRDpEAnGAARVeITztqowpZldoSxrgvrZYIQKpr6pe2+5oQ6gLE9pXzJS+Zaegd0jKs2flTvLJ1xL6qi93Zbm+lB8cZq9zh/KYYfCfmxCEvnMDXUGnC2sDXUm3Itef3B5whDuIg/keL754Xcr8HSruoV6h0z1c/T3a+na0/cPR9mdN9r+U8c18wvqCpzxfNDi/BdIDPf58vNCe5zfsB0f8TnSw+51hxCWEJL8/Q95P0j9qoQKsyZ9lYUPoMtyvYy7YJccDEaaksTx615cI2rvUO2BqA8zUF1Pc/HDF8TWZ1GzbiXcOj0DFOY61/wHm8owg3fe+CE+F35yjfLZ4R+EyN3G3qpYtGx00URZcpknW3L0DKvMtmaPr4R2gso73lBcOP4DJ/yhsTlN3EHwFwH5tAfZbdx3hYPV7ZSm07c02AWpaXucDpF+moUPbBAxqtlqm+YtkGn+1nVWvtjfGEcy0RVYDI/dq9ps0ODRe6XuIKFrCYNY0O7RcsTYGeU5R7i3MMYyrDdo/1ISHX6+XyfQR6WihzLZo576uF+nb88s2K8WqPQ7GhiC+TeI8Sjuhg125hjBgNEvMgLL9uhTeh4k+yJD2OLXHeSnDOhBWZYgFNmQmwQdcXEioopzyoDq2f4Psw0phDCZrGCsLv/fxKGbCgkuEZ5ye9iwX0bZZbG9IvVu1yJgirCKoXZZrWHexFZcbteYhTgOl+9iKlMath6BgQvZ//6LtpeWIf4//gdTtCgWosG9wr7QqxrDunAt32uTEOJHIikZ1Aj8JUCCMf5ej1L0I4yI8kupeuqYwwvi2jHLhQ+mihJu0JZcLL7XbH+DQre9MQ/dAVVN1tU1byZ6oegJt0uNbh6yYqObLBlHTew3bftvzDHxxgDltRfH44bgw+5Z9cjWNDW0p++QYa9ndt+jxFt/ei8aVzB/imiPbUNCyOPKHt6glVHUQ3vjF5QaYY9v7huyBEmQvcit8bhNrB9XhQmYJbjBc0YTcRsAGwyttyBzRaDAc1IbcfwmAH75qRF77V4vhtiZkdrn345u5hbj3W7DTRQvC/8UfBdc41lCfqbMAAAAASUVORK5CYII="
          }
          alt="profile"
        />

        <div>
          <p className="twitter-name">{tweet.name}😎</p>
          <p className="twitter-username gray">@{tweet.username}</p>
        </div>
      </div>

      <p className="tweet-text">{tweet.text}</p>
      <p className="gray">10:48 AM · Jul 10, 2020</p>
    </div>
  );
};
