import { User } from "lucide-react";
import { sidebarLinks } from "../../constant";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";


const Sidebar = () => {
    const { user } = useAuth();
    const { pathname } = useLocation();

    return (
        <nav className="leftsidebar h-screen items-center divide-y divide-slate-900 justify-center p-3 border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white">
            <div className="flex flex-col gap-5 items-center justify-center">
                <a href="/" className="flex gap-3 items-center mb-8">
                    <img
                        src="/logo.png"
                        alt="logo"
                        width={40}
                        height={40}
                    />
                </a>

                {/* <a href="/profile" className="flex gap-3 items-center">
                    <img
                        src={imagePlaceholder}
                        alt="profile"
                        width={30}
                        height={30}
                        className="rounded-full bg-slate-400"
                    />
                    <div className="flex flex-col">
                        <p className="body-bold">wilson635</p>
                        <p className="small-regular text-light-3">@ssii-services</p>
                    </div>
                </a> */}
                <a
                    href="/profile"
                    // target="_blank"
                    className="flex gap-3 items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                >
                    <User />
                </a>

                <ul className="flex flex-col gap-6">
                    {sidebarLinks.map((link) => {
                        const isActive = pathname === link.route;
                        // const isActive =  link.route;

                        return (
                            <li
                                key={link.label}
                                className={`leftsidebar-link group ${isActive && "bg-yellow-600"
                                    }`}>
                                <a
                                    href={link.route}
                                    className="flex gap-4 items-center p-4">
                                    <img
                                        src={link.imgURL}
                                        alt={link.label}
                                        className={`group-hover:invert-white w-7 h-7 ${isActive && "invert-white"
                                            }`}
                                    />
                                    {/* {link.label} */}
                                </a>
                            </li>
                        );
                    })}
                </ul>

            </div>
            <div className="flex flex-col gap-5 items-center justify-center mt-6">
                <div>
                    <button
                        className="flex gap-3 mt-5 w-10 h-10 bg-n-7 rounded-full items-center justify-center transition-colors hover:bg-n-6 hover:text-rose-400"
                    // onClick={(e) => handleSignOut(e)}
                    >
                        <Link to="/support">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 20 20"><path fill="white" d="M10 14.5a2 2 0 0 1-1.994-1.84A6.002 6.002 0 0 1 10 1a6 6 0 0 1 5.98 5.5a.47.47 0 0 1-.48.5a.54.54 0 0 1-.525-.5a5 5 0 1 0-6.79 5.16A2 2 0 1 1 10 14.5M5.009 12H5.1a7 7 0 0 0 2.033 1.388A3 3 0 0 0 12.959 12H15a2 2 0 0 1 2 2c0 1.691-.833 2.966-2.135 3.797C13.583 18.614 11.855 19 10 19s-3.583-.386-4.865-1.203C3.833 16.967 3 15.69 3 14c0-1.113.903-2 2.009-2M14 7a4 4 0 0 1-1.87 3.387A3 3 0 0 0 10 9.5a3 3 0 0 0-2.13.887a4 4 0 0 1-1.638-2.042A4 4 0 0 1 6 7a4 4 0 1 1 8 0" /></svg>
                        </Link>
                        {/* <p className="small-medium lg:base-medium">Logout</p> */}
                    </button>
                </div>
                <div>
                    <button
                        className="flex gap-3 items-center justify-center w-10 h-10 bg-red-900 rounded-full transition-colors hover:bg-n-6 hover:text-rose-400"
                    // onClick={(e) => handleSignOut(e)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="white" d="M12 20a8 8 0 1 1 0-16z" opacity="0.5" /><path fill="white" fill-rule="evenodd" d="M16.47 8.47a.75.75 0 0 0 0 1.06l1.72 1.72H10a.75.75 0 0 0 0 1.5h8.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0" clip-rule="evenodd" /></svg>
                        {/* <p className="small-medium lg:base-medium">Logout</p> */}
                    </button>
                </div>
            </div>

        </nav>
    );
};

export default Sidebar;
