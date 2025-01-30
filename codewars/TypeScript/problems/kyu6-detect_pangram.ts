export const isPangram = (phrase: string): boolean => {
    let uniqueChar:string[] = [];
    for (let i = 0; i < phrase.length; i++){
        const lowerChar = phrase[i].toLowerCase();
        if (/[a-z]/.test(lowerChar) && !uniqueChar.includes(lowerChar)){
            uniqueChar.push(lowerChar);
        }
    }
    return uniqueChar.length === 26;
}
