import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SingleMatcher from '../components/SingleMatcher/SingleMatcher';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <SingleMatcher />
      <Footer />
    </div>
  );
};

export default Home;
