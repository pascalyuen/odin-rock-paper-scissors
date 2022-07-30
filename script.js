function getComputerChoice() {
  const objects = ["Rock", "Paper", "Scissors"]
  let random = Math.floor(Math.random() * objects.length);
  return objects[random];
}