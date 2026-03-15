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
}

export const services: Service[] = [
	{
		slug: 'ateliers-climat',
		category: 'Reforestation',
		title: 'Ateliers Climat pour les Entreprises',
		description:
			'Ateliers de sensibilisation permettant aux équipes de comprendre les enjeux climatiques et d\'engager la transition écologique.',
		color: 'light',
		icon: 'check',
		image: ateliersClimat,
		technology: 'Formation climat',
		savings: 'Formation équipes',
		status: 'Operational',
		country: 'France / International',
		fullDescription:
			'La transition écologique nécessite l\'implication des équipes au sein de l\'entreprise. ClimAltera propose des ateliers de sensibilisation permettant de mieux comprendre les enjeux climatiques et environnementaux.',
		bulletPoints: [
			'une présentation des enjeux climatiques',
			'l\'analyse des impacts sectoriels',
			'des exemples concrets d\'actions possibles',
			'des cas pratiques adaptés à l\'activité de l\'entreprise'
		],
		conclusion:
			'Ces ateliers permettent de développer une culture environnementale et d\'impliquer les équipes dans la mise en œuvre de la stratégie climatique de l\'entreprise.'
	},
	{
		slug: 'diagnostic-environnemental',
		category: 'Reforestation',
		title: 'Diagnostic Environnemental Global',
		description:
			'Évaluez l\'impact environnemental complet de votre entreprise avec notre diagnostic approfondi.',
		color: 'mint',
		icon: 'tree',
		image: diagnosticGlobal,
		technology: 'Analyse environnementale',
		savings: 'Réduction des coûts',
		status: 'Operational',
		country: 'France / Europe',
		fullDescription:
			'Le diagnostic environnemental global permet d\'identifier et de quantifier l\'ensemble des impacts de votre entreprise sur l\'environnement. Cette approche holistique couvre tous les aspects de votre activité.',
		bulletPoints: [
			'un audit complet des émissions directes et indirectes',
			'l\'analyse de la consommation d\'énergie et de ressources',
			'l\'évaluation de la gestion des déchets',
			'des recommandations personnalisées pour réduire votre empreinte'
		],
		conclusion:
			'Ce diagnostic constitue la première étape essentielle pour construire une stratégie environnementale efficace et mesurable.'
	},
	{
		slug: 'diagnostic-vulnerabilite',
		category: 'Analyse carbone',
		title: 'Diagnostic de Vulnérabilité Climatique',
		description:
			'Identifiez les risques climatiques pour votre activité et anticipez les impacts.',
		color: 'teal',
		icon: 'chart',
		image: diagnosticVulnerabilite,
		technology: 'Analyse des risques',
		savings: 'Anticipation des risques',
		status: 'Operational',
		country: 'France / International',
		fullDescription:
			'Le changement climatique représente des risques concrets pour les entreprises. Notre diagnostic de vulnérabilité permet d\'identifier et d\'évaluer ces risques pour mieux les anticiper.',
		bulletPoints: [
			'une cartographie des risques climatiques spécifiques à votre secteur',
			'l\'évaluation de l\'impact financier potentiel',
			'des scénarios prospectifs à différents horizons',
			'un plan d\'adaptation priorisé et chiffré'
		],
		conclusion:
			'Ce diagnostic vous permet d\'intégrer les risques climatiques dans votre stratégie d\'entreprise et de renforcer votre résilience face aux changements à venir.'
	},
	{
		slug: 'plan-reduction-emissions',
		category: 'Analyse carbone',
		title: 'Plan de Réduction des Émissions',
		description:
			'Définissez une stratégie concrète pour réduire votre empreinte carbone de manière mesurable.',
		color: 'teal',
		icon: 'sun',
		image: planReduction,
		technology: 'Stratégie carbone',
		savings: 'Réduction émissions',
		status: 'Operational',
		country: 'France / Europe',
		fullDescription:
			'Après avoir mesuré vos émissions, il est essentiel de définir un plan d\'action structuré et réaliste. ClimAltera vous accompagne dans l\'élaboration de votre feuille de route de décarbonation.',
		bulletPoints: [
			'la définition d\'objectifs de réduction alignés avec les accords de Paris',
			'l\'identification des leviers de réduction les plus efficaces',
			'un calendrier de mise en œuvre détaillé',
			'des indicateurs de suivi et de pilotage'
		],
		conclusion:
			'Ce plan de réduction transforme vos ambitions climatiques en actions concrètes et mesurables, avec un impact réel sur votre empreinte carbone.'
	},
	{
		slug: 'bilan-carbone-pme',
		category: 'Analyse carbone',
		title: 'Bilan Carbone Simplifié PME',
		description:
			'Une solution adaptée aux PME pour mesurer et suivre leurs émissions de manière simple.',
		color: 'teal',
		icon: 'sun',
		image: bilanCarbone,
		technology: 'Bilan carbone',
		savings: 'Suivi des émissions',
		status: 'Operational',
		country: 'France',
		fullDescription:
			'Les PME ont des besoins spécifiques en matière de bilan carbone. Notre approche simplifiée permet d\'obtenir une mesure fiable de vos émissions sans mobiliser des ressources excessives.',
		bulletPoints: [
			'une méthodologie adaptée à la taille de votre entreprise',
			'un accompagnement pas à pas dans la collecte des données',
			'un rapport clair et actionnable',
			'des pistes d\'amélioration concrètes et accessibles'
		],
		conclusion:
			'Ce bilan carbone simplifié vous donne les clés pour comprendre et piloter vos émissions, tout en restant adapté à vos moyens et à vos enjeux.'
	}
];

export function getServiceBySlug(slug: string): Service | undefined {
	return services.find((s) => s.slug === slug);
}
