import Homepage2Header from "../components/Homepage2/Header"
import AudienceAndIntegrations from "../components/Homepage2/AudienceAndIntegrations"
import ContactCards from "../components/Homepage2/ContactCards"
import FinalCta from "../components/Homepage2/FinalCta"
import Homepage2Footer from "../components/Homepage2/Footer"
import FounderQuote from "../components/Homepage2/FounderQuote"
import Hero from "../components/Homepage2/Hero"
import Reviews from "../components/Homepage2/Reviews"
import SmartWorkflow from "../components/Homepage2/SmartWorkflow"
import WhyChooseSendwise from "../components/Homepage2/WhyChooseSendwise"

const HomePage2 = () => {
  return (
    <main className="min-h-screen bg-white text-[#0d1321]">
      <Homepage2Header />
      <Hero />
      <WhyChooseSendwise />
      <SmartWorkflow />
      <AudienceAndIntegrations />
      <Reviews />
      <FounderQuote />
      <ContactCards />
      <FinalCta />
      <Homepage2Footer />
    </main>
  )
}

export default HomePage2
