import Hero from './sections/Hero.jsx'
import ShowCaseSection from "./sections/ShowCaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import LogoShowcase from "./sections/LogoShowcase.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import Testimonials from "./sections/Testimonials.jsx";


const App = () => {
    return (
        <>
            <NavBar/>
            <Hero />
            <ShowCaseSection />
            <LogoShowcase/>
            <FeatureCards />
            <ExperienceSection />
            <TechStack />
            <Testimonials />
        </>

    )
}
export default App
