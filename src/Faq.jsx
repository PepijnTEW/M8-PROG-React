import { FaqItem } from "./FaqItem.jsx";
export function Question() {
  const QUESTIONS = [
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
  const ANSWERS = [
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
    <section
      id="contact"
      className="w-3xl h-md flex flex-col bg-[#1B263B] border-[#3A5F7A] border-3 rounded-lg p-4 mt-4 mb-4 gap-4"
    >
      <h2 className="text-xl">FAQ</h2>

      <ol className="flex flex-col gap-2">
        {QUESTIONS.map((item, index) => (
          <div>
            <FaqItem
              key={index}
              number={index + 1}
              question={item}
              answer={ANSWERS[index]}
            />
          </div>
        ))}
      </ol>
    </section>
  );
}
