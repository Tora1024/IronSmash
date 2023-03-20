import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-[#1b1a1a] text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center w-20">
          <h1 className="text-3xl font-bold">Iron</h1>
          <Image src="/logo.png" alt="versus" width="65" height="100" />
          <h1 className="text-3xl font-bold">mash</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Main
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
