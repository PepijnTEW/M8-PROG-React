export function Navigation() {
  return (
    <nav className="z-2 fixed h-20 bg-[#1B263B] border-[#3A5F7A] border-3 w-xl flex rounded-lg mt-4 justify-center items-center gap-8">
      <a
        href="#"
        className="bg-[#415A77] border-[#5E8FA8] hover:border-[#6da2bd] border-2 rounded-lg p-2 px-8 text-lg cursor-pointer"
      >
        About
      </a>
      <a
        href="#games"
        className="bg-[#415A77] border-[#5E8FA8] hover:border-[#6da2bd] border-2 rounded-lg p-2 px-8 text-lg cursor-pointer"
      >
        Games
      </a>
      <a
        href="#contact"
        className="bg-[#415A77] border-[#5E8FA8] hover:border-[#6da2bd] border-2 rounded-lg p-2 px-8 text-lg cursor-pointer"
      >
        Faq
      </a>
    </nav>
  );
}
