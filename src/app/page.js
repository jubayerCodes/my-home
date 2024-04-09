import Banner from "@/components/Home/Banner/Banner";
import Services from "@/components/Home/Services/Services";
import LatestProperties from "@/components/shared/LatestProperties/LatestProperties";
import LatestRent from "@/components/shared/LatestRent/LatestRent";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner
        title={"Find Your Dream Home"}
        desc={
          "We are recognized for exceeding client expectations and delivering great results through dedication, ease of process, and extraordinary services to our worldwide clients."
        }
      />
      <LatestProperties />
      <Services />
      <LatestRent />
    </>
  );
}
