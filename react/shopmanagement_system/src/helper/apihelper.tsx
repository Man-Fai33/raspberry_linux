import { SignInUser, SignUpUser } from '../models/userModels'
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

    AsyncValidateUser: async (user: SignInUser) => {
        let response = await fetch(URL.Url.User, {
            headers: header.json,
            method: methods.post,
            body: JSON.stringify(user)
        })
        let responseJson = await response.json();
        return responseJson;
    },

    AsyncUserCreate: async (user: SignUpUser) => {
        try {

            console.log(user)
            let url = URL.Url.User
            let response = await fetch(url, {
                headers: header.json,
                method: methods.post,
                body: JSON.stringify(user),
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