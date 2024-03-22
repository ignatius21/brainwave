import ButtonGradient from './assets/svg/ButtonGradient';
import Bennefits from './components/Bennefits';
import Collaboration from './components/Collaboration';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero/>
        <Bennefits />
        <Collaboration />
        <Services />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App
