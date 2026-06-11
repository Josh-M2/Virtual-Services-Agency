import { Link } from "react-router-dom";

type PrimaryButtonProps = {
  children: string;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "outline";
  className?: string;
};

const PrimaryButton = ({
  children,
  href,
  onClick,
  variant = "solid",
  className = "",
}: PrimaryButtonProps) => {
  const classes =
    variant === "solid"
      ? "inline-flex items-center justify-center rounded-xl border-0 bg-primary-gradient px-8 py-3 font-semibold text-white shadow-md transition-transform duration-200 ease-out hover:scale-105 hover:shadow-lg"
      : "inline-flex items-center justify-center rounded-lg border border-transparent bg-white px-6 py-3 font-bold transition-transform duration-200 ease-out hover:scale-105";
  const content =
    variant === "outline" ? (
      <span className="bg-primary-gradient bg-clip-text text-transparent">
        {children}
      </span>
    ) : (
      children
    );

  if (href) {
    return (
      <Link to={href} className={`${classes} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${classes} ${className}`}
    >
      {content}
    </button>
  );
};

export default PrimaryButton;
