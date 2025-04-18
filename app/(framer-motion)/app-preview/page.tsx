"use client";

import { useEffect, useState, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { motion, AnimatePresence } from "motion/react";
import "./styles.css";

export default function SharedLayout() {
  const [activeGame, setActiveGame] = useState<Game | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  // @ts-expect-error - Type mismatch is safe in this case as we're only using the ref for click detection
  useOnClickOutside(ref, () => setActiveGame(null));

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveGame(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      {activeGame ? (
        <>
          <AnimatePresence>
            <motion.div
              className="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </AnimatePresence>
          <AnimatePresence>
            <div className="active-game" style={{ borderRadius: 12 }}>
              <motion.div
                className="inner bg-base-100 border border-base-200"
                ref={ref}
                style={{ borderRadius: 12 }}
                layoutId={`${activeGame.title}-game`}
              >
                <div className="header">
                  <motion.img
                    height={56}
                    width={56}
                    alt=""
                    src={activeGame.image}
                    style={{ borderRadius: 12 }}
                    layoutId={`${activeGame.title}-image`}
                  />
                  <div className="header-inner">
                    <div className="content-wrapper">
                      <motion.h2
                        className="game-title"
                        layoutId={`${activeGame.title}-title`}
                      >
                        {activeGame.title}
                      </motion.h2>
                      <motion.p
                        className="game-description"
                        layoutId={`${activeGame.title}-description`}
                      >
                        {activeGame.description}
                      </motion.p>
                    </div>
                    <motion.button
                      className="button"
                      layoutId={`${activeGame.title}-button`}
                    >
                      Get
                    </motion.button>
                  </div>
                </div>
                <p className="long-description">{activeGame.longDescription}</p>
              </motion.div>
            </div>
          </AnimatePresence>
        </>
      ) : null}
      <ul className="list">
        {GAMES.map((game) => (
          <motion.li
            key={game.title}
            onClick={() => setActiveGame(game)}
            style={{ borderRadius: 8 }}
            layoutId={`${game.title}-game`}
            className="bg-base-100"
          >
            <motion.img
              height={56}
              width={56}
              alt=""
              src={game.image}
              style={{ borderRadius: 12 }}
              layoutId={`${game.title}-image`}
            />
            <div className="game-wrapper border-b border-base-200">
              <div className="content-wrapper">
                <motion.h2
                  className="game-title"
                  layoutId={`${game.title}-title`}
                >
                  {game.title}
                </motion.h2>
                <motion.p
                  className="game-description"
                  layoutId={`${game.title}-description`}
                >
                  {game.description}
                </motion.p>
              </div>
              <motion.button
                className="button"
                layoutId={`${game.title}-button`}
              >
                Get
              </motion.button>
            </div>
          </motion.li>
        ))}
      </ul>
    </>
  );
}

type Game = {
  title: string;
  description: string;
  longDescription: string;
  image: string;
};
const GAMES: Game[] = [
  {
    title: "The Oddysey",
    description: "Explore unknown galaxies.",
    longDescription:
      "Throughout their journey, players will encounter diverse alien races, each with their own unique cultures and technologies. Engage in thrilling space combat, negotiate complex diplomatic relations, and make critical decisions that affect the balance of power in the galaxy.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/space.png",
  },
  {
    title: "Angry Rabbits",
    description: "They are coming for you.",
    longDescription:
      "The rabbits are angry and they are coming for you. You have to defend yourself with your carrot gun. The game is not simple, you have to be fast and accurate to survive.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/rabbit.png",
  },
  {
    title: "Ghost town",
    description: "Find the ghosts.",
    longDescription:
      "You are in a ghost town and you have to find the ghosts. But be careful, they are dangerous.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/ghost.webp",
  },
  {
    title: "Pirates in the jungle",
    description: "Find the treasure.",
    longDescription:
      "You are a pirate and you have to find the treasure in the jungle. But be careful, there are traps and wild animals.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/pirate.png",
  },

  {
    title: "Lost in the mountains",
    description: "Find your way home.",
    longDescription:
      "You are lost in the mountains and you have to find your way home. But be careful, there are dangerous animals and you can get lost.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/boy.webp",
  },
];
