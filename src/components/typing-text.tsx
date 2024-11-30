import { useTypingEffect } from "@/hooks/use-typing-effect";

const TypingText = ({ children }: { children: string }) => {
  const TIME_PER_LETTER = 10;
  const textToShow = useTypingEffect(children, TIME_PER_LETTER, true);
  return <p>{textToShow}</p>;
};

export default TypingText;
