import React from "react";

const botVinted = () => {
    return (
        <section className="project-info-box">
            <div className="pb-5">
                <h1 className="head-text">
                    <span className="gradient_text drop-shadow font-semibold">
                        Mon bot Vinted pour Discord
                    </span>
                </h1>
                <p className="font-bold">Date: Mars 2023</p>
            </div>

            <div className="pb-5 object-contain">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold">
                        Contexte
                    </span>
                </h2>
                <p>
                    Dans un monde où le commerce en ligne est devenu monnaie courante, la recherche d'offres lucratives
                    peut rapidement devenir fastidieuse. Face à cette problématique, je me suis lancé dans la création
                    d'un bot Discord dédié à Vinted, plateforme de vente de vêtements et d'accessoires d'occasion.
                    L'objectif ? Faciliter la recherche d'offres intéressantes et maximiser les opportunités de revente,
                    le tout avec une interface simple et conviviale.
                </p>
            </div>

            <div className="pb-5">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold">
                        Genèse de l'idée
                    </span>
                </h2>
                <p>
                    Fatigué de passer des heures à scruter les annonces pour dénicher les perles rares sur Vinted, j'ai
                    décidé de mettre mes compétences en programmation au service de cette problématique. Constatant
                    qu'il existait déjà des bots Vinted, j'ai eu l'idée de créer le mien, mais avec une approche
                    différente : l'intégrer à Discord pour permettre une utilisation aisée grâce à des commandes
                    simples.
                </p>
            </div>

            <div className="pb-5">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold">
                        Fonctionnalités Principales
                    </span>
                </h2>
                <p className="mb-4">
                    L'utilisation du bot se fait par le biais de commandes Discord. Pour commencer, les utilisateurs
                    doivent inviter le bot sur leur serveur, puis utiliser la commande /create pour créer des catégories
                    de recherche. Ces catégories comprennent "Vêtements de marque", "Vêtements de luxe", "Maillots de
                    foot" et "Sneakers". Le bot parcourt ensuite les dernières offres disponibles, analyse les prix et
                    affiche dans les salons correspondants les articles jugés intéressants.
                </p>
                <p className="mb-4">
                    Une fonctionnalité phare du bot est la possibilité de définir des alertes personnalisées pour des
                    articles spécifiques. En utilisant la commande /add_vinted_alert, les utilisateurs peuvent spécifier
                    la marque, la taille, la catégorie, l'état souhaité et le prix jugé attractif. Le bot se charge
                    alors de surveiller les nouvelles offres répondant à ces critères et alerte les utilisateurs lorsque
                    des opportunités se présentent.
                </p>
                <p className="mb-4">
                    Toutes les actions effectuées sont ensuite automatiquement mises à jour dans un fichier contenant
                    les données
                    nécessaires au fonctionnement du bot.
                </p>
            </div>

            <div className="pb-5">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold">
                        Simplicité d'utilisation et efficacité
                    </span>
                </h2>
                <p className="mb-4">
                    L'une des priorités lors du développement du bot était de le rendre aussi simple d'utilisation que
                    possible, tout en offrant des fonctionnalités puissantes. Grâce à une interface intuitive basée sur
                    des commandes Discord, les utilisateurs peuvent naviguer facilement et tirer parti des
                    fonctionnalités avancées sans difficulté.
                </p>
                <p className="mb-4">
                    En résumé, le bot Vinted Discord offre une solution efficace pour simplifier la recherche d'offres
                    intéressantes sur la plateforme Vinted. En combinant automatisation, personnalisation et
                    convivialité, il permet aux utilisateurs d'optimiser leurs chances de dénicher les meilleures
                    affaires et de maximiser leurs opportunités de revente.
                </p>
            </div>

            <div className="pb-5">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold">
                        Les Enseignements Tirés de cette Expérience
                    </span>
                </h2>
                <p className="mb-4">
                    La création du bot Vinted Discord ne s'est pas limitée à une simple solution logicielle ; elle a
                    également été une formidable occasion d'apprentissage et de croissance personnelle. Parmi les
                    nombreux enseignements tirés de cette expérience, deux aspects se démarquent particulièrement :
                    l'approfondissement de mes compétences en Python et le développement d'une stratégie réfléchie pour
                    l'achat et la revente.
                </p>
                <p className="mb-4">
                    Python est Un Outil Polyvalent et Puissant, avec sa syntaxe claire et sa grande polyvalence, s'est
                    révélé être l'outil idéal pour donner
                    vie à mon projet. En plongeant dans le code, j'ai pu explorer de nouvelles fonctionnalités et
                    techniques de programmation. Des concepts tels que la manipulation de fichiers, les requêtes HTTP et
                    la gestion des données ont été approfondis, renforçant ainsi ma compréhension du langage.
                </p>
                <p className="mb-4">
                    Grâce à cette expérience, j'ai également appris à utiliser des bibliothèques Python telles que
                    Discord.py, qui m'ont permis d'interagir efficacement avec l'API Discord et de créer une interface
                    utilisateur fluide et intuitive.
                </p>
                <p className="mb-4">
                    Au-delà de la programmation, la création du bot Vinted m'a confronté à des défis plus conceptuels,
                    notamment la formulation d'une stratégie efficace pour l'achat et la revente de produits en ligne.
                    Analyser les données, évaluer les tendances du marché et anticiper les opportunités sont autant
                    d'éléments clés pour réussir dans ce domaine.
                </p>
                <p className="mb-4">
                    En développant le bot, j'ai dû réfléchir à la manière de filtrer les offres pertinentes,
                    d'identifier les bonnes affaires et de maximiser les profits potentiels. Cette réflexion stratégique
                    m'a permis de mieux comprendre les mécanismes du commerce en ligne et de développer des compétences
                    précieuses en matière d'analyse et de prise de décision.
                </p>
                <p className="mb-4">
                    La création du bot Vinted Discord a été bien plus qu'un simple projet de programmation ; c'était une
                    aventure enrichissante qui m'a permis d'explorer de nouveaux domaines et d'acquérir des compétences
                    précieuses. Grâce à cette expérience, j'ai approfondi ma maîtrise de Python et développé une
                    stratégie réfléchie pour naviguer dans le monde complexe du commerce en ligne. Ces enseignements
                    continueront à guider mes futurs projets et à nourrir ma passion pour l'apprentissage continu et
                    l'innovation.
                </p>
            </div>
        </section>
    )
}

export default botVinted