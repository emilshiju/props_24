

export interface SampleAgent {
    id: string;
    name: string;
    email: string;
    phone: string;
    image?: string;
    bio: string;
    agencyId: string;
    specialties: string[];
    createdAt: Date;
    updatedAt: Date;
    rating: number;
    verified: boolean;
    location?: string;
    agency?: string;
    reviews?: number;
    recentReviews?: SampleReview[];
    bgColor?: string;
  }
  
  export interface SampleAgency {
    id: string;
    name: string;
    logo?: string;
    website?: string;
    address?: string;
    phone?: string;
    email?: string;
    agents?: SampleAgent[];
    createdAt: Date;
    updatedAt: Date;
    location?: string;
    rating?: number;
    reviews?: number;
    propertiesSold?: string;
    bgColor?: string;
  }
  
  export interface SampleReview {
    id: string;
    rating: number;
    comment: string;
    title?: string;
    userId: string;
    agentId: string;
    createdAt: Date;
    updatedAt: Date;
    author?: string;
    agentName?: string;
    agencyName?: string;
    location?: string;
    date?: string;
  }
  
  export interface SampleUser {
    id: string;
    name: string;
    email: string;
    emailVerified?: Date;
    image?: string;
    role: 'USER' | 'AGENT' | 'ADMIN';
  }
  
  export interface SampleLocation {
    slug: string;
    name: string;
    description: string;
    averagePrice: string;
    properties: string;
    bgColor: string;
    popularity: string;
    featuredAgents?: string[];
  }
  
  // Sample Agents Data
  export const sampleAgents: SampleAgent[] = [
    {
      id: '1',
      name: 'Alessandro Conti',
      email: 'alessandro.conti@gabetti.it',
      phone: '+39 123 456 7890',
      bio: 'Con oltre 15 anni di esperienza nel settore immobiliare di lusso, Alessandro è specializzato in proprietà di prestigio nelle principali città italiane.',
      agencyId: '1',
      agency: 'Gabetti Milano Centro',
      location: 'Milano',
      specialties: ['Case di Lusso', 'Proprietà Storiche'],
      createdAt: new Date('2022-01-15'),
      updatedAt: new Date('2023-12-10'),
      rating: 4.9,
      verified: true,
      reviews: 48,
      bgColor: 'bg-gradient-to-br from-primary to-primary-light',
      recentReviews: [
        {
          id: '101',
          rating: 5,
          comment: 'Alessandro è stato incredibile. Ci ha aiutato a trovare il nostro appartamento dei sogni nel cuore di Milano.',
          userId: '201',
          agentId: '1',
          createdAt: new Date('2024-02-15'),
          updatedAt: new Date('2024-02-15'),
          author: 'Marco B.'
        },
        {
          id: '102',
          rating: 5,
          comment: 'Ottima esperienza lavorando con Alessandro. Molto professionale e con una grande conoscenza della zona.',
          userId: '202',
          agentId: '1',
          createdAt: new Date('2024-01-20'),
          updatedAt: new Date('2024-01-20'),
          author: 'Sofia P.'
        }
      ]
    },
    {
      id: '2',
      name: 'Sofia Ricci',
      email: 'sofia.ricci@remax.it',
      phone: '+39 098 765 4321',
      bio: 'Sofia aiuta da oltre 8 anni gli acquirenti di prima casa a trovare la loro abitazione perfetta.',
      agencyId: '2',
      agency: 'Remax Roma Luxury',
      location: 'Roma',
      specialties: ['Acquirenti Prima Casa', 'Proprietà di Investimento'],
      createdAt: new Date('2022-03-10'),
      updatedAt: new Date('2023-11-05'),
      rating: 4.8,
      verified: true,
      reviews: 36,
      bgColor: 'bg-gradient-to-br from-accent to-accent/70',
      recentReviews: [
        {
          id: '103',
          rating: 5,
          comment: 'Sofia ha reso l\'acquisto della mia prima casa molto più facile di quanto mi aspettassi.',
          userId: '203',
          agentId: '2',
          createdAt: new Date('2024-02-03'),
          updatedAt: new Date('2024-02-03'),
          author: 'Giulia T.'
        }
      ]
    },
    {
      id: '3',
      name: 'Marco Rossi',
      email: 'marco.rossi@tecnocasa.it',
      phone: '+39 555 123 4567',
      bio: 'Marco ha una vasta esperienza sia nel settore immobiliare residenziale che commerciale.',
      agencyId: '3',
      agency: 'Tecnocasa Firenze',
      location: 'Firenze',
      specialties: ['Commerciale', 'Case di Lusso'],
      createdAt: new Date('2022-02-18'),
      updatedAt: new Date('2023-10-22'),
      rating: 4.8,
      verified: true,
      reviews: 42,
      bgColor: 'bg-gradient-to-br from-secondary to-secondary/70',
      recentReviews: [
        {
          id: '104',
          rating: 5,
          comment: 'Marco ci ha aiutato a trovare lo spazio commerciale perfetto per la nostra attività.',
          userId: '204',
          agentId: '3',
          createdAt: new Date('2024-01-15'),
          updatedAt: new Date('2024-01-15'),
          author: 'Paolo F.'
        }
      ]
    }
  ];
  
  // Sample Agencies Data
  export const sampleAgencies: SampleAgency[] = [
    {
      id: '1',
      name: 'Gabetti Milano Centro',
      website: 'https://www.gabetti.it/milano',
      address: 'Via Manzoni 37, 20121 Milano',
      phone: '+39 02 123 4567',
      email: 'milanocentro@gabetti.it',
      location: 'Milano, Lombardia',
      rating: 4.8,
      reviews: 256,
      propertiesSold: '1.200+',
      bgColor: 'bg-gradient-to-br from-primary to-primary-light',
      createdAt: new Date('2021-05-10'),
      updatedAt: new Date('2023-12-15')
    },
    {
      id: '2',
      name: 'Remax Roma Luxury',
      website: 'https://www.remax.it/roma-luxury',
      address: 'Via del Corso 42, 00186 Roma',
      phone: '+39 06 987 6543',
      email: 'romaluxury@remax.it',
      location: 'Roma, Lazio',
      rating: 4.9,
      reviews: 187,
      propertiesSold: '980+',
      bgColor: 'bg-gradient-to-br from-accent to-accent/70',
      createdAt: new Date('2021-06-22'),
      updatedAt: new Date('2023-11-30')
    },
    {
      id: '3',
      name: 'Tecnocasa Firenze',
      website: 'https://www.tecnocasa.it/firenze',
      address: 'Via dei Calzaiuoli 15, 50122 Firenze',
      phone: '+39 055 456 7890',
      email: 'firenze@tecnocasa.it',
      location: 'Firenze, Toscana',
      rating: 4.7,
      reviews: 210,
      propertiesSold: '1.450+',
      bgColor: 'bg-gradient-to-br from-secondary to-secondary/70',
      createdAt: new Date('2021-04-15'),
      updatedAt: new Date('2023-10-18')
    },
    // Torino agencies from immobiliare.it
    {
      id: 'canavese-case',
      name: 'Canavese Case',
      address: 'Via Roma 45, Torino, TO 10100',
      phone: '+39 011 1234567',
      email: 'info@canavesecase.it',
      website: 'https://www.immobiliare.it/agenzie-immobiliari/173487/canavese-case/',
      location: 'Torino',
      rating: 4.7,
      reviews: 23,
      bgColor: 'bg-gradient-to-br from-primary to-primary-light',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'duevi-torino',
      name: 'Duevi Torino',
      address: 'Corso Francia 78, Torino, TO 10100',
      phone: '+39 011 7654321',
      email: 'info@duevitorino.it',
      website: 'https://www.immobiliare.it/agenzie-immobiliari/191099/duevi-torino/',
      location: 'Torino',
      rating: 4.8,
      reviews: 31,
      bgColor: 'bg-gradient-to-br from-accent to-accent/70',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'chiusano-torino',
      name: 'Chiusano Torino',
      address: 'Corso Vittorio Emanuele II 124, Torino, TO 10100',
      phone: '+39 011 8765432',
      email: 'info@chiusanotorino.it',
      website: 'https://www.immobiliare.it/agenzie-immobiliari/5314/chiusano-torino/',
      location: 'Torino',
      rating: 4.9,
      reviews: 48,
      bgColor: 'bg-gradient-to-br from-secondary to-secondary/70',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'nordedil-torino',
      name: 'Nordedil Torino',
      address: 'Via Lagrange 39, Torino, TO 10100',
      phone: '+39 011 2345678',
      email: 'info@nordediltorino.it',
      website: 'https://www.immobiliare.it/agenzie-immobiliari/6303/nordedil-torino/',
      location: 'Torino',
      rating: 4.5,
      reviews: 19,
      bgColor: 'bg-gradient-to-br from-primary-light to-primary-light/80',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'martucci-torino',
      name: 'Martucci Torino',
      address: 'Via Po 18, Torino, TO 10100',
      phone: '+39 011 3456789',
      email: 'info@martuccitorino.it',
      website: 'https://www.immobiliare.it/agenzie-immobiliari/238808/martucci-torino/',
      location: 'Torino',
      rating: 4.6,
      reviews: 27,
      bgColor: 'bg-gradient-to-br from-primary to-primary-light',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'plan-buy-torino-alfa',
      name: 'Plan Buy Torino Alfa',
      address: 'Via Garibaldi 56, Torino, TO 10100',
      phone: '+39 011 4567890',
      email: 'info@planbuyalfa.it',
      website: 'https://www.immobiliare.it/agenzie-immobiliari/224854/plan-buy-torino-alfa/',
      location: 'Torino',
      rating: 4.7,
      reviews: 35,
      bgColor: 'bg-gradient-to-br from-accent to-accent/70',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'rinaudo-pinerolo',
      name: 'Rinaudo Pinerolo',
      address: 'Corso Duca degli Abruzzi 72, Pinerolo, TO 10064',
      phone: '+39 0121 987654',
      email: 'info@rinaudopinerolo.it',
      website: 'https://www.immobiliare.it/agenzie-immobiliari/36686/rinaudo-pinerolo/',
      location: 'Pinerolo',
      rating: 4.8,
      reviews: 42,
      bgColor: 'bg-gradient-to-br from-secondary to-secondary/70',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'studio-aste-torino',
      name: 'Studio Aste Torino',
      address: 'Via Madama Cristina 83, Torino, TO 10100',
      phone: '+39 011 5678901',
      email: 'info@studioastetorino.it',
      website: 'https://www.immobiliare.it/agenzie-immobiliari/380665/studio-aste-torino/',
      location: 'Torino',
      rating: 4.5,
      reviews: 15,
      bgColor: 'bg-gradient-to-br from-primary-light to-primary-light/80',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'abitat-group-torino',
      name: 'Abitat Group Torino',
      address: 'Corso Francia 123, Torino, TO 10100',
      phone: '+39 011 6789012',
      email: 'info@abitatgroup.it',
      website: 'https://www.immobiliare.it/agenzie-immobiliari/125/abitat-group-torino/',
      location: 'Torino',
      rating: 4.9,
      reviews: 56,
      bgColor: 'bg-gradient-to-br from-primary to-primary-light',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'studio-bp-torino',
      name: 'Studio Bp Torino',
      address: 'Via Roma 87, Torino, TO 10100',
      phone: '+39 011 7890123',
      email: 'info@studiobp.it',
      website: 'https://www.immobiliare.it/agenzie-immobiliari/128821/studio-bp-torino/',
      location: 'Torino',
      rating: 4.6,
      reviews: 21,
      bgColor: 'bg-gradient-to-br from-accent to-accent/70',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'unicredit-subitocasa-nord-ovest',
      name: 'Unicredit Subitocasa Nord Ovest',
      address: 'Corso Vittorio Emanuele II 167, Torino, TO 10100',
      phone: '+39 011 8901234',
      email: 'info@unicreditsubitocasa.it',
      website: 'https://www.immobiliare.it/agenzie-immobiliari/193331/unicredit-subitocasa-nord-ovest/',
      location: 'Torino',
      rating: 4.7,
      reviews: 39,
      bgColor: 'bg-gradient-to-br from-secondary to-secondary/70',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'gieffe-patrimoni-torino',
      name: 'Gieffe Patrimoni Torino',
      address: 'Via Lagrange 95, Torino, TO 10100',
      phone: '+39 011 9012345',
      email: 'info@gieffepatrimoni.it',
      website: 'https://www.immobiliare.it/agenzie-immobiliari/128861/gieffe-patrimoni-torino/',
      location: 'Torino',
      rating: 4.8,
      reviews: 32,
      bgColor: 'bg-gradient-to-br from-primary-light to-primary-light/80',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'dream',
      name: 'Dream',
      address: 'Via Po 42, Torino, TO 10100',
      phone: '+39 011 0123456',
      email: 'info@dreamhome.it',
      website: 'https://www.immobiliare.it/agenzie-immobiliari/421571/dream/',
      location: 'Torino',
      rating: 4.9,
      reviews: 28,
      bgColor: 'bg-gradient-to-br from-primary to-primary-light',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];
  
  // Sample Reviews Data
  export const sampleReviews: SampleReview[] = [
    {
      id: '101',
      rating: 5,
      title: 'Servizio Eccellente',
      comment: "Alessandro è stato incredibile. Ci ha aiutato a trovare il nostro appartamento dei sogni nel cuore di Milano. La sua conoscenza degli edifici storici è impressionante e ha reso l'intero processo fluido e senza stress.",
      userId: '201',
      agentId: '1',
      createdAt: new Date('2024-02-15'),
      updatedAt: new Date('2024-02-15'),
      author: 'Marco B.',
      agentName: 'Alessandro Conti',
      agencyName: 'Gabetti Milano Centro',
      location: 'Milano Centro',
      date: '15 Febbraio 2024'
    },
    {
      id: '102',
      rating: 5,
      title: 'Esperienza Perfetta per Acquirente Prima Casa',
      comment: "Sofia ha reso l'acquisto della mia prima casa molto più facile di quanto mi aspettassi. È stata paziente e ha spiegato tutto chiaramente. Ha dedicato tempo a capire esattamente cosa stavo cercando e mi ha mostrato proprietà che corrispondevano perfettamente ai miei criteri.",
      userId: '203',
      agentId: '2',
      createdAt: new Date('2024-02-03'),
      updatedAt: new Date('2024-02-03'),
      author: 'Giulia T.',
      agentName: 'Sofia Ricci',
      agencyName: 'Remax Roma Luxury',
      location: 'Roma',
      date: '3 Febbraio 2024'
    },
    {
      id: '104',
      rating: 5,
      title: 'Esperto Immobiliare Commerciale',
      comment: "Marco è stato fondamentale per aiutarci a trovare lo spazio commerciale perfetto per la nostra attività. La sua conoscenza del mercato immobiliare commerciale di Roma è ineguagliabile.",
      userId: '204',
      agentId: '3',
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-01-15'),
      author: 'Paolo F.',
      agentName: 'Marco Rossi',
      agencyName: 'Tecnocasa Firenze',
      location: 'Firenze',
      date: '15 Gennaio 2024'
    },
    {
      id: '105',
      rating: 4,
      title: 'Great Investment Advice',
      comment: "Valentina was professional and knowledgeable about investment properties in Roma. She helped me find a property with excellent rental potential and provided useful insights about the neighborhood's development plans.",
      userId: '205',
      agentId: '4',
      createdAt: new Date('2024-03-05'),
      updatedAt: new Date('2024-03-05'),
      author: 'Roberto C.',
      agentName: 'Valentina Marino',
      agencyName: 'Remax Roma Luxury',
      location: 'Roma',
      date: 'March 5, 2024'
    },
    {
      id: '105',
      rating: 5,
      title: 'Family Home Found',
      comment: "Professional, responsive, and really cares about her clients. Would definitely work with Luca again! He made finding our family home a pleasure rather than a stressful experience.",
      userId: '206',
      agentId: '5',
      createdAt: new Date('2024-01-28'),
      updatedAt: new Date('2024-01-28'),
      author: 'Anna D.',
      agentName: 'Luca Esposito',
      agencyName: 'Remax Roma Luxury',
      location: 'Roma',
      date: 'March 10, 2024'
    }
  ];
  
  // Sample Users Data
  export const sampleUsers: SampleUser[] = [
    {
      id: '201',
      name: 'Marco Bianchi',
      email: 'marco.bianchi@email.com',
      role: 'USER'
    },
    {
      id: '202',
      name: 'Sofia Palermo',
      email: 'sofia.palermo@email.com',
      role: 'USER'
    },
    {
      id: '203',
      name: 'Giulia Trevisan',
      email: 'giulia.trevisan@email.com',
      role: 'USER'
    },
    {
      id: '204',
      name: 'Paolo Ferraro',
      email: 'paolo.ferraro@email.com',
      role: 'USER'
    }
  ];
  
  // Sample Locations Data
  export const sampleLocations: SampleLocation[] = [
    {
      slug: 'milano',
      name: 'Milano',
      description: 'Capitale economica d\'Italia, Milano combina innovazione, moda e design con un ricco patrimonio storico. Il Duomo gotico, la Galleria Vittorio Emanuele II e il quartiere di Brera offrono un mix perfetto di tradizione e modernità. Centro finanziario dinamico con uno skyline in continua evoluzione.',
      averagePrice: '€7,000 - €13,000 per m²',
      properties: '520+ proprietà disponibili',
      bgColor: 'from-primary to-primary-light',
      popularity: 'Molto Alta',
      featuredAgents: ['1']
    },
    {
      slug: 'roma',
      name: 'Roma',
      description: 'La Città Eterna, capitale d\'Italia e cuore pulsante della storia occidentale. Con il suo patrimonio artistico e archeologico inestimabile, dal Colosseo ai Fori Romani, dalla Fontana di Trevi al Vaticano, Roma offre un\'esperienza immobiliare unica immersa in 2700 anni di storia.',
      averagePrice: '€6,500 - €12,000 per m²',
      properties: '480+ proprietà disponibili',
      bgColor: 'from-primary to-primary-light',
      popularity: 'Molto Alta',
      featuredAgents: ['2']
    },
    {
      slug: 'firenze',
      name: 'Firenze',
      description: 'Culla del Rinascimento italiano e scrigno d\'arte, Firenze incanta con i suoi palazzi storici, i suoi ponti sull\'Arno e capolavori come la cupola del Brunelleschi. Il mercato immobiliare offre dimore storiche, appartamenti con affreschi originali e ville sulle colline toscane.',
      averagePrice: '€5,200 - €9,800 per m²',
      properties: '310+ proprietà disponibili',
      bgColor: 'from-primary to-primary-light',
      popularity: 'Alta',
      featuredAgents: ['3']
    },
    {
      slug: 'napoli',
      name: 'Napoli',
      description: 'Città dal carattere unico e vivace, Napoli seduce con la sua energia, la sua cultura millenaria e lo splendido Golfo dominato dal Vesuvio. Centro storico UNESCO, vicina a siti come Pompei e la Costiera Amalfitana, offre un mercato immobiliare variegato e autentico.',
      averagePrice: '€3,200 - €6,500 per m²',
      properties: '350+ proprietà disponibili',
      bgColor: 'from-primary to-primary-light',
      popularity: 'Alta',
      featuredAgents: ['4']
    },
    {
      slug: 'torino',
      name: 'Torino',
      description: 'Elegante città sabauda con maestosi portici, piazze barocche e il suggestivo lungopo. Prima capitale d\'Italia, oggi centro culturale e innovativo, offre un\'alta qualità della vita e un mercato immobiliare che spazia dai palazzi nobiliari agli appartamenti in stile liberty.',
      averagePrice: '€2,800 - €5,200 per m²',
      properties: '280+ proprietà disponibili',
      bgColor: 'from-primary to-primary-light',
      popularity: 'Media-Alta',
      featuredAgents: ['5']
    },
    {
      slug: 'venezia',
      name: 'Venezia',
      description: 'La città più romantica al mondo, un miracolo urbanistico costruito sull\'acqua. I suoi canali, palazzi gotici e bizantini e la Piazza San Marco creano un ambiente magico senza eguali. Il mercato immobiliare offre proprietà esclusive in palazzi storici con vista sui canali.',
      averagePrice: '€6,800 - €14,500 per m²',
      properties: '220+ proprietà disponibili',
      bgColor: 'from-primary to-primary-light',
      popularity: 'Molto Alta',
      featuredAgents: ['6']
    },
    {
      slug: 'bologna',
      name: 'Bologna',
      description: 'La dotta, la grassa, la rossa: città universitaria ricca di cultura, gastronomia eccellente e caratteristici portici. Con il suo centro medievale ben conservato e la vivace vita studentesca, Bologna offre un mercato immobiliare dinamico, con soluzioni sotto i portici e nei palazzi storici.',
      averagePrice: '€3,500 - €6,200 per m²',
      properties: '270+ proprietà disponibili',
      bgColor: 'from-primary to-primary-light',
      popularity: 'Alta',
      featuredAgents: ['7']
    },
    {
      slug: 'palermo',
      name: 'Palermo',
      description: 'Capoluogo siciliano dal fascino mediterraneo e multiculturale, Palermo offre un patrimonio artistico-monumentale straordinario, dai palazzi arabo-normanni ai mercati storici. Il mercato immobiliare include proprietà storiche, appartamenti con vista mare e ville nelle zone residenziali.',
      averagePrice: '€1,800 - €3,700 per m²',
      properties: '290+ proprietà disponibili',
      bgColor: 'from-primary to-primary-light',
      popularity: 'Media-Alta',
      featuredAgents: ['8']
    },
    {
      slug: 'verona',
      name: 'Verona',
      description: 'La città di Romeo e Giulietta, patrimonio UNESCO, incanta con la sua Arena romana, i palazzi medievali e rinascimentali e le piazze scenografiche. Adagiata sull\'Adige e vicina al Lago di Garda, offre un mercato immobiliare che spazia dalle dimore storiche agli eleganti appartamenti.',
      averagePrice: '€2,900 - €5,800 per m²',
      properties: '240+ proprietà disponibili',
      bgColor: 'from-primary to-primary-light',
      popularity: 'Alta',
      featuredAgents: ['9']
    },
    {
      slug: 'genova',
      name: 'Genova',
      description: 'Antica repubblica marinara con il porto più importante d\'Italia, Genova seduce con il suo centro storico labirintico, i maestosi palazzi dei Rolli e il famoso acquario. Il mercato immobiliare offre opportunità interessanti, dalle case colorate nei tipici caruggi alle ville sulla riviera.',
      averagePrice: '€2,400 - €4,900 per m²',
      properties: '260+ proprietà disponibili',
      bgColor: 'from-primary to-primary-light',
      popularity: 'Media',
      featuredAgents: ['10']
    },
    // Per rendere scalabile il sistema, usiamo una funzione generativa per città aggiuntive
    ...Array.from({ length: 20 }, (_, i) => {
      const cityIndex = i + 10;
      const cities = [
        'Bari', 'Catania', 'Padova', 'Parma', 'Cagliari', 
        'Trieste', 'Brescia', 'Pisa', 'Siena', 'Perugia',
        'Rimini', 'Bergamo', 'Bolzano', 'Trento', 'Lecce',
        'Lucca', 'Ravenna', 'Siracusa', 'Pescara', 'Modena'
      ];
      const cityName = cities[i % cities.length];
      const priceBase = 1500 + Math.floor(Math.random() * 3000);
      const priceHigh = priceBase + 1500 + Math.floor(Math.random() * 1500);
      
      return {
        slug: cityName.toLowerCase().replace(/\s+/g, '-'),
        name: cityName,
        description: `${cityName} è una splendida città italiana con un carattere unico, ricca di storia e cultura locale. Con il suo centro storico, i monumenti significativi e l'autentica atmosfera italiana, offre un'ottima qualità della vita e interessanti opportunità immobiliari.`,
        averagePrice: `€${priceBase} - €${priceHigh} per m²`,
        properties: `${150 + Math.floor(Math.random() * 150)}+ proprietà disponibili`,
        bgColor: 'from-primary to-primary-light',
        popularity: ['Alta', 'Media-Alta', 'Media', 'Media'][i % 4],
        featuredAgents: [(i % 10 + 1).toString()]
      };
    })
  ]; 