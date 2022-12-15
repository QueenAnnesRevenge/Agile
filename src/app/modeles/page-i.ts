export interface PageI {
    titre:string; // variable obligatoire
    intro?:string;
    contenue?:string; // varibale optionnelle
}

export interface PersonneI {
    nom :string;
    prenom: string;
    pseudo :string;
    sexe: string;
    mdp: string;
    avatar?: string; // optional
    mail: string;
    tel: number; 
    club?: string; // optional
    statut: "admin" | "joueur"; 
}

export interface TournoisI {
    nom:string;
    nb_match:number;
    nb_participants:number;
    terrain: string;
    format:string; 
    tab_joueur: Array<PersonneI>;
}

export interface ClubI{
    gerant: PersonneI;
    nom: string;
    terrain: string;
}
