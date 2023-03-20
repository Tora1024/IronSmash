import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AboutContent from '@/components/AboutContent/AboutContent';

const About: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
