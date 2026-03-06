export function createTask(text) {
  const li = document.createElement("li");
  li.textContent = text;
  return li;
}