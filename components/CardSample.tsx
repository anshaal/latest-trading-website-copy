import React from 'react';
import Card from './ui/card';
import Card2 from './ui/card2';

const CardSample = () => {
    return (
        <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-9 p-4 pb-12 bg-black items-center justify-center">
            {/* First row: 1 Card centered */}
            <div className="lg:col-span-2 flex justify-center">
                <Card
                    topRightGradient="https://www.luxalgo.com/images/graphics/top_right_orange_pink_stroke.png"
                    bottomLeftGradient="https://www.luxalgo.com/images/graphics/bottom_left_purple_orange_fade.png"
                    header1="State of the art trading indicators"
                    topic="Pro Toolkits"
                    description="Trade automated price action, advanced signals, and spot reversals with money flow. Our world renowned toolkits replace indicators with simple workflows for your charts."
                    buttonLabel="Level Up Your Charts"
                    imgSrc="https://www.luxalgo.com/images/product/showcases/showcase_1.png"
                    
                />
            </div>

            {/* Second row: 2 Cards side by side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 lg:col-span-2">
                <Card2
                    topLeftGradient="https://www.luxalgo.com/images/graphics/top_left_blue_stroke.png"
                    bottomRightGradient="https://www.luxalgo.com/images/graphics/bottom_right_blue_stroke.png"
                    header1="Easily find high probability setups"
                    topic="Screeners & Alerts"
                    description="Get professional-grade screeners that work seamlessly alongside our toolkits. Filter out the noise and find trades across all of your favorite assets."
                    buttonLabel="Unlock Access"
                    imgSrc="https://www.luxalgo.com/images/product/showcases/showcase_1.png"



                />
                <Card
                    topRightGradient="https://www.luxalgo.com/images/graphics/top_right_orange_pink_stroke.png"
                    bottomLeftGradient="https://www.luxalgo.com/images/graphics/bottom_left_purple_orange_fade.png"
                    header1="State of the art trading indicators"
                    topic="Pro Toolkits"
                    description="Trade automated price action, advanced signals, and spot reversals with money flow. Our world renowned toolkits replace indicators with simple workflows for your charts."
                    buttonLabel="Level Up Your Charts"
                    imgSrc="https://www.luxalgo.com/images/product/showcases/showcase_1.png"



                />
            </div>

            {/* Third row: 1 Card centered */}
            <div className="lg:col-span-2 flex justify-center">
                <Card2
                    topLeftGradient="https://www.luxalgo.com/images/graphics/top_left_blue_stroke.png"
                    bottomRightGradient="https://www.luxalgo.com/images/graphics/bottom_right_blue_stroke.png"
                    header1="Easily find high probability setups"
                    topic="Screeners & Alerts"
                    description="Get professional-grade screeners that work seamlessly alongside our toolkits. Filter out the noise and find trades across all of your favorite assets."
                    buttonLabel="Unlock Access"
                    imgSrc="https://www.luxalgo.com/images/product/showcases/showcase_1.png"


                />
            </div>
        </div>
    );
};

export default CardSample;
