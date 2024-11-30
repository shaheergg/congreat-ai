import CongreatIcon from "@/assets/congreat-icon-light.png";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import CongreatLogo from "@/assets/congreatai.png";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import useChatStateStore from "@/store/chatState";

const LoginPage = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const goBack = () => {
    navigate(-1);
  };
  const setChatState = useChatStateStore(
    (state: unknown) =>
      (state as { setChatState: (chatState: string) => void }).setChatState
  );
  const goToContact = () => {
    setChatState("Contact");
    navigate("/");
  };
  return (
    <div className="min-h-screen flex items-center">
      <div className="flex-1 h-full py-4 px-8">
        <div className="p-4 flex items-center">
          {!isMobile && (
            <Button
              onClick={goBack}
              variant={"outline"}
              className="text-primary rounded-full"
            >
              <ChevronLeft size={24} />
              Back
            </Button>
          )}
        </div>
        <div className="flex items-center flex-col justify-center pt-4 space-y-8">
          <div>
            <Link to={"/"}>
              <img className="h-8" src={CongreatLogo} alt="Congreat Logo" />
            </Link>
          </div>
          <div>
            <h2 className="text-[32px]">Login</h2>
          </div>
          <div className="max-w-sm space-y-4 w-full mx-auto">
            <form className="space-y-4">
              <Input type="email" required placeholder="Email" />
              <Input type="password" required placeholder="Password" />
              <Button type="submit" className="w-full">
                Login
              </Button>
              {isMobile && (
                <Button
                  onClick={goBack}
                  variant={"outline"}
                  type="button"
                  className="w-full text-primary rounded-full"
                >
                  <ChevronLeft size={24} />
                  Back
                </Button>
              )}
            </form>
            <Separator className="my-4"></Separator>
            <div className="w-full space-y-2">
              <Button
                size={"lg"}
                className="w-full bg-white"
                variant={"outline"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  className="mr-4"
                  viewBox="0 0 128 128"
                >
                  <path
                    fill="#fff"
                    d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.3 74.3 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.2 36.2 0 0 1-13.93 5.5a41.3 41.3 0 0 1-15.1 0A37.2 37.2 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.3 38.3 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.3 34.3 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.2 61.2 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38"
                  />
                  <path
                    fill="#e33629"
                    d="M44.59 4.21a64 64 0 0 1 42.61.37a61.2 61.2 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.3 34.3 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21"
                  />
                  <path
                    fill="#f8bd00"
                    d="M3.26 51.5a63 63 0 0 1 5.5-15.9l20.73 16.09a38.3 38.3 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9"
                  />
                  <path
                    fill="#587dbd"
                    d="M65.27 52.15h59.52a74.3 74.3 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68"
                  />
                  <path
                    fill="#319f43"
                    d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.2 37.2 0 0 0 14.08 6.08a41.3 41.3 0 0 0 15.1 0a36.2 36.2 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.7 63.7 0 0 1 8.75 92.4"
                  />
                </svg>
                <span className=""> Login with Google</span>
              </Button>
              <Button
                size={"lg"}
                className="w-full bg-white"
                variant={"outline"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 32 32"
                  className="mr-4"
                >
                  <path
                    fill="#0072c6"
                    d="M19.484 7.937v5.477l1.916 1.205a.5.5 0 0 0 .21 0l8.238-5.554a1.174 1.174 0 0 0-.959-1.128Z"
                  />
                  <path
                    fill="#0072c6"
                    d="m19.484 15.457l1.747 1.2a.52.52 0 0 0 .543 0c-.3.181 8.073-5.378 8.073-5.378v10.066a1.408 1.408 0 0 1-1.49 1.555h-8.874zm-9.044-2.525a1.61 1.61 0 0 0-1.42.838a4.13 4.13 0 0 0-.526 2.218A4.05 4.05 0 0 0 9.02 18.2a1.6 1.6 0 0 0 2.771.022a4 4 0 0 0 .515-2.2a4.37 4.37 0 0 0-.5-2.281a1.54 1.54 0 0 0-1.366-.809"
                  />
                  <path
                    fill="#0072c6"
                    d="M2.153 5.155v21.427L18.453 30V2Zm10.908 14.336a3.23 3.23 0 0 1-2.7 1.361a3.19 3.19 0 0 1-2.64-1.318A5.46 5.46 0 0 1 6.706 16.1a5.87 5.87 0 0 1 1.036-3.616a3.27 3.27 0 0 1 2.744-1.384a3.12 3.12 0 0 1 2.61 1.321a5.64 5.64 0 0 1 1 3.484a5.76 5.76 0 0 1-1.035 3.586"
                  />
                </svg>
                <span className=""> Login with Microsoft</span>
              </Button>
            </div>
            <div>
              <p className="text-[#92909599]">
                Not our client?{" "}
                <Button
                  onClick={goToContact}
                  variant={"link"}
                  className="px-1 font-semibold text-primary underline"
                >
                  Contact Us
                </Button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 h-screen md:flex bg-primary hidden items-center justify-center">
        <div className="flex flex-col items-center gap-4 justify-center">
          <h2 className="text-white leading-[51px] text-[36px] max-w-xs font-light text-center">
            Manage any detail from the{" "}
            <span className="font-[700]">cockpit!</span>
          </h2>
          <img src={CongreatIcon} alt="congreat icon" className="h-12 w-auto" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
