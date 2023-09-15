import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo2.png';
import tv from '../assets/tv.png';
import { links } from '../data';
import LogOut from '../assets/Logout.png';
import { useState, useEffect } from 'react';
const Aside = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const showAnotherLogo = screenWidth < 80 * 16;
  return (
    <div className="border border-[rgba(102, 102, 102, 1)] rounded-r-[45px]">
      {showAnotherLogo ? (
        <img className="my-[52px] px-5" src={tv} alt="mobile logo" />
      ) : (
        <img className="my-[52px] px-5" src={logo} alt="logo" />
      )}

      {links.map((location) => {
        const { title, path, image } = location;
        return (
          <NavLink
            key={title}
            to={path}
            className={({ isActive }) =>
              isActive ? 'active isNormal' : 'isNormal'
            }
          >
            <img src={image} alt={title} />
            <h3 className="hidden xl:block text-xl">{title}</h3>
          </NavLink>
        );
      })}
      <div className="hidden xl:block mx-7 border border-cool-color rounded-[20px] pt-[42px] px-[17px] pb-4">
        <div>
          <h3 className="font-semibold text-[15px] text-[rgba(51, 51, 51, 0.80)]">
            Play movie quizes <br />
            and earn <br />
            free tickets
          </h3>
          <p className="text-xs text-primary-color my-[9px]">
            50k people are playing <br />
            now
          </p>
          <button
            className="bg-secondary-color px-[17px] py-[6px]"
            type="button"
          >
            Start Playing
          </button>
        </div>
      </div>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'active isNormal mt-11' : 'isNormal  mt-11'
        }
        to="/"
      >
        <img src={LogOut} alt="logout" />
        <h3 className="hidden xl:block text-xl">Log Out</h3>
      </NavLink>
    </div>
  );
};
export default Aside;
