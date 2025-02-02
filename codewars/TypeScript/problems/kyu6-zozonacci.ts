/**
1. n is given as integer and p is given as a list of as abbreviations as strings (e.g. ["fib", "jac", "pad"])
2. When n is 0 or p is empty return an empty list.
3. The first four elements of the sequence are determined by the first abbreviation in the pattern (see the table below).
4. Compute the fifth element using the formula corespoding to the first element of the pattern, the sixth element using the formula for the second element and so on. (see the table below and the examples)
5. If n is more than the length of p repeat the pattern.
+------------+--------------+------------------------------------------+---------------------+
|  sequence  | abbreviation |         formula for n-th element         | first four elements |
+------------|--------------+------------------------------------------|---------------------|
| fibonacci  |     fib      | a[n] = a[n-1] + a[n-2]                   |     0, 0, 0, 1      |
| jacobsthal |     jac      | a[n] = a[n-1] + 2 * a[n-2]               |     0, 0, 0, 1      |
| padovan    |     pad      | a[n] = a[n-2] + a[n-3]                   |     0, 1, 0, 0      |
| pell       |     pel      | a[n] = 2 * a[n-1] + a[n-2]               |     0, 0, 0, 1      |
| tetranacci |     tet      | a[n] = a[n-1] + a[n-2] + a[n-3] + a[n-4] |     0, 0, 0, 1      |
| tribonacci |     tri      | a[n] = a[n-1] + a[n-2] + a[n-3]          |     0, 0, 0, 1      |
+------------+--------------+------------------------------------------+---------------------+
**/

export function zozonacci (pattern: string[], length: number): number[] {
    if ( length === 0 || pattern.length === 0 ) return [];
    const seqDic: { [key: string]: number[] } = {
        'fib': [0,0,0,1],
        'jac': [0,0,0,1],
        'pad': [0,1,0,0],
        'pel': [0,0,0,1],
        'tet': [0,0,0,1],
        'tri': [0,0,0,1]
    };

    const result: number[] = seqDic[pattern[0]] 

    if ( length <= 4 ) {
        return result.slice(0,length);
    } else {
        for (let i = 4; i < length; i++){
            const patternIdx: number = (i - 4) % pattern.length;     
            if(pattern[patternIdx] === 'fib') {
                let fib: number = result[i-1] + result[i-2];
                result.push(fib);
            } else if (pattern[patternIdx] === 'jac') {
                const jac: number = result[i-1] + 2 * result[i-2];
                result.push(jac);
            } else if (pattern[patternIdx] === 'pad') {
                const pad: number = result[i-2] + result[i-3];
                result.push(pad);
            } else if (pattern[patternIdx] === 'pel') {
                const pel: number = 2 * result[i-1] + result[i-2];
                result.push(pel);
            } else if (pattern[patternIdx] === 'tet') {
                const tet: number = result[i-1] + result[i-2] + result[i-3] + result[i-4];
                result.push(tet);
            } else if (pattern[patternIdx] === 'tri') {
                const tri: number = result[i-1] + result[i-2] + result[i-3];
                result.push(tri);
            }
        }
        return result; 
    }
}

    console.log(zozonacci([], 10).every((num, i) => num === [][i]));
    console.log(zozonacci(['fib'], 0).every((num, i) => num === [][i]));
    console.log(zozonacci(['fib'], 3).every((num, i) => num === [0,0,0][i]));
    console.log(zozonacci(['fib'], 4).every((num, i) => num === [0,0,0,1][i]));
    console.log(zozonacci(['fib'], 10).every((num, i) => num ===  [0, 0, 0, 1, 1, 2, 3, 5, 8, 13][i]));
    console.log(zozonacci(['tri'], 10).every((num, i) => num === [0, 0, 0, 1, 1, 2, 4, 7, 13, 24][i]));
    console.log(zozonacci(['tet'], 10).every((num, i) => num === [0, 0, 0, 1, 1, 2, 4, 8, 15, 29][i]));
    console.log(zozonacci(['pad'], 10).every((num, i) => num === [0, 1, 0, 0, 1, 0, 1, 1, 1, 2][i]));
    console.log(zozonacci(['pel'], 10).every((num, i) => num === [0, 0, 0, 1, 2, 5, 12, 29, 70, 169][i]));
    console.log(zozonacci(['jac'], 10).every((num, i) => num === [0, 0, 0, 1, 1, 3, 5, 11, 21, 43][i]));
    console.log(zozonacci(['fib', 'tri'], 10).every((num, i) => num === [0, 0, 0, 1, 1, 2, 3, 6, 9, 18][i]));
    console.log(zozonacci(['tri', 'fib'], 10).every((num, i) => num === [0, 0, 0, 1, 1, 2, 4, 6, 12, 18][i]));
    console.log(zozonacci(['pad', 'fib'], 10).every((num, i) => num === [0, 1, 0, 0, 1, 1, 1, 2, 2, 4][i]));
    console.log(zozonacci(['tri', 'tet'], 10).every((num, i) => num === [0, 0, 0, 1, 1, 2, 4, 8, 14, 28][i]));
    console.log(zozonacci(['fib', 'pel', 'tri'], 10).every((num,i) => num === [0, 0, 0, 1, 1, 3, 5, 8, 21, 34][i]));
    console.log(zozonacci(['tet', 'jac'], 10).every((num,i) => num === [0, 0, 0, 1, 1, 3, 5, 11, 20, 42][i]));
    //1,2,3,4,5,6,7,8,9,0
    //1,2,3,4,1,2,1,2,1,2
    //0,0,0,1,1,1,3,1,3,2,2,3,3,5,2,7,6,5,6,5,5,4,7,8,7
