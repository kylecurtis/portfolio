import Link from "next/link";
import { alkatra } from "../fonts";

const Navbar = () => {
  return (
    <div className="absolute h-[75px] w-full hidden md:flex justify-between items-center px-8 bg-transparent text-ctp-text top-0 z-[2]">
      <div className="font-bold flex justify-center text-2xl">
        <div className={alkatra.className}>
          <Link href="/" className="text-ctp-text hover:text-white">
            Kyle Curtis
          </Link>
        </div>
      </div>
      <div>
        <Link
          href="#education"
          scroll={true}
          className="text-ctp-text hover:text-[white] ml-5"
        >
          Education
        </Link>
        <Link
          href="#certifications"
          scroll={true}
          className="text-ctp-text hover:text-[white] ml-5"
        >
          Certifications
        </Link>
        <Link
          href="#using"
          scroll={true}
          className="text-ctp-text hover:text-[white] ml-5"
        >
          Stack
        </Link>
        <Link
          href="/"
          scroll={false}
          className="text-ctp-text hover:text-[white] ml-5"
        >
          Experience
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
