import React from "react";
import { useEffect, useState } from "react";
import { onToggleModal } from "../../lib/main";
import { Logo } from "./logo";

export const Header = () => {
  return (
    <header className="bg-gray-800 text-white" data-insytful-modal-offset>
      <div className="max-w-[1524px] m-full mx-auto pl-6 flex items-center justify-between gap-4">
      <div className="flex-shrink-0">
        <Logo />
      </div>

      <div className="flex items-stretch">
        <button
          onClick={() => onToggleModal()}
          className="flex items-center gap-2 py-[1rem] md:py-[1.75rem] px-[1rem] bg-white"
        >
          <span className="hidden md:inline text-xl font-semibold text-[#333]">
            <span className="sr-only">Open/Close</span>
            Search
          </span>
          <svg
            className="min-w-[24px]"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fill="#333"
              d="M7.513 12.36c1.076 0 2.12-.36 2.967-1.023L13.143 14l.857-.857-2.663-2.663a4.817 4.817 0 0 0 1.023-2.967 4.852 4.852 0 0 0-4.847-4.846 4.852 4.852 0 0 0-4.846 4.846 4.852 4.852 0 0 0 4.846 4.847Zm0-8.482a3.639 3.639 0 0 1 3.635 3.635 3.639 3.639 0 0 1-3.635 3.635 3.639 3.639 0 0 1-3.635-3.635 3.639 3.639 0 0 1 3.635-3.635Z"
            />
          </svg>
        </button>
        <button
          type="button"
          className="flex items-center gap-2 py-[1rem] md:py-[1.75rem] px-[1rem] md:px-[0.875rem] bg-[#2E3339] hover:bg-[##2E3339] rounded transition-colors"
        >
          <span className="text-xl font-semibold hidden md:inline">Menu</span>

          <svg
            className="min-w-[24px]"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fill="#fff"
              d="M13.478 3.043H2.522A.522.522 0 0 0 2 3.565v.522c0 .288.234.522.522.522h10.956A.522.522 0 0 0 14 4.087v-.522a.522.522 0 0 0-.522-.522ZM13.478 7.217H2.522A.522.522 0 0 0 2 7.74v.522c0 .288.234.522.522.522h10.956A.522.522 0 0 0 14 8.26v-.522a.522.522 0 0 0-.522-.522ZM13.478 11.391H2.522a.522.522 0 0 0-.522.522v.522c0 .288.234.521.522.521h10.956a.522.522 0 0 0 .522-.521v-.522a.522.522 0 0 0-.522-.522Z"
            />
          </svg>
        </button>
      </div>
      </div>
    </header>
  );
};
