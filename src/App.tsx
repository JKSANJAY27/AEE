import Header from './components/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Achievements from './sections/Achievements'
import Team from './sections/Team'
import Events from './sections/Events'
import Projects from './sections/Projects'
import Blog from './sections/Blog'
import Sponsors from './sections/Sponsors'
import WhySponsorUs from './sections/WhySponsorUs'
import Gallery from './sections/Gallery'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F3] md:p-8">
      {/* Master Newspaper Container */}
      <div className="max-w-[1400px] mx-auto bg-white border border-[#111111] shadow-2xl relative">
        <Header />
        
        <main>
          {/* We'll use thick borders between sections to make the structure extremely clear */}
          
          <Hero />
          
          <About />
          
          <div className="border-t-[4px] border-[#111111]" />
          <Achievements />
          
          <div className="border-t-[4px] border-[#111111]" />
          <Team />
          
          <div className="border-t-[4px] border-[#111111]" />
          <Events />
          
          <div className="border-t-[4px] border-[#111111]" />
          <Projects />
          
          <div className="border-t-[4px] border-[#111111]" />
          <Blog />
          
          <div className="border-t-[4px] border-[#111111]" />
          <Sponsors />
          
          <div className="border-t-[4px] border-[#111111]" />
          <WhySponsorUs />
          
          <div className="border-t-[4px] border-[#111111]" />
          <Gallery />
          
          <div className="border-t-[4px] border-[#111111]" />
          <Contact />
          
        </main>

        <div className="border-t-[4px] border-[#111111]" />
        <Footer />
      </div>
    </div>
  )
}
