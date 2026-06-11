type SectionHeaderProps = {
  title: string;
  description?: string;
  className?: string;
};

const SectionHeader = ({ title, description, className = "" }: SectionHeaderProps) => {
  return (
    <div className={`text-center ${className}`}>
      <h1 className="font-montserrat text-3xl font-bold text-black md:text-4xl">
        {title}
      </h1>
      {description ? <p className="mt-4 text-black">{description}</p> : null}
    </div>
  );
};

export default SectionHeader;
