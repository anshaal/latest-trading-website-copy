import React from "react";
import { Compare } from "@/components/ui/compare";

const CompareComp = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-black">
            <div className="p-4 rounded-3xl">
                <Compare
                    firstImage="https://cdn.prod.website-files.com/62f11b068296f36584c1ec32/6606172379d796e7b5845114_rdsfasd34.png"
                    secondImage="https://cdn.prod.website-files.com/62f11b068296f36584c1ec32/660617245e1b01c5af3b20de_gdsasdfg342.png"
                    firstImageClassName="object-fill object-left-top"
                    secondImageClassname="object-fill object-left-top"
                    className="h-[250px] w-[400px] sm:h-[350px] sm:w-[600px] md:h-[500px] md:w-[900px]"
                    slideMode="hover"
                />
            </div>
            <div className="mt-4">
                <p className="text-center text-sm sm:text-base md:text-lg font-medium px-3 py-1 rounded-md text-white">
                    Drag bar for before and after (TAP ON MOBILE)
                </p>
            </div>
        </div>

    );
};

export default CompareComp;
