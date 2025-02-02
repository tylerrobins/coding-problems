export class Kata {
  static highAndLow(numbers: string): string {
        const numArr: number[] = numbers.split(" ").map(elem => Number(elem));
        let lowest: number = numArr[0];
        let highest: number = numArr[0];
        numArr.forEach(num =>{
            lowest = num < lowest ? num : lowest;
            highest = num > highest ? num : highest;
        })
        return `${highest} ${lowest}`;
  }
}

console.log(Kata.highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
console.log(Kata.highAndLow("1 2 3"));
