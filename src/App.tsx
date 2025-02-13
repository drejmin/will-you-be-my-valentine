"use client";
import { useState,  } from "react";
import './App.css';
import Hearts from './Hearts'

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  // useEffect(() => {
  //   if (document.querySelector(".heart-container")) return;

  //   const container = document.createElement("div");
  //   container.classList.add("heart-container");
  //   document.body.appendChild(container);

  //   const createHeart = () => {
  //     const heart = document.createElement("div");
  //     heart.classList.add("heart");
  //     heart.style.left = `${Math.random() * 100}vw`; // Random X position
  //     heart.style.animationDuration = `${Math.random() * 3 + 3}s`; // Random speed (3-6s)

  //     container.appendChild(heart);

  //     setTimeout(() => {
  //       heart.remove();
  //     }, 6000); // Remove after animation
  //   };

  //   const interval = setInterval(createHeart, 500); // Generate hearts every 0.5s

  //   return () => {
  //     clearInterval(interval);
  //     container.remove();
  //   };
  // }, []);

  const handleNoClick = () => {
    if (noCount < 20) {
      setNoCount((prev) => prev + 1);
    }
  };

  const getNoButtonText = () => {
    const phrases = [
      "No?...Noooo? Really...ok",
      "Are you sure?",
      "What if I asked really nicely?",
      "Still no? Be real Nae",
      "I'll get you flowers",
      "I'll make you normal cookies",
      "5 coupons for hold yous",
      "Now you're just being stubborn",
      "----_________----",
      "You're extra",
      "Imma leave",
      "leaving",
      ".",
      ".",
      ".",
      "I'm asking nicely",
      "Collective sigh of all my ancestors",
      "Your next answer better be yes",
      "I can't believe you",
      "I'm done talking",
      ".",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      <Hearts/>
      {yesPressed ? (
        <>
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="Happy Bear"
          />
          <div className="my-4 text-4xl font-bold">
            WOOOOOO!!! I love you Babe!! ;))
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="Cute Bear with Roses"
          />
          <h1 className="my-4 text-4xl text-center">
            Shanae Latrice Fields-Minor, will you be my Valentine?
          </h1>
          <div className="flex items-center">
            <button
              className="mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className={`rounded px-4 py-2 font-bold text-white ${
                noCount >= 20 ? "bg-gray-400 cursor-not-allowed" : "bg-red-500 hover:bg-red-700"
              }`}
              disabled={noCount >= 20}
            >
              {noCount >= 20 ? "Well now you have no choice 😈" : noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}