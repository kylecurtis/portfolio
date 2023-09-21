import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

type CardTypes = {
  children: React.ReactNode;
}

const Card = ({ children }: CardTypes) => {
  return (
    <div
      className={`${inter.className} border-2 border-ctp-surface1 rounded-xl mt-8 p-4 bg-ctp-mantle flex items-center justify-center`}
    >
      <span className="text-ctp-text text-center flex flex-col align-middle">
        {children}
      </span>
    </div>
  );
};

export default Card;
