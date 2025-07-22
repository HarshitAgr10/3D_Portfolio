import Hero from './sections/Hero.jsx'
import ShowCaseSection from "./sections/ShowCaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import LogoShowcase from "./components/LogoShowcase.jsx";

const App = () => {
    return (
        <>
            <NavBar/>
            <Hero />
            <ShowCaseSection />
            <LogoShowcase/>
        </>

    )
}
export default App
