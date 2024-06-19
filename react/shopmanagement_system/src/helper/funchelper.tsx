export const FuncHelper = {
    trimSpace: (str: string) => {
        const reg = /\s+/g;
        return str.replace(reg, '')
    },
    validateEmail: (email: string) => {
        // 簡單的電子郵件格式驗證
        return /\S+@\S+\.\S+/.test(email);
    },

}

export default {
    FuncHelper
}