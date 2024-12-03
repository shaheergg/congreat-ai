import Contact from "@/components/contact";
import SuggestionsList from "@/components/suggestion-list";
import CongreatPlatform from "@/components/congreat-platform";
import Terms from "@/components/terms";
import About from "@/components/about";
import { Image } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import ErrorMessage from "@/components/error-message";
import SolutionFor from "@/components/solution-for";
import { ScrollArea } from "@/components/ui/scroll-area";

type SuggestionType = {
  id: number;
  name: string;
};

type ChatWindowPropsType = {
  chatState: string;
  suggestions: SuggestionType[];
};

const ChatWindow = ({ chatState, suggestions }: ChatWindowPropsType) => {
  const isMobile = useIsMobile();
  return (
    <ScrollArea
      className={`${
        chatState === "none" ? "md:h-[65vh] h-[40vh]" : "h-screen"
      } p-4 flex flex-col`}
    >
      {chatState === "Contact" ? (
        <Contact />
      ) : chatState === "Terms Of Use" ? (
        <Terms />
      ) : chatState === "Congreat Platform" ? (
        <CongreatPlatform />
      ) : chatState === "About Congreat" ? (
        <About />
      ) : chatState === "Solution for" ? (
        <SolutionFor />
      ) : chatState === "none" ? (
        <>
          {!isMobile && (
            <div className="space-y-4 py-4">
              <marquee behavior="" direction="right">
                {" "}
                <span className="text-[#92909599] text-[18px]">Connectors</span>
              </marquee>
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="text-[#92909599]">
                  <Image size={48} />
                </div>
                <div className="text-[#92909599]">
                  <Image size={48} />
                </div>{" "}
                <div className="text-[#92909599]">
                  <Image size={48} />
                </div>{" "}
                <div className="text-[#92909599]">
                  <Image size={48} />
                </div>{" "}
                <div className="text-[#92909599]">
                  <Image size={48} />
                </div>
              </div>
            </div>
          )}
          <SuggestionsList suggestions={suggestions} />
        </>
      ) : (
        <ErrorMessage />
      )}
    </ScrollArea>
  );
};

export default ChatWindow;
