import MainHeroView from "@/components/main-hero";
import ServiceDisplayView from "@/components/service-view/service-display";
import NavbarTop from "@/components/top-navbar";
import TopSnackBar from "@/components/top-snack";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <TopSnackBar />
      <NavbarTop />
      <MainHeroView />
      <ServiceDisplayView />
    </div>
  );
}
