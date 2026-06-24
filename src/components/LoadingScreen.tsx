import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const lines = [
  "$ initializing portfolio...",
  "$ loading 10+ years of experience...",
  "$ compiling witty one-liners...",
  "$ deploying awesomeness...",
  "> ready.",
];

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [typingText, setTypingText] = useState("");

  useEffect(() => {
    if (currentLine >= lines.length) {
      // All lines typed — fade out
      const timer = setTimeout(() => {
        gsap.to(containerRef.current, {
          opacity: 0,
          y: -30,
          duration: 0.6,
          ease: "power3.inOut",
          onComplete,
        });
      }, 400);
      return () => clearTimeout(timer);
    }

    const line = lines[currentLine];
    if (currentChar < line.length) {
      const speed = currentLine === lines.length - 1 ? 30 : 18;
      const timer = setTimeout(() => {
        setTypingText((prev) => prev + line[currentChar]);
        setCurrentChar((c) => c + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else {
      // Line complete
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, typingText]);
        setTypingText("");
        setCurrentChar(0);
        setCurrentLine((l) => l + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [currentLine, currentChar, typingText, onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[10000] bg-background flex items-center justify-center"
    >
      <div className="font-mono text-sm md:text-base max-w-lg w-full px-8 space-y-2">
        {displayedLines.map((line, i) => (
          <p
            key={i}
            className={
              line.startsWith(">")
                ? "text-primary font-bold"
                : "text-muted-foreground"
            }
          >
            {line}
          </p>
        ))}
        {currentLine < lines.length && (
          <p
            className={
              lines[currentLine].startsWith(">")
                ? "text-primary font-bold"
                : "text-foreground"
            }
          >
            {typingText}
            <span className="inline-block w-2.5 h-4 bg-primary ml-0.5 animate-pulse-glow align-middle" />
          </p>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;
