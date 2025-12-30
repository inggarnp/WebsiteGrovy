'use client';

import { useEffect, useState } from "react";

interface Props {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayAfterTyping?: number;
  delayAfterDeleting?: number;
  className?: string;
}

export default function RotatingTypewriter({
  texts,
  typingSpeed = 100,
  deletingSpeed = 60,
  delayAfterTyping = 900,
  delayAfterDeleting = 400,
  className = "",
}: Props) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];

    if (!deleting && subIndex === currentText.length) {
      const timeout = setTimeout(() => setDeleting(true), delayAfterTyping);
      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex === 0) {
      const timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }, delayAfterDeleting);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    subIndex,
    deleting,
    texts,
    index,
    typingSpeed,
    deletingSpeed,
    delayAfterTyping,
    delayAfterDeleting,
  ]);

  return (
    <span className={className} style={{ display: "inline-block", minWidth: "180px" }}>
      {texts[index].substring(0, subIndex)}
      <span className="cursor">|</span>
      <style>{`
        .cursor {
          display: inline-block;
          margin-left: 2px;
          animation: blink 0.8s infinite;
        }
        @keyframes blink {
          0% { opacity: 1 }
          50% { opacity: 0 }
          100% { opacity: 1 }
        }
      `}</style>
    </span>
  );
}
