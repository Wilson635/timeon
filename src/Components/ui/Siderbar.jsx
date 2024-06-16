import { HeadphonesIcon, LogOutIcon, LucideBookHeadphones, LucideHeadphones, User } from "lucide-react";
import { sidebarLinks } from "../../constant";
import { imagePlaceholder } from "../../assets";
import { UserIcon } from "@heroicons/react/20/solid";
// import { useLocation } from "react-router-dom";


const Sidebar = () => {
    // const { pathname } = useLocation();

    return (
        <nav className="leftsidebar items-center divide-y divide-slate-900 justify-center h-screen p-3 border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white">
            <div className="flex flex-col gap-5 items-center justify-center">
                <a href="/" className="flex gap-3 items-center">
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
                        // const isActive = pathname === link.route;
                        const isActive = link.route;

                        return (
                            <li
                                key={link.label}
                                className={`leftsidebar-link group ${isActive && "bg-primary-500"
                                    }`}>
                                <a
                                    href={link.route}
                                    className="flex gap-4 items-center p-4">
                                    <img
                                        src={link.imgURL}
                                        alt={link.label}
                                        className={`group-hover:invert-white ${isActive && "invert-white"
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
                <button
                    className="flex gap-3 items-center justify-center w-10 h-10 bg-n-7 rounded-md transition-colors hover:bg-n-6 hover:text-rose-400"
                // onClick={(e) => handleSignOut(e)}
                >
                    <LucideHeadphones />
                    {/* <p className="small-medium lg:base-medium">Logout</p> */}
                </button>
                <button
                    className="flex gap-3 items-center justify-center w-10 h-10 bg-n-7 rounded-md transition-colors hover:bg-n-6 hover:text-rose-400"
                // onClick={(e) => handleSignOut(e)}
                >
                    <LogOutIcon />
                    {/* <p className="small-medium lg:base-medium">Logout</p> */}
                </button>
            </div>

        </nav>
    );
};

export default Sidebar;
