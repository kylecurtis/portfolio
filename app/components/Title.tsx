type TitleTypes = {
  title: string;
};

const Title = ({ title }: TitleTypes) => {
  return (
    <h2
      className="font-bold text-[1.5rem] text-center text-ctp-text"
    >
      {title}
    </h2>
  );
};

export default Title;
