// app/page.tsx (Next.js 13+ with App Router)

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1e1e24]">
      <div className="w-[320px] h-[600px] rounded-3xl bg-[#23232a] p-6 flex flex-col justify-between shadow-[8px_8px_16px_#15151a,-8px_-8px_16px_#2d2d36]">
        {/* Header */}
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            Playlist &ldquo;Relaxation&ldquo;
          </p>
          <h2 className="text-white font-semibold text-lg">Afterglow</h2>
          <p className="text-gray-500 text-xs mt-1">Ambient Mix</p>
        </div>

        {/* Main Circle Control */}
        <div className="relative mx-auto w-40 h-40 rounded-full flex items-center justify-center bg-[#23232a] shadow-[6px_6px_12px_#15151a,-6px_-6px_12px_#2d2d36] transition-all duration-300 hover:shadow-[inset_10px_10px_20px_#15151a,inset_-10px_-10px_20px_#2d2d36] hover:scale-105   ">
          <div className="w-20 h-20 flex items-center justify-center text-cyan-400 text-sm">
            ▓ ▓ ▓ ▓
          </div>
          <div className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#23232a] shadow-[4px_4px_8px_#15151a,-4px_-4px_8px_#2d2d36]" />
        </div>

        {/* Equalizer Slider */}
        <div className="flex flex-col items-center">
          <input
            type="range"
            min="0"
            max="100"
            className="w-48 accent-cyan-400"
          />
          <div className="flex gap-3 mt-3">
            <button className="w-8 h-8 rounded-full bg-[#23232a] shadow-[3px_3px_6px_#15151a,-3px_-3px_6px_#2d2d36] transition-all duration-200 hover:shadow-[5px_5px_10px_#15151a,-5px_-5px_10px_#2d2d36] hover:scale-110" />
            <button className="w-8 h-8 rounded-full bg-[#23232a] shadow-[3px_3px_6px_#15151a,-3px_-3px_6px_#2d2d36] transition-all duration-200 hover:shadow-[5px_5px_10px_#15151a,-5px_-5px_10px_#2d2d36] hover:scale-110" />
            <button className="w-8 h-8 rounded-full bg-[#23232a] shadow-[3px_3px_6px_#15151a,-3px_-3px_6px_#2d2d36] transition-all duration-200 hover:shadow-[5px_5px_10px_#15151a,-5px_-5px_10px_#2d2d36] hover:scale-110" />
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="flex items-center justify-center gap-8">
          <button className="w-14 h-14 rounded-full flex items-center justify-center text-gray-400 text-xl bg-[#23232a] shadow-[6px_6px_12px_#15151a,-6px_-6px_12px_#2d2d36] transition-all duration-300 hover:shadow-[8px_8px_16px_#15151a,-8px_-8px_16px_#2d2d36] hover:scale-110">
            ⏮
          </button>
          <button className="w-16 h-16 rounded-full flex items-center justify-center text-cyan-400 text-2xl bg-[#23232a] shadow-[6px_6px_12px_#15151a,-6px_-6px_12px_#2d2d36] transition-all duration-300 hover:shadow-[8px_8px_16px_#15151a,-8px_-8px_16px_#2d2d36] hover:scale-110">
            ⏯
          </button>
          <button className="w-14 h-14 rounded-full flex items-center justify-center text-gray-400 text-xl bg-[#23232a] shadow-[6px_6px_12px_#15151a,-6px_-6px_12px_#2d2d36] transition-all duration-300 hover:shadow-[8px_8px_16px_#15151a,-8px_-8px_16px_#2d2d36] hover:scale-110">
            ⏭
          </button>
        </div>
      </div>
    </div>
  );
}
