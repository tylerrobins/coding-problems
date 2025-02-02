export const digitize = (n: number): number[] => {
    const strN: string = n.toString();
    const digitizedArr: number[] = []
    for (let i = strN.length-1; i >= 0; i--){
        digitizedArr.push(Number(strN[i]))
    }
    return digitizedArr;
};
