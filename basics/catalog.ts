type Resource = {
  id: number;
  title: string;
  minutes: number;
};

const resources: Resource[] = [
  { id: 1, title: "Основи Git та GitHub", minutes: 10 },
  { id: 2, title: "Вступ до TypeScript", minutes: 20 },
  { id: 3, title: "Архітектура мобільних застосунків", minutes: 30 }
];

function selectResources(items: Resource[], maxMinutes: number): Resource[] {
  return items.filter((item) => item.minutes <= maxMinutes);
}

// Перевірка межі 20 хв
const filteredMax20 = selectResources(resources, 20);
console.log("Ресурси (до 20 хв включно):", filteredMax20);
console.log("Кількість:", filteredMax20.length);

// Перевірка межі 0 хв
const filteredMax0 = selectResources(resources, 0);
console.log("Ресурси (до 0 хв включно):", filteredMax0);
console.log("Кількість:", filteredMax0.length);