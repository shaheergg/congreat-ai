import CongreatIcon from "@/assets/congreat-icon.png";
import { useIsMobile } from "@/hooks/use-mobile";
import useChatStateStore from "@/store/chatState";

type SuggestionType = {
  id: number;
  name: string;
};

type SuggestionListPropsType = {
  suggestions: SuggestionType[];
};

const SuggestionsList = ({ suggestions }: SuggestionListPropsType) => {
  const setChatState = useChatStateStore(
    (state: unknown) =>
      (state as { setChatState: (chatState: string) => void }).setChatState
  );
  const setMessage = useChatStateStore(
    (state: unknown) =>
      (state as { setMessage: (message: string) => void }).setMessage
  );
  const isMobile = useIsMobile();
  const handleSubmit = (suggestion: SuggestionType) => {
    setChatState(suggestion.name);
    setMessage(suggestion.name);
  };
  return (
    <>
      <div className="px-4 space-y-2 h-full flex flex-col justify-end">
        {!isMobile && (
          <p className="text-[18px] pb-8">
            Manage any detail from the{" "}
            <span className="font-semibold">Cockpit</span>!
          </p>
        )}
        {suggestions.map((suggestion) => {
          return (
            <button
              onClick={() => handleSubmit(suggestion)}
              key={suggestion.id}
              style={{
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              }}
              className="border border-[#D4D4D8] max-w-fit px-3 py-1 rounded-full text-[#929095CC] text-[14px] flex items-center justify-between"
            >
              <img src={CongreatIcon} alt="congreat icon" />
              {suggestion.name}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default SuggestionsList;
