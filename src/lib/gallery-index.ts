export function moveIndex(index: number, direction: number, length: number): number {
  if (length <= 0) return 0;
  return (((index + direction) % length) + length) % length;
}
