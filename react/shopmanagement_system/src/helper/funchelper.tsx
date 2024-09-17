export const FuncHelper = {
    trimSpace: (str: string) => {
        const reg = /\s+/g;
        return str.replace(reg, '')
    },
    validateEmail(email: string) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    },
    validatePwd(pwd: string) {
        return pwd === "" ? false : true
    },
    validateInputError(input: string) {
        return (input === '' || input === undefined || input === null || input === '0');
    },
    textformat(str: string | undefined) {
        return <pre>{str}</pre>
    },
    CountOfTwo(input: number): number {
        if (input % 2 === 0) {
            return Math.round(input)
        }
        return Number(input.toFixed(2))
    },
    CountOfOne(input: number): number {
        if (input % 2 === 0) {
            return Math.round(input)
        }
        return Number(input.toFixed(1))
    },
    compareNumbers(a: number, b: number) {
        return a - b;
    }

}

export default {
    FuncHelper
}