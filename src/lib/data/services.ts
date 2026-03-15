import ateliersClimat from '$lib/assets/jplenio-nature-3125912_1920.jpg';
import diagnosticGlobal from '$lib/assets/kareni-sunset-3325080_1920.jpg';
import diagnosticVulnerabilite from '$lib/assets/karsten-wurth-0w-uTa0Xz7w-unsplash.jpg';
import planReduction from '$lib/assets/pexels-freestockpro-1174183.jpg';
import bilanCarbone from '$lib/assets/rob-morton-fecsiuPSJsc-unsplash.jpg';

export interface Service {
	slug: string;
	category: string;
	title: string;
	description: string;
	deliverable: string;
	color: string;
	icon: string;
	image: string;
	technology: string;
	savings: string;
	status: string;
	country: string;
	fullDescription: string;
	bulletPoints: string[];
	conclusion: string;
	// Champs SEO pages détaillées
	metaTitle: string;
	metaDescription: string;
	targetAudience: string[];
	objectives: string[];
	scope: string[];
	detailedDeliverables: string[];
	estimatedDuration: string;
	ctaLabel: string;
}

export const services: Service[] = [
	{
		slug: 'bilan-carbone-pme',
		category: 'Analyse carbone',
		title: 'Bilan Carbone Simplifié PME',
		description:
			'Mesurez vos principales émissions et identifiez vos priorités d\'action.',
		deliverable: 'Estimation des émissions, postes majeurs, recommandations prioritaires.',
		color: 'teal',
		icon: 'chart',
		image: bilanCarbone,
		technology: 'Bilan carbone',
		savings: 'Suivi des émissions',
		status: 'Operational',
		country: 'France',
		fullDescription:
			'Les PME ont des besoins spécifiques en matière de bilan carbone. Notre approche simplifiée permet d\'obtenir une mesure fiable de vos émissions sans mobiliser des ressources excessives. Contrairement aux méthodologies lourdes conçues pour les grands groupes, nous adaptons le périmètre et la granularité à votre réalité opérationnelle.',
		bulletPoints: [
			'une méthodologie adaptée à la taille de votre entreprise',
			'un accompagnement pas à pas dans la collecte des données',
			'un rapport clair et actionnable',
			'des pistes d\'amélioration concrètes et accessibles'
		],
		conclusion:
			'Ce bilan carbone simplifié vous donne les clés pour comprendre et piloter vos émissions, tout en restant adapté à vos moyens et à vos enjeux.',
		metaTitle: 'Bilan Carbone Simplifié pour PME | ClimAltera',
		metaDescription: 'Réalisez un bilan carbone adapté à votre PME : mesure des émissions, identification des postes majeurs et recommandations prioritaires. Accompagnement clé en main.',
		targetAudience: [
			'PME de 10 à 250 salariés souhaitant connaître leur empreinte carbone',
			'Dirigeants qui veulent anticiper les obligations réglementaires (CSRD, bilan GES)',
			'Responsables QSE ou RSE en début de démarche climat',
			'Entreprises préparant une réponse à un appel d\'offres exigeant un bilan carbone'
		],
		objectives: [
			'Quantifier les émissions de gaz à effet de serre sur les scopes 1, 2 et 3 significatifs',
			'Identifier les postes d\'émission les plus impactants',
			'Fournir une base chiffrée pour définir un plan d\'action de réduction',
			'Sensibiliser l\'équipe dirigeante aux enjeux carbone de l\'entreprise'
		],
		scope: [
			'Collecte et analyse des données énergie, déplacements, achats et logistique',
			'Périmètre scopes 1 & 2 complets, scope 3 ciblé sur les postes matériels',
			'Entretiens avec les responsables opérationnels clés',
			'Comparaison avec les moyennes sectorielles disponibles'
		],
		detailedDeliverables: [
			'Rapport de bilan carbone simplifié (PDF, 20-30 pages)',
			'Tableau de synthèse des émissions par poste et par scope',
			'Visualisations graphiques exploitables en communication interne',
			'Liste hiérarchisée des 10 premières actions de réduction',
			'Restitution orale auprès du comité de direction (1h)'
		],
		estimatedDuration: '3 à 5 semaines',
		ctaLabel: 'Demander mon bilan carbone'
	},
	{
		slug: 'reduction-emissions',
		category: 'Stratégie carbone',
		title: 'Plan de Réduction des Émissions',
		description:
			'Structurez une feuille de route de décarbonation réaliste et priorisée.',
		deliverable: 'Objectifs de réduction, leviers d\'action, calendrier de mise en œuvre, indicateurs de pilotage.',
		color: 'teal',
		icon: 'sun',
		image: planReduction,
		technology: 'Stratégie carbone',
		savings: 'Réduction émissions',
		status: 'Operational',
		country: 'France / Europe',
		fullDescription:
			'Après avoir mesuré vos émissions, il est essentiel de définir un plan d\'action structuré et réaliste. ClimAltera vous accompagne dans l\'élaboration de votre feuille de route de décarbonation, en tenant compte de vos contraintes budgétaires et opérationnelles.',
		bulletPoints: [
			'la définition d\'objectifs de réduction alignés avec les accords de Paris',
			'l\'identification des leviers de réduction les plus efficaces',
			'un calendrier de mise en œuvre détaillé',
			'des indicateurs de suivi et de pilotage'
		],
		conclusion:
			'Ce plan de réduction transforme vos ambitions climatiques en actions concrètes et mesurables, avec un impact réel sur votre empreinte carbone.',
		metaTitle: 'Plan de Réduction des Émissions Carbone | ClimAltera',
		metaDescription: 'Élaborez une feuille de route de décarbonation réaliste pour votre PME : objectifs chiffrés, leviers d\'action, calendrier et indicateurs de pilotage.',
		targetAudience: [
			'PME ayant déjà réalisé un bilan carbone ou un diagnostic initial',
			'Entreprises soumises à des objectifs de réduction (clients donneurs d\'ordre, labels)',
			'Dirigeants souhaitant intégrer le climat dans leur stratégie d\'entreprise',
			'Responsables développement durable cherchant à structurer leur feuille de route'
		],
		objectives: [
			'Définir des objectifs de réduction chiffrés à 3 et 5 ans',
			'Identifier et prioriser les leviers de décarbonation par coût et impact',
			'Construire un calendrier de mise en œuvre réaliste',
			'Mettre en place des indicateurs de suivi pour piloter la trajectoire'
		],
		scope: [
			'Analyse approfondie des résultats du bilan carbone existant',
			'Étude de faisabilité technico-économique des actions envisagées',
			'Benchmark des meilleures pratiques sectorielles',
			'Co-construction du plan avec les responsables opérationnels'
		],
		detailedDeliverables: [
			'Feuille de route de décarbonation détaillée (PDF, 30-40 pages)',
			'Matrice de priorisation des actions (impact vs. coût vs. faisabilité)',
			'Calendrier de déploiement sur 3 à 5 ans',
			'Tableau de bord d\'indicateurs clés de performance (KPI climat)',
			'Budget prévisionnel des investissements nécessaires',
			'Restitution et atelier de validation avec l\'équipe dirigeante (2h)'
		],
		estimatedDuration: '4 à 8 semaines',
		ctaLabel: 'Élaborer mon plan de réduction'
	},
	{
		slug: 'diagnostic-environnemental',
		category: 'Diagnostic',
		title: 'Diagnostic Environnemental Global',
		description:
			'Obtenez une vision complète de vos impacts environnementaux et des axes d\'amélioration.',
		deliverable: 'Audit des émissions, analyse énergie & ressources, gestion des déchets, recommandations personnalisées.',
		color: 'mint',
		icon: 'tree',
		image: diagnosticGlobal,
		technology: 'Analyse environnementale',
		savings: 'Réduction des coûts',
		status: 'Operational',
		country: 'France / Europe',
		fullDescription:
			'Le diagnostic environnemental global permet d\'identifier et de quantifier l\'ensemble des impacts de votre entreprise sur l\'environnement. Cette approche holistique couvre tous les aspects de votre activité : énergie, eau, déchets, biodiversité, mobilité et achats responsables.',
		bulletPoints: [
			'un audit complet des émissions directes et indirectes',
			'l\'analyse de la consommation d\'énergie et de ressources',
			'l\'évaluation de la gestion des déchets',
			'des recommandations personnalisées pour réduire votre empreinte'
		],
		conclusion:
			'Ce diagnostic constitue la première étape essentielle pour construire une stratégie environnementale efficace et mesurable.',
		metaTitle: 'Diagnostic Environnemental Global pour PME | ClimAltera',
		metaDescription: 'Audit complet de vos impacts environnementaux : énergie, déchets, eau, biodiversité. Recommandations personnalisées et plan d\'action pour votre PME.',
		targetAudience: [
			'PME industrielles ou tertiaires souhaitant un état des lieux environnemental complet',
			'Entreprises engagées dans une démarche ISO 14001 ou de labellisation RSE',
			'Organisations confrontées à des enjeux réglementaires environnementaux (ICPE, REP)',
			'Dirigeants voulant aller au-delà du seul bilan carbone'
		],
		objectives: [
			'Cartographier l\'ensemble des impacts environnementaux de l\'entreprise',
			'Identifier les non-conformités réglementaires éventuelles',
			'Quantifier les consommations d\'énergie, d\'eau et de matières premières',
			'Évaluer la gestion des déchets et les opportunités d\'économie circulaire',
			'Proposer un plan d\'action hiérarchisé par priorité et retour sur investissement'
		],
		scope: [
			'Visite de site et audit terrain (1 à 2 jours selon la taille)',
			'Revue documentaire : factures énergie, registres déchets, données de production',
			'Entretiens avec les responsables de site, maintenance, achats et logistique',
			'Analyse des flux matières et des cycles de vie produits',
			'Évaluation de la conformité réglementaire environnementale'
		],
		detailedDeliverables: [
			'Rapport de diagnostic environnemental complet (PDF, 40-60 pages)',
			'Matrice des impacts par thématique (énergie, eau, déchets, biodiversité, mobilité)',
			'Tableau de conformité réglementaire',
			'Plan d\'action priorisé avec estimation budgétaire',
			'Fiche de synthèse exécutive (2 pages, pour le comité de direction)',
			'Restitution orale et questions-réponses (2h)'
		],
		estimatedDuration: '4 à 6 semaines',
		ctaLabel: 'Lancer mon diagnostic environnemental'
	},
	{
		slug: 'vulnerabilite-climatique',
		category: 'Risques climatiques',
		title: 'Diagnostic de Vulnérabilité Climatique',
		description:
			'Identifiez les risques climatiques pesant sur votre activité et anticipez leurs impacts financiers.',
		deliverable: 'Cartographie des risques, évaluation financière, scénarios prospectifs, plan d\'adaptation chiffré.',
		color: 'teal',
		icon: 'chart',
		image: diagnosticVulnerabilite,
		technology: 'Analyse des risques',
		savings: 'Anticipation des risques',
		status: 'Operational',
		country: 'France / International',
		fullDescription:
			'Le changement climatique représente des risques concrets pour les entreprises : vagues de chaleur, inondations, perturbation des chaînes d\'approvisionnement, stress hydrique. Notre diagnostic de vulnérabilité permet d\'identifier et d\'évaluer ces risques pour mieux les anticiper et protéger votre activité.',
		bulletPoints: [
			'une cartographie des risques climatiques spécifiques à votre secteur',
			'l\'évaluation de l\'impact financier potentiel',
			'des scénarios prospectifs à différents horizons',
			'un plan d\'adaptation priorisé et chiffré'
		],
		conclusion:
			'Ce diagnostic vous permet d\'intégrer les risques climatiques dans votre stratégie d\'entreprise et de renforcer votre résilience face aux changements à venir.',
		metaTitle: 'Diagnostic Vulnérabilité Climatique PME | ClimAltera',
		metaDescription: 'Évaluez les risques climatiques sur votre activité : cartographie des aléas, impacts financiers, scénarios prospectifs et plan d\'adaptation chiffré.',
		targetAudience: [
			'PME dont l\'activité est exposée aux aléas climatiques (agriculture, BTP, tourisme, logistique)',
			'Entreprises avec des sites ou des fournisseurs dans des zones à risque',
			'Dirigeants souhaitant anticiper les impacts financiers du changement climatique',
			'Organisations préparant leur reporting CSRD (double matérialité)'
		],
		objectives: [
			'Identifier les aléas climatiques auxquels l\'entreprise est exposée',
			'Évaluer la vulnérabilité des sites, équipements et chaînes d\'approvisionnement',
			'Quantifier les impacts financiers potentiels (pertes d\'exploitation, surcoûts)',
			'Élaborer un plan d\'adaptation priorisé avec des actions concrètes'
		],
		scope: [
			'Analyse des données climatiques locales et projections (horizons 2030, 2050)',
			'Cartographie des risques par site et par activité',
			'Entretiens avec les responsables opérationnels et supply chain',
			'Évaluation de la chaîne d\'approvisionnement (fournisseurs critiques)',
			'Benchmark des stratégies d\'adaptation sectorielles'
		],
		detailedDeliverables: [
			'Rapport de vulnérabilité climatique (PDF, 30-50 pages)',
			'Cartographie des risques par site (cartes et matrices)',
			'Évaluation financière des scénarios d\'impact (3 scénarios RCP)',
			'Plan d\'adaptation chiffré et priorisé',
			'Tableau de bord de suivi des risques climatiques',
			'Restitution au comité de direction (1h30)'
		],
		estimatedDuration: '5 à 8 semaines',
		ctaLabel: 'Évaluer ma vulnérabilité climatique'
	},
	{
		slug: 'ateliers-climat',
		category: 'Sensibilisation',
		title: 'Sensibilisation & Ateliers Climat',
		description:
			'Engagez vos équipes dans la transition écologique grâce à des ateliers interactifs et concrets.',
		deliverable: 'Présentation des enjeux, impacts sectoriels, exemples d\'actions, cas pratiques adaptés à votre activité.',
		color: 'light',
		icon: 'check',
		image: ateliersClimat,
		technology: 'Formation climat',
		savings: 'Formation équipes',
		status: 'Operational',
		country: 'France / International',
		fullDescription:
			'La transition écologique nécessite l\'implication de toutes les équipes. ClimAltera propose des ateliers de sensibilisation interactifs, conçus pour rendre les enjeux climatiques concrets et accessibles, quel que soit le niveau de connaissance des participants.',
		bulletPoints: [
			'une présentation des enjeux climatiques',
			'l\'analyse des impacts sectoriels',
			'des exemples concrets d\'actions possibles',
			'des cas pratiques adaptés à l\'activité de l\'entreprise'
		],
		conclusion:
			'Ces ateliers permettent de développer une culture environnementale et d\'impliquer les équipes dans la mise en œuvre de la stratégie climatique de l\'entreprise.',
		metaTitle: 'Ateliers Climat & Sensibilisation Équipes | ClimAltera',
		metaDescription: 'Ateliers climat interactifs pour vos équipes : Fresque du Climat, ateliers sectoriels, cas pratiques adaptés. Engagez vos collaborateurs dans la transition.',
		targetAudience: [
			'Comités de direction et managers souhaitant comprendre les enjeux climat',
			'Équipes opérationnelles impliquées dans la mise en œuvre d\'actions RSE',
			'Entreprises lançant une démarche de transition et devant fédérer les collaborateurs',
			'Organisations souhaitant intégrer le climat dans leur culture d\'entreprise'
		],
		objectives: [
			'Comprendre les mécanismes du changement climatique et leurs conséquences',
			'Identifier les impacts spécifiques au secteur d\'activité de l\'entreprise',
			'Faire émerger des idées d\'actions concrètes portées par les équipes',
			'Créer une dynamique collective autour de la transition écologique'
		],
		scope: [
			'Atelier Fresque du Climat ou format équivalent (2h30 à 3h)',
			'Module sectoriel personnalisé avec données propres à l\'entreprise',
			'Cas pratiques et jeux de rôles adaptés au contexte métier',
			'Temps d\'échange et de questions-réponses',
			'Possibilité de sessions en présentiel ou en visioconférence'
		],
		detailedDeliverables: [
			'Support de présentation personnalisé (PDF)',
			'Synthèse des idées et engagements collectés pendant l\'atelier',
			'Fiche mémo « Les 10 éco-gestes à adopter » adaptée au secteur',
			'Questionnaire de satisfaction et mesure d\'impact post-atelier',
			'Recommandations pour prolonger la dynamique en interne'
		],
		estimatedDuration: '1 à 2 semaines (préparation + animation)',
		ctaLabel: 'Organiser un atelier climat'
	}
];

export function getServiceBySlug(slug: string): Service | undefined {
	return services.find((s) => s.slug === slug);
}
