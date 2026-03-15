import React from 'react';

const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Dark Gradient Base */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D17] via-[#111827] to-[#0B0D17]"></div>

            {/* Glowing Orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
            <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] animate-float"></div>

            {/* Grid Overlay (Optional Tech Vibe) */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            ></div>
        </div>
    );
};

export default AnimatedBackground;
