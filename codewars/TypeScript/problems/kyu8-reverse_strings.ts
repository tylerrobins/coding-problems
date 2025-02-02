export function solution(str: string): string {
  return [...str].reverse().join(); 
}

console.log(solution("Hello World!"));
console.log(solution("Teststring"));
