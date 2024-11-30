import TypingText from "@/components/typing-text";

const Terms = () => {
  const text = ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
        necessitatibus minima tenetur exercitationem natus. Omnis vel aspernatur
        nulla delectus distinctio, eaque culpa nihil ut sequi tempore qui,
        voluptate inventore facere.`;
  return (
    <div className="space-y-8 h-full py-8">
      <div className="space-y-6">
        <h2 className="font-[700] text-[18px]">Terms Of Use</h2>
        <TypingText>{text}</TypingText>
        <TypingText>{text}</TypingText>
        <TypingText>{text}</TypingText>
        <TypingText>{text}</TypingText>
      </div>{" "}
    </div>
  );
};

export default Terms;
