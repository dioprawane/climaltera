import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import nodemailer from 'nodemailer';
import { env } from '$env/dynamic/private';

function getTransporter() {
	return nodemailer.createTransport({
		host: env.SMTP_HOST,
		port: Number(env.SMTP_PORT),
		secure: Number(env.SMTP_PORT) === 465,
		auth: {
			user: env.SMTP_USER,
			pass: env.SMTP_PASS
		},
		tls: {
			rejectUnauthorized: false
		},
		connectionTimeout: 10000
	});
}

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { name, email, company, sector, companySize, need, message } = await request.json();

		// Validation basique
		if (!name || !email || !company || !sector || !companySize || !need) {
			return json({ error: 'Veuillez remplir tous les champs obligatoires.' }, { status: 400 });
		}

		// Construire le contenu HTML de l'email
		const htmlContent = `
			<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
				<div style="background: #047857; padding: 24px; border-radius: 12px 12px 0 0;">
					<h1 style="color: white; margin: 0; font-size: 20px;">📩 Nouvelle demande de devis</h1>
				</div>
				<div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb;">
					<table style="width: 100%; border-collapse: collapse;">
						<tr>
							<td style="padding: 10px 12px; font-weight: bold; color: #374151; width: 160px;">Nom complet</td>
							<td style="padding: 10px 12px; color: #111827;">${name}</td>
						</tr>
						<tr style="background: white;">
							<td style="padding: 10px 12px; font-weight: bold; color: #374151;">Email</td>
							<td style="padding: 10px 12px; color: #111827;"><a href="mailto:${email}">${email}</a></td>
						</tr>
						<tr>
							<td style="padding: 10px 12px; font-weight: bold; color: #374151;">Entreprise</td>
							<td style="padding: 10px 12px; color: #111827;">${company}</td>
						</tr>
						<tr style="background: white;">
							<td style="padding: 10px 12px; font-weight: bold; color: #374151;">Secteur</td>
							<td style="padding: 10px 12px; color: #111827;">${sector}</td>
						</tr>
						<tr>
							<td style="padding: 10px 12px; font-weight: bold; color: #374151;">Taille</td>
							<td style="padding: 10px 12px; color: #111827;">${companySize}</td>
						</tr>
						<tr style="background: white;">
							<td style="padding: 10px 12px; font-weight: bold; color: #374151;">Besoin</td>
							<td style="padding: 10px 12px; color: #111827; font-weight: 600;">${need}</td>
						</tr>
					</table>
					${
						message
							? `
					<div style="margin-top: 16px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e5e7eb;">
						<p style="margin: 0 0 8px; font-weight: bold; color: #374151;">Message :</p>
						<p style="margin: 0; color: #374151; white-space: pre-wrap;">${message}</p>
					</div>`
							: ''
					}
				</div>
				<div style="background: #f3f4f6; padding: 16px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: 0; text-align: center;">
					<p style="margin: 0; font-size: 12px; color: #6b7280;">Email envoyé automatiquement depuis climaltera.com</p>
				</div>
			</div>
		`;

		const transporter = getTransporter();
		await transporter.sendMail({
			from: `"ClimAltera — Site web" <${env.SMTP_USER}>`,
			to: env.CONTACT_EMAIL,
			replyTo: email,
			subject: `Nouvelle demande de devis — ${company || name}`,
			html: htmlContent
		});

		return json({ success: true });
	} catch (err) {
		console.error('Erreur envoi email:', err);
		return json({ error: "Erreur lors de l'envoi. Veuillez réessayer." }, { status: 500 });
	}
};
