import type { SacredProfile } from "@/types/sacred";

export const sacredProfiles: SacredProfile[] = [
  {
    id: "sacred_1",
    name: "Łukasz Szaman",
    sacredName: "Wilczy Duch",
    archetype: "Shaman",
    pronouns: "on/jego",
    birthMoon: "New",
    elementalAffinity: ["Earth", "Fire"],
    vibrationalResonance: {
      spiritual: 95,
      elemental: 88,
      lunar: 92,
      festival: 90,
      overall: 91
    },
    status: {
      energetic: {
        element: { value: "Earth", emoji: "🌍" },
        practice: { value: "Ceremony", emoji: "🔥" },
        availability: { value: "Głęboka Praktyka", emoji: "🧘‍♂️" },
        protection: { value: "Otwarte Serce", emoji: "💚" }
      },
      lunar: {
        phase: { value: "Waxing", emoji: "🌒" },
        influence: { value: "Budowanie Energii", emoji: "⬆️" },
        energy: { value: "Wysokie", emoji: "🔋" }
      },
      community: {
        resonance: { value: "Harmonijny", emoji: "🎵" },
        sharing: { value: "Aktywny", emoji: "🤝" },
        gathering: { value: "Przewodnik", emoji: "🌟" }
      },
      festival: {
        location: { value: "Wibracje 2025", emoji: "🎪" },
        camp: { value: "Słowiański Krąg", emoji: "🏕️" },
        role: { value: "Ceremonimistrz", emoji: "🔮" }
      }
    },
    sacredSkills: [
      {
        name: "Szamańskie Podróże",
        category: "ceremony",
        level: "master",
        description: "Prowadzenie duchowych podróży z bębnem i śpiewem",
        traditions: ["Słowiańska", "Syberyjska"]
      },
      {
        name: "Uzdrawianie Energetyczne",
        category: "healing",
        level: "teacher",
        description: "Praca z czakrami i aurą, usuwanie bloków energetycznych",
        traditions: ["Słowiańska", "Uniwersalna"]
      },
      {
        name: "Ziołolecznictwo",
        category: "plants",
        level: "practitioner",
        description: "Znajomość słowiańskich ziół leczniczych i ich zastosowań",
        traditions: ["Słowiańska"]
      }
    ],
    dailyPractices: ["Meditation", "Ceremony", "Teaching"],
    teachingOfferings: [
      "Wprowadzenie do szamanizmu słowiańskiego",
      "Praca z bębnem i śpiewem",
      "Ceremonie oczyszczające",
      "Komunikacja z duchami natury"
    ],
    healingModalities: [
      "Szamańskie uzdrawianie",
      "Praca z energią",
      "Ceremonie oczyszczające",
      "Poradnictwo duchowe"
    ],
    festivalHistory: [
      {
        name: "Wibracje",
        year: 2024,
        role: "Ceremonimistrz",
        camp: "Słowiański Krąg",
        workshops: ["Szamańskie Podróże", "Ceremonia Ognia"],
        connections: 150,
        impact: "transformative"
      },
      {
        name: "Burning Man",
        year: 2023,
        role: "Spiritual Guide",
        camp: "Sacred Fire",
        workshops: ["Slavic Shamanism", "Energy Healing"],
        connections: 200,
        impact: "transformative"
      }
    ],
    plannedFestivals: [
      {
        name: "Festiwal Zdrowego Stylu Życia",
        year: 2025,
        dates: {
          start: "2025-07-24",
          end: "2025-07-27"
        },
        location: "ARCHE Pałac i Folwark, Mazowieckie",
        role: "Ceremonimistrz",
        camp: "Słowiański Krąg",
        workshops: ["Szamańskie Podróże", "Ceremonie Oczyszczające"],
        status: "confirmed",
        ticketStatus: "purchased",
        notes: "Główne ceremonie słowiańskie w weekend"
      },
      {
        name: "Conscious Man",
        year: 2025,
        dates: {
          start: "2025-07-23",
          end: "2025-07-27"
        },
        location: "Ziemiary 56, Łódzkie",
        role: "Spiritual Guide",
        workshops: ["Męska Energia", "Szamańskie Inicjacje"],
        status: "confirmed",
        ticketStatus: "work_exchange",
        notes: "Specjalne warsztaty dla mężczyzn"
      },
      {
        name: "Festiwal Wdzięczności",
        year: 2025,
        dates: {
          start: "2025-07-25",
          end: "2025-08-13"
        },
        location: "Nida 74A, Świętokrzyskie",
        role: "Ceremonimistrz",
        camp: "Święty Krąg",
        workshops: ["Ceremonie Wdzięczności", "Słowiańskie Tradycje"],
        status: "planning",
        ticketStatus: "applying",
        notes: "Długi festiwal z głębokimi praktykami"
      },
      {
        name: "Burning Man",
        year: 2025,
        dates: {
          start: "2025-08-25",
          end: "2025-09-02"
        },
        location: "Black Rock Desert, Nevada",
        role: "Spiritual Guide",
        camp: "Sacred Fire",
        workshops: ["Slavic Shamanism Advanced", "Fire Ceremony"],
        status: "confirmed",
        ticketStatus: "purchased",
        notes: "Poprowadzę główną ceremonię ognia w środę"
      },
      {
        name: "Ozora Festival",
        year: 2025,
        dates: {
          start: "2025-07-28",
          end: "2025-08-03"
        },
        location: "Dádpuszta, Hungary",
        role: "Workshop Leader",
        workshops: ["Shamanic Journeying", "Slavic Traditions"],
        status: "planning",
        ticketStatus: "applying",
        notes: "Chcę wprowadzić słowiańskie tradycje na Ozorę"
      }
    ],
    currentFestival: "Wibracje 2025",
    campAffiliation: "Słowiański Krąg",
    giftOfferings: [
      "Ceremonie uzdrawiające",
      "Nauka gry na bębnie",
      "Poradnictwo duchowe",
      "Ziołowe mikstury"
    ],
    culturalConnections: ["Słowiańska", "Syberyjska", "Uniwersalna"],
    languages: ["Polski", "English", "Русский"],
    plantAllies: ["Szałwia", "Cedr", "Brzoza", "Pokrzywa"],
    crystalAllies: ["Ametyst", "Kwarc górski", "Obsydian", "Hematyt"],
    animalSpirits: ["Wilk", "Orzeł", "Niedźwiedź", "Kruk"],
    sacredTexts: [
      "Słowiańska Księga Cieni",
      "Szamańskie Podróże - Michael Harner",
      "Mity Słowiańskie"
    ],
    energyBoundaries: {
      deepPractice: false,
      ceremony: true,
      healing: true,
      teaching: true
    },
    timezone: "Europe/Warsaw",
    location: {
      festival: "Wibracje 2025",
      camp: "Słowiański Krąg",
      region: "Polska"
    },
    importantDates: [
      {
        date: "2025-06-21",
        type: "ceremony",
        description: "Ceremonia Przesilenia Letniego"
      },
      {
        date: "2025-08-15",
        type: "festival",
        description: "Wibracje 2025"
      }
    ],
    intentions: [
      {
        id: "share_wisdom",
        name: "ДЕЛИ МЪДРОСТ",
        translation: "Dziel Mądrość",
        question: "Chcę podzielić się starożytną wiedzą",
        symbol: "🌱",
        element: "Earth",
        lunarOptimal: ["Waxing", "Full"],
        resonanceScore: 95,
        riskLevel: "low",
        actions: [
          {
            id: "sw_1",
            name: "Opowiedz Legendę",
            template: "Podziel się słowiańską legendą o [TEMAT]",
            example: "Opowiedz legendę o Żar-Ptaku i jej znaczeniu duchowym",
            estimatedImpact: 85,
            energyRequired: 30,
            optimalTiming: "Wieczorem przy ogniu",
            channel: "gathering",
            elements: ["Earth", "Fire"]
          },
          {
            id: "sw_2",
            name: "Przeprowadź Ceremonię",
            template: "Poprowadź ceremonię [TYP] dla [GRUPA]",
            example: "Przeprowadź ceremonię oczyszczającą dla grupy 8 osób",
            estimatedImpact: 95,
            energyRequired: 60,
            optimalTiming: "O zmierzchu",
            channel: "ceremony",
            elements: ["Fire", "Air"]
          }
        ]
      },
      {
        id: "seek_guidance",
        name: "ТЪРСИ ВОДАЧЕСТВО",
        translation: "Szukaj Przewodnictwa",
        question: "Potrzebuję duchowego przewodnictwa",
        symbol: "🔮",
        element: "Air",
        lunarOptimal: ["New", "Waxing"],
        resonanceScore: 88,
        riskLevel: "low",
        actions: [
          {
            id: "sg_1",
            name: "Konsultacja Duchowa",
            template: "Udziel duchowej rady w sprawie [PROBLEM]",
            example: "Pomóż w interpretacji duchowych znaków i snów",
            estimatedImpact: 85,
            energyRequired: 40,
            optimalTiming: "W ciszy i spokoju",
            channel: "private",
            elements: ["Air", "Water"]
          }
        ]
      },
      {
        id: "invite_ceremony",
        name: "ПОКАНИ НА ЦЕРЕМОНИЯ",
        translation: "Zaproś na Ceremonię",
        question: "Chcę zaprosić na świętą ceremonię",
        symbol: "🌙",
        element: "Water",
        lunarOptimal: ["Full", "New"],
        resonanceScore: 92,
        riskLevel: "medium",
        actions: [
          {
            id: "ic_1",
            name: "Ceremonia Ognia",
            template: "Poprowadź ceremonię ognia dla [GRUPA]",
            example: "Ceremonia oczyszczająca przy ogniu dla 12 osób",
            estimatedImpact: 95,
            energyRequired: 70,
            optimalTiming: "O zmierzchu",
            channel: "ceremony",
            elements: ["Fire", "Air"]
          }
        ]
      },
      {
        id: "offer_healing",
        name: "ПРЕДЛОЖИ ИЗЦЕЛЕНИЕ",
        translation: "Oferuj Uzdrowienie",
        question: "Chcę zaoferować duchowe uzdrowienie",
        symbol: "💎",
        element: "Water",
        lunarOptimal: ["Full", "Waning"],
        resonanceScore: 85,
        riskLevel: "low",
        actions: [
          {
            id: "oh_1",
            name: "Uzdrowienie Energetyczne",
            template: "Przeprowadź sesję uzdrowienia dla [OSOBA]",
            example: "Sesja usuwania bloków energetycznych",
            estimatedImpact: 80,
            energyRequired: 50,
            optimalTiming: "W spokojnej przestrzeni",
            channel: "private",
            elements: ["Water", "Earth"]
          }
        ]
      },
      {
        id: "exchange_gifts",
        name: "РАЗМЕНИ ДАРОВЕ",
        translation: "Wymień Dary",
        question: "Chcę wymienić się duchowymi darami",
        symbol: "🌿",
        element: "Earth",
        lunarOptimal: ["Waxing", "Full"],
        resonanceScore: 78,
        riskLevel: "low",
        actions: [
          {
            id: "eg_1",
            name: "Wymiana Wiedzy",
            template: "Podziel się [UMIEJĘTNOŚĆ] w zamian za [POTRZEBA]",
            example: "Naucz szamańskich technik w zamian za ziołową wiedzę",
            estimatedImpact: 75,
            energyRequired: 40,
            optimalTiming: "W naturalnym otoczeniu",
            channel: "community",
            elements: ["Earth", "Air"]
          }
        ]
      },
      {
        id: "sync_energies",
        name: "СИНХРОНИЗИРАЙ ЕНЕРГИИ",
        translation: "Synchronizuj Energie",
        question: "Chcę zsynchronizować nasze energie",
        symbol: "🦋",
        element: "Air",
        lunarOptimal: ["Full", "New"],
        resonanceScore: 82,
        riskLevel: "medium",
        actions: [
          {
            id: "se_1",
            name: "Medytacja Grupowa",
            template: "Poprowadź medytację dla grupy [LICZBA] osób",
            example: "Medytacja szamańska dla synchronizacji energii",
            estimatedImpact: 85,
            energyRequired: 55,
            optimalTiming: "O wschodzie lub zachodzie słońca",
            channel: "gathering",
            elements: ["Air", "Fire"]
          }
        ]
      },
      {
        id: "address_discord",
        name: "СЪОБЩИ ДИСХАРМОНИЯ",
        translation: "Rozwiąż Dysharmonię",
        question: "Potrzebuję pomocy w rozwiązaniu konfliktu",
        symbol: "⚡",
        element: "Fire",
        lunarOptimal: ["Waning", "New"],
        resonanceScore: 75,
        riskLevel: "high",
        actions: [
          {
            id: "ad_1",
            name: "Ceremonia Oczyszczająca",
            template: "Przeprowadź ceremonię oczyszczenia dla [SYTUACJA]",
            example: "Ceremonia uwolnienia od negatywnych energii",
            estimatedImpact: 80,
            energyRequired: 60,
            optimalTiming: "Podczas malejącego księżyca",
            channel: "ceremony",
            elements: ["Fire", "Air"]
          }
        ]
      },
      {
        id: "connect_souls",
        name: "СВЪРЖИ ДУШИ",
        translation: "Połącz Dusze",
        question: "Chcę nawiązać głębokie duchowe połączenie",
        symbol: "🌸",
        element: "Fire",
        lunarOptimal: ["Full", "Waxing"],
        resonanceScore: 90,
        riskLevel: "medium",
        actions: [
          {
            id: "cs_1",
            name: "Ceremonia Połączenia",
            template: "Poprowadź ceremonię łączenia dusz dla [OSOBY]",
            example: "Ceremonia duchowego połączenia dla pary lub grupy",
            estimatedImpact: 90,
            energyRequired: 65,
            optimalTiming: "Przy pełni księżyca",
            channel: "ceremony",
            elements: ["Fire", "Water"]
          }
        ]
      }
    ]
  },
  {
    id: "sacred_2",
    name: "Maja Zielarka",
    sacredName: "Leśna Mądrość",
    archetype: "Herbalist",
    pronouns: "ona/jej",
    birthMoon: "Full",
    elementalAffinity: ["Earth", "Water"],
    vibrationalResonance: {
      spiritual: 88,
      elemental: 95,
      lunar: 90,
      festival: 85,
      overall: 89
    },
    status: {
      energetic: {
        element: { value: "Water", emoji: "💧" },
        practice: { value: "Gathering", emoji: "🌿" },
        availability: { value: "Dostępna", emoji: "✨" },
        protection: { value: "Łagodne Granice", emoji: "🌸" }
      },
      lunar: {
        phase: { value: "Full", emoji: "🌕" },
        influence: { value: "Pełnia Mocy", emoji: "🌟" },
        energy: { value: "Przepełnione", emoji: "🔋" }
      },
      community: {
        resonance: { value: "Uzdrawiający", emoji: "💚" },
        sharing: { value: "Hojny", emoji: "🎁" },
        gathering: { value: "Nauczyciel", emoji: "📚" }
      },
      festival: {
        location: { value: "Wibracje 2025", emoji: "🎪" },
        camp: { value: "Ogród Ziół", emoji: "🌺" },
        role: { value: "Zielarka", emoji: "🌿" }
      }
    },
    sacredSkills: [
      {
        name: "Ziołolecznictwo Słowiańskie",
        category: "plants",
        level: "master",
        description: "Głęboka znajomość słowiańskich tradycji zielarskich",
        traditions: ["Słowiańska", "Europejska"]
      },
      {
        name: "Przygotowanie Nalewek",
        category: "plants",
        level: "teacher",
        description: "Tworzenie leczniczych nalewek i eliksirów",
        traditions: ["Słowiańska", "Ludowa"]
      },
      {
        name: "Rozpoznawanie Roślin",
        category: "wisdom",
        level: "master",
        description: "Identyfikacja roślin leczniczych w naturze",
        traditions: ["Uniwersalna"]
      }
    ],
    dailyPractices: ["Meditation", "Gathering", "Creating"],
    teachingOfferings: [
      "Podstawy ziołolecznictwa",
      "Rozpoznawanie roślin leczniczych",
      "Przygotowanie nalewek i herbat",
      "Słowiańskie tradycje zielarskie"
    ],
    healingModalities: [
      "Fitoterapia",
      "Aromaterapia",
      "Masaż ziołowy",
      "Poradnictwo żywieniowe"
    ],
    festivalHistory: [
      {
        name: "Wibracje",
        year: 2024,
        role: "Zielarka",
        camp: "Ogród Ziół",
        workshops: ["Zioła Słowiańskie", "Nalewki Lecznicze"],
        connections: 120,
        impact: "meaningful"
      },
      {
        name: "Ozora",
        year: 2023,
        role: "Herbalist",
        workshops: ["Plant Medicine Basics", "Herbal Preparations"],
        connections: 80,
        impact: "meaningful"
      }
    ],
    plannedFestivals: [
      {
        name: "Festiwal Zdrowego Stylu Życia",
        year: 2025,
        dates: {
          start: "2025-07-24",
          end: "2025-07-27"
        },
        location: "ARCHE Pałac i Folwark, Mazowieckie",
        role: "Zielarka",
        camp: "Ogród Ziół",
        workshops: ["Słowiańskie Zioła Lecznicze", "Nalewki i Herbaty"],
        status: "confirmed",
        ticketStatus: "purchased",
        notes: "Główne warsztaty zielarskie w weekend"
      },
      {
        name: "Festiwal Wdzięczności",
        year: 2025,
        dates: {
          start: "2025-07-25",
          end: "2025-08-13"
        },
        location: "Nida 74A, Świętokrzyskie",
        role: "Zielarka",
        workshops: ["Zioła Wdzięczności", "Lecznicze Nalewki"],
        status: "confirmed",
        ticketStatus: "work_exchange",
        notes: "Długi festiwal z głębokimi praktykami zielarskimi"
      },
      {
        name: "Wibracje",
        year: 2025,
        dates: {
          start: "2025-08-15",
          end: "2025-08-22"
        },
        location: "Polska",
        role: "Zielarka",
        camp: "Ogród Ziół",
        workshops: ["Słowiańskie Tradycje Zielarskie", "Rozpoznawanie Roślin"],
        status: "confirmed",
        ticketStatus: "purchased",
        notes: "Główny festiwal roku z pełnym programem zielarskim"
      },
      {
        name: "Boom Festival",
        year: 2025,
        dates: {
          start: "2025-07-22",
          end: "2025-07-28"
        },
        location: "Idanha-a-Nova, Portugal",
        role: "Herbalist",
        workshops: ["Sacred Plants of Europe", "Herbal Medicine Making"],
        status: "confirmed",
        ticketStatus: "purchased",
        notes: "Będę prowadzić warsztaty w Healing Area"
      }
    ],
    currentFestival: "Wibracje 2025",
    campAffiliation: "Ogród Ziół",
    giftOfferings: [
      "Nalewki lecznicze",
      "Suszone zioła",
      "Konsultacje zielarskie",
      "Warsztaty rozpoznawania roślin"
    ],
    culturalConnections: ["Słowiańska", "Europejska", "Ludowa"],
    languages: ["Polski", "English", "Deutsch"],
    plantAllies: ["Pokrzywa", "Babka", "Rumianek", "Dziurawiec", "Szałwia"],
    crystalAllies: ["Jadeit", "Malachit", "Awenturyn", "Kwarc różowy"],
    animalSpirits: ["Jeleń", "Motyl", "Pszczoła", "Wiewiórka"],
    sacredTexts: [
      "Zielnik Polski - Józef Rostafiński",
      "Słowiańskie Zioła Lecznicze",
      "Mądrość Babuni Zielarki"
    ],
    energyBoundaries: {
      deepPractice: true,
      ceremony: true,
      healing: true,
      teaching: true
    },
    timezone: "Europe/Warsaw",
    location: {
      festival: "Wibracje 2025",
      camp: "Ogród Ziół",
      region: "Polska"
    },
    importantDates: [
      {
        date: "2025-05-01",
        type: "ceremony",
        description: "Noc Kupały - zbieranie ziół"
      },
      {
        date: "2025-09-23",
        type: "ceremony",
        description: "Równonoc Jesienna - czas nalewek"
      }
    ],
    intentions: [
      {
        id: "share_wisdom",
        name: "ДЕЛИ МЪДРОСТ",
        translation: "Dziel Mądrość",
        question: "Chcę podzielić się wiedzą o ziołach",
        symbol: "🌱",
        element: "Earth",
        lunarOptimal: ["Waxing", "Full"],
        resonanceScore: 88,
        riskLevel: "low",
        actions: [
          {
            id: "sw_1",
            name: "Warsztat Ziołowy",
            template: "Poprowadź warsztat [TEMAT_ZIOŁOWY] dla [GRUPA]",
            example: "Warsztat rozpoznawania ziół leczniczych dla grupy 10 osób",
            estimatedImpact: 85,
            energyRequired: 45,
            optimalTiming: "Rano w ogrodzie ziół",
            channel: "gathering",
            elements: ["Earth", "Water"]
          },
          {
            id: "sw_2",
            name: "Opowiedz o Tradycjach",
            template: "Podziel się słowiańską tradycją zielarską [TEMAT]",
            example: "Opowiedz o zbieraniu ziół w Noc Kupały",
            estimatedImpact: 80,
            energyRequired: 30,
            optimalTiming: "Wieczorem przy herbacie",
            channel: "gathering",
            elements: ["Earth", "Air"]
          }
        ]
      },
      {
        id: "seek_guidance",
        name: "ТЪРСИ ВОДАЧЕСТВО",
        translation: "Szukaj Przewodnictwa",
        question: "Potrzebuję rady w ziołolecznictwie",
        symbol: "🔮",
        element: "Air",
        lunarOptimal: ["New", "Waxing"],
        resonanceScore: 75,
        riskLevel: "low",
        actions: [
          {
            id: "sg_1",
            name: "Konsultacja Zielarska",
            template: "Udziel porady zielarskiej w sprawie [PROBLEM]",
            example: "Pomóż w wyborze ziół na problemy trawienne",
            estimatedImpact: 80,
            energyRequired: 30,
            optimalTiming: "Rano w ogrodzie ziół",
            channel: "private",
            elements: ["Earth", "Water"]
          }
        ]
      },
      {
        id: "invite_ceremony",
        name: "ПОКАНИ НА ЦЕРЕМОНИЯ",
        translation: "Zaproś na Ceremonię",
        question: "Chcę zaprosić na ceremonię ziołową",
        symbol: "🌙",
        element: "Water",
        lunarOptimal: ["Full", "New"],
        resonanceScore: 85,
        riskLevel: "medium",
        actions: [
          {
            id: "ic_1",
            name: "Ceremonia Zbierania Ziół",
            template: "Poprowadź ceremonię zbierania [TYP_ZIÓŁ] dla [GRUPA]",
            example: "Ceremonia zbierania ziół leczniczych w Noc Kupały dla 15 osób",
            estimatedImpact: 85,
            energyRequired: 50,
            optimalTiming: "O świcie lub zmierzchu",
            channel: "ceremony",
            elements: ["Earth", "Water"]
          }
        ]
      },
      {
        id: "offer_healing",
        name: "ПРЕДЛОЖИ ИЗЦЕЛЕНИЕ",
        translation: "Oferuj Uzdrowienie",
        question: "Chcę zaoferować naturalne leczenie",
        symbol: "💎",
        element: "Water",
        lunarOptimal: ["Full", "Waning"],
        resonanceScore: 95,
        riskLevel: "low",
        actions: [
          {
            id: "oh_1",
            name: "Przygotuj Nalewkę",
            template: "Stwórz leczniczą nalewkę na [DOLEGLIWOŚĆ]",
            example: "Przygotuj nalewkę z pokrzywy na wzmocnienie organizmu",
            estimatedImpact: 80,
            energyRequired: 40,
            optimalTiming: "Podczas pełni księżyca",
            channel: "private",
            elements: ["Earth", "Water"]
          },
          {
            id: "oh_2",
            name: "Konsultacja Zielarska",
            template: "Przeprowadź konsultację na temat [PROBLEM_ZDROWOTNY]",
            example: "Doradź naturalne metody na problemy trawienne",
            estimatedImpact: 75,
            energyRequired: 30,
            optimalTiming: "Rano przy herbatce",
            channel: "private",
            elements: ["Earth", "Water"]
          }
        ]
      },
      {
        id: "exchange_gifts",
        name: "РАЗМЕНИ ДАРОВЕ",
        translation: "Wymień Dary",
        question: "Chcę wymienić się ziołowymi darami",
        symbol: "🌿",
        element: "Earth",
        lunarOptimal: ["Waxing", "Full"],
        resonanceScore: 90,
        riskLevel: "low",
        actions: [
          {
            id: "eg_1",
            name: "Wymiana Ziół",
            template: "Wymień [ZIOŁO_MOJE] na [ZIOŁO_POTRZEBNE]",
            example: "Wymień suszoną pokrzywę na dziurawiec",
            estimatedImpact: 75,
            energyRequired: 25,
            optimalTiming: "Rano w ogrodzie",
            channel: "community",
            elements: ["Earth", "Water"]
          },
          {
            id: "eg_2",
            name: "Nalewka za Wiedzę",
            template: "Podaruj nalewkę [TYP] w zamian za [UMIEJĘTNOŚĆ]",
            example: "Nalewka z pokrzywy w zamian za naukę masażu",
            estimatedImpact: 80,
            energyRequired: 35,
            optimalTiming: "Przy wspólnym posiłku",
            channel: "community",
            elements: ["Earth", "Water"]
          }
        ]
      },
      {
        id: "sync_energies",
        name: "СИНХРОНИЗИРАЙ ЕНЕРГИИ",
        translation: "Synchronizuj Energie",
        question: "Chcę zsynchronizować energie z naturą",
        symbol: "🦋",
        element: "Air",
        lunarOptimal: ["Full", "New"],
        resonanceScore: 80,
        riskLevel: "medium",
        actions: [
          {
            id: "se_1",
            name: "Medytacja z Roślinami",
            template: "Poprowadź medytację z [TYP_ROŚLINY] dla [GRUPA]",
            example: "Medytacja z dębem dla synchronizacji z energią ziemi",
            estimatedImpact: 80,
            energyRequired: 45,
            optimalTiming: "O wschodzie słońca",
            channel: "gathering",
            elements: ["Earth", "Air"]
          }
        ]
      },
      {
        id: "address_discord",
        name: "СЪОБЩИ ДИСХАРМОНИЯ",
        translation: "Rozwiąż Dysharmonię",
        question: "Potrzebuję pomocy w uzdroweniu dysharmonii",
        symbol: "⚡",
        element: "Fire",
        lunarOptimal: ["Waning", "New"],
        resonanceScore: 70,
        riskLevel: "high",
        actions: [
          {
            id: "ad_1",
            name: "Oczyszczające Zioła",
            template: "Przygotuj mieszankę oczyszczającą z [ZIOŁA] na [PROBLEM]",
            example: "Mieszanka z szałwii i pokrzywy na oczyszczenie negatywnych energii",
            estimatedImpact: 75,
            energyRequired: 40,
            optimalTiming: "Podczas malejącego księżyca",
            channel: "private",
            elements: ["Fire", "Earth"]
          }
        ]
      },
      {
        id: "connect_souls",
        name: "СВЪРЖИ ДУШИ",
        translation: "Połącz Dusze",
        question: "Chcę połączyć się z duchami roślin",
        symbol: "🌸",
        element: "Fire",
        lunarOptimal: ["Full", "Waxing"],
        resonanceScore: 85,
        riskLevel: "medium",
        actions: [
          {
            id: "cs_1",
            name: "Ceremonia z Duchem Rośliny",
            template: "Poprowadź ceremonię połączenia z duchem [ROŚLINA]",
            example: "Ceremonia komunikacji z duchem dębu dla głębokiej mądrości",
            estimatedImpact: 85,
            energyRequired: 55,
            optimalTiming: "Przy pełni księżyca w lesie",
            channel: "ceremony",
            elements: ["Fire", "Earth"]
          }
        ]
      }
    ]
  },
  {
    id: "sacred_3",
    name: "Tomek Rzemieślnik",
    sacredName: "Złote Dłonie",
    archetype: "Craftsperson",
    pronouns: "on/jego",
    birthMoon: "Waxing",
    elementalAffinity: ["Fire", "Earth"],
    vibrationalResonance: {
      spiritual: 82,
      elemental: 90,
      lunar: 85,
      festival: 88,
      overall: 86
    },
    status: {
      energetic: {
        element: { value: "Fire", emoji: "🔥" },
        practice: { value: "Creating", emoji: "🔨" },
        availability: { value: "W Pracy", emoji: "⚒️" },
        protection: { value: "Skupiony", emoji: "🎯" }
      },
      lunar: {
        phase: { value: "Waxing", emoji: "🌒" },
        influence: { value: "Twórcza Energia", emoji: "✨" },
        energy: { value: "Wysokie", emoji: "🔋" }
      },
      community: {
        resonance: { value: "Inspirujący", emoji: "💡" },
        sharing: { value: "Twórczy", emoji: "🎨" },
        gathering: { value: "Mistrz", emoji: "👨‍🏫" }
      },
      festival: {
        location: { value: "Wibracje 2025", emoji: "🎪" },
        camp: { value: "Warsztat Rzemiosła", emoji: "🏗️" },
        role: { value: "Mistrz Rzemiosła", emoji: "🔨" }
      }
    },
    sacredSkills: [
      {
        name: "Rzeźba w Drewnie",
        category: "crafts",
        level: "master",
        description: "Tworzenie sakralnych rzeźb i instrumentów z drewna",
        traditions: ["Słowiańska", "Nordycka"]
      },
      {
        name: "Kowalstwo Artystyczne",
        category: "crafts",
        level: "teacher",
        description: "Kucie narzędzi rytualnych i biżuterii",
        traditions: ["Słowiańska", "Celtycka"]
      },
      {
        name: "Tworzenie Instrumentów",
        category: "crafts",
        level: "practitioner",
        description: "Budowa bębnów, fletów i innych instrumentów",
        traditions: ["Szamańska", "Słowiańska"]
      }
    ],
    dailyPractices: ["Creating", "Meditation", "Teaching"],
    teachingOfferings: [
      "Podstawy rzeźby w drewnie",
      "Tworzenie bębnów szamańskich",
      "Kowalstwo dla początkujących",
      "Sakralne rzemiosło słowiańskie"
    ],
    healingModalities: [
      "Terapia przez tworzenie",
      "Medytacja w działaniu",
      "Praca z ogniem"
    ],
    festivalHistory: [
      {
        name: "Wibracje",
        year: 2024,
        role: "Mistrz Rzemiosła",
        camp: "Warsztat Rzemiosła",
        workshops: ["Rzeźba Sakralna", "Tworzenie Bębnów"],
        connections: 90,
        impact: "meaningful"
      },
      {
        name: "Burning Man",
        year: 2022,
        role: "Artist",
        camp: "Sacred Crafts",
        workshops: ["Woodworking", "Metal Arts"],
        connections: 75,
        impact: "enjoyable"
      }
    ],
    plannedFestivals: [
      {
        name: "Conscious Man",
        year: 2025,
        dates: {
          start: "2025-07-23",
          end: "2025-07-27"
        },
        location: "Ziemiary 56, Łódzkie",
        role: "Mistrz Rzemiosła",
        camp: "Warsztat Męskiej Siły",
        workshops: ["Kowalstwo Rytualne", "Rzeźba Totemów"],
        status: "confirmed",
        ticketStatus: "work_exchange",
        notes: "Specjalne warsztaty rzemiosła dla mężczyzn"
      },
      {
        name: "Festiwal Wdzięczności",
        year: 2025,
        dates: {
          start: "2025-07-25",
          end: "2025-08-13"
        },
        location: "Nida 74A, Świętokrzyskie",
        role: "Mistrz Rzemiosła",
        camp: "Warsztat Rzemiosła",
        workshops: ["Sakralne Przedmioty", "Instrumenty Muzyczne"],
        status: "planning",
        ticketStatus: "applying",
        notes: "Długi festiwal z intensywnymi warsztatami"
      },
      {
        name: "Wibracje",
        year: 2025,
        dates: {
          start: "2025-08-15",
          end: "2025-08-22"
        },
        location: "Polska",
        role: "Mistrz Rzemiosła",
        camp: "Warsztat Rzemiosła",
        workshops: ["Rzeźba Sakralna", "Tworzenie Bębnów"],
        status: "confirmed",
        ticketStatus: "work_exchange",
        notes: "Prowadzę główny warsztat rzemiosła"
      }
    ],
    currentFestival: "Wibracje 2025",
    campAffiliation: "Warsztat Rzemiosła",
    giftOfferings: [
      "Rzeźby sakralne",
      "Bębny szamańskie",
      "Biżuteria artystyczna",
      "Warsztaty rzemiosła"
    ],
    culturalConnections: ["Słowiańska", "Nordycka", "Celtycka"],
    languages: ["Polski", "English", "Norsk"],
    plantAllies: ["Dąb", "Jesion", "Brzoza", "Sosna"],
    crystalAllies: ["Hematyt", "Tygrysie oko", "Karneol", "Piryt"],
    animalSpirits: ["Niedźwiedź", "Bóbr", "Koń", "Kruk"],
    sacredTexts: [
      "Słowiańskie Rzemiosło Sakralne",
      "Nordyckie Tradycje Kowalskie",
      "Mądrość Drzew"
    ],
    energyBoundaries: {
      deepPractice: true,
      ceremony: true,
      healing: false,
      teaching: true
    },
    timezone: "Europe/Warsaw",
    location: {
      festival: "Wibracje 2025",
      camp: "Warsztat Rzemiosła",
      region: "Polska"
    },
    importantDates: [
      {
        date: "2025-03-20",
        type: "ceremony",
        description: "Równonoc Wiosenna - błogosławienie narzędzi"
      },
      {
        date: "2025-12-21",
        type: "ceremony",
        description: "Przesilenie Zimowe - święto ognia"
      }
    ],
    intentions: [
      {
        id: "share_wisdom",
        name: "ДЕЛИ МЪДРОСТ",
        translation: "Dziel Mądrość",
        question: "Chcę podzielić się wiedzą rzemieślniczą",
        symbol: "🌱",
        element: "Earth",
        lunarOptimal: ["Waxing", "Full"],
        resonanceScore: 85,
        riskLevel: "low",
        actions: [
          {
            id: "sw_1",
            name: "Warsztat Rzeźby",
            template: "Poprowadź warsztat [TYP_RZEŹBY] dla [GRUPA]",
            example: "Warsztat rzeźby sakralnej w drewnie dla grupy 6 osób",
            estimatedImpact: 85,
            energyRequired: 50,
            optimalTiming: "Podczas dnia w warsztacie",
            channel: "gathering",
            elements: ["Fire", "Earth"]
          },
          {
            id: "sw_2",
            name: "Opowiedz o Tradycjach Rzemiosła",
            template: "Podziel się tradycją [KULTURA] rzemiosła [TYP]",
            example: "Opowiedz o słowiańskich tradycjach kowalskich",
            estimatedImpact: 80,
            energyRequired: 35,
            optimalTiming: "Wieczorem przy ogniu",
            channel: "gathering",
            elements: ["Fire", "Air"]
          }
        ]
      },
      {
        id: "seek_guidance",
        name: "ТЪРСИ ВОДАЧЕСТВО",
        translation: "Szukaj Przewodnictwa",
        question: "Potrzebuję rady w tworzeniu",
        symbol: "🔮",
        element: "Air",
        lunarOptimal: ["New", "Waxing"],
        resonanceScore: 70,
        riskLevel: "low",
        actions: [
          {
            id: "sg_1",
            name: "Konsultacja Rzemieślnicza",
            template: "Udziel porady w sprawie [PROJEKT_RZEMIOSŁA]",
            example: "Pomóż w wyborze drewna na sakralną rzeźbę",
            estimatedImpact: 75,
            energyRequired: 30,
            optimalTiming: "Rano w warsztacie",
            channel: "private",
            elements: ["Fire", "Earth"]
          }
        ]
      },
      {
        id: "invite_ceremony",
        name: "ПОКАНИ НА ЦЕРЕМОНИЯ",
        translation: "Zaproś na Ceremonię",
        question: "Chcę zaprosić na ceremonię tworzenia",
        symbol: "🌙",
        element: "Water",
        lunarOptimal: ["Full", "New"],
        resonanceScore: 80,
        riskLevel: "medium",
        actions: [
          {
            id: "ic_1",
            name: "Ceremonia Błogosławienia Narzędzi",
            template: "Poprowadź ceremonię błogosławienia [TYP_NARZĘDZI] dla [GRUPA]",
            example: "Ceremonia błogosławienia narzędzi rzemieślniczych przy pełni księżyca",
            estimatedImpact: 80,
            energyRequired: 45,
            optimalTiming: "Przy pełni księżyca",
            channel: "ceremony",
            elements: ["Fire", "Earth"]
          }
        ]
      },
      {
        id: "offer_healing",
        name: "ПРЕДЛОЖИ ИЗЦЕЛЕНИЕ",
        translation: "Oferuj Uzdrowienie",
        question: "Chcę zaoferować terapię przez tworzenie",
        symbol: "💎",
        element: "Water",
        lunarOptimal: ["Full", "Waning"],
        resonanceScore: 75,
        riskLevel: "low",
        actions: [
          {
            id: "oh_1",
            name: "Terapia przez Tworzenie",
            template: "Przeprowadź sesję terapeutyczną [TYP_TWORZENIA] dla [OSOBA]",
            example: "Sesja rzeźby terapeutycznej dla uwolnienia emocji",
            estimatedImpact: 75,
            energyRequired: 45,
            optimalTiming: "W spokojnej przestrzeni warsztatu",
            channel: "private",
            elements: ["Fire", "Earth"]
          }
        ]
      },
      {
        id: "exchange_gifts",
        name: "РАЗМЕНИ ДАРОВЕ",
        translation: "Wymień Dary",
        question: "Chcę wymienić się sakralnymi przedmiotami",
        symbol: "🌿",
        element: "Earth",
        lunarOptimal: ["Waxing", "Full"],
        resonanceScore: 95,
        riskLevel: "low",
        actions: [
          {
            id: "eg_1",
            name: "Stwórz na Wymianę",
            template: "Wykonaj [PRZEDMIOT] w zamian za [USŁUGA/PRZEDMIOT]",
            example: "Wyrzeźb bęben szamański w zamian za nalewki lecznicze",
            estimatedImpact: 85,
            energyRequired: 60,
            optimalTiming: "Podczas rosnącego księżyca",
            channel: "community",
            elements: ["Fire", "Earth"]
          },
          {
            id: "eg_2",
            name: "Warsztat Rzemiosła",
            template: "Poprowadź warsztat [UMIEJĘTNOŚĆ] dla [GRUPA]",
            example: "Naucz rzeźby w drewnie grupę 8 osób",
            estimatedImpact: 80,
            energyRequired: 55,
            optimalTiming: "Podczas dnia",
            channel: "gathering",
            elements: ["Fire", "Earth"]
          }
        ]
      },
      {
        id: "sync_energies",
        name: "СИНХРОНИЗИРАЙ ЕНЕРГИИ",
        translation: "Synchronizuj Energie",
        question: "Chcę zsynchronizować energie tworzenia",
        symbol: "🦋",
        element: "Air",
        lunarOptimal: ["Full", "New"],
        resonanceScore: 78,
        riskLevel: "medium",
        actions: []
      },
      {
        id: "address_discord",
        name: "СЪОБЩИ ДИСХАРМОНИЯ",
        translation: "Rozwiąż Dysharmonię",
        question: "Potrzebuję pomocy w naprawie",
        symbol: "⚡",
        element: "Fire",
        lunarOptimal: ["Waning", "New"],
        resonanceScore: 82,
        riskLevel: "high",
        actions: []
      },
      {
        id: "connect_souls",
        name: "СВЪРЖИ ДУШИ",
        translation: "Połącz Dusze",
        question: "Chcę połączyć się przez wspólne tworzenie",
        symbol: "🌸",
        element: "Fire",
        lunarOptimal: ["Full", "Waxing"],
        resonanceScore: 88,
        riskLevel: "medium",
        actions: []
      }
    ]
  },
  {
    id: "sacred_4",
    name: "Luna Tancerka",
    sacredName: "Księżycowy Wiatr",
    archetype: "Dancer",
    pronouns: "ona/jej",
    birthMoon: "Full",
    elementalAffinity: ["Air", "Water"],
    vibrationalResonance: {
      spiritual: 90,
      elemental: 85,
      lunar: 95,
      festival: 92,
      overall: 90
    },
    status: {
      energetic: {
        element: { value: "Air", emoji: "💨" },
        practice: { value: "Gathering", emoji: "💃" },
        availability: { value: "W Ruchu", emoji: "🌪️" },
        protection: { value: "Płynne Granice", emoji: "🌊" }
      },
      lunar: {
        phase: { value: "Full", emoji: "🌕" },
        influence: { value: "Ekstaza Ruchu", emoji: "💫" },
        energy: { value: "Ekstremalne", emoji: "⚡" }
      },
      community: {
        resonance: { value: "Magnetyczny", emoji: "🧲" },
        sharing: { value: "Ekspresyjny", emoji: "🎭" },
        gathering: { value: "Katalizator", emoji: "🔥" }
      },
      festival: {
        location: { value: "Wibracje 2025", emoji: "🎪" },
        camp: { value: "Taneczny Krąg", emoji: "💃" },
        role: { value: "Przewodniczka Ruchu", emoji: "🌟" }
      }
    },
    sacredSkills: [
      {
        name: "Taniec Ekstazy",
        category: "movement",
        level: "master",
        description: "Prowadzenie transowych sesji tanecznych",
        traditions: ["Szamańska", "Sufi", "Współczesna"]
      },
      {
        name: "5Rhythms",
        category: "movement",
        level: "teacher",
        description: "Certyfikowana nauczycielka 5Rhythms",
        traditions: ["Współczesna"]
      },
      {
        name: "Taniec Kontaktowy",
        category: "movement",
        level: "practitioner",
        description: "Improwizacja ruchu w kontakcie z partnerem",
        traditions: ["Współczesna"]
      }
    ],
    dailyPractices: ["Gathering", "Meditation", "Creating"],
    teachingOfferings: [
      "Taniec ekstazy",
      "5Rhythms sessions",
      "Ruch jako medytacja",
      "Taniec kontaktowy"
    ],
    healingModalities: [
      "Terapia przez ruch",
      "Taniec ekstazy",
      "Praca z energią przez ciało",
      "Uwalnianie emocji przez taniec"
    ],
    festivalHistory: [
      {
        name: "Wibracje",
        year: 2024,
        role: "Przewodniczka Ruchu",
        camp: "Taneczny Krąg",
        workshops: ["Taniec Ekstazy", "5Rhythms", "Lunar Dance"],
        connections: 200,
        impact: "transformative"
      },
      {
        name: "Burning Man",
        year: 2023,
        role: "Movement Facilitator",
        camp: "Ecstatic Dance",
        workshops: ["5Rhythms", "Contact Improvisation"],
        connections: 300,
        impact: "transformative"
      }
    ],
    plannedFestivals: [
      {
        name: "Festiwal Zdrowego Stylu Życia",
        year: 2025,
        dates: {
          start: "2025-07-24",
          end: "2025-07-27"
        },
        location: "ARCHE Pałac i Folwark, Mazowieckie",
        role: "Przewodniczka Ruchu",
        camp: "Taneczny Krąg",
        workshops: ["Taniec Ekstazy", "5Rhythms", "Lunar Dance"],
        status: "confirmed",
        ticketStatus: "purchased",
        notes: "Główne sesje taneczne w weekend"
      },
      {
        name: "Conscious Man",
        year: 2025,
        dates: {
          start: "2025-07-23",
          end: "2025-07-27"
        },
        location: "Ziemiary 56, Łódzkie",
        role: "Przewodniczka Ruchu",
        camp: "Taneczny Krąg",
        workshops: ["Taniec Męskiej Energii", "Warrior Dance"],
        status: "confirmed",
        ticketStatus: "work_exchange",
        notes: "Specjalne sesje taneczne dla mężczyzn"
      },
      {
        name: "Festiwal Wdzięczności",
        year: 2025,
        dates: {
          start: "2025-07-25",
          end: "2025-08-13"
        },
        location: "Nida 74A, Świętokrzyskie",
        role: "Przewodniczka Ruchu",
        camp: "Taneczny Krąg",
        workshops: ["Taniec Wdzięczności", "Lunar Ceremonies"],
        status: "planning",
        ticketStatus: "applying",
        notes: "Długi festiwal z codziennymi sesjami tanecznymi"
      },
      {
        name: "Wibracje",
        year: 2025,
        dates: {
          start: "2025-08-15",
          end: "2025-08-22"
        },
        location: "Polska",
        role: "Przewodniczka Ruchu",
        camp: "Taneczny Krąg",
        workshops: ["Taniec Ekstazy", "5Rhythms", "Lunar Dance"],
        status: "confirmed",
        ticketStatus: "purchased",
        notes: "Główny festiwal roku z codziennymi sesjami"
      },
      {
        name: "Rainbow Gathering",
        year: 2025,
        dates: {
          start: "2025-07-01",
          end: "2025-07-15"
        },
        location: "European Rainbow",
        role: "Movement Facilitator",
        workshops: ["Ecstatic Dance", "5Rhythms"],
        status: "interested",
        notes: "Chcę wprowadzić taniec ekstazy na Rainbow"
      }
    ],
    currentFestival: "Wibracje 2025",
    campAffiliation: "Taneczny Krąg",
    giftOfferings: [
      "Sesje tańca ekstazy",
      "Warsztaty 5Rhythms",
      "Prywatne sesje ruchu",
      "Taniec przy pełni księżyca"
    ],
    culturalConnections: ["Szamańska", "Sufi", "Współczesna", "Uniwersalna"],
    languages: ["Polski", "English", "Español", "Português"],
    plantAllies: ["Lawenda", "Jaśmin", "Róża", "Mięta"],
    crystalAllies: ["Selenit", "Kwarc różowy", "Labradoryt", "Moonstone"],
    animalSpirits: ["Delfin", "Ptak", "Motyl", "Koń"],
    sacredTexts: [
      "Sweat Your Prayers - Gabrielle Roth",
      "The Way of the Shaman - Michael Harner",
      "Taniec jako Droga Duchowa"
    ],
    energyBoundaries: {
      deepPractice: true,
      ceremony: true,
      healing: true,
      teaching: true
    },
    timezone: "Europe/Warsaw",
    location: {
      festival: "Wibracje 2025",
      camp: "Taneczny Krąg",
      region: "Polska"
    },
    importantDates: [
      {
        date: "2025-07-15",
        type: "lunar",
        description: "Pełnia Księżyca - Taniec Ekstazy"
      },
      {
        date: "2025-08-15",
        type: "festival",
        description: "Wibracje 2025 - Główne sesje taneczne"
      }
    ],
    intentions: [
      {
        id: "share_wisdom",
        name: "ДЕЛИ МЪДРОСТ",
        translation: "Dziel Mądrość",
        question: "Chcę podzielić się wiedzą o ruchu",
        symbol: "🌱",
        element: "Earth",
        lunarOptimal: ["Waxing", "Full"],
        resonanceScore: 85,
        riskLevel: "low",
        actions: [
          {
            id: "sw_1",
            name: "Warsztat Tańca Ekstazy",
            template: "Poprowadź warsztat [TYP_TAŃCA] dla [GRUPA]",
            example: "Warsztat tańca ekstazy dla grupy 15 osób",
            estimatedImpact: 85,
            energyRequired: 60,
            optimalTiming: "Wieczorem przy muzyce",
            channel: "gathering",
            elements: ["Air", "Water"]
          },
          {
            id: "sw_2",
            name: "Opowiedz o 5Rhythms",
            template: "Podziel się wiedzą o [RYTM] i jego znaczeniu",
            example: "Opowiedz o rytmie Flowing i jego uzdrawiającej mocy",
            estimatedImpact: 80,
            energyRequired: 35,
            optimalTiming: "Przy wspólnym posiłku",
            channel: "gathering",
            elements: ["Air", "Water"]
          }
        ]
      },
      {
        id: "seek_guidance",
        name: "ТЪРСИ ВОДАЧЕСТВО",
        translation: "Szukaj Przewodnictwa",
        question: "Potrzebuję przewodnictwa w tańcu",
        symbol: "🔮",
        element: "Air",
        lunarOptimal: ["New", "Waxing"],
        resonanceScore: 80,
        riskLevel: "low",
        actions: [
          {
            id: "sg_1",
            name: "Konsultacja Ruchu",
            template: "Udziel porady w sprawie [PROBLEM_RUCHU]",
            example: "Pomóż w uwolnieniu blokad w tańcu i ekspresji ciała",
            estimatedImpact: 80,
            energyRequired: 35,
            optimalTiming: "W spokojnej przestrzeni tanecznej",
            channel: "private",
            elements: ["Air", "Water"]
          }
        ]
      },
      {
        id: "invite_ceremony",
        name: "ПОКАНИ НА ЦЕРЕМОНИЯ",
        translation: "Zaproś na Ceremonię",
        question: "Chcę zaprosić na ceremonię tańca",
        symbol: "🌙",
        element: "Water",
        lunarOptimal: ["Full", "New"],
        resonanceScore: 90,
        riskLevel: "medium",
        actions: [
          {
            id: "ic_1",
            name: "Ceremonia Tańca Księżycowego",
            template: "Poprowadź ceremonię [TYP_TAŃCA] przy [FAZA_KSIĘŻYCA] dla [GRUPA]",
            example: "Ceremonia tańca ekstazy przy pełni księżyca dla grupy 25 osób",
            estimatedImpact: 90,
            energyRequired: 75,
            optimalTiming: "Przy pełni księżyca pod gołym niebem",
            channel: "ceremony",
            elements: ["Air", "Water"]
          }
        ]
      },
      {
        id: "offer_healing",
        name: "ПРЕДЛОЖИ ИЗЦЕЛЕНИЕ",
        translation: "Oferuj Uzdrowienie",
        question: "Chcę zaoferować uzdrowienie przez ruch",
        symbol: "💎",
        element: "Water",
        lunarOptimal: ["Full", "Waning"],
        resonanceScore: 88,
        riskLevel: "low",
        actions: [
          {
            id: "oh_1",
            name: "Terapia Tańcem",
            template: "Przeprowadź sesję terapeutyczną [TYP_TAŃCA] dla [OSOBA]",
            example: "Sesja tańca uzdrawiającego dla uwolnienia traumy",
            estimatedImpact: 85,
            energyRequired: 55,
            optimalTiming: "W bezpiecznej przestrzeni",
            channel: "private",
            elements: ["Air", "Water"]
          }
        ]
      },
      {
        id: "exchange_gifts",
        name: "РАЗМЕНИ ДАРОВЕ",
        translation: "Wymień Dary",
        question: "Chcę wymienić się energią ruchu",
        symbol: "🌿",
        element: "Earth",
        lunarOptimal: ["Waxing", "Full"],
        resonanceScore: 82,
        riskLevel: "low",
        actions: [
          {
            id: "eg_1",
            name: "Wymiana Sesji Tanecznych",
            template: "Poprowadź sesję [TYP_TAŃCA] w zamian za [UMIEJĘTNOŚĆ]",
            example: "Sesja 5Rhythms w zamian za masaż uzdrawiający",
            estimatedImpact: 80,
            energyRequired: 50,
            optimalTiming: "Wieczorem",
            channel: "community",
            elements: ["Air", "Water"]
          }
        ]
      },
      {
        id: "sync_energies",
        name: "СИНХРОНИЗИРАЙ ЕНЕРГИИ",
        translation: "Synchronizuj Energie",
        question: "Chcę zsynchronizować nasze energie przez ruch",
        symbol: "🦋",
        element: "Air",
        lunarOptimal: ["Full", "New"],
        resonanceScore: 95,
        riskLevel: "medium",
        actions: [
          {
            id: "se_1",
            name: "Taniec Synchronizacji",
            template: "Poprowadź sesję [TYP_TAŃCA] dla grupy [LICZBA] osób",
            example: "Poprowadź taniec ekstazy dla grupy 20 osób przy pełni księżyca",
            estimatedImpact: 90,
            energyRequired: 70,
            optimalTiming: "Wieczorem przy pełni księżyca",
            channel: "ceremony",
            elements: ["Air", "Water"]
          },
          {
            id: "se_2",
            name: "5Rhythms Session",
            template: "Przeprowadź sesję 5Rhythms na temat [TEMAT]",
            example: "Sesja 5Rhythms na uwolnienie emocji i transformację",
            estimatedImpact: 85,
            energyRequired: 60,
            optimalTiming: "Wieczorem",
            channel: "gathering",
            elements: ["Air", "Fire"]
          }
        ]
      },
      {
        id: "address_discord",
        name: "СЪОБЩИ ДИСХАРМОНИЯ",
        translation: "Rozwiąż Dysharmonię",
        question: "Potrzebuję pomocy w rozwiązaniu przez ruch",
        symbol: "⚡",
        element: "Fire",
        lunarOptimal: ["Waning", "New"],
        resonanceScore: 78,
        riskLevel: "high",
        actions: [
          {
            id: "ad_1",
            name: "Taniec Uwolnienia",
            template: "Poprowadź sesję [TYP_TAŃCA] dla uwolnienia [PROBLEM]",
            example: "Taniec uwolnienia gniewu i frustracji",
            estimatedImpact: 80,
            energyRequired: 60,
            optimalTiming: "Podczas malejącego księżyca",
            channel: "private",
            elements: ["Fire", "Air"]
          }
        ]
      },
      {
        id: "connect_souls",
        name: "СВЪРЖИ ДУШИ",
        translation: "Połącz Dusze",
        question: "Chcę połączyć dusze przez taniec",
        symbol: "🌸",
        element: "Fire",
        lunarOptimal: ["Full", "Waxing"],
        resonanceScore: 92,
        riskLevel: "medium",
        actions: [
          {
            id: "cs_1",
            name: "Taniec Połączenia Dusz",
            template: "Poprowadź ceremonię tańca [TYP] dla połączenia [OSOBY]",
            example: "Taniec połączenia dusz dla pary lub grupy przyjaciół",
            estimatedImpact: 90,
            energyRequired: 70,
            optimalTiming: "Przy pełni księżyca",
            channel: "ceremony",
            elements: ["Fire", "Water"]
          }
        ]
      }
    ]
  },
  {
    id: "sacred_5",
    name: "Sage Alchemik",
    sacredName: "Gwiezdny Pył",
    archetype: "Alchemist",
    pronouns: "on/jego",
    birthMoon: "New",
    elementalAffinity: ["Fire", "Air"],
    vibrationalResonance: {
      spiritual: 93,
      elemental: 87,
      lunar: 89,
      festival: 85,
      overall: 88
    },
    status: {
      energetic: {
        element: { value: "Fire", emoji: "🔥" },
        practice: { value: "Creating", emoji: "⚗️" },
        availability: { value: "W Laboratorium", emoji: "🧪" },
        protection: { value: "Mistyczne Bariery", emoji: "🔮" }
      },
      lunar: {
        phase: { value: "New", emoji: "🌑" },
        influence: { value: "Nowe Początki", emoji: "✨" },
        energy: { value: "Skoncentrowane", emoji: "🎯" }
      },
      community: {
        resonance: { value: "Transformujący", emoji: "🦋" },
        sharing: { value: "Mądry", emoji: "📚" },
        gathering: { value: "Mistrz", emoji: "🧙‍♂️" }
      },
      festival: {
        location: { value: "Wibracje 2025", emoji: "🎪" },
        camp: { value: "Laboratorium Alchemii", emoji: "⚗️" },
        role: { value: "Mistrz Alchemii", emoji: "🧙‍♂️" }
      }
    },
    sacredSkills: [
      {
        name: "Alchemia Spagiryczna",
        category: "alchemy",
        level: "master",
        description: "Tworzenie eliksirów i esencji według tradycji Paracelsusa",
        traditions: ["Hermetyczna", "Europejska"]
      },
      {
        name: "Astrologia Medyczna",
        category: "wisdom",
        level: "teacher",
        description: "Łączenie wpływów planetarnych z uzdrawianiem",
        traditions: ["Hermetyczna", "Arabska"]
      },
      {
        name: "Destylacja Olejków",
        category: "plants",
        level: "practitioner",
        description: "Ekstrakcja esencji roślinnych metodami alchemicznymi",
        traditions: ["Hermetyczna"]
      }
    ],
    dailyPractices: ["Creating", "Meditation", "Teaching"],
    teachingOfferings: [
      "Podstawy alchemii spagirycznej",
      "Astrologia medyczna",
      "Tworzenie eliksirów",
      "Hermetyczna filozofia"
    ],
    healingModalities: [
      "Eliksiry spagiryczne",
      "Terapia planetarna",
      "Aromaterapia alchemiczna",
      "Transmutacja energii"
    ],
    festivalHistory: [
      {
        name: "Wibracje",
        year: 2024,
        role: "Mistrz Alchemii",
        camp: "Laboratorium Alchemii",
        workshops: ["Alchemia dla Początkujących", "Eliksiry Planetarne"],
        connections: 60,
        impact: "meaningful"
      }
    ],
    plannedFestivals: [
      {
        name: "Hermetic Gathering",
        year: 2025,
        dates: {
          start: "2025-09-21",
          end: "2025-09-23"
        },
        location: "Prague, Czech Republic",
        role: "Master Alchemist",
        workshops: ["Advanced Spagyrics", "Planetary Elixirs"],
        status: "planning",
        ticketStatus: "applying",
        notes: "Międzynarodowe spotkanie alchemików"
      }
    ],
    currentFestival: "Wibracje 2025",
    campAffiliation: "Laboratorium Alchemii",
    giftOfferings: [
      "Eliksiry spagiryczne",
      "Olejki eteryczne",
      "Konsultacje astrologiczne",
      "Warsztaty alchemii"
    ],
    culturalConnections: ["Hermetyczna", "Arabska", "Europejska"],
    languages: ["Polski", "English", "Latinum", "العربية"],
    plantAllies: ["Rozmaryn", "Lawenda", "Szałwia", "Róża"],
    crystalAllies: ["Ametyst", "Kwarc górski", "Piryt", "Lapis lazuli"],
    animalSpirits: ["Orzeł", "Lew", "Smok", "Feniks"],
    sacredTexts: [
      "Corpus Hermeticum",
      "Paracelsus - Archidoxes",
      "Tabula Smaragdina"
    ],
    energyBoundaries: {
      deepPractice: true,
      ceremony: true,
      healing: true,
      teaching: true
    },
    timezone: "Europe/Warsaw",
    location: {
      festival: "Wibracje 2025",
      camp: "Laboratorium Alchemii",
      region: "Polska"
    },
    importantDates: [
      {
        date: "2025-03-20",
        type: "ceremony",
        description: "Równonoc Wiosenna - Wielka Praca"
      },
      {
        date: "2025-09-23",
        type: "ceremony",
        description: "Równonoc Jesienna - Żniwa Alchemiczne"
      }
    ],
    intentions: [
      {
        id: "share_wisdom",
        name: "ДЕЛИ МЪДРОСТ",
        translation: "Dziel Mądrość",
        question: "Chcę podzielić się wiedzą alchemiczną",
        symbol: "🌱",
        element: "Earth",
        lunarOptimal: ["Waxing", "Full"],
        resonanceScore: 90,
        riskLevel: "low",
        actions: []
      },
      {
        id: "seek_guidance",
        name: "ТЪРСИ ВОДАЧЕСТВО",
        translation: "Szukaj Przewodnictwa",
        question: "Potrzebuję przewodnictwa w Wielkiej Pracy",
        symbol: "🔮",
        element: "Air",
        lunarOptimal: ["New", "Waxing"],
        resonanceScore: 85,
        riskLevel: "low",
        actions: []
      },
      {
        id: "invite_ceremony",
        name: "ПОКАНИ НА ЦЕРЕМОНИЯ",
        translation: "Zaproś na Ceremonię",
        question: "Chcę zaprosić na ceremonię alchemiczną",
        symbol: "🌙",
        element: "Water",
        lunarOptimal: ["Full", "New"],
        resonanceScore: 88,
        riskLevel: "medium",
        actions: []
      },
      {
        id: "offer_healing",
        name: "ПРЕДЛОЖИ ИЗЦЕЛЕНИЕ",
        translation: "Oferuj Uzdrowienie",
        question: "Chcę zaoferować uzdrowienie alchemiczne",
        symbol: "💎",
        element: "Water",
        lunarOptimal: ["Full", "Waning"],
        resonanceScore: 92,
        riskLevel: "low",
        actions: []
      },
      {
        id: "exchange_gifts",
        name: "РАЗМЕНИ ДАРОВЕ",
        translation: "Wymień Dary",
        question: "Chcę wymienić się alchemicznymi darami",
        symbol: "🌿",
        element: "Earth",
        lunarOptimal: ["Waxing", "Full"],
        resonanceScore: 87,
        riskLevel: "low",
        actions: []
      },
      {
        id: "sync_energies",
        name: "СИНХРОНИЗИРАЙ ЕНЕРГИИ",
        translation: "Synchronizuj Energie",
        question: "Chcę zsynchronizować energie planetarne",
        symbol: "🦋",
        element: "Air",
        lunarOptimal: ["Full", "New"],
        resonanceScore: 89,
        riskLevel: "medium",
        actions: []
      },
      {
        id: "address_discord",
        name: "СЪОБЩИ ДИСХАРМОНИЯ",
        translation: "Rozwiąż Dysharmonię",
        question: "Potrzebuję pomocy w transmutacji",
        symbol: "⚡",
        element: "Fire",
        lunarOptimal: ["Waning", "New"],
        resonanceScore: 83,
        riskLevel: "high",
        actions: []
      },
      {
        id: "connect_souls",
        name: "СВЪРЖИ ДУШИ",
        translation: "Połącz Dusze",
        question: "Chcę połączyć się przez Wielką Pracę",
        symbol: "🌸",
        element: "Fire",
        lunarOptimal: ["Full", "Waxing"],
        resonanceScore: 91,
        riskLevel: "medium",
        actions: []
      }
    ]
  },
  {
    id: "sacred_6",
    name: "Gaia Strażniczka",
    sacredName: "Matka Ziemia",
    archetype: "Keeper",
    pronouns: "ona/jej",
    birthMoon: "Waning",
    elementalAffinity: ["Earth", "Water"],
    vibrationalResonance: {
      spiritual: 91,
      elemental: 96,
      lunar: 88,
      festival: 89,
      overall: 91
    },
    status: {
      energetic: {
        element: { value: "Earth", emoji: "🌍" },
        practice: { value: "Gathering", emoji: "🌿" },
        availability: { value: "Opiekuńcza", emoji: "🤱" },
        protection: { value: "Naturalne Granice", emoji: "🌳" }
      },
      lunar: {
        phase: { value: "Waning", emoji: "🌘" },
        influence: { value: "Mądrość Starszych", emoji: "👵" },
        energy: { value: "Stabilne", emoji: "⚖️" }
      },
      community: {
        resonance: { value: "Opiekuńczy", emoji: "🤗" },
        sharing: { value: "Mądry", emoji: "🦉" },
        gathering: { value: "Strażniczka", emoji: "🛡️" }
      },
      festival: {
        location: { value: "Wibracje 2025", emoji: "🎪" },
        camp: { value: "Święty Gaj", emoji: "🌳" },
        role: { value: "Strażniczka Tradycji", emoji: "👵" }
      }
    },
    sacredSkills: [
      {
        name: "Ochrona Świętych Miejsc",
        category: "wisdom",
        level: "master",
        description: "Strzeżenie i konsekracja przestrzeni sakralnych",
        traditions: ["Słowiańska", "Celtycka", "Uniwersalna"]
      },
      {
        name: "Komunikacja z Naturą",
        category: "wisdom",
        level: "teacher",
        description: "Nawiązywanie kontaktu z duchami natury",
        traditions: ["Szamańska", "Słowiańska"]
      },
      {
        name: "Tradycje Przodków",
        category: "wisdom",
        level: "master",
        description: "Przekazywanie starożytnej wiedzy i obrzędów",
        traditions: ["Słowiańska", "Celtycka"]
      }
    ],
    dailyPractices: ["Meditation", "Gathering", "Teaching"],
    teachingOfferings: [
      "Ochrona świętych miejsc",
      "Komunikacja z naturą",
      "Tradycje słowiańskie",
      "Mądrość przodków"
    ],
    healingModalities: [
      "Uzdrawianie ziemią",
      "Praca z drzewami",
      "Ceremonie przodków",
      "Oczyszczanie przestrzeni"
    ],
    festivalHistory: [
      {
        name: "Wibracje",
        year: 2024,
        role: "Strażniczka Tradycji",
        camp: "Święty Gaj",
        workshops: ["Mądrość Przodków", "Ochrona Świętych Miejsc"],
        connections: 100,
        impact: "transformative"
      },
      {
        name: "Burning Man",
        year: 2019,
        role: "Elder",
        camp: "Sacred Grove",
        workshops: ["Ancient Wisdom", "Earth Connection"],
        connections: 150,
        impact: "transformative"
      }
    ],
    plannedFestivals: [
      {
        name: "Celtic Gathering",
        year: 2025,
        dates: {
          start: "2025-08-01",
          end: "2025-08-07"
        },
        location: "Ireland",
        role: "Elder Keeper",
        workshops: ["Ancient Celtic Wisdom", "Sacred Grove Ceremonies"],
        status: "interested",
        notes: "Chcę połączyć tradycje słowiańskie z celtyckimi"
      }
    ],
    currentFestival: "Wibracje 2025",
    campAffiliation: "Święty Gaj",
    giftOfferings: [
      "Błogosławieństwa przodków",
      "Ochrona przestrzeni",
      "Mądrość starszych",
      "Ceremonie ziemi"
    ],
    culturalConnections: ["Słowiańska", "Celtycka", "Uniwersalna", "Szamańska"],
    languages: ["Polski", "English", "Gaeilge", "Старославянский"],
    plantAllies: ["Dąb", "Brzoza", "Wierzba", "Jodła", "Babka"],
    crystalAllies: ["Hematyt", "Malachit", "Jadeit", "Turmalin czarny"],
    animalSpirits: ["Niedźwiedź", "Żółw", "Sowa", "Jeleń"],
    sacredTexts: [
      "Słowiańska Księga Przodków",
      "Mabinogion",
      "Tradycje Ustne Babuni"
    ],
    energyBoundaries: {
      deepPractice: true,
      ceremony: true,
      healing: true,
      teaching: true
    },
    timezone: "Europe/Warsaw",
    location: {
      festival: "Wibracje 2025",
      camp: "Święty Gaj",
      region: "Polska"
    },
    importantDates: [
      {
        date: "2025-05-01",
        type: "ceremony",
        description: "Noc Kupały - Święto Przodków"
      },
      {
        date: "2025-10-31",
        type: "ceremony",
        description: "Samhain - Komunikacja z Przodkami"
      }
    ],
    intentions: [
      {
        id: "share_wisdom",
        name: "ДЕЛИ МЪДРОСТ",
        translation: "Dziel Mądrość",
        question: "Chcę podzielić się mądrością przodków",
        symbol: "🌱",
        element: "Earth",
        lunarOptimal: ["Waxing", "Full"],
        resonanceScore: 95,
        riskLevel: "low",
        actions: [
          {
            id: "sw_1",
            name: "Opowiedz Legendę Przodków",
            template: "Podziel się słowiańską legendą o [TEMAT]",
            example: "Opowiedz legendę o Matce Ziemi i jej mądrości",
            estimatedImpact: 90,
            energyRequired: 35,
            optimalTiming: "Wieczorem przy ogniu",
            channel: "gathering",
            elements: ["Earth", "Water"]
          },
          {
            id: "sw_2",
            name: "Ceremonia Przodków",
            template: "Poprowadź ceremonię honoru przodków dla [GRUPA]",
            example: "Ceremonia łączenia z mądrością przodków dla grupy 12 osób",
            estimatedImpact: 95,
            energyRequired: 50,
            optimalTiming: "O zmierzchu",
            channel: "ceremony",
            elements: ["Earth", "Air"]
          }
        ]
      },
      {
        id: "seek_guidance",
        name: "ТЪРСИ ВОДАЧЕСТВО",
        translation: "Szukaj Przewodnictwa",
        question: "Potrzebuję rady od starszych",
        symbol: "🔮",
        element: "Air",
        lunarOptimal: ["New", "Waxing"],
        resonanceScore: 88,
        riskLevel: "low",
        actions: [
          {
            id: "sg_1",
            name: "Konsultacja ze Starszymi",
            template: "Udziel mądrej rady w sprawie [PROBLEM]",
            example: "Pomóż w interpretacji znaków od przodków",
            estimatedImpact: 85,
            energyRequired: 40,
            optimalTiming: "W ciszy świętego gaju",
            channel: "private",
            elements: ["Air", "Earth"]
          }
        ]
      },
      {
        id: "invite_ceremony",
        name: "ПОКАНИ НА ЦЕРЕМОНИЯ",
        translation: "Zaproś na Ceremonię",
        question: "Chcę zaprosić na ceremonię przodków",
        symbol: "🌙",
        element: "Water",
        lunarOptimal: ["Full", "New"],
        resonanceScore: 92,
        riskLevel: "medium",
        actions: []
      },
      {
        id: "offer_healing",
        name: "ПРЕДЛОЖИ ИЗЦЕЛЕНИЕ",
        translation: "Oferuj Uzdrowienie",
        question: "Chcę zaoferować uzdrowienie ziemią",
        symbol: "💎",
        element: "Water",
        lunarOptimal: ["Full", "Waning"],
        resonanceScore: 90,
        riskLevel: "low",
        actions: []
      },
      {
        id: "exchange_gifts",
        name: "РАЗМЕНИ ДАРОВЕ",
        translation: "Wymień Dary",
        question: "Chcę wymienić się błogosławieństwami",
        symbol: "🌿",
        element: "Earth",
        lunarOptimal: ["Waxing", "Full"],
        resonanceScore: 85,
        riskLevel: "low",
        actions: []
      },
      {
        id: "sync_energies",
        name: "СИНХРОНИЗИРАЙ ЕНЕРГИИ",
        translation: "Synchronizuj Energie",
        question: "Chcę zsynchronizować energie z ziemią",
        symbol: "🦋",
        element: "Air",
        lunarOptimal: ["Full", "New"],
        resonanceScore: 87,
        riskLevel: "medium",
        actions: []
      },
      {
        id: "address_discord",
        name: "СЪОБЩИ ДИСХАРМОНИЯ",
        translation: "Rozwiąż Dysharmonię",
        question: "Potrzebuję pomocy w przywróceniu równowagi",
        symbol: "⚡",
        element: "Fire",
        lunarOptimal: ["Waning", "New"],
        resonanceScore: 80,
        riskLevel: "high",
        actions: []
      },
      {
        id: "connect_souls",
        name: "СВЪРЖИ ДУШИ",
        translation: "Połącz Dusze",
        question: "Chcę połączyć z przodkami i naturą",
        symbol: "🌸",
        element: "Fire",
        lunarOptimal: ["Full", "Waxing"],
        resonanceScore: 93,
        riskLevel: "medium",
        actions: []
      }
    ]
  }
];
