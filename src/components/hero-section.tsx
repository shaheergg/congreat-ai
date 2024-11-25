import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <div className="px-4 space-y-1">
      <h2 className="text-[24px]">
        Manage any detail from the <span className="font-[700]">cockpit</span> !
      </h2>
      <p className="text-[#71717A] text-[18px]">
        AI streamlining your construction at every step—save up to 25%!
      </p>
      <div className="py-1">{isMobile && <Button>Get a demo</Button>}</div>
    </div>
  );
};

export default HeroSection;
