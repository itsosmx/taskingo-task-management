export function RandomColor() {
  const h = Math.floor(Math.random() * 360);
  return `hsl(${h}, 40%, 60%)`;
}
