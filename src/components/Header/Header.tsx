import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">IronSmash</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Main
              </Link>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300">
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
