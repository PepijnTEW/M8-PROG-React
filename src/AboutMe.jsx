import logo from "./assets/img/about.jpg";
export function AboutMe() {
  return (
    <section className="aboutMeContainer w-3xl h-md flex bg-[#1B263B] border-[#778DA9] border-3 rounded-lg p-4 mt-4 mb-4 gap-8">
      <img src={logo} alt="About Me" className="aboutMeLogo w-3xs" />
      <div className="overflow-auto break-words">
        <h1 className="text-3xl">About Me</h1>{" "}
        <p>
          asdfasdfasdfjasdkjfhakjshdfkjsakjdfhksadhfksakdjfhkjsadfkjsadkjfkjsadfksadfaskdfkjasdfkjhsakdjfkjsafdasdlkflsajdlfasldflasdaldlksalkfsalflksaj
        </p>
      </div>
    </section>
  );
}
