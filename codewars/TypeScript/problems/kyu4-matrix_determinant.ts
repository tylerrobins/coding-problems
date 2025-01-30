export function determinant(m:number[][]) {
    if (m.length === 1) {
        return m[0][0]
    }
    if (m.length === 2) {
        return m[0][0] * m[1][1] - m[0][1] * m[1][0];
    }
    else {
        let result: number = 0
        m[0].forEach((elem,key) => {
            const newArr: number[][] = m
                .map(row => [...row])
            .filter((_,i) => i !== 0)
            .map(row => row.filter((_,j) => j !== key)) 
            const sign = key % 2 === 0 ? 1 : -1
            const deterOutput = determinant(newArr)
            result += sign * elem * deterOutput;
        })  
        return result;
    }
}

//TEST INPUTS
console.log(determinant([[1, 3], [2, 5]]))
console.log(determinant([[2, 5, 3], [1, -2, -1], [1, 3, 4]]))
