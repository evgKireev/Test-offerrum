
const Logo = () => {
  const widthWindow = window.innerWidth;
  return (
    <svg
      width={widthWindow > 620 ? '73' : '43'}
      height="29"
      viewBox="0 0 73 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <path
        d="M23.5782 0V29H20.0937L3.89098 6.23047H3.60061V29H0V0H3.48446L19.7453 22.8262H20.0356V0H23.5782Z"
        fill="white"
      />
      <path
        d="M29.5565 29V0H47.3853V3.11523H33.1571V12.9141H46.0496V16.0293H33.1571V29H29.5565Z"
        fill="white"
      />
      <path
        d="M50.6995 3.11523V0H73V3.11523H63.65V29H60.0494V3.11523H50.6995Z"
        fill="white"
      />
    </svg>
  );
};

export default Logo;
