import { Flex } from "antd";
import { useEffect } from "react";

const AlgemeneVoorwaarden = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Flex className="flex-col w-[100%] overflow-hidden space-y-10 sm:space-y-12 md:space-y-14 lg:space-y-16 mb-10">
            <section className="w-full pt-24 sm:pt-28">
                <Flex className="w-[95%] lg:w-[80%] mx-auto">
                    <div className="rounded-2xl border border-gray-200 bg-white/90 p-6 sm:p-10 shadow-[0_20px_50px_rgba(15,23,42,0.08)] w-full">
                        <div className="flex flex-col space-y-4">
                            <div className="space-y-2">
                                <h1 className="inter-medium lg:text-[2.7rem] md:text-[2.3rem] sm:text-[2rem] text-[1.8rem] text-gray-900">
                                    Algemene Voorwaarden – Sendwise
                                </h1>
                                <p className="text-gray-600 inter-medium text-[0.98rem]">
                                    Versie 1.1 – Ingangsdatum: 15 maart 2026
                                </p>
                            </div>
                            <div className="text-gray-700 inter-medium text-[0.98rem] leading-relaxed">
                                <p>Sendwise</p>
                                <p>Larikslaan 15</p>
                                <p>2451BV Leimuiden – Nederland</p>
                                <p>KvK 98390376 – BTW NL868472256B01</p>
                                <p>E-mail: info@sendwise.nl – Telefoon: +31 6 19156123</p>
                            </div>
                        </div>
                    </div>
                </Flex>
            </section>

            <section className="w-full">
                <Flex className="w-[95%] lg:w-[80%] mx-auto">
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-10 shadow-[0_20px_50px_rgba(15,23,42,0.08)] w-full">
                        <div className="flex flex-col space-y-8 text-gray-700 inter-medium text-[0.98rem] leading-relaxed">
                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">1. Toepasselijkheid</h2>
                                <p>1.1 Deze algemene voorwaarden ("Voorwaarden") zijn van toepassing op alle aanbiedingen, overeenkomsten en diensten van Sendwise met betrekking tot het gebruik van het verzendplatform www.sendwise.nl en app.sendwise.nl (het "Platform").</p>
                                <p>1.2 Door gebruik te maken van het Platform, een account aan te maken of een zending aan te melden, gaat de Klant uitdrukkelijk akkoord met deze Voorwaarden.</p>
                                <p>1.3 Sendwise levert uitsluitend diensten aan zakelijke klanten (B2B). De Klant verklaart te handelen in de uitoefening van beroep of bedrijf.</p>
                                <p>1.4 Algemene voorwaarden van de Klant worden uitdrukkelijk van de hand gewezen.</p>
                                <p>1.5 Sendwise behoudt zich het recht voor deze Voorwaarden te wijzigen. Gewijzigde voorwaarden worden via het Platform of per e-mail gecommuniceerd.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">2. Diensten</h2>
                                <p>2.1 Sendwise exploiteert een online platform waarmee Klanten verzendlabels kunnen aanmaken, zendingen kunnen beheren en aanvullende verzendopties kunnen gebruiken.</p>
                                <p>2.2 Sendwise treedt uitsluitend op als tussenpersoon (expediteur) en niet als vervoerder.</p>
                                <p>2.3 Het transport wordt uitgevoerd door externe vervoerders.</p>
                                <p>2.4 Sendwise is niet verantwoordelijk voor de uitvoering van het transport.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">3. Account en gebruik</h2>
                                <p>3.1 De Klant is verplicht correcte en volledige gegevens te verstrekken.</p>
                                <p>3.2 De Klant is verantwoordelijk voor alle activiteiten onder zijn account, inclusief API en bulkgebruik.</p>
                                <p>3.3 Sendwise mag accounts of functionaliteiten blokkeren of beëindigen bij:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>niet-betaling;</li>
                                    <li>misbruik;</li>
                                    <li>fraude of risico;</li>
                                    <li>overtreding van deze Voorwaarden.</li>
                                </ul>
                                <p>3.4 Bij blokkering kan Sendwise:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>toegang ontzeggen;</li>
                                    <li>zendingen blokkeren;</li>
                                    <li>nog niet verwerkte zendingen stopzetten;</li>
                                    <li>lopende support- of onderzoeksprocessen beëindigen.</li>
                                </ul>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">4. Verantwoordelijkheid van de Klant</h2>
                                <p>4.1 De Klant is volledig verantwoordelijk voor correcte invoer van alle zendinggegevens, waaronder gewicht, afmetingen, adres, inhoud en douane-informatie.</p>
                                <p>4.2 Alle gegevens moeten juist, volledig en naar waarheid zijn.</p>
                                <p>4.3 Technische controles in het Platform ontslaan de Klant niet van deze verantwoordelijkheid.</p>
                                <p>4.4 API- en bulkgebruik is volledig voor risico van de Klant.</p>
                                <p>4.5 Structureel of opzettelijk onjuist invoeren wordt beschouwd als misbruik.</p>
                                <p>4.6 De Klant is verantwoordelijk voor een deugdelijke verpakking die geschikt is voor geautomatiseerde sorteerprocessen en bestand is tegen vallen, stoten en druk. Schade door ondeugdelijke verpakking komt volledig voor rekening van de Klant.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">5. Labels en zendingen</h2>
                                <p>5.1 Labels worden aangemaakt op verzoek van de Klant.</p>
                                <p>5.2 Een zending is factureerbaar vanaf de eerste scan door de vervoerder.</p>
                                <p>5.3 Niet-gescande zendingen worden niet gefactureerd.</p>
                                <p>5.4 Labels kunnen niet worden geannuleerd of hergebruikt.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">6. Tarieven, toeslagen en correcties</h2>
                                <p>6.1 Alle prijzen zijn exclusief btw.</p>
                                <p>6.2 De Klant betaalt voor zendingen en alle toeslagen en correcties van vervoerders.</p>
                                <p>6.3 Toeslagen kunnen betrekking hebben op gewicht, afmetingen, adres, retouren en overige kosten.</p>
                                <p>6.4 Metingen en toeslagen van vervoerders zijn bindend en niet betwistbaar.</p>
                                <p>6.5 Afwijkingen in zendinggegevens geven Sendwise het recht kosten volledig door te belasten.</p>
                                <p>6.6 Toeslagen kunnen met vertraging worden gefactureerd.</p>
                                <p>6.7 Toeslagen kunnen hoger zijn dan de labelprijs.</p>
                                <p>6.8 Retour- en onbestelbare zendingen worden volledig doorbelast.</p>
                                <p>6.9 Onderzoeken lopen via de vervoerder en diens oordeel is leidend.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">7. Facturatie en betaling</h2>
                                <p>7.1 Facturatie vindt periodiek plaats.</p>
                                <p>7.2 Betaling binnen 7 dagen.</p>
                                <p>7.3 Bij niet-betaling is de Klant direct in verzuim.</p>
                                <p>7.4 Sendwise mag rente, kosten en incasso toepassen en dienstverlening opschorten.</p>
                                <p>7.5 Verrekening of opschorting door de Klant is niet toegestaan.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">8. Transport en aansprakelijkheid</h2>
                                <p>8.1 De vervoerder is verantwoordelijk voor transport.</p>
                                <p>8.2 Sendwise is niet aansprakelijk voor verlies, schade of vertraging.</p>
                                <p>8.3 Claims verlopen via de vervoerder.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">9. Verzekering</h2>
                                <p>9.1 Verzekeringen worden via vervoerders of Sendwise aangeboden.</p>
                                <p>9.2 Uitkering alleen bij bevestiging verlies door vervoerder.</p>
                                <p>9.3 Vergoedingen zijn beperkt tot erkende bedragen.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">10. Pickups</h2>
                                <p>10.1 Vervoerder pickups vallen onder verantwoordelijkheid vervoerder.</p>
                                <p>10.2 Sendwise pickups zijn inspanningsverplichting zonder garantie.</p>
                                <p>10.3 Vergoedingen worden per geval beoordeeld.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">11. Verboden goederen</h2>
                                <p>11.1 De Klant is verantwoordelijk voor de inhoud van zendingen.</p>
                                <p>11.2 Verboden zijn o.a. gevaarlijke stoffen, wapens, drugs, geld en illegale goederen.</p>
                                <p>11.3 Alle schade en kosten worden volledig verhaald op de Klant.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">12. Privacy en gegevensbescherming</h2>
                                <p>12.1 Sendwise verwerkt persoonsgegevens voor dienstverlening.</p>
                                <p>12.2 Sendwise is verwerker, Klant is verwerkingsverantwoordelijke.</p>
                                <p>12.3 Een verwerkersovereenkomst (DPA) maakt integraal onderdeel uit en is beschikbaar via de website of het Platform.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">13. Aansprakelijkheid Sendwise</h2>
                                <p>13.1 Alleen aansprakelijk bij opzet of bewuste roekeloosheid.</p>
                                <p>13.2 Aansprakelijkheid beperkt tot bedrag van de zending.</p>
                                <p>13.3 Geen aansprakelijkheid voor indirecte schade.</p>
                                <p>13.4 De Klant vrijwaart Sendwise volledig tegen alle aanspraken van derden, waaronder vervoerders, ontvangers en overheden, die voortvloeien uit:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>gebruik van het Platform;</li>
                                    <li>onjuiste gegevens;</li>
                                    <li>inhoud, verpakking of verzending van zendingen.</li>
                                </ul>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">14. Klachten</h2>
                                <p>14.1 Klachten binnen betalingstermijn melden.</p>
                                <p>14.2 Daarna vervalt het recht.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">15. Overmacht</h2>
                                <p>15.1 Geen aansprakelijkheid bij overmacht.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">16. Beëindiging</h2>
                                <p>16.1 Sendwise mag per direct beëindigen bij wanbetaling, misbruik of risico.</p>
                                <p>16.2 Openstaande bedragen blijven verschuldigd.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">17. Toepasselijk recht</h2>
                                <p>17.1 Nederlands recht is van toepassing.</p>
                                <p>17.2 Geschillen via rechter Utrecht.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">18. Slotbepalingen</h2>
                                <p>18.1 Ongeldige bepalingen raken de rest niet.</p>
                                <p>18.2 Laatste versie staat op het Platform.</p>
                            </div>

                            <div className="space-y-2">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">Contact</h2>
                                <p>Sendwise</p>
                                <p>info@sendwise.nl</p>
                                <p>+31 6 19156123</p>
                            </div>
                        </div>
                    </div>
                </Flex>
            </section>
        </Flex>
    );
};

export default AlgemeneVoorwaarden;
