interface Link {
    link: string;
    name: string;
}

interface Education {
    year: string;
    school: string;
}

interface Work {
    company: string;
    position: string;
    duration: string;
}

class Skill {
    name: string = "";
    num: number = 0;
}

export class Technology {
    frontend: Skill[] = [];
    backend: Skill[] = [];
    language: Skill[] = [];
    database: Skill[] = [];
    other: Skill[] = [];
}

export interface Project {
    title: string;
    description: string;
    year: string;
    photo: string[];
    link: string;
}

export class CV {
    _id: string = "";
    username: string = "";
    englishname: string = "";
    email: string = "";
    professional: string = "";
    link: Link[] = [];
    phone: string = "";
    futureplan: string = "";
    introduction: string = "";
    background: string = "";
    education: Education[] = [];
    work: Work[] = [];
    workexperienced: string = "";
    technology: Technology = new Technology();
    project: Project[] = [];
    date: string = "";
    iconUrl: string = "";

    constructor(data: any) {
        Object.assign(this, data);
    }
}
