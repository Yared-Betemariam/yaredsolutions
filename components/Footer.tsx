const Footer = () => {
  const date = new Date();
  return (
    <section className="text-center py-6 text-black border-t border-gray-900/5">
      <p className="opacity-45 hover:cursor-pointer hover:opacity-50 duration-200 transition-all text-base">
        &copy; {date.getFullYear()} Yared B. All Rights Reserved.
      </p>
    </section>
  );
};
export default Footer;
