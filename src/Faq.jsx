import { FaqItem } from "./FaqItem.jsx";
export function Question() {
  const QUESTIONS = [
    "Wat is een component?",
    "Waarom miauwen knoppen niet?",
    "Hoe programmeer ik een boterham?",
    "Wat doet useState precies?",
    "Kan een array gevoelens hebben?",
    "Waarom werkt mijn code niet?",
    "Wat is het verschil tussen == en ===?",
    "Hoeveel React developers heb je nodig om een lamp te vervangen?",
    "Moet ik mijn code refactoren?",
  ];
  const ANSWERS = [
    "Een kleiner, opzichzelfstaand deel van een groter geheel. In React is een component een kleiner onderdeel van de gehele applicatie. Componenten kun je hergebruiken en makkelijk onderhouden of verdelen over developers.",
    "Omdat knoppen zelden katten zijn. Tenzij je natuurlijk een hele rare interface hebt ontworpen.",
    "Je begint met twee strings, voegt een beetje logica toe en voor je het weet heb je een sandwich die zichzelf eet bij een infinite loop.",
    "Het maakt het mogelijk om in functionele componenten lokaal state bij te houden. Je roept useState aan met een beginwaarde en krijgt een getter en setter terug.",
    "Alleen als je er een map overheen gooit met 'empathyFunction'.",
    "Waarschijnlijk door een typfout, een ontbrekende dependency, een race condition, of omdat het maandag is",
    "`==` vergelijkt waarden met typeconversie. `===` vergelijkt zowel type als waarde. Gebruik altijd `===`, tenzij je met opzet rare bugs wil.",
    "Geen. Ze declareren gewoon een nieuwe lamp met een andere state.",
    "Als je deze vraag stelt: ja.",
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
