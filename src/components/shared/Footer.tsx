import Image from "next/image";
import footerLogo from "@/assets/footer_logo.png";

const Footer = () => {
  return (
    <div className="bg-[#090A0D] border-t bordert-[#1A1D24]">
      <div className="flex flex-col md:flex-row items-center justify-between container mx-auto px-4 py-8">
        <div className="flex items-center justify-between gap-2">
          <Image src={footerLogo} alt="footer logo"></Image>
          <h2 className="text-white font-bold">FITLOG</h2>
        </div>

        <div>
          <p className="text-[#6B7280] text-[12px] text-center">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
