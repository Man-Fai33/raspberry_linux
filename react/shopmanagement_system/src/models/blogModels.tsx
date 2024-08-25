
interface Content {
    type: string;
    value: string;
}

interface objectID {
    _id: string;
}

export class Blog {
    _id: string = "";
    ownerId: string = "";
    title: string = "";
    content: Content[] = [];
    tags: string[] = [];
    like: objectID[] = [];
    keeper: objectID[] = [];
    createdAt: Date = new Date();
    comments: string[] = [];
    status: string = "";
    constructor(data: any) {
        Object.assign(this, data);
    }
}

