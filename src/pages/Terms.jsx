import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Terms = ({ lang = 'en' }) => {
  useEffect(() => {
    // Update page title
    document.title = lang === 'en' 
      ? 'Terms of Service - GenerateFast'
      : lang === 'sk'
      ? 'Podmienky služby - GenerateFast'
      : 'Podmínky služby - GenerateFast';

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = lang === 'en'
        ? 'Terms of Service for GenerateFast - Domain name generator'
        : lang === 'sk'
        ? 'Podmienky služby pre GenerateFast - Generátor domén'
        : 'Podmínky služby pro GenerateFast - Generátor domén';
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    const baseUrl = lang === 'en' ? '/terms' : `/${lang}/terms`;
    canonical.href = `https://generatefast.com${baseUrl}`;

    // Scroll to top
    window.scrollTo(0, 0);
  }, [lang]);

  return (
    <div className="min-h-screen bg-gray-950 text-white pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {lang === "en" && (
          <>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 pb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
              Terms of Service
            </h1>

            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-gray-300 leading-relaxed">
                <strong>Last updated:</strong> April 15, 2026
              </p>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  1. Agreement to Terms
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  By accessing and using GenerateFast, you accept and agree to
                  be bound by the terms and provision of this agreement. If you
                  do not agree to abide by the above, please do not use this
                  service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  2. Use License
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Permission is granted to temporarily download one copy of the
                  materials (information or software) on GenerateFast for
                  personal, non-commercial transitory viewing only. This is the
                  grant of a license, not a transfer of title, and under this
                  license you may not:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                  <li>Modifying or copying the materials</li>
                  <li>
                    Using the materials for any commercial purpose or for any
                    public display
                  </li>
                  <li>
                    Attempting to decompile or reverse engineer any software
                    contained on GenerateFast
                  </li>
                  <li>
                    Removing any copyright or other proprietary notations from
                    the materials
                  </li>
                  <li>
                    Transferring the materials to another person or "mirroring"
                    the materials on any other server
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  3. Disclaimer of Warranties
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  The materials on GenerateFast are provided on an 'as is'
                  basis. GenerateFast makes no warranties, expressed or implied,
                  and hereby disclaims and negates all other warranties
                  including, without limitation, implied warranties or
                  conditions of merchantability, fitness for a particular
                  purpose, or non-infringement of intellectual property or other
                  violation of rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  4. Limitations
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  In no event shall GenerateFast or its suppliers be liable for
                  any damages (including, without limitation, damages for loss
                  of data or profit, or due to business interruption) arising
                  out of the use or inability to use the materials on
                  GenerateFast, even if GenerateFast or an authorized
                  representative has been notified orally or in writing of the
                  possibility of such damage.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  5. Accuracy of Materials
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  The materials appearing on GenerateFast could include
                  technical, typographical, or photographic errors. GenerateFast
                  does not warrant that any of the materials on its website are
                  accurate, complete, or current. GenerateFast may make changes
                  to the materials contained on its website at any time without
                  notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  6. Links
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  GenerateFast has not reviewed all of the sites linked to its
                  website and is not responsible for the contents of any such
                  linked site. The inclusion of any link does not imply
                  endorsement by GenerateFast of the site. Use of any such
                  linked website is at the user's own risk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  7. Modifications
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  GenerateFast may revise these terms of service for its website
                  at any time without notice. By using this website, you are
                  agreeing to be bound by the then current version of these
                  terms of service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  8. Governing Law
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  These terms and conditions are governed by and construed in
                  accordance with the laws of Slovakia, and you irrevocably
                  submit to the exclusive jurisdiction of the courts in that
                  State or location.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  9. Contact Information
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  If you have any questions about these Terms of Service, please
                  contact us at:
                  <br />
                  <Link
                    to="mailto:contact@generatefast.com"
                    className="text-violet-400 hover:text-violet-300"
                  >
                    contact@generatefast.com
                  </Link>
                </p>
              </section>
              <p>
                <Link
                  to="/"
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-gray-300 hover:text-violet-400 transition"
                >
                  ← Back to GenerateFast homepage
                </Link>
              </p>
            </div>
          </>
        )}

        {lang === "sk" && (
          <>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 pb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
              Podmienky Služby
            </h1>

            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-gray-300 leading-relaxed">
                <strong>Posledná aktualizácia:</strong> 15. apríla 2026
              </p>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  1. Súhlas s Podmienkami
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Prístupom a používaním GenerateFast súhlasíte a zaväzujete sa
                  dodržiavať podmienky tejto dohody. Ak s uvedeným nesúhlasíte,
                  prosím túto službu nepoužívajte.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  2. Licencia na Použitie
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Povolenie na dočasné stiahnutie jednej kópie materiálov
                  (informácie alebo softvér) na GenerateFast iba na osobné,
                  nekomerčné prehliadanie. Toto je udelenie licencie, nie prevod
                  vlastníctva, a pod touto licenciou nesmiete:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                  <li>Modifikovať alebo kopírovať materiály</li>
                  <li>
                    Používať materiály na akýkoľvek komerčný účel alebo verejný
                    účel
                  </li>
                  <li>
                    Pokúšať sa dekompilovať alebo reverzne získať akýkoľvek
                    softvér na GenerateFast
                  </li>
                  <li>
                    Odstraňovať akékoľvek autorské práva alebo iné majetkové
                    notácie z materiálov
                  </li>
                  <li>
                    Prenášať materiály na inú osobu alebo "zrkadliť" materiály
                    na iných serveroch
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  3. Vylúčenie Zodpovednosti
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Materiály na GenerateFast sú poskytované "ako sú".
                  GenerateFast neposkytuje žiadne záruky, výslovné ani
                  implicitné, a týmto zamietava a neguje všetky ostatné záruky
                  vrátane, bez obmedzenia, implicitných záruk alebo podmienok
                  predajnosti, vhodnosti na konkrétny účel alebo porušenia práv
                  duševného vlastníctva alebo iných porušení práv.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  4. Obmedzenia
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  GenerateFast alebo jej dodávatelia nebudú zodpovední za žiadne
                  škody (vrátane, bez obmedzenia, škôd na strate údajov alebo
                  zisku, alebo z dôvodu prerušenia podnikania) vyplývajúce z
                  použitia alebo nemožnosti používania materiálov na
                  GenerateFast.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  5. Presnosť Materiálov
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Materiály na GenerateFast by mohli obsahovať technické,
                  typografické alebo fotografické chyby. GenerateFast
                  nezaručuje, že akékoľvek materiály na jeho webovej stránke sú
                  presné, úplné alebo aktuálne. GenerateFast môže kedykoľvek bez
                  upozornenia zmeniť materiály obsiahnuté na svojej webovej
                  stránke.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  6. Odkazy
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  GenerateFast nepreskúmal všetky webové stránky prepojené na
                  svoju webovú stránku a nie je zodpovedný za obsah žiadnej
                  takejto prepojenej webovej stránky. Zaradenie akéhokoľvek
                  odkazu neznamená podporu GenerateFast tejto webovej stránky.
                  Použitie akejkoľvek takejto prepojenej webovej stránky je na
                  vlastné riziko používateľa.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  7. Zmeny
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  GenerateFast môže kedykoľvek bez upozornenia zmeniť tieto
                  podmienky služby pre svoju webovú stránku. Používaním tejto
                  webovej stránky súhlasíte s tým, že budete viazaní aktuálnou
                  verziou týchto podmienok služby.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  8. Rozhodujúce Právo
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Tieto podmienky sa riadia zákonmi Slovenskej republiky a vy
                  neodvolateľne súhlasíte s výlučnou jurisdikciou súdov v tomto
                  štáte.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  9. Kontaktné Informácie
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Ak máte akékoľvek otázky týkajúce sa týchto Podmienok Služby,
                  prosím kontaktujte nás:
                  <br />
                  <Link
                    to="mailto:contact@generatefast.com"
                    className="text-violet-400 hover:text-violet-300"
                  >
                    contact@generatefast.com
                  </Link>
                </p>
              </section>
              <p>
                <Link
                  to="/"
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-gray-300 hover:text-violet-400 transition"
                >
                  ← Späť na domovskú stránku GenerateFast
                </Link>
              </p>
            </div>
          </>
        )}

        {lang === "cs" && (
          <>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 pb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
              Podmínky Služby
            </h1>

            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-gray-300 leading-relaxed">
                <strong>Poslední aktualizace:</strong> 15. dubna 2026
              </p>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  1. Souhlas s Podmínkami
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Přístupem a používáním GenerateFast souhlasíte a zavazujete se
                  dodržovat podmínky této dohody. Pokud s výše uvedeným
                  nesouhlasíte, prosím tuto službu nepoužívejte.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  2. Licence na Použití
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Povolení na dočasné stažení jedné kopie materiálů (informace
                  nebo software) na GenerateFast pouze pro osobní, nekomerční
                  prohlížení. Toto je udělení licence, nikoli převod
                  vlastnictví, a pod touto licencí nesmíte:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                  <li>Modifikovat nebo kopírovat materiály</li>
                  <li>
                    Používat materiály pro jakýkoli komerční účel nebo veřejný
                    účel
                  </li>
                  <li>
                    Pokoušet se dekompilovat nebo reverzně získat jakýkoli
                    software na GenerateFast
                  </li>
                  <li>
                    Odstraňovat jakékoli autorské právo nebo jiné majetkové
                    notace z materiálů
                  </li>
                  <li>
                    Přenášet materiály na jinou osobu nebo "zrcadlit" materiály
                    na jiných serverech
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  3. Vyloučení Odpovědnosti
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Materiály na GenerateFast jsou poskytovány "jak jsou".
                  GenerateFast neposkytuje žádné záruky, výslovné nebo
                  implicitní, a tímto odmítá a neguje všechny ostatní záruky
                  včetně, bez omezení, implicitních záruk nebo podmínek
                  prodejnosti, vhodnosti pro konkrétní účel nebo porušení práv
                  duševního vlastnictví nebo jiných porušení práv.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  4. Omezení
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  GenerateFast nebo její dodavatelé nebudou odpovědní za žádné
                  škody (včetně, bez omezení, škod na ztrátě dat nebo zisku,
                  nebo z důvodu přerušení podnikání) vyplývající z používání
                  nebo nemožnosti používání materiálů na GenerateFast.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  5. Přesnost Materiálů
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Materiály na GenerateFast by mohly obsahovat technické,
                  typografické nebo fotografické chyby. GenerateFast nezaručuje,
                  že nějaké materiály na jeho webové stránce jsou přesné, úplné
                  nebo aktuální. GenerateFast může kdykoli bez upozornění změnit
                  materiály obsažené na své webové stránce.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  6. Odkazy
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  GenerateFast nezkontroloval všechny weby odkazované na jeho
                  webové stránce a není odpovědný za obsah žádné takové
                  odkazované webové stránky. Zahrnutí jakéhokoli odkazu
                  neimplikuje schválení GenerateFast webu. Používání takové
                  odkazované webové stránky je na vlastní riziko uživatele.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  7. Změny
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  GenerateFast může kdykoli bez upozornění revidovat tyto
                  podmínky služby pro svou webovou stránku. Používáním této
                  webové stránky souhlasíte s tím, že budete vázáni aktuální
                  verzí těchto podmínek služby.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  8. Rozhodující Právo
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Tyto podmínky a podmínky se řídí zákony Slovenské republiky a
                  vy neodvolatelně souhlasíte s výlučnou jurisdikcí soudů v
                  tomto státě.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  9. Kontaktní Informace
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Pokud máte nějaké otázky týkající se těchto Podmínek Služby,
                  prosím kontaktujte nás:
                  <br />
                  <Link
                    to="mailto:contact@generatefast.com"
                    className="text-violet-400 hover:text-violet-300"
                  >
                    contact@generatefast.com
                  </Link>
                </p>
              </section>
              <p>
                <Link
                  to="/"
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-gray-300 hover:text-violet-400 transition"
                >
                  ← Zpátky na domovskou stránku GenerateFast
                </Link>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Terms;