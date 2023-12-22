import { Translations } from "./translations";

export const deploymentsTranslations : Translations = {
    EN: {
        title: "Deployments",
        subTitle: "My deployed projects",
        description: "Here are the projects that I have developed and their live deployed statuses ! 🟢",
    },
    FR: {
        title: "Déploiements",
        subTitle: "Mes projets déployés",
        description: "Voici les projets que j'ai développé et leurs statuts de déploiements en direct ! 🟢",
    }
};

type Deployment = {
    name: string;
    image: string;
    description: {[key: string]: string};
    status?: string;
    statusLink: string;
    githubLink: string;
}

export const deployments: Deployment[] = [
    {
        "name": "Render-API",
        "description": {
            "FR": "Test-FR",
            "EN": "Test-EN"
        },
        "statusLink": "https://render-api-gi2s.onrender.com",
        "status": "pending",
        "githubLink": "https://github.com/Fyleek/render-api",
        "image": ""
    },
    {
        "name": "Finapi",
        "description": {
            "FR": "Test-FR",
            "EN": "Test-EN"
        },
        "statusLink": "",
        "githubLink": "https://github.com/Fyleek/finapi",
        "image": ""
    },
    {
        "name": "Portfolio",
        "description": {
            "FR": "Test-FR",
            "EN": "Test-EN"
        },
        "statusLink": "https://o-d.me/",
        "status": "pending",
        "githubLink": "https://github.com/Fyleek/o-d.me",
        "image": ""
    }
];