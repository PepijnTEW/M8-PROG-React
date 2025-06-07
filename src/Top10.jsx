import { Top10Item } from "./Top10Item.jsx";
export function Top10() {
  return (
    <section className="top10Container w-3xl h-md flex flex-col bg-[#1B263B] border-[#3A5F7A] border-3 rounded-lg p-4 mt-4 mb-4 gap-4">
      <h2 className="text-xl">Top 10 Minecraft items</h2>
      <div>
        <ol className="flex flex-col gap-2">
          <Top10Item
            number="1. "
            title="Wood"
            update="Added in update: Classic 0.0.14a"
          />
          <Top10Item
            number="2. "
            title="Diamonds"
            update="Added in update: Indev 0.31"
          />
          <Top10Item
            number="3. "
            title="Crafting Table"
            update="Added in update: Indev 0.31"
          />
          <Top10Item
            number="4. "
            title="Pickaxe"
            update="Added in update: Indev 0.31"
          />
          <Top10Item
            number="5. "
            title="Sword"
            update="Added in update: Indev 0.31"
          />
          <Top10Item
            number="6. "
            title="TNT"
            update="Added in update: Classic 0.0.14a"
          />
          <Top10Item
            number="7. "
            title="Enchanting Table"
            update="Added in update: Beta 1.9"
          />
          <Top10Item
            number="8. "
            title="Iron"
            update="Added in update: Indev 0.31"
          />
          <Top10Item
            number="9. "
            title="Bow"
            update="Added in update: Indev 0.31"
          />
          <Top10Item
            number="10. "
            title="Enchanting Golden Apple"
            update="Added in update: 1.3.1"
          />
        </ol>
        <p className="text-xs pt-1">
          Note: Indev 0.31 refers to 34 different versions of Indev released
          between December 23, 2009, and February 6, 2010
        </p>
      </div>
    </section>
  );
}
