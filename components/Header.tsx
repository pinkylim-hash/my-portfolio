"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { navigation, site } from "@/data/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
      const sections = ["home", "identity", "my-story", "work", "exploring", "connect"];
      const current = sections.findLast((id) => {
        const node = document.getElementById(id);
        return node ? node.getBoundingClientRect().top <= window.innerHeight * 0.35 : false;
      });
      if (current) setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} />
      <div className="announcement-bar" aria-hidden="true">
        <span>make it clear</span>
        <span>market · product · growth</span>
        <span>make it grow</span>
      </div>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className={active === item.href.slice(1) ? "active" : ""}>
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#home" className="brand" aria-label="Pinky home">
          PINKY LIN
        </a>
        <a className="talk-button" href={site.resume} download>Download résumé <Download size={15} /></a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="打开菜单">
          {open ? <X /> : <Menu />}
        </button>
      </header>
      <div className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        {navigation.map((item, index) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            <small>0{index + 1}</small>{item.label}
          </a>
        ))}
        <p>Brand growth · AI product · Content</p>
      </div>
    </>
  );
}
