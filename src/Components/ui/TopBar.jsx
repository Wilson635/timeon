import { LogOutIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { imagePlaceholder } from "../../assets";


const TopBar = () => {


  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <a href="/" className="flex gap-3 items-center">
          <img
            src="/logoTimer.png"
            alt="logo"
            width={130}
            height={325}
          />
        </a>

        {/* <div className="flex gap-4">
          <button
            className="shad-button_ghost"
            onClick={() => signOut()}>
            <LogOutIcon />
          </button>
          <a href="/profile" className="flex-center gap-3">
            <img
              src={imagePlaceholder}
              alt="profile"
              className="h-8 w-8 rounded-full"
            />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default TopBar;
