export interface IUser{
    userName:string;
    password:string;
    email:string;
    gender:IGender;
}

export enum IGender{
    male,
    female
}