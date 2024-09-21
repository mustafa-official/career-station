import Banner from "@/components/Banner";
import NavBar from "../shared/NavBar";
import PopularJob from "@/components/PopularJob";
import Footer from "@/shared/Footer";
import FeaturedJob from "@/components/FeaturedJob";


export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="max-w-[1280px] px-5 mx-auto">
        <Banner />
        <PopularJob />
        <FeaturedJob />
      </div>
      <Footer />
    </div>
  );
}
