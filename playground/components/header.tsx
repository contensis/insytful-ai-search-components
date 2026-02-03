import { AISearchModal } from "./ai-search-modal";
import { Logo } from "./logo";

export const Header = () => {
  return (
    <header className="app-header">
      <div className="app-header__logo">
        <Logo />
      </div>

      <div className="app-header__actions my-council-theme">
        <AISearchModal />
        <button
          type="button"
          className="app-header__menu-button"
        >
          <span className="app-header__menu-button-text">
            Menu
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="20"
            fill="none"
          >
            <path
              fill="#fff"
              d="M0 3.125C0 2.781.281 2.5.625 2.5h16.25c.344 0 .625.281.625.625a.627.627 0 0 1-.625.625H.625A.627.627 0 0 1 0 3.125Zm0 6.25c0-.344.281-.625.625-.625h16.25c.344 0 .625.281.625.625a.627.627 0 0 1-.625.625H.625A.627.627 0 0 1 0 9.375Zm17.5 6.25a.627.627 0 0 1-.625.625H.625A.627.627 0 0 1 0 15.625C0 15.281.281 15 .625 15h16.25c.344 0 .625.281.625.625Z"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};
