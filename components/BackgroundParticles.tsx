import Particles from "./Particles";

export default function BackgroundParticles() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="h-full w-full">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
    </div>
  );
}
