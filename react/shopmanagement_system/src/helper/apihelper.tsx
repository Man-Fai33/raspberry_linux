import URL from './url'

export const ApiHelper = {
    AsyncUsers: async () => {
        let url = URL.Url.User
        let response = await fetch(url, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'get',
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