import { Card, CardContent } from "./ui/card";

const AboutCards = () => {
  return (
    <>
      <Card className="mt-[-1.3rem] w-full max-w-sm border border-[#2a2a2a] bg-[#121212] transition-transform duration-300 hover:scale-101 hover:border-purple-500 shadow-md">
        <CardContent className="flex flex-col items-center text-center gap-5 p-6">
          <div className="mt-[-1.6rem] mb-[1rem] w-52 h-52 rounded-full bg-[#1e1e1e] flex items-center justify-center">
            <img
              src="card1.webp"
              alt="Create Shorts"
              className="h-30 w-auto object-contain"
            />
          </div>
          <h3 className="text-2xl font-bold text-white w-[80%] leading-snug">
            Create and Upload Audio Shorts
          </h3>
          <p className="text-sm text-gray-400 w-[80%] leading-relaxed">
            Upload short-form audio content on any topic. Share your unique
            voice with an eager audience.
          </p>
        </CardContent>
      </Card>
      <Card className="mt-[-1.6rem] w-full max-w-sm border border-[#2a2a2a] bg-[#121212] transition-transform duration-300 hover:scale-101 hover:border-purple-500 shadow-md">
        <CardContent className="flex flex-col items-center text-center gap-5 p-6">
          <div className="mt-[-1.6rem] mb-[1rem] w-52 h-52 rounded-full bg-[#1e1e1e] flex items-center justify-center">
            <img
              src="card2.webp"
              alt="Edit Audios"
              className="h-30 w-auto object-contain"
            />
          </div>
          <h3 className="text-2xl font-bold text-white w-[80%] leading-snug">
            Customize and Edit Audios Effortlessly{" "}
          </h3>
          <p className="text-sm text-gray-400 w-[90%] leading-relaxed">
            Crop, trim, and enhance your audios directly on the platform. No
            extra software needed—just record, refine, and publish in seconds.
          </p>
        </CardContent>
      </Card>
      <Card className="mt-[-1.6rem] w-full max-w-sm border border-[#2a2a2a] bg-[#121212] transition-transform duration-300 hover:scale-101 hover:border-purple-500 shadow-md">
        <CardContent className="flex flex-col items-center text-center gap-5 p-6">
          <div className="mt-[-1.6rem] mb-[1rem] w-52 h-52 rounded-full bg-[#1e1e1e] flex items-center justify-center">
            <img
              src="card3.webp"
              alt="Dashboard"
              className="h-30 w-auto object-contain"
            />
          </div>
          <h3 className="text-2xl font-bold text-white w-[100%] leading-snug">
            Track your Performance with our Dashboard{" "}
          </h3>
          <p className="text-sm text-gray-400 w-[100%] leading-relaxed">
            Monitor listens, engagement, and audience insights through an
            intuitive dashboard. Optimize your content strategy with real-time
            data.
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default AboutCards;
