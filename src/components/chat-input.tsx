import { Button } from "@/components/ui/button";
import useChatStateStore from "@/store/chatState";
import { ExternalLink, Search } from "lucide-react";

const ChatInput = () => {
  const chatState = useChatStateStore(
    (state: unknown) => (state as { chatState: string }).chatState
  );
  return (
    <div className="py-4 bg-white space-y-4">
      <div className="relative">
        <input
          type="text"
          value={chatState === "none" ? "" : chatState}
          className="w-full bg-gray-100 border border-gray-300 rounded-full px-4 outline-none focus:outline-primary py-2"
          placeholder="Ask anything about congreat!"
        />
        <Button
          size={"icon"}
          className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full"
        >
          <Search size={24} />
        </Button>
      </div>
      <div className="flex text-sm text-gray-500 items-center justify-center">
        Read our{" "}
        <a href="#" className="underline flex items-center gap-2">
          <span className="ml-2">Terms and conditions</span>
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default ChatInput;
