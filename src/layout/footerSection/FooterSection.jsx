const FooterSection = () => {
  return (
    <footer className="bg-[var(--color7)] mt-8 p-[10px] text-sm  border-t border-gray-200">
      <div className="flex items-center gap-[10px]">
        <span className="logoFoot">
          <img
            src="/img/logo-footer.png"
            alt=""
            className="max-w-full block mx-auto h-[20px]"
          />
        </span>{" "}
        <span className="txt-copyright text-[#919191] montserrat-regular text-extraSmallDescription">
          Membership Management - Empowering Unions through Technology for Over
          20 Years
        </span>
      </div>
    </footer>
  );
};

export default FooterSection;
