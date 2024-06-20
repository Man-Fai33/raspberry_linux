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
        // 如果 input 是空字符串、未定义、null 或 '0'，返回 false；否则返回 true
        return (input === '' || input === undefined || input === null || input === '0') ;
    }
    

}

export default {
    FuncHelper
}