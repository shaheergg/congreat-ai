import HeroSection from "@/components/her-section";
import AppLayout from "@/layouts/app-layout";
const Chat = () => {
  return (
    <div>
      <AppLayout>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <HeroSection />
          <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div>
      </AppLayout>
    </div>
  );
};

export default Chat;
