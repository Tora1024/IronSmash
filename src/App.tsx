import { createRoot } from 'react-dom/client';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1">{/* Main content goes here */}</main>
      <Footer />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
