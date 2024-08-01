import { useState } from 'react';

import SlideMenu from '@layouts/SlideMenu';
import TabBar from '@layouts/TabBar';
import { RxHamburgerMenu } from 'react-icons/rx';
import { TbSettings } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';

import { useAuthStore } from '@stores/authStore';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isSignedIn = useAuthStore((state) => state.isSignedIn);

  return (
    <>
      <header className="flex h-14 w-full items-center justify-between px-4 py-1">
        <RxHamburgerMenu
          size={28}
          onClick={() => setIsMenuOpen(true)}
          className="cursor-pointer"
        />
        <img src="/logo.svg" alt="" className="h-full" />
        {isSignedIn ? (
          <TbSettings size={32} className="cursor-pointer" />
        ) : (
          <NavLink to="/sign-in" className="text-sm font-bold text-blue-600">
            로그인
          </NavLink>
        )}
      </header>
      <TabBar />

      <SlideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
