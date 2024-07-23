const Footer = () => {
  const date = new Date();
  return (
    <section className="text-center py-8 text-black border-t border-gray-900/10 bg-gray-100">
      <p className="opacity-60 hover:cursor-pointer hover:opacity-70 duration-200 transition-all text-base">
        &copy; {date.getFullYear()} Yared B.
      </p>
    </section>
  );
};
export default Footer;
