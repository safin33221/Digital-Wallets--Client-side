import logo from '../assets/images/logo-withoutBg.png';
import logobg from '../assets/images/logo-backgroud.png';

export default function Logo() {
  return (
    <>
      {/* Show in light mode */}
      <img src={logo} className="w-20 dark:hidden" alt="Logo" />
      {/* Show in dark mode */}
      <img src={logobg} className="w-20 rounded-full hidden dark:block" alt="Logo Dark" />
    </>
  );
}
