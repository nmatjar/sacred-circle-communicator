import type { Profile } from "@/types/profile";

export const mockProfiles: Profile[] = [
  {
    id: "1",
    name: "Mateusz - The Analyst",
    archetype: "Analyst",
    qpi: 0.92,
    status: {
      live: {
        status: { value: "A (Available)", emoji: "🟢" },
        activity: { value: "Strategy Work", emoji: "📊" },
        interaction: { value: "ASYNC", emoji: "📨" },
        response: { value: "<30min", emoji: "⏱️" },
      },
      cognitive: {
        load: { value: "H (High)", emoji: "🧠" },
        energy: { value: "H (High)", emoji: "🔋" },
      },
      social: {
        mode: { value: "FOCUSED", emoji: "🎯" },
        bandwidth: { value: "HIGH", emoji: "⚡️" },
      },
    },
    intentions: [
      {
        id: 1,
        name: "PODZIEL SIĘ",
        question: "Chcę coś tej osobie przekazać",
        icon: "Share",
        matchScore: 85,
        riskLevel: "low",
        actions: [
          {
            id: "1.1",
            name: "Wyślij Link",
            template: "Wyślij link do [TYP_TREŚCI] na [KANAŁ]",
            example: "Wyślij link do artykułu analitycznego na czat asynchroniczny",
            estimatedImpact: 70,
            executionTime: 2,
            channel: "chat"
          },
          {
            id: "1.2",
            name: "Wyślij Dane",
            template: "Wyślij [TYP_DANYCH] w formacie [FORMAT]",
            example: "Wyślij surowe dane w formacie CSV",
            estimatedImpact: 90,
            executionTime: 5,
            channel: "email"
          },
          {
            id: "1.3",
            name: "Przekaż Status",
            template: "Wyślij krótkie podsumowanie statusu [PROJEKTU]",
            example: "Wyślij 3-punktowe podsumowanie postępu w projekcie",
            estimatedImpact: 75,
            executionTime: 10,
            channel: "chat"
          },
          {
            id: "1.4",
            name: "Podziel się Wglądem",
            template: "Nagraj krótką (<=60s) notatkę głosową/wideo z [TYP_WGLĄDU]",
            example: "Nagraj wideo z konceptualnym wglądem strategicznym",
            estimatedImpact: 95,
            executionTime: 15,
            channel: "chat"
          },
          {
            id: "1.5",
            name: "Udostępnij Dokument",
            template: "Udostępnij dokument z uprawnieniami do [UPRAWNIENIA]",
            example: "Udostępnij dokument z uprawnieniami do komentowania",
            estimatedImpact: 80,
            executionTime: 3,
            channel: "document"
          },
          {
            id: "1.6",
            name: "Przekaż Obraz",
            template: "Wyślij zrzut ekranu / diagram z adnotacjami",
            example: "Wyślij diagram architektury na Miro",
            estimatedImpact: 85,
            executionTime: 7,
            channel: "chat"
          },
          {
            id: "1.7",
            name: "Wyślij TL;DR",
            template: "Wyślij jednozdaniowe podsumowanie (TL;DR) [TEMATU]",
            example: "Wyślij jednozdaniowe podsumowanie raportu rynkowego",
            estimatedImpact: 60,
            executionTime: 3,
            channel: "chat"
          }
        ]
      },
      {
        id: 2,
        name: "ZAPYTAJ",
        question: "Potrzebuję czegoś od tej osoby",
        icon: "MessageCircleQuestion",
        matchScore: 78,
        riskLevel: "medium",
        actions: [
          {
            id: "2.1",
            name: "O Szybkie Pytanie",
            template: "Wyślij pytanie typu \"Tak/Nie\" lub o jedną daną",
            example: "Wyślij pytanie: \"Czy zatwierdzasz budżet X?\"",
            estimatedImpact: 70,
            executionTime: 2,
            channel: "chat"
          },
          {
            id: "2.2",
            name: "O Feedback",
            template: "Poproś o [TYP_FEEDBACKU] na temat [PRODUKTU]",
            example: "Poproś o bezpośredni, oparty na danych feedback na temat propozycji",
            estimatedImpact: 85,
            executionTime: 5,
            channel: "email"
          },
          {
            id: "2.3",
            name: "O Decyzję",
            template: "Przedstaw 2-3 opcje i poproś o podjęcie decyzji",
            example: "Przedstaw 2 opcje strategiczne i poproś o wskazanie kierunku",
            estimatedImpact: 90,
            executionTime: 15,
            channel: "meeting"
          },
          {
            id: "2.4",
            name: "O Zasób",
            template: "Poproś o dostęp do [ZASOBU]",
            example: "Poproś o dostęp do repozytorium projektu",
            estimatedImpact: 75,
            executionTime: 3,
            channel: "chat"
          },
          {
            id: "2.5",
            name: "O Czas",
            template: "Zaproponuj krótkie (<=15 min) spotkanie w [OKNIE_CZASOWYM]",
            example: "Zaproponuj 15-minutowe spotkanie w elastycznych godzinach",
            estimatedImpact: 80,
            executionTime: 5,
            channel: "meeting"
          },
          {
            id: "2.6",
            name: "O Wyjaśnienie",
            template: "Poproś o wyjaśnienie [KONCEPTU] w [FORMIE]",
            example: "Poproś o wyjaśnienie modelu w formie wizualnej",
            estimatedImpact: 85,
            executionTime: 8,
            channel: "chat"
          },
          {
            id: "2.7",
            name: "O Pomoc",
            template: "Poproś o pomoc w rozwiązaniu [PROBLEMU]",
            example: "Poproś o pomoc w rozwiązaniu złożonego problemu analitycznego",
            estimatedImpact: 90,
            executionTime: 20,
            channel: "meeting"
          }
        ]
      },
      {
        id: 3,
        name: "ZAPROŚ",
        question: "Chcę, żeby do czegoś dołączyła",
        icon: "UserPlus",
        matchScore: 92,
        riskLevel: "low",
        actions: [
          {
            id: "3.1",
            name: "Na Spotkanie",
            template: "Wyślij zaproszenie na [TYP_SPOTKANIA] z jasną agendą",
            example: "Wyślij zaproszenie na warsztat strategiczny z agendą",
            estimatedImpact: 85,
            executionTime: 10,
            channel: "meeting"
          },
          {
            id: "3.2",
            name: "Do Kanału",
            template: "Zaproś do dołączenia do kanału dyskusyjnego [TEMAT]",
            example: "Zaproś do kanału na Slacku o technologii",
            estimatedImpact: 80,
            executionTime: 3,
            channel: "chat"
          },
          {
            id: "3.3",
            name: "Do Dokumentu",
            template: "Zaproś do współpracy nad [DOKUMENTEM]",
            example: "Zaproś do współpracy nad white paperem o strategii",
            estimatedImpact: 90,
            executionTime: 5,
            channel: "document"
          },
          {
            id: "3.4",
            name: "Do Burzy Mózgów",
            template: "Zaproś na [TYP_SESJI] burzy mózgów",
            example: "Zaproś na asynchroniczną sesję burzy mózgów na Miro",
            estimatedImpact: 85,
            executionTime: 7,
            channel: "document"
          },
          {
            id: "3.5",
            name: "Do Wydarzenia",
            template: "Przekaż informację o [WYDARZENIU]",
            example: "Przekaż informację o ekskluzywnej konferencji technologicznej",
            estimatedImpact: 70,
            executionTime: 5,
            channel: "email"
          },
          {
            id: "3.6",
            name: "Do Testów",
            template: "Zaproś do przetestowania [FUNKCJI]",
            example: "Zaproś do przetestowania nowego, eksperymentalnego modelu",
            estimatedImpact: 95,
            executionTime: 8,
            channel: "chat"
          },
          {
            id: "3.7",
            name: "Do Projektu",
            template: "Zaproponuj dołączenie do [PROJEKTU] w roli [ROLA]",
            example: "Zaproponuj dołączenie do projektu R&D w roli doradcy strategicznego",
            estimatedImpact: 95,
            executionTime: 20,
            channel: "meeting"
          }
        ]
      },
      {
        id: 4,
        name: "ZAPROPONUJ",
        question: "Mam pomysł lub sugestię",
        icon: "Lightbulb",
        matchScore: 88,
        riskLevel: "medium",
        actions: [
          {
            id: "4.1",
            name: "Nowy Pomysł",
            template: "Przedstaw zwięzły zarys pomysłu (1-3 zdania)",
            example: "Przedstaw zarys pomysłu na nowy produkt",
            estimatedImpact: 85,
            executionTime: 10,
            channel: "chat"
          },
          {
            id: "4.2",
            name: "Usprawnienie",
            template: "Zaproponuj konkretne usprawnienie w [PROCESIE/PRODUKCIE]",
            example: "Zaproponuj usprawnienie w procesie analizy danych",
            estimatedImpact: 80,
            executionTime: 15,
            channel: "document"
          },
          {
            id: "4.3",
            name: "Eksperyment",
            template: "Zaproponuj przeprowadzenie [EKSPERYMENTU]",
            example: "Zaproponuj przeprowadzenie eksperymentu A/B na modelu",
            estimatedImpact: 90,
            executionTime: 12,
            channel: "email"
          },
          {
            id: "4.4",
            name: "Zmianę Kierunku",
            template: "Zasugeruj strategiczną zmianę kierunku w [PROJEKCIE]",
            example: "Zasugeruj pivot w strategii rozwoju",
            estimatedImpact: 95,
            executionTime: 30,
            channel: "meeting"
          },
          {
            id: "4.5",
            name: "Nowe Narzędzie",
            template: "Zaproponuj wdrożenie [NARZĘDZIA] do [CELU]",
            example: "Zaproponuj wdrożenie nowego narzędzia do automatyzacji",
            estimatedImpact: 75,
            executionTime: 8,
            channel: "chat"
          },
          {
            id: "4.6",
            name: "Partnerstwo",
            template: "Zaproponuj nawiązanie partnerstwa z [FIRMA]",
            example: "Zaproponuj strategiczne partnerstwo z think tankiem",
            estimatedImpact: 90,
            executionTime: 25,
            channel: "meeting"
          },
          {
            id: "4.7",
            name: "Nową Metrykę",
            template: "Zaproponuj śledzenie nowej metryki [METRYKA]",
            example: "Zaproponuj śledzenie metryki zaangażowania użytkowników",
            estimatedImpact: 70,
            executionTime: 5,
            channel: "document"
          }
        ]
      },
      {
        id: 5,
        name: "ZSYNCHRONIZUJ SIĘ",
        question: "Chcę sprawdzić, czy jesteśmy na tej samej stronie",
        icon: "RefreshCw",
        matchScore: 82,
        riskLevel: "low",
        actions: [
          {
            id: "5.1",
            name: "Potwierdź Zrozumienie",
            template: "Poproś o potwierdzenie zrozumienia kluczowych punktów",
            example: "Poproś o potwierdzenie, czy wizja strategiczna jest jasna",
            estimatedImpact: 80,
            executionTime: 5,
            channel: "chat"
          },
          {
            id: "5.2",
            name: "Sprawdź Postęp",
            template: "Zapytaj o status postępu w [ZADANIU]",
            example: "Zapytaj o status postępu w rozwoju partnerstw",
            estimatedImpact: 85,
            executionTime: 3,
            channel: "chat"
          },
          {
            id: "5.3",
            name: "Zidentyfikuj Blokery",
            template: "Zapytaj o potencjalne blokery lub ryzyka",
            example: "Zapytaj o ryzyka w strategii wejścia na nowy rynek",
            estimatedImpact: 90,
            executionTime: 8,
            channel: "chat"
          },
          {
            id: "5.4",
            name: "Sprawdź Priorytety",
            template: "Potwierdź, co jest teraz najważniejszym priorytetem",
            example: "Potwierdź, czy priorytetem jest rozwój czy content",
            estimatedImpact: 85,
            executionTime: 5,
            channel: "chat"
          },
          {
            id: "5.5",
            name: "Sprawdź Zgodność",
            template: "Zapytaj, czy [DZIAŁANIE] jest zgodne z [WIZJĄ]",
            example: "Zapytaj, czy nowa funkcja jest zgodna z wizją produktu",
            estimatedImpact: 80,
            executionTime: 7,
            channel: "chat"
          },
          {
            id: "5.6",
            name: "Sprawdź Zdolność",
            template: "Zapytaj o aktualną zdolność do podjęcia [ZADANIA]",
            example: "Zapytaj o zdolność do podjęcia dodatkowego projektu analitycznego",
            estimatedImpact: 75,
            executionTime: 3,
            channel: "chat"
          },
          {
            id: "5.7",
            name: "Zbierz Nastroje",
            template: "Wyślij krótką ankietę nastrojów dotyczącą [PROJEKTU]",
            example: "Wyślij ankietę: \"Jak oceniasz potencjał tego kierunku w skali 1-10?\"",
            estimatedImpact: 70,
            executionTime: 5,
            channel: "document"
          }
        ]
      },
      {
        id: 6,
        name: "WESPRZYJ",
        question: "Chcę zaoferować pomoc lub docenić",
        icon: "Heart",
        matchScore: 65,
        riskLevel: "low",
        actions: [
          {
            id: "6.1",
            name: "Pochwal Publicznie",
            template: "Pochwal za [OSIĄGNIĘCIE] na [KANAŁ_PUBLICZNY]",
            example: "Pochwal za przełomową analizę na kanale zespołu",
            estimatedImpact: 80,
            executionTime: 3,
            channel: "public"
          },
          {
            id: "6.2",
            name: "Pochwal Prywatnie",
            template: "Wyślij prywatną wiadomość z podziękowaniem za [WKŁAD]",
            example: "Wyślij prywatną wiadomość z podziękowaniem za wkład strategiczny",
            estimatedImpact: 85,
            executionTime: 5,
            channel: "chat"
          },
          {
            id: "6.3",
            name: "Zaoferuj Pomoc",
            template: "Zaoferuj pomoc w [OBSZARZE]",
            example: "Zaoferuj pomoc w analizie danych",
            estimatedImpact: 75,
            executionTime: 5,
            channel: "chat"
          },
          {
            id: "6.4",
            name: "Zaoferuj Zasób",
            template: "Zaproponuj udostępnienie [ZASOBU]",
            example: "Zaproponuj udostępnienie budżetu na narzędzia",
            estimatedImpact: 90,
            executionTime: 8,
            channel: "chat"
          },
          {
            id: "6.5",
            name: "Sprawdź Samopoczucie",
            template: "Wyślij neutralne pytanie o samopoczucie (\"Jak leci?\")",
            example: "Wyślij neutralne pytanie o samopoczucie",
            estimatedImpact: 40,
            executionTime: 2,
            channel: "chat"
          },
          {
            id: "6.6",
            name: "Wzmocnij Pomysł",
            template: "Publicznie wesprzyj pomysł przedstawiony przez osobę",
            example: "Wesprzyj jego propozycję strategiczną na spotkaniu",
            estimatedImpact: 85,
            executionTime: 5,
            channel: "public"
          },
          {
            id: "6.7",
            name: "Daj Autonomię",
            template: "Potwierdź, że ma pełną autonomię w [OBSZARZE]",
            example: "Potwierdź pełną autonomię w kierowaniu projektem",
            estimatedImpact: 80,
            executionTime: 3,
            channel: "chat"
          }
        ]
      },
      {
        id: 7,
        name: "ZGŁOŚ PROBLEM",
        question: "Coś wymaga jej uwagi",
        icon: "AlertTriangle",
        matchScore: 90,
        riskLevel: "high",
        actions: [
          {
            id: "7.1",
            name: "Zgłoś Bloker",
            template: "Zgłoś bloker, który uniemożliwia postęp w [ZADANIU]",
            example: "Zgłoś bloker prawny w umowie partnerskiej",
            estimatedImpact: 95,
            executionTime: 10,
            channel: "chat"
          },
          {
            id: "7.2",
            name: "Zgłoś Ryzyko",
            template: "Poinformuj o zidentyfikowanym ryzyku w [PROJEKCIE]",
            example: "Poinformuj o ryzyku konkurencyjnym na rynku",
            estimatedImpact: 90,
            executionTime: 15,
            channel: "email"
          },
          {
            id: "7.3",
            name: "Zgłoś Błąd",
            template: "Zgłoś krytyczny błąd w [SYSTEMIE]",
            example: "Zgłoś błąd w modelu predykcyjnym",
            estimatedImpact: 95,
            executionTime: 5,
            channel: "chat"
          },
          {
            id: "7.4",
            name: "Przekaż Złą Wiadomość",
            template: "Poinformuj zwięźle i bezpośrednio o [ZDARZENIU]",
            example: "Poinformuj o negatywnych wynikach testu",
            estimatedImpact: 85,
            executionTime: 8,
            channel: "chat"
          },
          {
            id: "7.5",
            name: "Eskaluj Problem",
            template: "Poproś o interwencję w [PROBLEMIE]",
            example: "Poproś o interwencję w negocjacjach z partnerem",
            estimatedImpact: 90,
            executionTime: 12,
            channel: "meeting"
          },
          {
            id: "7.6",
            name: "Zgłoś Niezgodność",
            template: "Wskaż niezgodność między [DZIAŁANIEM] a [STRATEGIĄ]",
            example: "Wskaż niezgodność wdrożenia z założeniami architektonicznymi",
            estimatedImpact: 85,
            executionTime: 10,
            channel: "document"
          },
          {
            id: "7.7",
            name: "Poproś o Korektę",
            template: "Poproś o korektę kursu w [PROJEKCIE]",
            example: "Poproś o rewizję strategii produktu w oparciu o nowe dane",
            estimatedImpact: 90,
            executionTime: 20,
            channel: "meeting"
          }
        ]
      },
      {
        id: 8,
        name: "NAWIĄŻ KONTAKT",
        question: "Chcę zainicjować otwartą interakcję",
        icon: "MessageCircle",
        matchScore: 72,
        riskLevel: "low",
        actions: [
          {
            id: "8.1",
            name: "Zacznij Rozmowę",
            template: "Nawiąż do wspólnego zainteresowania [TEMAT]",
            example: "Nawiąż do ostatniego artykułu o technologii",
            estimatedImpact: 75,
            executionTime: 5,
            channel: "chat"
          },
          {
            id: "8.2",
            name: "Zaproś na Kawę",
            template: "Zaproponuj krótką, wirtualną/realną kawę",
            example: "Zaproponuj krótką, wirtualną kawę w celu omówienia strategii",
            estimatedImpact: 80,
            executionTime: 8,
            channel: "meeting"
          },
          {
            id: "8.3",
            name: "Udostępnij Coś Ciekawego",
            template: "Wyślij link do interesującego [MEDIA] bez oczekiwania odpowiedzi",
            example: "Wyślij link do przełomowego badania",
            estimatedImpact: 70,
            executionTime: 3,
            channel: "chat"
          },
          {
            id: "8.4",
            name: "Zadaj Otwarte Pytanie",
            template: "Zadaj szerokie, otwarte pytanie o [TEMAT]",
            example: "Zadaj pytanie: \"Jakie widzisz największe wyzwania w ciągu 5 lat?\"",
            estimatedImpact: 85,
            executionTime: 5,
            channel: "chat"
          },
          {
            id: "8.5",
            name: "Skomentuj Aktywność",
            template: "Skomentuj publiczną aktywność osoby (np. post, film)",
            example: "Skomentuj merytorycznie jego ostatni film na YouTube",
            estimatedImpact: 75,
            executionTime: 7,
            channel: "public"
          },
          {
            id: "8.6",
            name: "Przedstaw Kogoś",
            template: "Zaproponuj przedstawienie ciekawej osoby z [BRANŻY]",
            example: "Zaproponuj przedstawienie eksperta od rynków",
            estimatedImpact: 80,
            executionTime: 10,
            channel: "email"
          },
          {
            id: "8.7",
            name: "Reaktywuj Kontakt",
            template: "Wyślij krótką wiadomość nawiązującą do ostatniej interakcji",
            example: "Wyślij wiadomość: \"Myślałem o naszej ostatniej rozmowie o...\"",
            estimatedImpact: 70,
            executionTime: 5,
            channel: "chat"
          }
        ]
      }
    ]
  },
  {
    id: "2",
    name: "Alice - The Creator",
    archetype: "Creator",
    qpi: 0.88,
    status: {
      live: {
        status: { value: "B (Busy)", emoji: "🟡" },
        activity: { value: "Creative Work", emoji: "🎨" },
        interaction: { value: "SYNC", emoji: "💬" },
        response: { value: "<1h", emoji: "⏱️" },
      },
      cognitive: {
        load: { value: "M (Medium)", emoji: "🧠" },
        energy: { value: "H (High)", emoji: "🔋" },
      },
      social: {
        mode: { value: "OPEN", emoji: "🤝" },
        bandwidth: { value: "MEDIUM", emoji: "⚡️" },
      },
    },
    intentions: [
      {
        id: 1,
        name: "PODZIEL SIĘ",
        question: "Chcę coś tej osobie przekazać",
        icon: "Share",
        matchScore: 95,
        riskLevel: "low",
        actions: [
          {
            id: "1.1",
            name: "Wyślij Inspirację",
            template: "Wyślij link do inspirującego [MATERIAŁU]",
            example: "Wyślij link do kreatywnego projektu na Behance",
            estimatedImpact: 85,
            executionTime: 3,
            channel: "chat"
          },
          {
            id: "1.2",
            name: "Udostępnij Wizję",
            template: "Podziel się wizualną koncepcją [PROJEKTU]",
            example: "Udostępnij moodboard nowego projektu",
            estimatedImpact: 90,
            executionTime: 10,
            channel: "document"
          },
          {
            id: "1.3",
            name: "Przekaż Feedback",
            template: "Wyślij konstruktywny feedback na temat [PRACY]",
            example: "Przekaż feedback na temat ostatniego designu",
            estimatedImpact: 80,
            executionTime: 15,
            channel: "chat"
          },
          {
            id: "1.4",
            name: "Pokaż Proces",
            template: "Nagraj krótkie wideo pokazujące [PROCES_TWÓRCZY]",
            example: "Nagraj timelapse procesu projektowania",
            estimatedImpact: 95,
            executionTime: 20,
            channel: "chat"
          },
          {
            id: "1.5",
            name: "Udostępnij Narzędzie",
            template: "Poleć nowe [NARZĘDZIE_KREATYWNE]",
            example: "Poleć nowy plugin do Figmy",
            estimatedImpact: 75,
            executionTime: 5,
            channel: "chat"
          },
          {
            id: "1.6",
            name: "Przekaż Trend",
            template: "Podziel się najnowszym trendem w [DZIEDZINIE]",
            example: "Podziel się trendem w UI/UX design",
            estimatedImpact: 70,
            executionTime: 7,
            channel: "chat"
          },
          {
            id: "1.7",
            name: "Wyślij Szkic",
            template: "Wyślij szybki szkic lub wireframe [POMYSŁU]",
            example: "Wyślij szkic nowego interfejsu",
            estimatedImpact: 85,
            executionTime: 12,
            channel: "chat"
          }
        ]
      }
    ]
  }
];
