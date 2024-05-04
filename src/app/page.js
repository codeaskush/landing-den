import Footer from "@/components/footer";
import MainHeroView from "@/components/main-hero";
import NavbarTop from "@/components/top-navbar";
import TopSnackBar from "@/components/top-snack";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <TopSnackBar />

      <NavbarTop />
      <MainHeroView />

      <Footer/>
    </div>
  );
}
