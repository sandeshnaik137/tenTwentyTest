import {heroSliderItems} from './sliderData';
import Header from "./components/Header";
import HeroBanner from './components/HeroBanner';
import QualityProductSlider from './components/QualityProductSlider/QualityProductSlider';
import "./App.scss";

function App() {
    return (
        <>
           <Header />
           <HeroBanner items={heroSliderItems} />
           <QualityProductSlider />
        </>
    )
}

export default App;
