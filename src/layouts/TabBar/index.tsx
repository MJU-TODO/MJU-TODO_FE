import { NavLink } from 'react-router-dom';

import { TAB_LIST } from '@constants/tab';

export default function TabBar() {
  return (
    <nav className="px-4 py-2">
      <ul className="flex list-none items-center justify-between text-sm font-bold">
        {TAB_LIST.map((tab) => (
          <li key={tab.id}>
            <NavLink to={tab.link}>{tab.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
