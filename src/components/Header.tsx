import logo from "@/assets/icons/logo.svg";
import MoonIcon from "./icons/MoonIcon";
import avatarImg from "@/assets/images/image-avatar.jpg";
import useAppUiStore from "@/store/useAppUiStore";
import SunIcon from "./icons/SunIcon";

const Header = () => {
  const theme = useAppUiStore((state) => state.theme);
  const toggleDarkMode = useAppUiStore((state) => state.toggleDarkMode);
  return (
    <header className="bg-header sticky top-0 xl:min-w-25.75 z-1">
      <div
        className="
        bg-header flex justify-between xl:rounded-tr-lg xl:rounded-br-lg
        xl:h-screen xl:flex-col xl:fixed xl:top-0 xl:left-0">
        <div className="logo-brand-shape aspect-square">
          <img
            className="z-1 w-[clamp(28px,4vw,40px)] aspect-square"
            src={logo}
            alt="Website logo shape"
          />
        </div>
        <div className="flex xl:flex-col">
          <button
            onClick={toggleDarkMode}
            className="cursor-pointer px-[clamp(24px,3vw,42px)] xl:py-8">
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <div className="px-[clamp(24px,3vw,32px)] py-5 border-[#494e6e] max-xl:border-l xl:border-t ">
            <img
              className="w-[clamp(32px,4vw,40px)] aspect-square rounded-full"
              src={avatarImg}
              alt="Profile image"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
