import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

const MenuComplete = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
    permission: ''
  },
  {
    title: 'TopNews',
    path: '/topnews',
    icon: <AiIcons.AiOutlineProfile />,
    cName: 'nav-text',
    permission: ''
  },
  {
    title: 'List Gpt',
    path: '/todo-list-gpt',
    icon: <AiIcons.AiOutlineProfile />,
    cName: 'nav-text',
    permission: ''
  },
  {
    title: 'List Meta',
    path: '/todo-list-meta',
    icon: <AiIcons.AiOutlineProfile />,
    cName: 'nav-text',
    permission: ''
  },
  {
    title: 'List Claude',
    path: '/todo-list-claude',
    icon: <AiIcons.AiOutlineProfile />,
    cName: 'nav-text',
    permission: ''
  },
];

export default MenuComplete;