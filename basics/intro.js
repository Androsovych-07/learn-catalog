const catalogName = "Навчальний каталог розробника";

function getDurationCategory(minutes) {
  if (minutes <= 15) {
    return "Короткий інтенсивний модуль";
  } else {
    return "Повноцінне поглиблене заняття";
  }
}

console.log(`Каталог: ${catalogName}`);
console.log(`Тривалість 15 хв: ${getDurationCategory(15)}`);
console.log(`Тривалість 16 хв: ${getDurationCategory(16)}`);