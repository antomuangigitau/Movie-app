import Home from './assets/Home.png';
import Movies from './assets/Movie Projector.png';
import Tv from './assets/TV Show.png';
import Calendar from './assets/Calendar.png';

export const links = [
  {
    title: 'Home',
    path: '/',
    image: Home,
  },
  {
    title: 'Movies',
    path: '/movies',
    image: Movies,
  },
  {
    title: 'TV Series',
    path: '/series',
    image: Tv,
  },
  {
    title: 'Upcoming',
    path: '/upcoming',
    image: Calendar,
  },
];

import facebook from './assets/fa-brands_facebook-square.png';
import instagram from './assets/fa-brands_instagram.png';
import twitter from './assets/fa-brands_twitter.png';
import youtube from './assets/fa-brands_youtube.png';
interface Props {
  name: string;
  image: string;
}
export const Links: Props[] = [
  {
    name: 'facebook',
    image: facebook,
  },
  {
    name: 'instagram',
    image: instagram,
  },
  {
    name: 'twitter',
    image: twitter,
  },
  {
    name: 'youtube',
    image: youtube,
  },
];

interface Items {
  name: string;
}

export const items: Items[] = [
  {
    name: 'Condition of Use',
  },
  {
    name: 'Privacy & Policy',
  },
  {
    name: 'Press Room',
  },
];
