export class User {
    email: string = "";
    password: string = "";
}

export class SignInUser extends User {
    type: string = "signin";

    constructor(email: string = "", password: string = "") {
        super();
        this.email = email;
        this.password = password;
        this.type = "signin";
    }

}

export class SignUpUser extends User {
    username: string = "";
    type: string = "signup";

    constructor(email: string = "", username: string = "") {
        super();
        this.username = username;
        this.email = email;
        this.type = "signup";


    }
}

