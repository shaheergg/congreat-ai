import ChatInput from "@/components/chat-input";
import HeroSection from "@/components/hero-section";
import AppLayout from "@/layouts/app-layout";
import useChatStateStore from "@/store/chatState";
import ChatWindow from "@/components/chat-window";

const Chat = () => {
  const suggestions = [
    { id: 1, name: "About Congreat" },
    { id: 2, name: "Our Team" },
    { id: 3, name: "Congreat Platform" },
    { id: 4, name: "Who we serve?" },
    { id: 5, name: "Contact" },
    { id: 5, name: "Terms Of Use" },
  ];
  const chatState = useChatStateStore(
    (state: unknown) => (state as { chatState: string }).chatState
  );
  return (
    <div>
      <AppLayout>
        <div className="flex flex-1 flex-col gap-4 md:px-20 py-4 px-8">
          <HeroSection />
          <div className="flex flex-col bg-white shadow px-4 md:px-20 border rounded-xl">
            <div className="w-full max-w-3xl mx-auto">
              <ChatWindow suggestions={suggestions} chatState={chatState} />
              <div className="sticky bottom-0 ">
                <ChatInput />
              </div>
            </div>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default Chat;
