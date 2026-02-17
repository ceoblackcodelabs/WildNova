import Layout from '/src/components/layouts/Layout';
import Hero from '/src/components/Home/Hero';
import AboutSection from '../components/Home/AboutSection';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import Gallery from '../components/Home/Gallery';
import PackageSlider from '../components/Home/PackageSlider';
import Testimonials from '../components/Home/Testimonials';
import '../styles/globals.css';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <WhyChooseUs />
      <Gallery />
      <PackageSlider />
      <Testimonials />
    </Layout>
  );
};

export default Home;