import { asset } from "@/lib/asset";

export default function HeroVideo() {
  return (
    <div className="absolute inset-0 -z-0 overflow-hidden">
      <video
        className="h-full w-full object-cover opacity-45"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={asset("/media/video/hero.mp4")} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/70 to-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,var(--accent-glow-soft),transparent_60%)]" />
    </div>
  );
}
