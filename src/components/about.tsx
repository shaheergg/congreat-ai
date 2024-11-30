import Team from "@/components/team";
import TypingText from "@/components/typing-text";
const About = () => {
  return (
    <div className="space-y-8 h-full py-8">
      <div className="space-y-2">
        <h2 className="font-[700] text-[18px]">About Congreat</h2>
        <TypingText>
          Founded to grant control over our most valuable asset—our home. We are
          committed to driving efficiency, reducing costs, and empowering
          technology in a traditional industry.
        </TypingText>
      </div>
      <div className="space-y-2">
        <h2 className="font-[700] text-[18px]">Congreat Vision</h2>
        <TypingText>
          Optimizing productivity in a traditional industry through rapid,
          data-driven decisions that minimize delays and reduce costs.
        </TypingText>
      </div>{" "}
      <div className="space-y-2">
        <h2 className="font-[700] text-[18px]">Congreat Vision</h2>
        <TypingText>
          Granting full control of the construction process to anyone, anywhere.
        </TypingText>
      </div>
      <Team />
    </div>
  );
};

export default About;
