import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Events } from "@/components/sections/Event";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Ministries } from "@/components/sections/Ministries";
import { ServiceTime } from "@/components/sections/ServiceTime";

export default async function Home() {
//  const supabase = createServerClient();
//
//  const { data: company, error } = await supabase
//    .from(TABLES.COMPANY_PROFILE_CONFIGS)
//    .select()
//    .eq("company_id", process.env.NEXT_PUBLIC_COMPANY_ID)
//    .maybeSingle();
//
//  const config = company?.config;
//  const hero = config?.hero;
//  const about = config?.about;
//  const team = config?.team;
//  const equipment = config?.equipment;
//  const portofolio = config?.portofolio;
//  const contact = config?.contact;

  return (
    <>
      <Header />
      <Hero />
      <ServiceTime />
      <About />
      <Ministries />
      <Events />
      <Contact />
      <Header />
      <Footer />
    </>
  );
}
