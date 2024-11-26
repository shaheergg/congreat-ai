import VideoPlayer from "@/components/video-player";
import sample from "../assets/sample.mp4";

const CongreatPlatform = () => {
  return (
    <div className="space-y-4 px-4 md:px-0 h-full py-8">
      <VideoPlayer sample={sample} />
      <div className="space-y-2">
        <h2 className="font-[700] text-[18px]">Congreat Platform</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
          quibusdam voluptatum quod facilis distinctio eos, ipsa officia
          obcaecati repellendus est.
        </p>
      </div>{" "}
    </div>
  );
};

export default CongreatPlatform;
