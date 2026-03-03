import React, { useState, useEffect } from "react";
import HandwrittenText from "../UI/HandwrittenText";
import PortfolioLogo from "../../assets/portfolio_logo.png";
import Img1 from "../../assets/img1.jpg";
import Img2 from "../../assets/img2.JPG";
import Img3 from "../../assets/img3.JPG";
import Img4 from "../../assets/img4.JPG";
import Img5 from "../../assets/img5.jpg";
import Img6 from "../../assets/img6.jpg";
import Img7 from "../../assets/img7.jpg";
import Img8 from "../../assets/img8.jpg";
import Img9 from "../../assets/img9.jpg";
import Img10 from "../../assets/img10.jpg";
import Img11 from "../../assets/img11.jpg";

// ! ----------------------------------------------------------------------------------------------

const phrase = {
  id: "swe",
  pathData: "M8.10 45.50Q4.10 45.50 2.05 43.23Q0 40.95 0 36.70L0 34.70L5.20 34.70L5.20 37.10Q5.20 40.50 8.05 40.50Q9.45 40.50 10.18 39.67Q10.90 38.85 10.90 37Q10.90 34.80 9.90 33.13Q8.90 31.45 6.20 29.10Q2.80 26.10 1.45 23.67Q0.10 21.25 0.10 18.20Q0.10 14.05 2.20 11.77Q4.30 9.50 8.30 9.50Q12.25 9.50 14.28 11.77Q16.30 14.05 16.30 18.30L16.30 19.75L11.10 19.75L11.10 17.95Q11.10 16.15 10.40 15.32Q9.70 14.50 8.35 14.50Q5.60 14.50 5.60 17.85Q5.60 19.75 6.63 21.40Q7.65 23.05 10.35 25.40Q13.80 28.40 15.10 30.85Q16.40 33.30 16.40 36.60Q16.40 40.90 14.28 43.20Q12.15 45.50 8.10 45.50ZM27.50 45.50Q23.45 45.50 21.30 43.20Q19.15 40.90 19.15 36.70L19.15 18.30Q19.15 14.10 21.30 11.80Q23.45 9.50 27.50 9.50Q31.55 9.50 33.70 11.80Q35.85 14.10 35.85 18.30L35.85 36.70Q35.85 40.90 33.70 43.20Q31.55 45.50 27.50 45.50M27.50 40.50Q30.35 40.50 30.35 37.05L30.35 17.95Q30.35 14.50 27.50 14.50Q24.65 14.50 24.65 17.95L24.65 37.05Q24.65 40.50 27.50 40.50ZM39.55 10L54.10 10L54.10 15L45.05 15L45.05 24.75L52.15 24.75L52.15 29.75L45.05 29.75L45.05 45L39.55 45L39.55 10ZM61.05 15L55.30 15L55.30 10L72.30 10L72.30 15L66.55 15L66.55 45L61.05 45L61.05 15ZM73.65 10L78.95 10L81.40 36.90L81.50 36.90L84.10 10L90.10 10L92.70 36.90L92.80 36.90L95.25 10L100 10L96.45 45L89.60 45L87.10 21.40L87 21.40L84.50 45L77.20 45L73.65 10ZM107.05 10L114.50 10L120.20 45L114.70 45L113.70 38.05L113.70 38.15L107.45 38.15L106.45 45L101.35 45L107.05 10M113.05 33.40L110.60 16.10L110.50 16.10L108.10 33.40L113.05 33.40ZM122.85 10L131 10Q135.25 10 137.20 11.98Q139.15 13.95 139.15 18.05L139.15 20.20Q139.15 25.65 135.55 27.10L135.55 27.20Q137.55 27.80 138.38 29.65Q139.20 31.50 139.20 34.60L139.20 40.75Q139.20 42.25 139.30 43.17Q139.40 44.10 139.80 45L134.20 45Q133.90 44.15 133.80 43.40Q133.70 42.65 133.70 40.70L133.70 34.30Q133.70 31.90 132.93 30.95Q132.15 30 130.25 30L128.35 30L128.35 45L122.85 45L122.85 10M130.35 25Q132 25 132.82 24.15Q133.65 23.30 133.65 21.30L133.65 18.60Q133.65 16.70 132.97 15.85Q132.30 15 130.85 15L128.35 15L128.35 25L130.35 25ZM143 10L158 10L158 15L148.50 15L148.50 24.25L156.05 24.25L156.05 29.25L148.50 29.25L148.50 40L158 40L158 45L143 45L143 10ZM169.15 10L184.15 10L184.15 15L174.65 15L174.65 24.25L182.20 24.25L182.20 29.25L174.65 29.25L174.65 40L184.15 40L184.15 45L169.15 45L169.15 10ZM187.30 10L194.20 10L199.55 30.95L199.65 30.95L199.65 10L204.55 10L204.55 45L198.90 45L192.30 19.45L192.20 19.45L192.20 45L187.30 45L187.30 10ZM216.45 45.50Q212.45 45.50 210.35 43.23Q208.25 40.95 208.25 36.70L208.25 18.30Q208.25 14.05 210.35 11.77Q212.45 9.50 216.45 9.50Q220.45 9.50 222.55 11.77Q224.65 14.05 224.65 18.30L224.65 21.30L219.45 21.30L219.45 17.95Q219.45 14.50 216.60 14.50Q213.75 14.50 213.75 17.95L213.75 37.10Q213.75 40.50 216.60 40.50Q219.45 40.50 219.45 37.10L219.45 30.25L216.70 30.25L216.70 25.25L224.65 25.25L224.65 36.70Q224.65 40.95 222.55 43.23Q220.45 45.50 216.45 45.50ZM228.20 10L233.70 10L233.70 45L228.20 45L228.20 10ZM237.80 10L244.70 10L250.05 30.95L250.15 30.95L250.15 10L255.05 10L255.05 45L249.40 45L242.80 19.45L242.70 19.45L242.70 45L237.80 45L237.80 10ZM259.15 10L274.15 10L274.15 15L264.65 15L264.65 24.25L272.20 24.25L272.20 29.25L264.65 29.25L264.65 40L274.15 40L274.15 45L259.15 45L259.15 10ZM277.30 10L292.30 10L292.30 15L282.80 15L282.80 24.25L290.35 24.25L290.35 29.25L282.80 29.25L282.80 40L292.30 40L292.30 45L277.30 45L277.30 10ZM295.45 10L303.60 10Q307.85 10 309.80 11.98Q311.75 13.95 311.75 18.05L311.75 20.20Q311.75 25.65 308.15 27.10L308.15 27.20Q310.15 27.80 310.97 29.65Q311.80 31.50 311.80 34.60L311.80 40.75Q311.80 42.25 311.90 43.17Q312 44.10 312.40 45L306.80 45Q306.50 44.15 306.40 43.40Q306.30 42.65 306.30 40.70L306.30 34.30Q306.30 31.90 305.52 30.95Q304.75 30 302.85 30L300.95 30L300.95 45L295.45 45L295.45 10M302.95 25Q304.60 25 305.42 24.15Q306.25 23.30 306.25 21.30L306.25 18.60Q306.25 16.70 305.57 15.85Q304.90 15 303.45 15L300.95 15L300.95 25L302.95 25Z",
  drawDurSec: 20,
  pauseDurSec: 5,
  eraseDurSec: 20,
  blackDurSec: 5,
  strokeW: 1.5,
};

// ! ----------------------------------------------------------------------------------------------

const Home: React.FC = () => {
  return (
    <div className="grid grid-cols-4 auto-rows-[5rem] gap-3 md:auto-rows-[11rem]">
      <div className="flex items-center justify-center p-3 bg-light rounded-xl
        col-span-2 col-start-1 row-span-1 row-start-1">
        <p className="flex items-center translate-y-[1px] font-bebas font-extrabold
          text-regular text-xl sm:text-3xl md:text-4xl lg:text-5xl">
          VARSHIL PATEL
        </p>
      </div>

      <div className="flex items-center justify-center bg-light rounded-xl
        col-span-2 row-span-1 col-start-3 row-start-1">
        <div className="flex items-center justify-center max-w-xl w-full
          text-regular h-4 sm:h-6 md:h-7 lg:h-9 w-full max-w-xl">
          <HandwrittenText
            key={phrase.id}
            svgPathData={phrase.pathData}
            drawDurationSec={phrase.drawDurSec}
            pauseDurationSec={phrase.pauseDurSec}
            eraseDurationSec={phrase.eraseDurSec}
            blackDurationSec={phrase.blackDurSec}
            strokeWidth={phrase.strokeW}
          />
        </div>
      </div>

      <div className="flex items-center justify-center p-3 bg-light rounded-xl
        col-span-4 row-span-1 col-start-1 row-start-2">
        <p className="text-center text-regular italic max-w-sm text-xs md:text-lg md:max-w-2xl">
          Hi! I'm Varshil, a passionate Computer Scientist with a keen interest in applying powerful AI/ML solutions to drive impactful fullstack applications.
        </p>
      </div>

      <div className="flex items-center justify-center p-0 bg-light rounded-xl
        col-span-2 row-span-2 col-start-1 row-start-3">
        <img src={Img7} className="flex flex-row w-full h-full object-cover rounded-xl"/>
      </div>

      <div className="flex items-center justify-center p-0 bg-light rounded-xl
        col-span-1 row-span-1 col-start-3 row-start-3">
        <img src={Img8} className="flex flex-row w-full h-full object-cover rounded-xl"/>
      </div>

      <div className="flex items-center justify-center p-0 bg-light rounded-xl
        col-span-1 row-span-1 col-start-4 row-start-3">
        <img src={Img9} className="flex flex-row w-full h-full object-cover rounded-xl"/>
      </div>

      <div className="flex items-center justify-center p-0 bg-light rounded-xl
        col-span-1 row-span-1 col-start-3 row-start-4
        md:col-start-1 md:row-start-5">
        <img src={Img11} className="flex flex-row w-full h-full object-cover rounded-xl"/>
      </div>

      <div className="flex items-center justify-center p-0 bg-light rounded-xl
        col-span-1 row-span-1 col-start-4 row-start-4
        md:col-start-2 md:row-start-5">
        <img src={Img10} className="flex flex-row w-full h-full object-cover rounded-xl"/>
      </div>

      <div className="hidden md:flex col-span-2 row-span-2 col-start-3 row-start-4 p-0 bg-[#1f1f1f] rounded-xl">
        <iframe
          data-testid="embed-iframe"
          className="w-full h-[352px]"
          src="https://open.spotify.com/embed/track/3sK8wGT43QFpWrvNQsrQya?utm_source=generator&theme=0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy">
        </iframe>
      </div>
    </div>
  );
};

export default Home;

// ! ----------------------------------------------------------------------------------------------
