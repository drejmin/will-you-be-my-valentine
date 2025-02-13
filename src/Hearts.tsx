"use client";
import { useEffect } from "react";
import "./App.css"; // Import global styles

const Hearts = () => {
  useEffect(() => {
    // Prevent duplicate heart container from being created
    if (document.querySelector(".heart-container")) return;

    // Create heart container
    const container = document.createElement("div");
    container.classList.add("heart-container");
    document.body.appendChild(container);

    // Function to create and animate a heart
    const createHeart = () => {
      const heart = document.createElement("div");
      heart.classList.add("heart");

      // Ensure heart starts at the bottom of the screen
      heart.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      heart.style.bottom = `-40px`; // Start slightly off-screen but visible
      heart.style.animationDuration = `${Math.random() * 3 + 3}s`; // Random speed (3-6s)

      container.appendChild(heart);

      // Remove heart after animation ends
      setTimeout(() => {
        heart.remove();
      }, 6000);
    };

    // Start generating hearts every 500ms
    const interval = setInterval(createHeart, 500);

    // Cleanup function when component unmounts
    return () => {
      clearInterval(interval);
      container.remove();
    };
  }, []);

  return null; // No visible UI, just floating hearts
};

export default Hearts;