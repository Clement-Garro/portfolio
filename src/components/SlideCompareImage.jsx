import React, { useState } from 'react';

export const SlideCompareImage = ({ beforeImage, afterImage, altTextBefore, altTextAfter }) => {
    const [sliderPosition, setSliderPosition] = useState(50); // Percentage of the slider position

    const handleSliderChange = (e) => {
        setSliderPosition(e.target.value);
    };

    return (
        <div className="relative w-full h-96 overflow-hidden">
            {/* Before Image */}
            <div
                className="absolute inset-0"
                style={{ width: `${sliderPosition}%`, overflow: 'hidden' }}
            >
                <img
                    src={beforeImage}
                    alt={altTextBefore}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* After Image */}
            <div
                className="absolute inset-0"
                style={{
                    clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`,
                }}
            >
                <img
                    src={afterImage}
                    alt={altTextAfter}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Divider Line with Slider Button */}
            <div
                className="absolute inset-y-0 z-10 flex items-center"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
                <div className="w-1 h-full bg-white shadow-md"></div>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPosition}
                    onChange={handleSliderChange}
                    className="appearance-none bg-transparent h-6 w-6 rounded-full cursor-pointer"
                    style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 20,
                        WebkitAppearance: 'none',
                        MozAppearance: 'none',
                        outline: 'none',
                        backgroundColor: 'white',
                        border: '2px solid gray',
                    }}
                />
            </div>
        </div>
    );
};

// Usage example:
// <SlideCompareImage
//   beforeImage="/path/to/before.jpg"
//   afterImage="/path/to/after.jpg"
//   altTextBefore="Before Image"
//   altTextAfter="After Image"
// />
