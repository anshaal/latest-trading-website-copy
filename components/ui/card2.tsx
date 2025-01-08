
import React from "react";

interface CardProps {
    topLeftGradient: string; // URL for the top-right gradient image
    bottomRightGradient: string; // URL for the bottom-left gradient image
    header1: string; // Main header text
    topic: string; // Sub-header text
    description: string; // Content description
    buttonLabel: string; // Button text
    imgSrc: string; // Image source for the chart
}

const Card2: React.FC<CardProps> = ({
    topLeftGradient,
    bottomRightGradient,
    header1,
    topic,
    description,
    buttonLabel,
    imgSrc
}) => {
    return (
        <div className="relative w-full max-w-6xl rounded-3xl overflow-hidden bg-gradient-to-br from-navy-900 via-slate-900 to-cyan-900 p-8 md:p-12 border border-slate-500">
            {/* Gradient Border Images */}
            <div
                className="absolute bottom-0 right-0 w-[1700px] h-[1700px] bg-contain bg-no-repeat bg-bottom-left pointer-events-none"
                style={{
                    backgroundImage: `url('${bottomRightGradient}')`
                }}
            />
            <div
                className="absolute top-0 left-0 w-[1700px] h-[1700px] bg-contain bg-no-repeat bg-top-right pointer-events-none"
                style={{
                    backgroundImage: `url('${topLeftGradient}')`
                }}
            />

            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
                {/* Chart Image Section */}
                <div className="rounded-xl overflow-hidden bg-slate-900/50 aspect-video">
                    <img
                        src={imgSrc}
                        alt="Trading chart"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content Section */}
                <div className="space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-semibold">
                                {topic}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            {header1}
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            {description}
                        </p>
                    </div>

                    <button className="group inline-flex items-center space-x-2 bg-slate-800/50 hover:bg-slate-800 text-white px-6 py-3 rounded-full transition-all duration-200">
                        <span>{buttonLabel}</span>
                        <svg
                            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card2;
