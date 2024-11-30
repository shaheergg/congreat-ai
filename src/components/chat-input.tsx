import useChatStateStore from "@/store/chatState";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

const ChatInput = () => {
  const message = useChatStateStore(
    (state: unknown) => (state as { message: string }).message
  );
  const [previousValue, setPreviousValue] = useState(message);

  useEffect(() => {
    setPreviousValue(message);
  }, [message]);

  const setMessage = useChatStateStore(
    (state: unknown) =>
      (state as { setMessage: (value: string) => void }).setMessage
  );
  const setChatState = useChatStateStore(
    (state: unknown) =>
      (state as { setChatState: (value: string) => void }).setChatState
  );
  const handelInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue.length < previousValue.length) {
      setChatState("none");
    }
    setMessage(newValue);
  };
  const handleClear = () => {
    setChatState("none");
    setMessage("");
  };
  const handleSubmit = () => {
    if (message.trim() === "") setChatState("none");
    else setChatState(message);
  };
  return (
    <div className="py-4 bg-white space-y-4">
      <div className="relative">
        <input
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
          type="text"
          value={message}
          onChange={(e) => handelInputChange(e)}
          className="w-full bg-gray-100 border border-gray-300 rounded-full px-4 outline-none focus:outline-primary py-2"
          placeholder="Ask anything about congreat!"
        />
        <div className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center space-x-2">
          {message && (
            <Button
              variant={"link"}
              className="rounded-full text-[#92909599] underline"
              onClick={handleClear}
            >
              Clear
            </Button>
          )}
          <Button
            size={"icon"}
            className="rounded-full"
            onClick={() => {
              handleSubmit();
            }}
          >
            <Search size={24} />
          </Button>
        </div>
      </div>
      <div className="flex text-sm text-gray-500 items-center justify-center">
        Read our{" "}
        <button
          onClick={() => {
            setMessage("Terms Of Use");
            setChatState("Terms Of Use");
          }}
          className="underline flex items-center gap-2"
        >
          <span className="ml-2">Terms and conditions</span>
          <ExternalLink size={16} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
