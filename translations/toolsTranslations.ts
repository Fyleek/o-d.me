import { Translations } from "./translations";

export const toolsTranslations: Translations = {
    EN: {
        title: "Tools",
        subTitle: "My toolbox",
        description: "These are the tools that I recommend, I don't necessarily use some of them yet, but if they are in this list, it might not be long 😉",
        button: "Go",
    },
    FR: {
        title: "Outils",
        subTitle: "Ma boîte à outil",
        description: "Se sont les outils que je recommande,je n utilise pas forcément encore certain d entre eux, mais si ils se trouvent dans cette liste, ça risque de ne pas tarder 😉",
        button: "Visiter",
    }
};

type Tool = {
    name: string;
    category: { [key: string]: string };
    image: string;
    description: { [key: string]: string };
    link: string;
};


export const tools: Tool[] = [
    {
        "name": "Visual Studio Code",
        "category": {
            "FR": "Environnements de Développement Intégré (IDE)",
            "EN": "Integrated Development Environments (IDE)"
        },
        "description": {
            "FR": "Éditeur de code multiplateforme avec extensions variées",
            "EN": "Multi-platform code editor with various extensions"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "IntelliJ IDEA",
        "category": {
            "FR": "Environnements de Développement Intégré (IDE)",
            "EN": "Integrated Development Environments (IDE)"
        },
        "description": {
            "FR": "IDE Java avancé avec support pour multiples langages",
            "EN": "Advanced Java IDE with support for multiple languages"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "Eclipse",
        "category": {
            "FR": "Environnements de Développement Intégré (IDE)",
            "EN": "Integrated Development Environments (IDE)"
        },
        "description": {
            "FR": "Plate-forme de développement extensible pour Java et autres",
            "EN": "Extensible development platform for Java and others"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "PyCharm",
        "category": {
            "FR": "Environnements de Développement Intégré (IDE)",
            "EN": "Integrated Development Environments (IDE)"
        },
        "description": {
            "FR": "IDE Python avec support étendu pour frameworks web",
            "EN": "Python IDE with extended support for web frameworks"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "Sublime Text",
        "category": {
            "FR": "Environnements de Développement Intégré (IDE)",
            "EN": "Integrated Development Environments (IDE)"
        },
        "description": {
            "FR": "Éditeur de texte élégant pour code et prose",
            "EN": "Elegant text editor for code and prose"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "Xcode",
        "category": {
            "FR": "Environnements de Développement Intégré (IDE)",
            "EN": "Integrated Development Environments (IDE)"
        },
        "description": {
            "FR": "IDE Apple pour développement macOS et iOS",
            "EN": "Apple IDE for macOS and iOS development"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "Android Studio",
        "category": {
            "FR": "Environnements de Développement Intégré (IDE)",
            "EN": "Integrated Development Environments (IDE)"
        },
        "description": {
            "FR": "IDE officiel pour développement d'applications Android",
            "EN": "Official IDE for Android app development"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "PHPStorm",
        "category": {
            "FR": "Environnements de Développement Intégré (IDE)",
            "EN": "Integrated Development Environments (IDE)"
        },
        "description": {
            "FR": "IDE pour PHP, avec support pour HTML5, CSS, JS",
            "EN": "IDE for PHP, with support for HTML5, CSS, JS"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "WebStorm",
        "category": {
            "FR": "Environnements de Développement Intégré (IDE)",
            "EN": "Integrated Development Environments (IDE)"
        },
        "description": {
            "FR": "IDE pour JavaScript moderne et frameworks web",
            "EN": "IDE for modern JavaScript and web frameworks"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "Vim",
        "category": {
            "FR": "Environnements de Développement Intégré (IDE)",
            "EN": "Integrated Development Environments (IDE)"
        },
        "description": {
            "FR": "Éditeur de texte modulable pour programmation efficace",
            "EN": "Flexible text editor for efficient programming"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "Git",
        "category": {
            "FR": "Gestion de Version et Outils de Collaboration",
            "EN": "Version Control and Collaboration Tools"
        },
        "description": {
            "FR": "Système de contrôle de version distribué",
            "EN": "Distributed version control system"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "GitHub",
        "category": {
            "FR": "Gestion de Version et Outils de Collaboration",
            "EN": "Version Control and Collaboration Tools"
        },
        "description": {
            "FR": "Plateforme de développement collaboratif pour héberger des projets",
            "EN": "Collaborative development platform for hosting projects"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "GitLab",
        "category": {
            "FR": "Gestion de Version et Outils de Collaboration",
            "EN": "Version Control and Collaboration Tools"
        },
        "description": {
            "FR": "Plateforme web pour la gestion de version et CI/CD",
            "EN": "Web platform for version control and CI/CD"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "Docker",
        "category": {
            "FR": "Outils DevOps et Infrastructure",
            "EN": "DevOps and Infrastructure Tools"
        },
        "description": {
            "FR": "Plateforme de conteneurisation pour le développement logiciel",
            "EN": "Containerization platform for software development"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "OpenShift",
        "category": {
            "FR": "Outils DevOps et Infrastructure",
            "EN": "DevOps and Infrastructure Tools"
        },
        "description": {
            "FR": "Plateforme d'application containerisée basée sur Kubernetes",
            "EN": "Containerized application platform based on Kubernetes"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "Jenkins",
        "category": {
            "FR": "Outils de Déploiement et Intégration Continue (CI/CD)",
            "EN": "Deployment and Continuous Integration (CI/CD) Tools"
        },
        "description": {
            "FR": "Outil d'automatisation pour l'intégration et la livraison continues",
            "EN": "Automation tool for continuous integration and delivery"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "GitLab CI",
        "category": {
            "FR": "Outils de Déploiement et Intégration Continue (CI/CD)",
            "EN": "Deployment and Continuous Integration (CI/CD) Tools"
        },
        "description": {
            "FR": "Solution CI/CD intégrée à GitLab",
            "EN": "Integrated CI/CD solution within GitLab"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "Github Actions",
        "category": {
            "FR": "Outils de Déploiement et Intégration Continue (CI/CD)",
            "EN": "Deployment and Continuous Integration (CI/CD) Tools"
        },
        "description": {
            "FR": "Automatisation des workflows directement depuis GitHub",
            "EN": "Workflow automation directly from GitHub"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "N8N",
        "category": {
            "FR": "Outils de Déploiement et Intégration Continue (CI/CD)",
            "EN": "Deployment and Continuous Integration (CI/CD) Tools"
        },
        "description": {
            "FR": "Outil d'automatisation workflow",
            "EN": "Workflow automation tool"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "Zapier",
        "category": {
            "FR": "Outils de Déploiement et Intégration Continue (CI/CD)",
            "EN": "Deployment and Continuous Integration (CI/CD) Tools"
        },
        "description": {
            "FR": "Outil pour connecter des applications et automatiser des workflows",
            "EN": "Tool to connect applications and automate workflows"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "Checkly",
        "category": {
            "FR": "Outils de Déploiement et Intégration Continue (CI/CD)",
            "EN": "Deployment and Continuous Integration (CI/CD) Tools"
        },
        "description": {
            "FR": "Monitoring et tests pour les applications web modernes",
            "EN": "Monitoring and testing for modern web applications"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "Selenium",
        "category": {
            "FR": "Outils de Test, Assurance Qualité, Sécurité",
            "EN": "Testing, Quality Assurance, Security Tools"
        },
        "description": {
            "FR": "Outil pour l'automatisation des tests de navigateurs web",
            "EN": "Tool for automating web browser tests"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "SoapUI",
        "category": {
            "FR": "Outils de Test, Assurance Qualité, Sécurité",
            "EN": "Testing, Quality Assurance, Security Tools"
        },
        "description": {
            "FR": "Outil de test pour services web SOAP et REST",
            "EN": "Testing tool for SOAP and REST web services"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "Postman",
        "category": {
            "FR": "Outils de Test, Assurance Qualité, Sécurité",
            "EN": "Testing, Quality Assurance, Security Tools"
        },
        "description": {
            "FR": "Plateforme pour le développement d'API",
            "EN": "Platform for API development"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "Cypress",
        "category": {
            "FR": "Outils de Test, Assurance Qualité, Sécurité",
            "EN": "Testing, Quality Assurance, Security Tools"
        },
        "description": {
            "FR": "Outil de test pour le web",
            "EN": "Web testing tool"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "Checkmarx",
        "category": {
            "FR": "Outils de Test, Assurance Qualité, Sécurité",
            "EN": "Testing, Quality Assurance, Security Tools"
        },
        "description": {
            "FR": "Solution de sécurité et de qualité du code source",
            "EN": "Source code security and quality solution"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "SonarCloud",
        "category": {
            "FR": "Outils de Test, Assurance Qualité, Sécurité",
            "EN": "Testing, Quality Assurance, Security Tools"
        },
        "description": {
            "FR": "Service cloud pour la qualité et la sécurité du code",
            "EN": "Cloud service for code quality and security"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "SonarQube",
        "category": {
            "FR": "Outils de Test, Assurance Qualité, Sécurité",
            "EN": "Testing, Quality Assurance, Security Tools"
        },
        "description": {
            "FR": "Plateforme d'inspection continue de la qualité du code",
            "EN": "Continuous code quality inspection platform"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "Jira",
        "category": {
            "FR": "Outils de Gestion de Projet et de Suivi des Tâches",
            "EN": "Project Management and Task Tracking Tools"
        },
        "description": {
            "FR": "Outil de suivi de projet et de gestion des problèmes",
            "EN": "Project tracking and issue management tool"
        },
        "image": "",
        "link": "",
    },
    {
        "name": "Jira",
        "category": {
            "FR": "Outils de Gestion de Projet et de Suivi des Tâches",
            "EN": "Project Management and Task Tracking Tools"
        },
        "description": {
            "FR": "Outil de suivi de projet et de gestion des problèmes",
            "EN": "Project tracking and issue management tool"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "Notion",
        "category": {
            "FR": "Outils de Gestion de Projet et de Suivi des Tâches",
            "EN": "Project Management and Task Tracking Tools"
        },
        "description": {
            "FR": "Application pour la prise de notes et la gestion de projet",
            "EN": "Note-taking and project management application"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "GitHub (Project Management)",
        "category": {
            "FR": "Outils de Gestion de Projet et de Suivi des Tâches",
            "EN": "Project Management and Task Tracking Tools"
        },
        "description": {
            "FR": "Plateforme collaborative également utilisée pour la gestion de projet",
            "EN": "Collaborative platform also used for project management"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "VersionOne",
        "category": {
            "FR": "Outils de Gestion de Projet et de Suivi des Tâches",
            "EN": "Project Management and Task Tracking Tools"
        },
        "description": {
            "FR": "Outil pour la planification agile et la gestion de livraison",
            "EN": "Tool for agile planning and delivery management"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "Slack",
        "category": {
            "FR": "Outils de Gestion de Projet et de Suivi des Tâches",
            "EN": "Project Management and Task Tracking Tools"
        },
        "description": {
            "FR": "Plateforme de communication d'équipe et de collaboration",
            "EN": "Team communication and collaboration platform"
        },
        "image": "",
        "link": ""
    },
    
    {
        "name": "Vercel",
        "category": {
            "FR": "Déploiement et Hébergement Web",
            "EN": "Web Deployment and Hosting"
        },
        "description": {
            "FR": "Plateforme cloud pour sites web et applications front-end",
            "EN": "Cloud platform for websites and front-end applications"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "Render",
        "category": {
            "FR": "Déploiement et Hébergement Web",
            "EN": "Web Deployment and Hosting"
        },
        "description": {
            "FR": "Service cloud pour applications web et bases de données",
            "EN": "Cloud service for web applications and databases"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "PlanetScale",
        "category": {
            "FR": "Déploiement et Hébergement Web",
            "EN": "Web Deployment and Hosting"
        },
        "description": {
            "FR": "Plateforme de base de données comme service",
            "EN": "Database as a service platform"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "Figma",
        "category": {
            "FR": "Outils de Conception UX/UI et Graphiques",
            "EN": "UX/UI and Graphic Design Tools"
        },
        "description": {
            "FR": "Outil de conception graphique et de prototypage d'interface",
            "EN": "Graphic design and interface prototyping tool"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "BrandBird",
        "category": {
            "FR": "Outils de Conception UX/UI et Graphiques",
            "EN": "UX/UI and Graphic Design Tools"
        },
        "description": {
            "FR": "Outil pour créer des visuels de marque",
            "EN": "Tool to create brand visuals"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "MongoDB Compass",
        "category": {
            "FR": "Gestion et Exploration de Bases de Données",
            "EN": "Database Management and Exploration Tools"
        },
        "description": {
            "FR": "Outil GUI pour MongoDB",
            "EN": "GUI tool for MongoDB"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "MySQL Workbench",
        "category": {
            "FR": "Gestion et Exploration de Bases de Données",
            "EN": "Database Management and Exploration Tools"
        },
        "description": {
            "FR": "Outil GUI pour MySQL",
            "EN": "GUI tool for MySQL"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "SQL Server Management Studio (SSMS)",
        "category": {
            "FR": "Gestion et Exploration de Bases de Données",
            "EN": "Database Management and Exploration Tools"
        },
        "description": {
            "FR": "Outil de gestion pour SQL Server",
            "EN": "Management tool for SQL Server"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "CodePen",
        "category": {
            "FR": "Outils de Veille Technologique",
            "EN": "Technology Monitoring Tools"
        },
        "description": {
            "FR": "Plateforme de développement front-end",
            "EN": "Front-end development platform"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "Udemy",
        "category": {
            "FR": "Outils de Veille Technologique",
            "EN": "Technology Monitoring Tools"
        },
        "description": {
            "FR": "Plateforme d'apprentissage et de formation en ligne",
            "EN": "Online learning and training platform"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "OpenClassRoom",
        "category": {
            "FR": "Outils de Veille Technologique",
            "EN": "Technology Monitoring Tools"
        },
        "description": {
            "FR": "Site web d'éducation et de formation en ligne",
            "EN": "Online education and training website"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "Stack Overflow",
        "category": {
            "FR": "Outils de Veille Technologique",
            "EN": "Technology Monitoring Tools"
        },
        "description": {
            "FR": "Plateforme de questions et réponses pour les développeurs",
            "EN": "Question and answer platform for developers"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "Reddit",
        "category": {
            "FR": "Outils de Veille Technologique",
            "EN": "Technology Monitoring Tools"
        },
        "description": {
            "FR": "Réseau de communautés basé sur les intérêts",
            "EN": "Interest-based community network"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "Wired",
        "category": {
            "FR": "Outils de Veille Technologique",
            "EN": "Technology Monitoring Tools"
        },
        "description": {
            "FR": "Magazine sur l'impact de la technologie",
            "EN": "Magazine focusing on the impact of technology"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "TED Talks",
        "category": {
            "FR": "Culture Tech",
            "EN": "Tech Culture"
        },
        "description": {
            "FR": "Série de conférences sur des sujets variés, y compris la technologie",
            "EN": "Series of talks on various subjects, including technology"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "Polygon",
        "category": {
            "FR": "Culture Tech",
            "EN": "Tech Culture"
        },
        "description": {
            "FR": "Site d'actualités et de médias sur le jeu vidéo et la culture pop",
            "EN": "News and media site about video games and pop culture"
        },
        "image": "",
        "link": ""
    },
    {
        "name": "Twitter (X)",
        "category": {
            "FR": "Culture Tech",
            "EN": "Tech Culture"
        },
        "description": {
            "FR": "Plateforme sociale pour les actualités et les tendances tech",
            "EN": "Social platform for tech news and trends"
        },
        "image": "",
        "link": ""
    }
];