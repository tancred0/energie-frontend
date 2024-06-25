import { useEffect, useState } from "react";

export default function useObserver() {
  useEffect(() => {
    // wait for sections to be rendered
    const options = {
      root: document,
      rootMargin: "-50% 0px",
      threshold: 0,
    };

    if (document.querySelectorAll("section").length === 0) return;
    
    const observer = new IntersectionObserver(onObserve, options);
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const [highlightedSection, setHighlightedSection] = useState("sec1");

  function onObserve(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const { id } = entry.target;
        setHighlightedSection(id);
      }
    });
  }
  return { highlightedSection };
}
