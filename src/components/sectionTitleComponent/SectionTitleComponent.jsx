const SectionTitleComponent = ({ className, children }) => {
  return (
    <div
      className={`${className} sectionTitle flex gap-[10px] bg-[var(--color5)] items-center p-[10px]`}
    >
      {children}
    </div>
  );
};

export default SectionTitleComponent;
