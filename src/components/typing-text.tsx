import { useEffect, useState } from "react";
import { useTypingEffect } from "@/hooks/use-typing-effect";

const TypingText = ({ children }: { children: string }) => {
  const TIME_PER_LETTER = 2;
  const [showTypingEffect, setShowTypingEffect] = useState(false);
  const { text, done } = useTypingEffect(
    children,
    TIME_PER_LETTER,
    showTypingEffect
  );

  useEffect(() => {
    // Show the actual text typing effect after 2 seconds
    const timer = setTimeout(() => {
      setShowTypingEffect(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center gap-2">
      {/* Blue circle at the front */}

      {/* Typing icon or text */}
      {!showTypingEffect ? (
        <div className="relative px-2 py-2 bg-[#005BEF] rounded-lg flex justify-center items-center">
          {/* Typing dots animation */}
          <div className="flex items-center gap-[2px]">
            {[0, 1, 2].map((index) => (
              <span
                key={index}
                className="h-1.5 w-1.5 bg-white rounded-full animate-[bounce_1.5s_ease-in-out_infinite]"
                style={{
                  animationDelay: `${index * 0.3}s`,
                }}
              ></span>
            ))}
          </div>
        </div>
      ) : (
        <p>
          {text}{" "}
          {!done && (
            <span className="h-4 w-4 rounded-full bg-[#005BEF] inline-block"></span>
          )}
        </p>
      )}
    </div>
  );
};

export default TypingText;
