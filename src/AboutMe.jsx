import logo from "./assets/img/about.jpg";
export function AboutMe() {
  return (
    <section className="aboutMeContainer w-3xl h-md flex bg-[#1B263B] border-[#3A5F7A] border-3 rounded-lg p-4 mt-28 mb-4 gap-8">
      <img src={logo} alt="About Me" className="aboutMeLogo w-2xs" />
      <div className="overflow-auto break-words">
        <h1 className="text-3xl">About Me</h1>{" "}
        <p className="">
          Hey! I’m Tyler, I’m 14, and I’m pretty sure I’m the smartest coder
          alive (okay, maybe just in my school for now 😎). I started coding
          when I was a kid, and now I’m creating games, bots, and mods like it’s
          second nature. When I’m not behind the keyboard, I’m ruling Minecraft,
          Redstone genius, PvP champ, and the guy who builds bases so good they
          should be in museums. Creative? Survival? Doesn’t matter. I dominate
          both.
        </p>
      </div>
    </section>
  );
}
