const Footer = () => {
  const date = new Date();
  return (
    <section className="text-center border-t bg-gradient-to-tl from-zinc-800 to-slate-700/90  text-white border-primary/40 py-8">
      <p className="opacity-40 hover:cursor-pointer hover:opacity-70 duration-200 transition-all text-base">
        &copy; {date.getFullYear()} Yared B.
      </p>
    </section>
  );
};
export default Footer;
