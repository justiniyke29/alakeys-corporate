// import LearnWithAlakeys from "@/components/section/LearnWithAlakeys";
import OurFaq1 from "@/components/section/OurFaq1";
import Testimonial1 from "@/components/section/Testimonial1";
import PopularService1 from "@/components/section/PopularService1";

import Hero from "@/components/hero/Hero";
// import InspiringService11 from "@/components/section/InspiringService11";
import NeedSomething2 from "@/components/section/NeedSomething2";
import Talent15 from "@/components/section/Talent15";
// import TrendingService15 from "@/components/section/TrendingService15";
// import NewsLetterSubscribe1 from "@/components/section/NewsLetterSubscribe1";

export const metadata = {
  title: "Alakeys - Corporate Website ",
};

export default function page() {
  return (
    <>
      <div className="body_content">
        <Hero />
        <NeedSomething2 />
        <Talent15 />
        <PopularService1 />
        {/* <LearnWithAlakeys /> */}
        {/* <TrendingService15 /> */}
        <Testimonial1 />
        {/* <InspiringService11 /> */}
        <OurFaq1 />
        {/* <NewsLetterSubscribe1 /> */}
      </div>
    </>
  );
}
