import { bufferToFile, fileToBuffer, print } from "kolmafia";

export default function main(): void {
  const input = fileToBuffer("input.txt").trim().split(/\n/g);
  const solution = input;
  solution.forEach((element) => {
    print(element);
  });
  bufferToFile(solution.join("\n"), "output.txt");
}
