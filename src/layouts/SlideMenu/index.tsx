import SlideMenuBackDrop from '@layouts/SlideMenu/SlideMenuBackDrop';
import { IoMdClose } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

import { useAuthStore } from '@stores/authStore';
import useMenuStore from '@stores/menuStore';

interface SlideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SlideMenu({ isOpen, onClose }: SlideMenuProps) {
  const isSignedIn = useAuthStore((state) => state.isSignedIn);
  const menuList = useMenuStore((state) => state.menuList);

  const filteredMenuList = menuList.filter((menu) => {
    if (isSignedIn) {
      return menu.id !== 'signIn' && menu.id !== 'signUp';
    } else {
      return menu.showBeforeSignIn;
    }
  });

  return (
    <>
      <SlideMenuBackDrop isOpen={isOpen} onClose={onClose} />
      <div
        className={`fixed left-0 top-0 h-full w-4/5 transform cursor-pointer bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-8">
          <div className="mb-6 flex justify-end">
            <IoMdClose size={32} onClick={onClose} className="cursor-pointer" />
          </div>
          <nav>
            {filteredMenuList.map((menu) => (
              <li
                key={menu.id}
                className="mb-6 list-none font-bold lg:mb-12 lg:text-3xl"
              >
                <NavLink
                  to={menu.link}
                  className={`${
                    menu.id === 'signIn' || menu.id === 'signUp'
                      ? 'text-blue-700'
                      : ''
                  }`}
                >
                  {menu.label}
                </NavLink>
              </li>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
