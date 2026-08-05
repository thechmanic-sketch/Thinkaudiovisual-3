import { asset } from "@/lib/asset";
import Parallax from "@/components/Parallax";

export default function HeroVideo() {
  return (
    <div className="absolute inset-0 -z-0 overflow-hidden">
      <Parallax className="h-full w-full" strength={12}>
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={asset("/media/video/hero.mp4")} type="video/mp4" />
        </video>
      </Parallax>
    </div>
  );
}
