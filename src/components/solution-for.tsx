import CongreatIcon from "@/assets/congreat-icon.png";
import TypingText from "@/components/typing-text";

const Solution = ({ heading, text }: { heading: string; text: string }) => {
  return (
    <div className="space-y-4 flex flex-col">
      <span className="items-center text-[14px] text-[#929095] flex max-w-fit gap-2 px-4 py-1 rounded-full border">
        <img
          className="h-6 mb-1 w-auto"
          src={CongreatIcon}
          alt="congreat-icon"
        />
        <span>{heading}</span>
      </span>
      <div className="px-2 text-[14px]">
        <TypingText>{text}</TypingText>
      </div>
    </div>
  );
};

const SolutionFor = () => {
  const solutions = [
    {
      heading: "Real Estate Developers",
      text: `Congreat provides full project oversight, helping you streamline operations, reduce costs, and ensure timely delivery of your developments.`,
    },
    {
      heading: "Construction Company Managers",
      text: `Congreat enables you to manage multiple projects efficiently, optimize resources, and improve coordination across teams for smoother operations.`,
    },
    {
      heading: "Project Managers and Foremens",
      text: `With Congreat, you can track progress in real time, manage tasks, and ensure your team stays on schedule while minimizing delays and costs.`,
    },
    {
      heading: "Private Builders",
      text: `Congreat simplifies project management, offering tools to control costs, stay organized, and deliver quality results on time.`,
    },
  ];
  return (
    <div className="space-y-4 py-4">
      <div>
        <h2 className="font-[700] text-[18px]">Congreat Solution for</h2>
        <p>
          Granting full control of the construction process to anyone, anywhere.
        </p>
      </div>
      <div className="space-y-4">
        {solutions.map((sol, idx) => {
          return <Solution key={idx} {...sol} />;
        })}
      </div>
    </div>
  );
};

export default SolutionFor;
