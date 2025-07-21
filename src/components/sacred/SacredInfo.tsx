import React, { useState } from 'react';
import { Info, X, Sparkles, Moon, Heart, Users } from 'lucide-react';

const SacredInfo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Przycisk informacyjny */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 z-40 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
        title="O Sacred Circle Communicator"
      >
        <Info className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
      </button>

      {/* Modal z informacjami */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-amber-500/30 shadow-2xl">
            {/* Header */}
            <div className="relative p-6 border-b border-amber-500/30">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-amber-400">Sacred Circle Communicator</h2>
                  <p className="text-gray-300">Pierwsza platforma komunikacyjna dla społeczności festiwali świadomościowych</p>
                </div>
              </div>
            </div>

            {/* Treść */}
            <div className="p-6 space-y-8">
              {/* Misja */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-6 h-6 text-rose-400" />
                  <h3 className="text-xl font-semibold text-amber-400">Nasza Misja</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Łączymy dusze przez starożytną mądrość i nowoczesną technologię. Sacred Circle Communicator 
                  to przestrzeń, gdzie tradycje słowiańskie, majańskie i celtyckie spotykają się z duchem 
                  współczesnych festiwali świadomościowych jak Burning Man, Wibracje czy Rainbow Gathering.
                </p>
              </section>

              {/* Cel */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Moon className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-amber-400">Nasz Cel</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Tworzymy świętą przestrzeń komunikacji, która honoruje cykle natury, fazy księżyca 
                  i elementalne energie. Nasza platforma umożliwia:
                </p>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• <strong className="text-amber-400">Komunikację Wibracyjną</strong> - dostosowaną do Twojego stanu energetycznego i fazy księżyca</li>
                  <li>• <strong className="text-amber-400">Krąg Intencji</strong> - oktagonalną mandalę komunikacji opartą na starożytnych symbolach</li>
                  <li>• <strong className="text-amber-400">Inteligencję Elementalną</strong> - wgląd w duchową dostępność i rezonans</li>
                  <li>• <strong className="text-amber-400">Integrację Festiwalową</strong> - koordynację obozów i wydarzeń świadomościowych</li>
                </ul>
              </section>

              {/* Społeczność */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl font-semibold text-amber-400">Nasza Społeczność</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Jesteśmy rodziną dusz poszukujących autentyczności, uzdrowienia i połączenia z naturą. 
                  Nasi członkowie to:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-amber-500/20">
                    <h4 className="text-amber-400 font-semibold mb-2">🔮 Szamani i Uzdrowiciele</h4>
                    <p className="text-gray-300">Przewodnicy duchowi praktykujący starożytne tradycje uzdrawiania</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-amber-500/20">
                    <h4 className="text-amber-400 font-semibold mb-2">🌿 Zielarze i Alchemicy</h4>
                    <p className="text-gray-300">Strażnicy wiedzy o roślinach leczniczych i naturalnych eliksirach</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-amber-500/20">
                    <h4 className="text-amber-400 font-semibold mb-2">🎨 Rzemieślnicy i Artyści</h4>
                    <p className="text-gray-300">Twórcy sakralnych przedmiotów i instrumentów duchowych</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-amber-500/20">
                    <h4 className="text-amber-400 font-semibold mb-2">💃 Tancerze i Muzycy</h4>
                    <p className="text-gray-300">Przewodnicy ekstazy i ruchu jako drogi duchowej</p>
                  </div>
                </div>
              </section>

              {/* Tradycje */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-amber-400">Nasze Korzenie</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Czerpemy z bogactwa starożytnych tradycji, łącząc je z duchem współczesnych 
                  festiwali świadomościowych:
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-2xl mb-2">🌲</div>
                    <h4 className="text-amber-400 font-semibold">Tradycje Słowiańskie</h4>
                    <p className="text-gray-300">Mądrość przodków, święte gaje, ceremonie natury</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🌟</div>
                    <h4 className="text-amber-400 font-semibold">Mądrość Majańska</h4>
                    <p className="text-gray-300">Kalendarze kosmiczne, cykle czasu, świętą geometrię</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🍃</div>
                    <h4 className="text-amber-400 font-semibold">Dziedzictwo Celtyckie</h4>
                    <p className="text-gray-300">Święte kręgi, druidzka wiedza, magia natury</p>
                  </div>
                </div>
              </section>

              {/* Festiwale */}
              <section>
                <h3 className="text-xl font-semibold text-amber-400 mb-4">🎪 Nasze Festiwalowe Domy</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Spotykamy się na festiwalach świadomościowych w Polsce i na świecie:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Wibracje', 'Burning Man', 'Conscious Man', 'Festiwal Wdzięczności', 
                    'Festiwal Zdrowego Stylu Życia', 'Rainbow Gathering', 'Ozora Festival', 
                    'Boom Festival'
                  ].map((festival) => (
                    <span 
                      key={festival}
                      className="px-3 py-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-full text-amber-300 text-sm"
                    >
                      {festival}
                    </span>
                  ))}
                </div>
              </section>

              {/* Zaproszenie */}
              <section className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 p-6 rounded-lg border border-amber-500/30">
                <h3 className="text-xl font-semibold text-amber-400 mb-3">✨ Dołącz do Świętego Kręgu</h3>
                <p className="text-gray-300 leading-relaxed">
                  Jeśli czujesz zew starożytnej mądrości, jeśli Twoje serce bije w rytm natury, 
                  jeśli szukasz autentycznego połączenia z podobnymi duszami - witaj w Sacred Circle. 
                  Tutaj każda rozmowa to ceremonia, każde spotkanie to święty rytuał, 
                  a każde połączenie to krok ku wyższej świadomości.
                </p>
                
                <div className="mt-4 p-4 bg-slate-800/50 rounded-lg border border-amber-500/20">
                  <h4 className="text-amber-400 font-semibold mb-2">📧 Kontakt & Współpraca</h4>
                  <p className="text-gray-300 text-sm mb-2">
                    Dla partnerstwa, duchowego przewodnictwa lub współpracy przy świętej technologii:
                  </p>
                  <a 
                    href="mailto:mateusz@inteligentnakariera.pl"
                    className="text-amber-300 hover:text-amber-200 font-medium underline transition-colors"
                  >
                    mateusz@inteligentnakariera.pl
                  </a>
                </div>
                
                <p className="text-amber-300 mt-3 font-semibold">
                  Niech Twoja podróż będzie błogosławiona. 🙏
                </p>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SacredInfo;
