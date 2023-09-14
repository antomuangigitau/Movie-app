import { Links, items } from '../data';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="mt-20 flex items-center justify-center">
        <div className="w-[492px]">
          <ul className="flex items-center justify-center gap-12">
            {Links.map((link) => {
              const { name, image } = link;
              return (
                <li key={name}>
                  <img src={image} alt={name} />
                </li>
              );
            })}
          </ul>
          <ul className="flex items-center justify-between my-9">
            {items.map((item) => {
              const { name } = item;
              return (
                <li key={name}>
                  <p>{name}</p>
                </li>
              );
            })}
          </ul>
          <p className="text-center">
            &copy; {currentYear} MovieBox by Adriana Eka Prayudha
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
