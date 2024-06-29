import { Link, useLocation } from "react-router-dom";
import { bottombarLinks } from "../../constant";

const Bottombar = () => {
  const { pathname } = useLocation();

  return (
    <section className="bottom-bar">
      {bottombarLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <Link
            key={`bottombar-${link.label}`}
            to={link.route}
            className={`${
              isActive && "rounded-[10px] bg-yellow-600 "
            } flex-center flex-col gap-1 p-2 transition`}>
            <img
              src={link.imgURL}
              alt={link.label}
              width={30}
              height={30}
              className={`${isActive && "invert-white"}`}
            />

            <p className="text-white">{link.label}</p>
          </Link>
        );
      })}
    </section>
  );
};

export default Bottombar;
