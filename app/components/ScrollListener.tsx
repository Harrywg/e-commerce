"use client";
import { useEffect } from "react";
export default function ScrollListener() {
  useEffect(() => {
    const header = document.getElementsByTagName("header")[0];
    const handleScroll = () => {
      if (window.scrollY === 0) {
        header.classList.remove("scroll");
      } else {
        header.classList.add("scroll");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return <></>;
}
