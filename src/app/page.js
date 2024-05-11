import MainHeroView from "@/components/main-hero";

import ServiceDisplayView from "@/components/service-view/service-display";
import TestimonialView from "@/components/testimonial";
import NavbarTop from "@/components/top-navbar";
import TopSnackBar from "@/components/top-snack";
import OurTeamView from "@/components/our-team/team-view";

export default function Home() {
  return (
    <div>
      <TopSnackBar />
      <NavbarTop />
      <MainHeroView />
      <ServiceDisplayView />
      <TestimonialView />
      <OurTeamView />
    </div>
  );
}
