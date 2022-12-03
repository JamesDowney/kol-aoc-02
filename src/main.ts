import { bufferToFile, fileToBuffer, print } from "kolmafia";

export default function main(): void {
  const input = fileToBuffer("input.txt").trim().split(/\n/g);
  let score = 0;
  let decryptedScore = 0;
  const values = new Map<string, number>([
    ["A", 3], // rock
    ["B", 2], // paper
    ["C", 1], // scissors
    ["X", 1], // rock
    ["Y", 2], // paper
    ["Z", 3], // scissors
  ]);
  const goals = new Map([
    ["A", ["Z", "X", "Y"]],
    ["B", ["X", "Y", "Z"]],
    ["C", ["Y", "Z", "X"]],
  ]);

  input.forEach((element) => {
    const opponent = values.get(element[0])!;
    const you = values.get(element[2])!;
    const outcome = (you + opponent) % 3;
    if (outcome === 0) {
      score += you;
    } else if (outcome === 1) {
      score += you + 3;
    } else if (outcome === 2) {
      score += you + 6;
    }
  });

  input.forEach((element) => {
    const opponent = element[0]!;
    const outcome = values.get(element[2])! - 1;
    const you = values.get(goals.get(opponent)![outcome])!;
    if (outcome === 0) {
      decryptedScore += you;
    } else if (outcome === 1) {
      decryptedScore += you + 3;
    } else if (outcome === 2) {
      decryptedScore += you + 6;
    }
  });

  print("your score is: " + score);
  print("your decrypted score is: " + decryptedScore);
}
