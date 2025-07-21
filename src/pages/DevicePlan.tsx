import React, { useState } from 'react';
import { 
  Cpu, 
  Wifi, 
  Battery, 
  Mic, 
  Speaker, 
  Zap, 
  Shield, 
  Globe, 
  Heart,
  Calendar,
  Users,
  Settings,
  Play
} from 'lucide-react';

const DevicePlan = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const deviceVariants = [
    {
      name: "Tribal Fusion",
      image: "/device/inteligentnydoradca_Handcrafted_tribal_communication_amulet_i_d281c8b3-edf6-4e20-82e7-f72b6aa00669_1.png",
      description: "Ręcznie wykonany amulet z drewna Palo Santo z elementami tribal",
      features: ["Naturalne materiały", "Wzory pyrograficzne", "Obsydian centralny", "Etyczne pióra"]
    },
    {
      name: "Mandala Tech",
      image: "/device/inteligentnydoradca_Precision-engineered_sacred_geometry_devi_40c8f147-ad41-4d17-b875-3991ac5e24a8_2.png",
      description: "Precyzyjnie wykonane urządzenie z sacred geometry",
      features: ["CNC walnut", "Brass inlays", "Matematyczna precyzja", "LED diffusers"]
    },
    {
      name: "Cyber Shaman",
      image: "/device/inteligentnydoradca_Sleek_futuristic_sacred_geometry_device_o_0ca20ac1-90a0-412d-b654-f2e1586de9fe_1.png",
      description: "Futurystyczne urządzenie z holograficznymi elementami",
      features: ["Bamboo composite", "Carbon fiber", "OLED display", "Quantum dots"]
    },
    {
      name: "Zen Minimalist",
      image: "/device/inteligentnydoradca_Ultra-minimalist_sacred_communication_dev_82527fb0-0289-436e-b687-49572a6c7fb6_3.png",
      description: "Ultra-minimalistyczne urządzenie z niewidzialną technologią",
      features: ["Blonde bamboo", "Invisible LEDs", "Hidden display", "Silk cord"]
    }
  ];

  const videos = [
    {
      name: "Cyber Shaman Demo",
      src: "/device/social_inteligentnydoradca_Sleek_futuristic_sacred_geometry_device_o_dd02bd66-ad7f-4fec-90c7-9b83445792db_3.mp4",
      poster: "/device/inteligentnydoradca_Sleek_futuristic_sacred_geometry_device_o_0ca20ac1-90a0-412d-b654-f2e1586de9fe_1.png",
      description: "Demonstracja funkcji AI w wersji futurystycznej"
    },
    {
      name: "Zen AI Interaction",
      src: "/device/social_inteligentnydoradca_Ultra-minimalist_Sacred_Circle_AI_Communi_ded0d382-4361-4db6-84ca-4ebd5cb2320e_0.mp4",
      poster: "/device/inteligentnydoradca_Ultra-minimalist_sacred_communication_dev_82527fb0-0289-436e-b687-49572a6c7fb6_3.png",
      description: "Subtelna interakcja z AI w wersji minimalistycznej"
    },
    {
      name: "Minimalist Features",
      src: "/device/social_inteligentnydoradca_Ultra-minimalist_sacred_communication_dev_1eeb99c7-58f7-4378-9fc1-559b5034ad7b_2.mp4",
      poster: "/device/inteligentnydoradca_Precision-engineered_sacred_geometry_devi_40c8f147-ad41-4d17-b875-3991ac5e24a8_2.png",
      description: "Prezentacja funkcji w czystej formie"
    }
  ];

  const techSpecs = [
    { icon: <Cpu className="w-5 h-5" />, name: "Procesor", value: "ESP32-S3 Dual-core 240MHz", description: "Zaawansowany chip z AI processing" },
    { icon: <Wifi className="w-5 h-5" />, name: "Komunikacja", value: "LoRa 868MHz + Bluetooth 5.0", description: "Mesh network bez internetu" },
    { icon: <Battery className="w-5 h-5" />, name: "Bateria", value: "LiPo 500mAh + Solar", description: "3-7 dni pracy, ładowanie bezprzewodowe" },
    { icon: <Mic className="w-5 h-5" />, name: "Audio Input", value: "MEMS Microphone", description: "Rozpoznawanie mowy i emocji" },
    { icon: <Speaker className="w-5 h-5" />, name: "Audio Output", value: "Bone Conduction Speaker", description: "Dyskretny dźwięk bez słuchawek" },
    { icon: <Zap className="w-5 h-5" />, name: "Sensory", value: "Akcelerometr + Magnetometr", description: "Gesty i orientacja w przestrzeni" },
    { icon: <Shield className="w-5 h-5" />, name: "Ochrona", value: "IP68 Waterproof", description: "Odporność na warunki festiwalowe" },
    { icon: <Globe className="w-5 h-5" />, name: "AI Features", value: "50+ języków + Emotional AI", description: "Tłumaczenie i analiza emocjonalna" }
  ];

  const developmentPhases = [
    {
      phase: "Faza 1: Prototyp",
      duration: "3 miesiące",
      status: "W trakcie",
      tasks: [
        "ESP32 + LoRa breadboard prototype",
        "Podstawowa komunikacja mesh",
        "Interfejs LED i dotykowy",
        "Alpha aplikacja mobilna"
      ]
    },
    {
      phase: "Faza 2: Alpha Hardware",
      duration: "4 miesiące", 
      status: "Planowane",
      tasks: [
        "Custom PCB design",
        "3D printed enclosures",
        "AI voice processing",
        "Beta testing na małych eventach"
      ]
    },
    {
      phase: "Faza 3: Beta Production",
      duration: "6 miesięcy",
      status: "Planowane", 
      tasks: [
        "Professional enclosures",
        "Optymalizacja baterii",
        "Pełne funkcje AI",
        "Testing na średnich festiwalach"
      ]
    },
    {
      phase: "Faza 4: Mass Production",
      duration: "8 miesięcy",
      status: "Planowane",
      tasks: [
        "Final hardware design",
        "CE/FCC certification",
        "Setup produkcji masowej",
        "Launch na major festivals"
      ]
    }
  ];

  const businessModels = [
    {
      model: "Dzierżawa Festiwalowa",
      price: "€15-25/festiwal",
      description: "Urządzenia udostępniane przez organizatorów",
      features: [
        "Brak kosztów początkowych dla uczestników",
        "Wsparcie techniczne na miejscu",
        "Konfiguracja pod konkretny festiwal",
        "Zbieranie danych do optymalizacji"
      ]
    },
    {
      model: "Zakup Indywidualny",
      price: "€89-129/urządzenie",
      description: "Własne urządzenie z personalizacją",
      features: [
        "Pełna personalizacja profilu",
        "Historia wszystkich festiwali",
        "Premium funkcje AI",
        "Lifetime updates"
      ]
    },
    {
      model: "Customizacja Korporacyjna",
      price: "€200-500/urządzenie",
      description: "Specjalne wersje dla organizacji",
      features: [
        "Custom design i branding",
        "Dedykowane funkcje",
        "Enterprise support",
        "Analytics dashboard"
      ]
    }
  ];

  const Badge = ({ children, variant = "default", className = "" }: { children: React.ReactNode, variant?: string, className?: string }) => (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
      variant === "outline" ? "border border-gray-300 text-gray-700" : "bg-gray-100 text-gray-800"
    } ${className}`}>
      {children}
    </span>
  );

  const Button = ({ children, variant = "default", size = "default", className = "", onClick }: { 
    children: React.ReactNode, 
    variant?: string, 
    size?: string, 
    className?: string,
    onClick?: () => void 
  }) => (
    <button 
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-md font-medium transition-colors ${
        variant === "outline" ? "border border-gray-300 bg-transparent hover:bg-gray-50" : 
        variant === "secondary" ? "bg-gray-100 text-gray-900 hover:bg-gray-200" :
        "bg-blue-600 text-white hover:bg-blue-700"
      } ${
        size === "lg" ? "px-8 py-3 text-lg" : "px-4 py-2 text-sm"
      } ${className}`}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-green-50 to-blue-50 p-6 text-gray-600">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-green-600 to-blue-600 bg-clip-text text-transparent">
            Sacred Circle AI Communicator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rewolucyjne urządzenie łączące starożytną mądrość z najnowszą technologią AI 
            dla duchowej komunikacji na festiwalach świadomościowych
          </p>
          <div className="flex justify-center gap-4">
            <Badge className="px-4 py-2">
              <Heart className="w-4 h-4 mr-2" />
              Duchowa Technologia
            </Badge>
            <Badge className="px-4 py-2">
              <Cpu className="w-4 h-4 mr-2" />
              AI Powered
            </Badge>
            <Badge className="px-4 py-2">
              <Wifi className="w-4 h-4 mr-2" />
              Mesh Network
            </Badge>
          </div>
        </div>

        {/* Tabs */}
        <div className="w-full">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {[
                { id: 'overview', label: 'Przegląd' },
                { id: 'variants', label: 'Warianty' },
                { id: 'tech', label: 'Technologia' },
                { id: 'development', label: 'Rozwój' },
                { id: 'business', label: 'Biznes' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-800 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Heart className="w-5 h-5 text-pink-500" />
                      <h3 className="text-lg font-semibold">Wizja Produktu</h3>
                    </div>
                    <div className="space-y-4">
                      <p className="-600">
                        Sacred Circle AI Communicator to oktagonalny amulet/breloczek umożliwiający 
                        duchową komunikację między uczestnikami festiwali bez potrzeby internetu.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm">Komunikacja głosowa z AI</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-sm">Tłumaczenie 50+ języków</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm">Mesh network LoRa</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                          <span className="text-sm">8 intencji duchowych</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Users className="w-5 h-5 text-blue-500" />
                      <h3 className="text-lg font-semibold">Zastosowania</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="text-2xl mb-2">🔥</div>
                        <div className="text-sm font-medium">Burning Man</div>
                        <div className="text-xs text-gray-700">70k+ uczestników</div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-2xl mb-2">🌲</div>
                        <div className="text-sm font-medium">Wibracje</div>
                        <div className="text-xs text-gray-700">Polskie festiwale</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-2xl mb-2">🧘</div>
                        <div className="text-sm font-medium">Retreaty</div>
                        <div className="text-xs text-gray-800">Centra duchowe</div>
                      </div>
                      <div className="text-center p-3 bg-amber-50 rounded-lg">
                        <div className="text-2xl mb-2">🎪</div>
                        <div className="text-sm font-medium">Gatherings</div>
                        <div className="text-xs text-gray-800">Małe społeczności</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Videos Section */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Play className="w-5 h-5 text-green-500" />
                    <h3 className="text-lg font-semibold">Demonstracje Video</h3>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    {videos.map((video, index) => (
                      <div key={index} className="space-y-2">
                        <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-video">
                          <video
                            className="w-full h-full object-cover"
                            controls
                            poster={video.poster}
                          >
                            <source src={video.src} type="video/mp4" />
                            Twoja przeglądarka nie obsługuje video.
                          </video>
                        </div>
                        <div>
                          <h4 className="font-medium">{video.name}</h4>
                          <p className="text-sm text-gray-800">{video.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Variants Tab */}
            {activeTab === 'variants' && (
              <div className="grid md:grid-cols-2 gap-6">
                {deviceVariants.map((variant, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <div className="aspect-square bg-gray-100">
                      <img 
                        src={variant.image} 
                        alt={variant.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{variant.name}</h3>
                      <p className="text-gray-600 mb-4">{variant.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {variant.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tech Tab */}
            {activeTab === 'tech' && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {techSpecs.map((spec, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                      <div className="flex items-center gap-2 text-blue-600 mb-3">
                        {spec.icon}
                        <span className="font-medium">{spec.name}</span>
                      </div>
                      <div className="text-sm font-medium mb-2">{spec.value}</div>
                      <div className="text-xs text-gray-700">{spec.description}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold mb-4">Kluczowe Funkcje AI</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-medium text-purple-600">Sacred Voice AI</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Naturalne rozmowy o intencjach</li>
                        <li>• Rozpoznawanie emocji w głosie</li>
                        <li>• Kontekstowe rozumienie duchowe</li>
                        <li>• Proaktywne sugestie</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-medium text-green-600">Multilingual Communication</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Real-time tłumaczenie 50+ języków</li>
                        <li>• Kulturowa adaptacja komunikatów</li>
                        <li>• Zachowanie duchowego kontekstu</li>
                        <li>• Rozpoznawanie akcentów</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-medium text-blue-600">Festival Oracle Mode</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Przewodnik po wydarzeniach</li>
                        <li>• Rekomendacje warsztatów</li>
                        <li>• Informacje o healerach</li>
                        <li>• Nawigacja po sacred spaces</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-medium text-amber-600">Emergency AI</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Automatyczne wykrywanie zagrożeń</li>
                        <li>• Koordynacja rescue response</li>
                        <li>• Mesh network emergency grid</li>
                        <li>• Medical emergency detection</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Development Tab */}
            {activeTab === 'development' && (
              <div className="space-y-6">
                <div className="space-y-4">
                  {developmentPhases.map((phase, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5" />
                          <h3 className="text-lg font-semibold">{phase.phase}</h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={phase.status === "W trakcie" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}>
                            {phase.status}
                          </Badge>
                          <span className="text-sm text-gray-800">{phase.duration}</span>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        {phase.tasks.map((task, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${
                              phase.status === "W trakcie" ? "bg-green-500" : "bg-gray-300"
                            }`}></div>
                            <span className="text-sm">{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Settings className="w-5 h-5" />
                    <h3 className="text-lg font-semibold">Dział Techniczny - Customizacja</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Nasz dział techniczny oferuje pełną customizację urządzeń pod indywidualne potrzeby:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-medium text-purple-600 mb-2">Hardware Customization</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Custom materiały i wykończenia</li>
                        <li>• Personalizowane grawerowanie</li>
                        <li>• Specjalne sensory</li>
                        <li>• Extended battery life</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-medium text-green-600 mb-2">Software Customization</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Custom AI personalities</li>
                        <li>• Specialized voice commands</li>
                        <li>• Integration z external APIs</li>
                        <li>• Custom intention sets</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-blue-600 mb-2">Festival Integration</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Custom festival protocols</li>
                        <li>• Branded interfaces</li>
                        <li>• Event-specific features</li>
                        <li>• Analytics dashboard</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Business Tab */}
            {activeTab === 'business' && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {businessModels.map((model, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                      <h3 className="text-lg font-semibold mb-2">{model.model}</h3>
                      <div className="text-2xl font-bold text-green-600 mb-4">{model.price}</div>
                      <p className="text-gray-600 mb-4">{model.description}</p>
                      <div className="space-y-2 mb-6">
                        {model.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                        {index === 0 ? "Dla Organizatorów" : index === 1 ? "Kup Teraz" : "Kontakt"}
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold mb-4">Target Markets & Revenue Projections</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium">Główne Rynki</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span>Burning Man & Regionals</span>
                          <Badge>70,000+ uczestników</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>European Transformational Festivals</span>
                          <Badge>50,000+ events/year</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Conscious Gatherings</span>
                          <Badge>500+ communities</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Retreat Centers</span>
                          <Badge>1,000+ locations</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium">Revenue Streams</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span>Hardware Sales</span>
                          <span className="font-medium">€2-5M/year</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Festival Licensing</span>
                          <span className="font-medium">€1-3M/year</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Premium Subscriptions</span>
                          <span className="font-medium">€500K-1M/year</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Custom Development</span>
                          <span className="font-medium">€200K-500K/year</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-500 via-green-500 to-blue-500 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Dołącz do Rewolucji Duchowej Komunikacji</h2>
          <p className="text-lg opacity-90 mb-6">
            Bądź częścią przyszłości festiwali świadomościowych
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary">
              Zostań Beta Testerem
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600">
              Kontakt Biznesowy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevicePlan;
