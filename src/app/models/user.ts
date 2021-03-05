export class User {
    public id: string;
    public name: {first: string, last: string};
    public phone: string;
    public email: string;
    public picture: {large: string, medium: string, thumbnail: string};
    public profession: {type: string, field: string};
    public biography: string;


    constructor(id: string,
        name: {first: string, last: string},
        phone: string, email: string,
        picture: {large: string, medium: string, thumbnail: string},
        profession: {type: string, field: string},
        biography: string
        ){
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.picture = picture;
        this.profession = profession;
        this.biography = biography;
    }
}

export default User

