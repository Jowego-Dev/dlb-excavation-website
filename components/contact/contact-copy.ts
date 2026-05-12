export type ContactCopy = {
  heroImageAlt: string;
  heroEyebrow: string;
  heroTitleBefore: string;
  heroTitleAccent: string;
  heroTitleAfter: string;
  heroBody: string;
  heroCallLabel: string;
  quoteSidebarAria: string;
  quoteTitle: string;
  quoteSubtitle: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  contactMethodLabel: string;
  contactMethodPhone: string;
  contactMethodEmail: string;
  serviceLabel: string;
  servicePlaceholder: string;
  projectLabel: string;
  projectPlaceholder: string;
  submit: string;
  privacy: string;
  quickFastTitle: string;
  quickFastBody: string;
  quickFreeTitle: string;
  quickFreeBody: string;
  quickQualityTitle: string;
  quickQualityBody: string;
  quickCallTitle: string;
  quickCallBody: string;
  gridServingTitle: string;
  gridServingCta: string;
  gridHowTitle: string;
  gridHowSteps: [string, string, string, string];
  gridWhyTitle: string;
  gridWhyItems: string[];
  preFooterTitle: string;
  preFooterBody: string;
  preFooterCta: string;
  preFooterCall: string;
};

export function getContactCopy(locale: string): ContactCopy {
  if (locale === "fr") {
    return {
      heroImageAlt:
        "Machinerie lourde sur un chantier au coucher du soleil, prête pour l’excavation.",
      heroEyebrow: "CONTACTEZ-NOUS",
      heroTitleBefore: "Construisons quelque chose de",
      heroTitleAccent: "remarquable",
      heroTitleAfter: "ensemble",
      heroBody:
        "Que vous planifiiez un nouveau projet ou ayez besoin d’un avis d’expert, notre équipe est prête à vous aider avec un devis ou une consultation.",
      heroCallLabel: "Appelez-nous en tout temps",
      quoteSidebarAria: "Avantages de nous contacter",
      quoteTitle: "Demander un devis gratuit",
      quoteSubtitle:
        "Décrivez votre projet et nous vous répondrons dans les plus brefs délais.",
      firstName: "Prénom",
      lastName: "Nom",
      email: "Courriel",
      phone: "Téléphone",
      contactMethodLabel: "Moyen de contact préféré",
      contactMethodPhone: "Appel téléphonique",
      contactMethodEmail: "Courriel",
      serviceLabel: "Service requis",
      servicePlaceholder: "Sélectionnez un service",
      projectLabel: "Détails du projet",
      projectPlaceholder:
        "Parlez-nous des dimensions, du terrain, des délais et de toute autre information utile.",
      submit: "ENVOYER LA DEMANDE",
      privacy:
        "Nous respectons votre vie privée. Vos renseignements ne seront jamais partagés.",
      quickFastTitle: "Réponse rapide",
      quickFastBody:
        "Nous visons une réponse dans les 24 heures ouvrables pour chaque demande.",
      quickFreeTitle: "Estimations gratuites",
      quickFreeBody:
        "Devis détaillés sans engagement pour que vous puissiez décider en toute confiance.",
      quickQualityTitle: "Service de qualité",
      quickQualityBody:
        "Entièrement assurés, équipement moderne et normes professionnelles.",
      quickCallTitle: "Appelez-nous directement",
      quickCallBody:
        "Lun–Ven 8h–18h · Sam 9h–14h — nous sommes là pour répondre à vos questions.",
      gridServingTitle: "Fièrement au service de",
      gridServingCta: "VOIR NOTRE ZONE DE SERVICE",
      gridHowTitle: "Comment ça fonctionne",
      gridHowSteps: [
        "Envoyez votre demande",
        "Nous planifions une visite ou un appel",
        "Vous recevez une estimation claire",
        "Le projet démarre à votre convenance",
      ],
      gridWhyTitle: "Pourquoi choisir DLB Excavation?",
      gridWhyItems: [
        "Entreprise locale et familiale",
        "Équipement moderne et entretenu",
        "Respect des délais et du budget",
        "Communication transparente du début à la fin",
      ],
      preFooterTitle: "Prêt à démarrer votre projet?",
      preFooterBody:
        "Obtenez une estimation gratuite et voyez comment nous pouvons préparer votre terrain pour des résultats durables.",
      preFooterCta: "DEMANDER UN DEVIS GRATUIT",
      preFooterCall: "Ou appelez-nous pour en discuter",
    };
  }

  return {
    heroImageAlt:
      "Heavy equipment on a job site at sunset, ready for excavation work.",
    heroEyebrow: "CONTACT US",
    heroTitleBefore: "Let's Build Something",
    heroTitleAccent: "Amazing",
    heroTitleAfter: "Together",
    heroBody:
      "Whether you are planning a new build or need expert advice, our team is ready to help with a quote or consultation.",
    heroCallLabel: "Call Us Anytime",
    quoteSidebarAria: "Why contact us",
    quoteTitle: "Request a Free Quote",
    quoteSubtitle:
      "Tell us about your project and we will get back to you as soon as possible.",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email Address",
    phone: "Phone Number",
    contactMethodLabel: "Preferred Contact Method",
    contactMethodPhone: "Phone Call",
    contactMethodEmail: "Email",
    serviceLabel: "Service Needed",
    servicePlaceholder: "Select a service",
    projectLabel: "Project Details",
    projectPlaceholder:
      "Share scope, timeline, access, and any photos or plans that help us understand the job.",
    submit: "SEND REQUEST",
    privacy:
      "We respect your privacy. Your information will never be shared.",
    quickFastTitle: "Fast Response",
    quickFastBody:
      "We aim to respond within one business day so you can keep your project moving.",
    quickFreeTitle: "Free Estimates",
    quickFreeBody:
      "Clear, no-obligation quotes so you can compare options with confidence.",
    quickQualityTitle: "Quality Service",
    quickQualityBody:
      "Fully insured team, professional standards, and well-maintained equipment.",
    quickCallTitle: "Call Us Directly",
    quickCallBody:
      "Mon–Fri 8am–6pm · Sat 9am–2pm — speak with our team about your timeline.",
    gridServingTitle: "Proudly Serving",
    gridServingCta: "VIEW OUR SERVICE AREA",
    gridHowTitle: "How It Works",
    gridHowSteps: [
      "Send your request",
      "We schedule a site visit or call",
      "You receive a detailed estimate",
      "Project begins on your timeline",
    ],
    gridWhyTitle: "Why Choose DLB Excavation?",
    gridWhyItems: [
      "Local & family-owned",
      "Modern, well-maintained equipment",
      "On-time, on-budget mindset",
      "Transparent communication from start to finish",
    ],
    preFooterTitle: "Ready to Start Your Project?",
    preFooterBody:
      "Get a free estimate and see how we can prepare your site for lasting results.",
    preFooterCta: "REQUEST A FREE QUOTE",
    preFooterCall: "Or call us to talk it through",
  };
}
