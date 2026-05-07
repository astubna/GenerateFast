import { Link } from 'react-router-dom';
import { useEffect } from "react";

const Privacy = ({ lang = "en" }) => {
  useEffect(() => {
    // Update page title
    document.title =
      lang === "en"
        ? "Privacy Policy - GenerateFast"
        : lang === "sk"
          ? "Zásady ochrany osobných údajov - GenerateFast"
          : "Zásady ochrany osobních údajů - GenerateFast";

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content =
        lang === "en"
          ? "Privacy Policy for GenerateFast - Domain name generator"
          : lang === "sk"
            ? "Zásady ochrany osobných údajov GenerateFast - Generátor domén"
            : "Zásady ochrany osobních údajů pro GenerateFast - Generátor domén";
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    const baseUrl = lang === "en" ? "/privacy" : `/${lang}/privacy`;
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
              Privacy Policy
            </h1>

            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-gray-300 leading-relaxed">
                <strong>Last updated:</strong> April 15, 2026
              </p>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  1. Introduction
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  GenerateFast ("we" or "us" or "our") operates the GenerateFast
                  website ("Service"). This page informs you of our policies
                  regarding the collection, use, and disclosure of personal data
                  when you use our Service and the choices you have associated
                  with that data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  2. Information Collection and Use
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We collect information in the following ways:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                  <li>
                    <strong>Usage Data:</strong> Browser type, IP address, pages
                    visited, time and date of your visit
                  </li>
                  <li>
                    <strong>Device Information:</strong> Device type, operating
                    system, unique device identifiers
                  </li>
                  <li>
                    <strong>Cookies:</strong> We use cookies to track your
                    preferences and usage patterns
                  </li>
                  <li>
                    <strong>Analytics:</strong> We use Google Analytics to
                    understand how you use our Service
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  3. Use of Data
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  GenerateFast uses the collected data for various purposes:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                  <li>To provide and maintain our Service</li>
                  <li>To notify you about changes to our Service</li>
                  <li>To allow you to participate in interactive features</li>
                  <li>To provide customer support and respond to inquiries</li>
                  <li>To monitor the usage of our Service</li>
                  <li>
                    To detect, prevent and address technical issues and fraud
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  4. Security of Data
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  The security of your data is important to us but remember that
                  no method of transmission over the Internet or method of
                  electronic storage is 100% secure. While we strive to use
                  commercially acceptable means to protect your personal data,
                  we cannot guarantee its absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  5. Cookies
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We use cookies to enhance your experience on our site. Cookies
                  are small files stored on your browser that help us remember
                  your preferences. You can control cookies through your browser
                  settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  6. Google Analytics
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We use Google Analytics to understand how users interact with
                  our site. Google Analytics uses cookies to collect information
                  about your visit. The information generated by the cookie
                  about your use of the website will be transmitted to and
                  stored by Google.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  7. Third-Party Links
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Our Service may contain links to other sites that are not
                  operated by us. This Privacy Policy does not apply to
                  third-party websites, and we are not responsible for their
                  privacy practices. We encourage you to review the privacy
                  policy of any website before providing your personal
                  information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  8. Changes to This Privacy Policy
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the "Last updated" date at the top of
                  this Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  9. Contact Us
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  If you have any questions about this Privacy Policy, please
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
              Zásady ochrany osobných údajov
            </h1>

            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-gray-300 leading-relaxed">
                <strong>Posledná aktualizácia:</strong> 15. apríla 2026
              </p>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  1. Úvod
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  GenerateFast ("my" alebo "nás" alebo "naše") prevádzkuje
                  webovú stránku GenerateFast ("Služba"). Táto stránka vás
                  informuje o našej politike týkajúcej sa zberu, použitia a
                  sprístupnenia osobných údajov pri používaní našej Služby.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  2. Zber a Použitie Informácií
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Zbierame informácie nasledujúcimi spôsobmi:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                  <li>
                    <strong>Údaje o Použití:</strong> Typ prehliadača, IP
                    adresa, návštívené stránky, čas a dátum vašej návštevy
                  </li>
                  <li>
                    <strong>Informácie o Zariadení:</strong> Typ zariadenia,
                    operačný systém, jedinečné identifikátory zariadenia
                  </li>
                  <li>
                    <strong>Cookies:</strong> Používame cookies na sledovanie
                    vašich preferencií a vzorov používania
                  </li>
                  <li>
                    <strong>Analytika:</strong> Používame Google Analytics na
                    pochopenie, ako používate našu Službu
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  3. Použitie Údajov
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  GenerateFast používa zbierané údaje na rôzne účely:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                  <li>Na poskytovanie a údržbu našej Služby</li>
                  <li>Na upozornenie vás na zmeny našej Služby</li>
                  <li>Na umožnenie vám účasti na interaktívnych funkciách</li>
                  <li>
                    Na poskytovanie zákazníckeho servisu a odpovedanie na otázky
                  </li>
                  <li>Na monitorovanie používania našej Služby</li>
                  <li>
                    Na detekciu, prevencia a riešenie technických problémov a
                    podvodu
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  4. Bezpečnosť Údajov
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Bezpečnosť vašich údajov je pre nás dôležitá, ale pamätajte,
                  že žiadna metóda prenosu cez Internet ani metóda
                  elektronického úložiska nie je 100% bezpečná. Hoci sa snažíme
                  používať komerčne prijateľné prostriedky na ochranu vašich
                  osobných údajov, nemôžeme zaručiť jej absolútnu bezpečnosť.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  5. Cookies
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Používame cookies na zlepšenie vašej skúsenosti na našej
                  stránke. Cookies sú malé súbory uložené v prehliadači, ktoré
                  nám pomáhajú zapamätať si vaše preferencie. Cookies môžete
                  kontrolovať v nastaveniach prehliadača.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  6. Google Analytics
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Používame Google Analytics na pochopenie toho, ako
                  používatelia interagujú s našou stránkou. Google Analytics
                  používa cookies na zber informácií o vašej návšteve.
                  Informácie vygenerované súborom cookie o vašom používaní
                  webovej stránky budú odoslané a uložené spoločnosťou Google.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  7. Odkazy Tretích Strán
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Naša Služba môže obsahovať odkazy na iné webové stránky, ktoré
                  nie sú prevádzkované nami. Táto politika súkromia sa
                  neuplatňuje na webové stránky tretích strán a nie sme
                  zodpovední za ich politiky súkromia. Odporúčame vám, aby ste
                  si prečítali politiku súkromia akejkoľvek webovej stránky
                  predtým, ako poskytnete svoje osobné informácie.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  8. Zmeny týchto Zásad ochrany osobných údajov
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Tieto Zásady ochrany osobných údajov možno čas od času
                  aktualizovať. O akýchkoľvek zmenách vás budeme informovať
                  zverejnením nových Zásad ochrany osobných údajov na tejto
                  stránke a aktualizáciou dátumu "Posledná aktualizácia" v
                  hornej časti tejto stránky.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  9. Kontaktujte Nás
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Ak máte akékoľvek otázky týkajúce sa týchto Zásad ochrany
                  osobných údajov, prosím kontaktujte nás:
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
                  to="/sk"
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
              Zásady Ochrany Osobních Údajů
            </h1>

            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-gray-300 leading-relaxed">
                <strong>Poslední aktualizace:</strong> 15. dubna 2026
              </p>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  1. Úvod
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  GenerateFast ("my" nebo "nás" nebo "naší") provozuje webové
                  stránky GenerateFast ("Služba"). Tato stránka vás informuje o
                  našich zásadách týkajících se shromažďování, používání a
                  zveřejňování osobních údajů při používání naší Služby.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  2. Shromažďování a Použití Informací
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Shromažďujeme informace následujícími způsoby:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                  <li>
                    <strong>Údaje o Použití:</strong> Typ prohlížeče, IP adresa,
                    navštívené stránky, čas a datum vaší návštěvy
                  </li>
                  <li>
                    <strong>Informace o Zařízení:</strong> Typ zařízení,
                    operační systém, jedinečné identifikátory zařízení
                  </li>
                  <li>
                    <strong>Cookies:</strong> Používáme soubory cookie ke
                    sledování vašich preferencí a vzorů používání
                  </li>
                  <li>
                    <strong>Analytika:</strong> Používáme Google Analytics k
                    pochopení toho, jak používáte naši Službu
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  3. Použití Údajů
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  GenerateFast používá shromážděné údaje pro různé účely:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                  <li>K poskytování a údržbě naší Služby</li>
                  <li>K upozornění vás na změny v naší Službě</li>
                  <li>K umožnění vám účasti na interaktivních funkcích</li>
                  <li>
                    K poskytování zákaznické podpory a odpovídání na dotazy
                  </li>
                  <li>K monitorování používání naší Služby</li>
                  <li>
                    K detekci, prevenci a řešení technických problémů a podvodů
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  4. Bezpečnost Údajů
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Bezpečnost vašich údajů je pro nás důležitá, ale pamatujte, že
                  žádná metoda přenosu přes Internet ani metoda elektronického
                  úložiště není 100% bezpečná. Přestože se snažíme používat
                  komerčně přijatelné prostředky k ochraně vašich osobních
                  údajů, nemůžeme zaručit její absolutní bezpečnost.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  5. Soubory Cookie
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Používáme soubory cookie ke zlepšení vašeho prostředí na
                  našich webových stránkách. Cookies jsou malé soubory uložené v
                  prohlížeči, které nám pomohou zapamatovat si vaše preference.
                  Soubory cookie můžete kontrolovat prostřednictvím nastavení
                  prohlížeče.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  6. Google Analytics
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Používáme Google Analytics k pochopení toho, jak uživatelé
                  interagují s našim webem. Google Analytics používá soubory
                  cookie ke shromažďování informací o vaší návštěvě. Informace
                  vygenerované souborem cookie o vašem používání webu budou
                  přeneseny a uloženy společností Google.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  7. Odkazy Třetích Stran
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Naše Služba může obsahovat odkazy na jiné webové stránky,
                  které nejsou provozovány námi. Tyto Zásady ochrany osobních
                  údajů se nevztahují na webové stránky třetích stran a nejsme
                  odpovědní za jejich zásady ochrany osobních údajů.
                  Doporučujeme vám, abyste si před poskytnutím osobních
                  informací přečetli zásady ochrany osobních údajů odkazovaného
                  webu.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  8. Změny Těchto Zásad Ochrany Osobních Údajů
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Tyto Zásady ochrany osobních údajů můžeme čas od času
                  aktualizovat. O jakýchkoli změnách vás budeme informovat
                  zveřejněním nových Zásad ochrany osobních údajů na této
                  stránce a aktualizací data "Poslední aktualizace" v horní
                  části těchto Zásad ochrany osobních údajů.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-violet-300 mt-6 mb-4">
                  9. Kontaktujte Nás
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Máte-li jakékoli otázky týkající se těchto Zásad ochrany
                  osobních údajů, prosím kontaktujte nás:
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
                  to="/cs"
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

export default Privacy;
