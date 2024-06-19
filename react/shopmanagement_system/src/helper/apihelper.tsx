import URL from './url'

const methods = {
    post: ('POST'),
    get: ('GET'),
    put: ('PUT'),
    patch: ('PATCH'),
    delete: ('DELETE'),
}
const header = {
    json: ({ Accept: 'application/json', 'Content-Type': 'application/json', })
}

export const ApiHelper = {
    AsyncUsers: async () => {
        let response = await fetch(URL.Url.User, {
            headers: header.json,
            method: methods.get,
        })
        let responseJson = await response.json();

        return responseJson;
    },

    AsyncValidateUser: async (inputuni: string, pwd: string) => {
        let response = await fetch(URL.Url.User, {
            headers: header.json,
            method: methods.post,
            body: JSON.stringify({
                type: "signin",
                vainput: inputuni,
                password: pwd
            })
        })
        let responseJson = await response.json();
        return responseJson;
    },

    AsyncUserCreate: async (user: {
        username: string,
        password: string,
        email: string,
    }) => {
        console.log(user)
        try {
            let jsonBody = JSON.stringify({
                requesterid: null,

                user: user
            })
            console.log(jsonBody)
            let url = URL.Url.User
            let response = await fetch(url, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                method: "post",
                body: jsonBody
            })
            let respJson = await response.json();
            return respJson;

        } catch (e) {
            console.log(e)
            let msg = {};

            return msg;
        }
    },
}



export default {
    ApiHelper
}