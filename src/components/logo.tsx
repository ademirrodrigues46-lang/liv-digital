import logo from "../assets/liv-logo.png";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-12 w-12" }: LogoProps) {
  return (
    <img
      src={logo}
      alt="LIV Digital"
      className={`${className} object-contain select-none`}
      draggable={false}
    />
  );
}