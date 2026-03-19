import React from "react";
import { InsytfulSearch } from "../../lib/main";
import { Logo } from "./logo";

export const Header = () => {
  return (
    <header data-insytful-modal-offset>
      {/* Main header bar */}
      <div className="bg-[#2E3339] text-white py-2">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between h-[56px] md:h-[64px]">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <div className="flex items-center gap-0">
            {/* Menu button */}
            <button
              type="button"
              className="flex items-center gap-2 px-4 h-[56px] md:h-[64px] text-white hover:bg-white/10 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path fill="#fff" d="M8 10.5 3 5.5h10L8 10.5Z" />
              </svg>
              <span className="text-[16px] font-semibold">Menu</span>
            </button>

            {/* Divider */}
            <div className="w-[1px] h-[24px] bg-white/30" />

            {/* Search toggle */}
            <InsytfulSearch.Trigger className="flex items-center justify-center w-[56px] md:w-[64px] h-[56px] md:h-[64px] text-white hover:bg-white/10 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  fill="#fff"
                  d="M11.27 18.54c1.613-.001 3.18-.541 4.45-1.535L19.715 21 21 19.715l-3.995-3.995a7.225 7.225 0 0 0 1.535-4.45C18.54 7.26 15.279 4 11.27 4 7.262 4 4 7.261 4 11.27c0 4.008 3.262 7.27 7.27 7.27Zm0-12.723a5.458 5.458 0 0 1 5.453 5.453 5.458 5.458 0 0 1-5.453 5.452 5.458 5.458 0 0 1-5.452-5.452 5.458 5.458 0 0 1 5.452-5.453Z"
                />
              </svg>
            </InsytfulSearch.Trigger>
          </div>
        </div>
      </div>

    
    </header>
  );
};
