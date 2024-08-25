import { SignInUser, SignUpUser, SignedUser } from '../models/userModels'
import URL, { Url } from './url'

const methods = {
    post: ('POST'),
    get: ('GET'),
    put: ('PUT'),
    patch: ('PATCH'),
    delete: ('DELETE'),
}
const header: Record<string, string> = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
}



export const ApiHelper = {
    AsyncUsers: async () => {
        let response = await fetch(URL.Url.User, {
            headers: header,
            method: methods.get,
        })
        let responseJson = await response.json();
        return responseJson;
    },

    AsyncValidateUser: async (user: SignInUser) => {
        let response = await fetch(URL.Url.User, {
            headers: header,
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
                headers: header,
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
    AsyncUploadImage: async (image: any, id: string, type: string) => {
        try {
            let data = new FormData();
            data.append('Image', image)
            data.append('id', id)
            data.append('type', type)
            let url = URL.Url.Upload
            let response = await fetch(url, {
                method: methods.post,
                body: data
            })
            let result = await response.json();
            return result
        } catch (e) {
            return e
        }

    },
    AsyncUserEdit: async (user: SignedUser) => {
        try {
            header['Authorization'] = `Bearer ${user.token}`;
            console.log(JSON.stringify(user))
            let response = await fetch(URL.Url.User, {
                headers: header,
                method: methods.put,
                body: JSON.stringify(user),
            })
            let respJson = await response.json();
            return respJson;
        } catch (e) {
            console.log(e)
            let msg = { message: e };
            return msg;
        }
    },
    AsyncBlogs: async () => {
        try {
            let response = await fetch(URL.Url.Blog, {
                headers: header,
                method: methods.get
            })
            let respJson = await response.json();
            return respJson
        } catch (e) {
            console.log(e)
            let msg = {};
            return msg;
        }
    },
    AsyncCV: async () => {
        try {
            let response = await fetch(URL.Url.CV, {
                headers: header,
                method: methods.get,

            })
            let respJson = await response.json();
            return respJson;
        } catch (e) {
            console.log(e)
            let msg = {};
            return msg;
        }
    }
}



// eslint-disable-next-line import/no-anonymous-default-export
export default {
    ApiHelper
}