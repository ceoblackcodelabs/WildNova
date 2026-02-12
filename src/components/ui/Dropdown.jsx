import { Link } from 'react-router-dom';

const Dropdown = ({ title, items }) => {
  return (
    <div className="dropdown">
      <button className="dropdown-trigger">{title} ▼</button>
      <div className="dropdown-menu">
        {items.map((item, index) => (
          <Link key={index} to={item.path}>{item.name}</Link>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;