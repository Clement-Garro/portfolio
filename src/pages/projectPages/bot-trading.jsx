const botTrading = () => {
    return (
        <section className="project-info-box">
            <div className="pb-5">
                <h1 className="head-text">
                    <span className="gradient_text drop-shadow font-semibold">
                        Bot de Trading de Cryptomonnaies
                    </span>
                </h1>
                <p className="font-bold">Date : 2021-2022</p>
            </div>

            <div className="pb-5">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold">
                        Contexte du projet
                    </span>
                </h2>
                <p>
                    Ma fascination pour le monde de la cryptomonnaie a pris racine dès le début de ma terminale, attiré
                    par les possibilités lucratives qu'il offrait. Après avoir exploré les opportunités d'investissement
                    qu'il proposait, j'ai décidé de créer un bot de trading de cryptomonnaies personnalisable, capable
                    de suivre des stratégies d'achat et de vente spécifiques sur les cryptomonnaies sélectionnées. Ce
                    bot était conçu pour fonctionner sur la plateforme de trading de cryptomonnaie FTX, bien que
                    celle-ci ait depuis fermé ses portes.
                </p>
            </div>

            <div className="pb-5">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold">
                        Stratégie
                    </span>
                </h2>
                <p>
                    Pour développer efficacement cette solution, j'ai entrepris des backtests approfondis de différentes
                    stratégies de trading. En utilisant des bibliothèques de Python telles que Pandas et PyTorch, j'ai
                    analysé les données de trading de la plateforme Binance afin de perfectionner les stratégies.
                </p>
            </div>

            <div className="pb-5">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold">
                        Fonctionnalités du Bot
                    </span>
                </h2>
                <p>
                    Le bot offrait également des fonctionnalités avancées, notamment la capacité de générer des
                    graphiques et des statistiques sur les bénéfices réalisés lors des backtests. Cette analyse
                    préliminaire des performances du bot était essentielle avant d'entamer des transactions réelles sur
                    la plateforme.
                </p>
            </div>

            <div className="pb-5">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold">
                        Collecte de Données
                    </span>
                </h2>
                <p>
                    Pour alimenter le bot en données, j'ai utilisé l'API de Binance pour récupérer des données
                    historiques
                    sur les cryptomonnaies choisies, couvrant une période allant de 2010 à la date actuelle. Cette
                    abondance de données a permis d'affiner les stratégies de trading grâce à des techniques avancées
                    telles que le deep learning avec PyTorch, garantissant ainsi une approche plus précise dans la prise
                    de décision.
                </p>
            </div>

            <div className="pb-5">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold">
                        Ce que j'ai appris
                    </span>
                </h2>
                <p>
                    Le développement de ce bot de trading de cryptomonnaies a été une aventure passionnante qui a
                    combiné mes intérêts pour la finance et la technologie. Malgré les défis rencontrés, j'ai trouvé le
                    processus gratifiant et enrichissant. Ce projet m'a permis de développer mes compétences en
                    programmation et en analyse de données tout en explorant le monde dynamique du trading de
                    cryptomonnaies. Je suis reconnaissant d'avoir eu l'opportunité de participer à cette entreprise et
                    je
                    suis fier des résultats que j'ai pu accomplir. Ce bot de trading reste un jalon important dans mon
                    parcours professionnel et une source d'inspiration pour mes projets futurs.
                </p>
            </div>
        </section>
    );
};
export default botTrading;
