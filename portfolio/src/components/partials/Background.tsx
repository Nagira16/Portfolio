import Image from "next/image";
import BackgroundUrl from "@/images/Background.jpg";

const BackGround = () => {
  return <Image src={BackgroundUrl} alt="Background" fill={true} />;
};

export default BackGround;
