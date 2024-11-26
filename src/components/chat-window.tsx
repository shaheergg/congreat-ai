import Contact from "@/components/contact";
import SuggestionsList from "@/components/suggestion-list";
import Team from "@/components/team";
import CongreatPlatform from "@/components/congreat-platform";
import Terms from "@/components/terms";
import About from "@/components/about";

type SuggestionType = {
  id: number;
  name: string;
};

type ChatWindowPropsType = {
  chatState: string;
  suggestions: SuggestionType[];
};

const ChatWindow = ({ chatState, suggestions }: ChatWindowPropsType) => {
  return (
    <div className="h-[65vh] overflow-auto py-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 flex flex-col">
      {chatState === "Contact" && <Contact />}
      {chatState === "Terms Of Use" && <Terms />}
      {chatState === "Congreat Platform" && <CongreatPlatform />}
      {chatState === "Our Team" && <Team />}
      {chatState === "About Congreat" && <About />}
      {chatState === "none" && <SuggestionsList suggestions={suggestions} />}
    </div>
  );
};

export default ChatWindow;
