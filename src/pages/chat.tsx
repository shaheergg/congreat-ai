import ChatInput from "@/components/chat-input";
import HeroSection from "@/components/hero-section";
import SuggestionsList from "@/components/suggestion-list";
import AppLayout from "@/layouts/app-layout";
const Chat = () => {
  const suggestions = [
    { id: 1, name: "About Congreat" },
    { id: 2, name: "Our Team" },
    { id: 3, name: "Congreat Platform" },
    { id: 4, name: "Who we serve?" },
    { id: 5, name: "Contact" },
    { id: 5, name: "Terms Of Use" },
  ];
  return (
    <div>
      <AppLayout>
        <div className="flex flex-1 flex-col gap-4 py-4 md:px-20 px-8">
          <HeroSection />
          <div className="flex flex-col bg-white shadow px-4 md:px-20 border rounded-xl">
            <div className="h-[65vh] overflow-auto py-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 flex flex-col">
              <SuggestionsList suggestions={suggestions} />
            </div>
            <div className="sticky bottom-0 bg-white">
              <ChatInput />
            </div>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default Chat;
