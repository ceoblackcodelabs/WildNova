import Layout from '../components/layouts/Layout';
import Hero from '../components/home/Hero';
import AboutSection from '../components/Home/AboutSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Gallery from '../components/home/Gallery';
import PackageSlider from '../components/home/PackageSlider';
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