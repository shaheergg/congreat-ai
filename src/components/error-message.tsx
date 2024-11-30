import { MessageCircleWarningIcon } from "lucide-react";

const ErrorMessage = () => {
  return (
    <div className="w-full h-full text-xl gap-4 p-4 rounded-md text-[#2B2E32CC] flex items-center justify-center">
      <MessageCircleWarningIcon size={20} />
      <h2>Ohh, There was an error!</h2>
    </div>
  );
};

export default ErrorMessage;
