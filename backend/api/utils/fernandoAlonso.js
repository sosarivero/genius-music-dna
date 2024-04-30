function getRandomAlonso() {
  // Math.floor(Math.random() * 10);
  return `http://localhost:3000/el_plan/${Math.floor(Math.random() * 10)}.png`;
}

module.exports = { getRandomAlonso };
