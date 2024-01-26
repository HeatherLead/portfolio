"use client";
import React, { useEffect } from "react";
class InteractiveUI {
  container: HTMLElement;
  textContainer: HTMLElement;
  items: NodeListOf<HTMLElement>;
  scale: number;

  constructor(containerSelector: string) {
    this.container = document.querySelector(containerSelector) as HTMLElement;
    this.textContainer = this.container.querySelector(
      ".text-container"
    ) as HTMLElement;
    this.items = this.textContainer.querySelectorAll("p");
    this.scale = 1;

    this.container.addEventListener("wheel", (event) => this.scroll(event));
  }

  scroll(event: WheelEvent) {
    event.preventDefault();

    const containerHeight = this.textContainer.clientHeight;
    const maxScroll = 0.5 * containerHeight;

    this.scale += event.deltaY * 0.1;
    this.scale = Math.min(Math.max(1, this.scale), maxScroll);

    let scroll = this.scale + "px";

    this.textContainer.style.transition = "transform 0.5s ease";
    this.textContainer.style.transform = `translateY(-${scroll})`;

    this.items.forEach((item, index) => {
      const yPos = index * 50 - this.scale * 0.5;
      const rotation = yPos * 0.5 + "deg";

      item.style.transition = "transform 0.5s ease";
      item.style.transform = `rotateX(-${rotation}) translateY(${yPos}px)`;
    });
    setTimeout(() => {
      this.textContainer.style.transition = "";
      this.items.forEach((item) => {
        item.style.transition = "";
      });
    }, 20);
  }
}
const Contact = () => {
  useEffect(() => {
    const interactiveUI = new InteractiveUI(".container");
  }, []);
  return (
    <div className="container drop-shadow-lg   w-fit">
      <div className="text-container ">
        <p>
          <a
            className="item github  text-5xl sm:text-8xl font-bold "
            href="https://github.com/HeatherLead"
          >
            GitHub
          </a>
        </p>
        <p>
          <a className="item linkedin  text-5xl sm:text-8xl font-bold " href="">
            LinkedIn
          </a>
        </p>
        <p>
          <a
            className="item twitter  text-5xl sm:text-8xl font-bold "
            href="https://x.com/AyushBanga4350?t=hed8XKeVlJ4PDz-buFzz2g&s=08 "
          >
            Twitter
          </a>
        </p>
        <p>
          <a
            className="item email   text-5xl sm:text-8xl font-bold "
            href="mailto:ayushbangar04@gmail.com"
          >
            Email
          </a>
        </p>

        <p>
          <a
            className="item instagram text-5xl sm:text-8xl font-bold "
            href="https://www.instagram.com/ayushbangar25/"
          >
            Instagram
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
