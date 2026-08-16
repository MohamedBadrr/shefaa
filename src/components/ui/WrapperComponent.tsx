import type { ReactNode } from "react";

const WrapperComponent = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <section className={`px-6 md:px-10 lg:px-25 ${className}`}>
      {children}
    </section>
  );
};

export default WrapperComponent;
