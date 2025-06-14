import ore from "./assets/img/ore.png";
import { useState } from "react";

export function CookieClicker() {
  const [score, setScore] = useState(0);
  const [villagers, setVillagers] = useState(0);
  const villagerCost = Math.floor(20 * Math.pow(1.15, villagers));
  function CookieClick() {
    setScore(score + 1 + villagers);

    console.log(score);
  }
  function buyVillager() {
    if (score >= villagerCost) {
      setVillagers(villagers + 1);
      setScore(score - villagerCost);
    }
  }
  return (
    <section
      id="games"
      className="cookieClicker w-3xl h-full flex justify-center bg-[#1B263B] border-[#3A5F7A] border-3 rounded-lg p-4 mt-4 mb-4 gap-8"
    >
      <button
        className="cookieButton w-xs cursor-pointer p-2"
        onClick={CookieClick}
      >
        <img
          src={ore}
          alt="minecraft diamond ore"
          className="transition-transform duration-100 active:scale-95"
        />
      </button>
      <div className="w-xs flex flex-col gap-2">
        <p className="bg-[#415A77] border-[#4B7A94] border-2 rounded-lg p-2 text-lg">
          Diamonds Owned: {score}
        </p>
        <div className="flex h-full gap-2">
          <div className="flex flex-col w-lg gap-2 bg-[#415A77] border-[#4B7A94] border-2 rounded-lg p-2 text-lg">
            <p className="bg-[#415A77] border-[#5E8FA8] border-2 rounded-lg p-2 text-lg">
              Villagers: {villagers}
            </p>
          </div>
          <div className="flex flex-col items-center w-full gap-2 bg-[#415A77] border-[#4B7A94] border-2 rounded-lg p-2 text-lg">
            <button
              type="button"
              className="bg-[#3D8B60] border-[#5C9E70] border-2 rounded-lg p-2 w-full transition-transform duration-100 active:scale-95 cursor-pointer"
              onClick={buyVillager}
            >
              buy
            </button>
            <p className="text-xs">Price: {villagerCost}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
