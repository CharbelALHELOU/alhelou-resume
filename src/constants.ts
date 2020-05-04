export interface IMenuLangSet{
    home:string,
    education:string,
    experience:string,
    portofolio:string,
    contact:string
}

export interface ILangSet{
    "menu": IMenuLangSet
}

export interface Ilang{
    "en":ILangSet,
    "fr":ILangSet
}

export type AllowedLangs = "en" | "fr";

export const LANGS: Ilang ={
    "en":{
        "menu":{
            home:"Home",
            education:"Education",
            experience:"Experience",
            portofolio:"Portfolio",
            contact:"Contact"
        }
    },
    "fr":{
        "menu":{
            home:"Acceuil",
            education:"Ma Formation",
            experience:"Mes Experiences Pro",
            portofolio:"Portofolio",
            contact:"Me Contacter"
        }
    }
}