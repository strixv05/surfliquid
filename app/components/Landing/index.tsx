/* eslint-disable @next/next/no-img-element */

import { Marquee } from "./marquee";

const partners = [
    { name: "Morpho", logo: "/loop/morpho.png", height: "sm:h-5 h-4" },
    { name: "aave", logo: "/loop/aave.png", height: "sm:h-5 h-4" },
    { name: "Compound", logo: "/loop/compound.png", height: "sm:h-8 h-5" },
    { name: "Seamless", logo: "/loop/seamless.png", height: "sm:h-8 h-5" },
    { name: "moonwell", logo: "/loop/moonwell.png", height: "sm:h-8 h-5" },
    { name: "Sky", logo: "/loop/sky.png", height: "sm:h-8 h-5" },
    { name: "Euler", logo: "/loop/euler.png", height: "sm:h-5 h-4" },
    { name: "PENDLE", logo: "/loop/pendle.png", height: "sm:h-8 h-5" },
    { name: "FLUID", logo: "/loop/fluid.png", height: "sm:h-5 h-4" },
];

const Landing = () => {
    return (
        <div className="relative min-h-screen flex flex-col justify-between bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 overflow-hidden">
            {/* Wavy background overlay (placeholder) */}
            <div className="absolute inset-0 z-0">
                <img src="/landingBg.png" alt="Background" className="object-cover h-full w-full" />
            </div>

            {/* Top bar */}
            <header className="relative z-10 flex justify-between items-center sm:px-10 px-4 pt-8">
                <div className="flex items-center gap-3">
                    {/* Logo placeholder */}
                    <img src="/logo.png" alt="Logo" className="w-10 h-10" />
                    <span className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#acacac] via-white to-[#acacac] font-bold tracking-wide">SURFLIQUID</span>
                </div>
                <div className="flex gap-3">
                    {/* Close icon */}
                    <button className="rounded-lg hover:bg-white/20 transition-all duration-300 cursor-pointer">
                        <img src="/twitter.png" alt="close" className="w-10 h-10" />
                    </button>
                    {/* Copy icon */}
                    <button className="rounded-lg hover:bg-white/20 transition-all duration-300 cursor-pointer">
                        <img src="/t&c.png" alt="terms and conditions" className="w-10 h-10" />
                    </button>
                </div>
            </header>

            {/* Center content */}
            <main className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-4">
                <div
                    className="w-full h-full absolute top-0 left-0 -z-10"
                    style={{
                        background: "radial-gradient(circle, rgba(255, 255, 255, 0.2) 4%, transparent 30%)",
                    }}
                ></div>
                <h1 className="text-6xl md:text-8xl font-bold font-Lato text-transparent bg-clip-text bg-gradient-to-r from-[#898989] via-white to-[#898989] drop-shadow-lg mb-6" style={{ letterSpacing: "0.02em" }}>
                    SURFLIQUID
                </h1>
                <p className="text-lg md:text-2xl mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#bebebe] via-white to-[#bebebe] font-medium">Autonomous Yield Generation Across DeFi</p>
                <button className="bg-gradient-to-r from-[#f8b966] to-[#f3aa4b] text-gray-900 font-semibold px-8 py-3 rounded-full text-lg shadow-lg mb-12 cursor-pointer hover:scale-105 transition-all duration-300">Get Early Access</button>
            </main>

            {/* Partner bar */}
            <div className="relative z-10 w-full bg-white/10 backdrop-blur-md sm:py-8 py-4 ring-1 ring-white/20 flex items-center justify-center mb-12">
                <div className="flex sm:flex-nowrap flex-wrap justify-between w-full overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:20s] sm:[--gap:3.4rem] [--gap:1.9rem]">
                        {partners.map((p) => (
                            <div key={p.name} className="flex items-center">
                                <img src={p.logo} alt={p.name} className={`object-contain w-fit ${p.height}`} />
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Landing;
