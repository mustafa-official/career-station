import Banner from "@/components/Banner";
import NavBar from "../shared/NavBar";
import PopularJob from "@/components/PopularJob";


export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="max-w-[1280px] px-5 mx-auto">
        <Banner />
        <PopularJob />
      </div>
    </div>
  );
}
