"use client";

import { useEffect, useState } from "react";

export default function Language({ language }) {
  const [colourText, setColourText] = useState("");

  useEffect(() => {
    switch (language) {
      case "HTML":
        setColourText("text-fem-cyan");
        break;
      case "CSS":
        setColourText("text-fem-blue");
        break;
      case "JS":
        setColourText("text-fem-pink");
        break;
      case "API":
        setColourText("text-fem-lime");
        break;
    }
  }, []);

  return <p className={`font-bold text-lg ${colourText}`}>{language}</p>;
}
