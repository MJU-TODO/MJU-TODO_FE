import { create } from 'zustand';

type Menu = {
  id: string;
  label: string;
  link: string;
  requiresAuth: boolean;
  showBeforeSignIn: boolean;
};

interface MenuState {
  menuList: Menu[];
}

const useMenuStore = create<MenuState>()(() => ({
  menuList: [
    {
      id: 'signIn',
      label: '로그인',
      link: '/sign-in',
      requiresAuth: true,
      showBeforeSignIn: true,
    },
    {
      id: 'signUp',
      label: '회원가입',
      link: '/sign-up',
      requiresAuth: true,
      showBeforeSignIn: true,
    },
    {
      id: 'academicCalendar',
      label: '학사 일정',
      link: '/academic-calendar',
      requiresAuth: false,
      showBeforeSignIn: true,
    },
    {
      id: 'todo',
      label: 'To-do',
      link: '/todo',
      requiresAuth: false,
      showBeforeSignIn: true,
    },
    {
      id: 'community',
      label: '커뮤니티',
      link: '/community',
      requiresAuth: false,
      showBeforeSignIn: true,
    },
    {
      id: 'mypage',
      label: '마이페이지',
      link: '/mypage',
      requiresAuth: true,
      showBeforeSignIn: true,
    },
    {
      id: 'setting',
      label: '설정',
      link: '/settings',
      requiresAuth: true,
      showBeforeSignIn: false,
    },
  ],
}));

export default useMenuStore;
