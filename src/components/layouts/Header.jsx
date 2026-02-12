import { Link } from 'react-router-dom';
import Dropdown from '../ui/Dropdown';

const Header = () => {
  const tourPackages = [
    { name: 'Day Trips', path: '/tour-packages/day-trips' },
    { name: 'Nairobi Tours', path: '/tour-packages/nairobi-tours' },
    { name: 'Mombasa Tours', path: '/tour-packages/mombasa-tours' },
    { name: 'Kenya - Tanzania Safaris', path: '/tour-packages/kenya-tanzania-safaris' },
    { name: 'Tanzania Safaris', path: '/tour-packages/tanzania-safaris' }
  ];

  return (
    <header>
      <div className="logo">
        <h1>WildNova</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li>
            <Dropdown title="Tour Package" items={tourPackages} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;