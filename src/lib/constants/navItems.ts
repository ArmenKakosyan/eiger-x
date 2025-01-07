import Home from '../images/icons/home.svg?raw';
import Messages from '../images/icons/messages.svg?raw';
import Help from '../images/icons/help.svg?raw';

const NAV_ITEMS = [
  {
    title: 'Home',
    icon: Home,
    href: '/home',
  },
  {
    title: 'Messages',
    icon: Messages,
    href: '/messages',
  },
  {
    title: 'Help',
    icon: Help,
    href: '/help',
    fillStrokes: true,
  },
];

export default NAV_ITEMS;
