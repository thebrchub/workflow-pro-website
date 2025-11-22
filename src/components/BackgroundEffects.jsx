export default function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* 1. Top Left "Spotlight" Beam */}
      <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-purple-900/20 blur-[120px] mix-blend-screen" />
      
      {/* 2. Pink Accent Glow (Top Left) */}
      <div className="absolute top-[5%] left-[10%] w-[20vw] h-[20vw] rounded-full bg-pink-600/20 blur-[100px]" />

      {/* 3. Center/Bottom Glow for the "Arc" area */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[50vw] h-[30vw] bg-fuchsia-900/10 blur-[100px] rounded-full" />
      
      {/* 4. Grid Pattern (Optional but common in these designs) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
    </div>
  );
}