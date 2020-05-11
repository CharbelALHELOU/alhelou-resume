export const SERVER_URL = `http://localhost:3000/`;

export interface IMenuLangSet{
    home:string,
    contact:string,
    download:string
}

export interface IContactLangSet{
    name:string,
    email:string,
    send:string,
    reset:string,
    thank: string
}

export interface ICommentLangSet{
    title:string,
    scroll:string,
    add:string,
    post:string,
    thank:string
}

export interface IFollowLangSet{
    followMe: string
}

export interface IHomeLangSet{
    caption: string,
    languages: string,
    ITSkills: string,
    arabic: string,
    french: string,
    english: string,
    spanish: string,
    hobbies: string,
    basket:string,
    coach: string,
    player: string,
    guitar: string,
    piano: string
}


export interface ILangSet{
    "menu":IMenuLangSet
    "home":IHomeLangSet
    "follow":IFollowLangSet
    "comment":ICommentLangSet
    "contact":IContactLangSet
}

export interface ILang{
    "en":ILangSet,
    "fr":ILangSet
}

export type AllowedLangs = "en" | "fr"

export const LANGS:ILang = {
    "en":{
        "menu":{
            home:"Home",
            contact:"Contact Me",
            download:"Download PDF"
        },
        "home":{
            caption: "I'm a fourth year student at ENSTA Paris, majoring in Architecture and Security of Information Systems.",
            languages: "languages",
            ITSkills: "IT Skills",
            arabic: "arabic",
            french: "french",
            english: "english",
            spanish: "spanish",
            hobbies: "hobbies",
            basket:"1st place Lebanese high school championship 2016",
            coach: "Coach for Juniors",
            player: "Player lebanese 3rd division 2017-2018",
            guitar: "4 years",
            piano: "7 years"
        },
        "follow":{
            followMe:"follow me"
        },
        "comment":{
            title:"What people say about me",
            scroll:"scroll to see more comments",
            add:"i would love to read what you think of me",
            post:"post",
            thank:"Thank you for your comment"
        },
        "contact":{
            name:"name",
            email:"email",
            send:"send",
            reset:"reset",
            thank:"Thank you for your message"
        }
    },
    "fr":{
        "menu":{
            home: "Accueil",
            contact:"Me Contacter",
            download:"Telecharger PDF"
        },
        "home":{
            caption: "Etudiant en 2eme annee a l'ENSTA Paris, specialise en Architecture et Securite des Systemes d'Information",
            languages: "langues",
            ITSkills: "Competences Informatiques",
            arabic: "arabe",
            french: "francais",
            english: "anglais",
            spanish: "espagnole",
            hobbies: "centre d'interet",
            basket:"1ere place championnat scolaire libanais 2016",
            coach: "Entraineur",
            player: "Joueur 3eme division 2017-2018",
            guitar: "4 ans",
            piano: "7 ans"
        },
        "follow":{
            followMe: "Suivez moi sur"
        },
        "comment":{
            title:"Ce que les gens pensent de moi",
            scroll:"glisser pour voir plus de commentaires",
            add:"Votre avie m'interesse",
            post:"poster",
            thank:"Merci pour ton commentaire"
        },
        "contact":{
            name:"nom",
            email:"adresse mail",
            send:"Envoyer",
            reset:"Reinitialiser",
            thank:"Merci pour votre message"
        }
    }
}
