import { Top10Item } from "./Top10Item.jsx";
export function Top10() {
  const TITLES = [
    "Wood",
    "Diamonds",
    "Crafting Table",
    "Pickaxe",
    "Sword",
    "TNT",
    "Enchanting Table",
    "Iron",
    "Bow",
    "Enchanted Golden Apple",
  ];
  const UPDATES = [
    "Added in update: Classic 0.0.14a",
    "Added in update: Indev 0.31",
    "Added in update: Indev 0.31",
    "Added in update: Indev 0.31",
    "Added in update: Indev 0.31",
    "Added in update: Classic 0.0.14a",
    "Added in update: Beta 1.9",
    "Added in update: Indev 0.31",
    "Added in update: Indev 0.31",
    "Added in update: 1.3.1",
  ];
  return (
    <section className="top10Container w-3xl h-md flex flex-col bg-[#1B263B] border-[#3A5F7A] border-3 rounded-lg p-4 mt-4 mb-4 gap-4">
      <h2 className="text-xl">Top 10 Minecraft items</h2>
      <div>
        <ol className="flex flex-col gap-2">
          {TITLES.map((item, index) => (
            <div>
              <Top10Item
                key={index}
                number={index + 1}
                title={item}
                update={UPDATES[index]}
              />
            </div>
          ))}
        </ol>
        <p className="text-xs pt-1">
          Note: Indev 0.31 refers to 34 different versions of Indev released
          between December 23, 2009, and February 6, 2010
        </p>
      </div>
    </section>
  );
}
