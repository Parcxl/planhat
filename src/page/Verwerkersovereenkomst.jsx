import { Flex } from "antd";
import { useEffect } from "react";

const Verwerkersovereenkomst = () => {
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
                                    Verwerkersovereenkomst (Data Processing Agreement – DPA) – Sendwise
                                </h1>
                                <p className="text-gray-600 inter-medium text-[0.98rem]">
                                    Versie 1.0 – 27 maart 2026
                                </p>
                            </div>
                            <div className="text-gray-700 inter-medium text-[0.98rem] leading-relaxed">
                                <p>Sendwise</p>
                                <p>Larikslaan 15</p>
                                <p>2451BV Leimuiden – Nederland</p>
                                <p>KvK 98390376 – BTW NL868472256B01</p>
                                <p>E-mail: info@sendwise.nl</p>
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
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">1. Partijen</h2>
                                <p>Deze verwerkersovereenkomst ("DPA") is van toepassing op de verwerking van persoonsgegevens door:</p>
                                <p>Sendwise</p>
                                <p>Larikslaan 15</p>
                                <p>2451BV Leimuiden – Nederland</p>
                                <p>KvK 98390376 – BTW NL868472256B01</p>
                                <p>E-mail: info@sendwise.nl</p>
                                <p>(hierna: "Verwerker")</p>
                                <p>en</p>
                                <p>de gebruiker van het Sendwise Platform (hierna: "Verwerkingsverantwoordelijke" of "Klant").</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">2. Doel van de verwerking</h2>
                                <p>2.1 Verwerker verwerkt persoonsgegevens uitsluitend ten behoeve van de uitvoering van de overeenkomst met de Klant, waaronder:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>het aanmaken van verzendlabels;</li>
                                    <li>het verwerken van zendinggegevens;</li>
                                    <li>communicatie met vervoerders;</li>
                                    <li>tracking en support.</li>
                                </ul>
                                <p>2.2 Verwerker verwerkt persoonsgegevens niet voor eigen doeleinden.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">3. Soorten persoonsgegevens</h2>
                                <p>Verwerker verwerkt uitsluitend de volgende categorieën persoonsgegevens:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>naam (ontvanger en afzender);</li>
                                    <li>adresgegevens;</li>
                                    <li>e-mailadres;</li>
                                    <li>telefoonnummer;</li>
                                    <li>verzendinformatie (zoals inhoud, gewicht, referenties).</li>
                                </ul>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">4. Betrokkenen</h2>
                                <p>De persoonsgegevens hebben betrekking op:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>klanten van de Klant (ontvangers);</li>
                                    <li>medewerkers van de Klant (afzenders/contactpersonen).</li>
                                </ul>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">5. Verplichtingen van de Verwerker</h2>
                                <p>5.1 Verwerker verwerkt persoonsgegevens uitsluitend op basis van instructies van de Klant.</p>
                                <p>5.2 Verwerker treft passende technische en organisatorische maatregelen om persoonsgegevens te beveiligen tegen verlies of onrechtmatige verwerking.</p>
                                <p>5.3 Verwerker zorgt ervoor dat medewerkers die toegang hebben tot persoonsgegevens gebonden zijn aan geheimhouding.</p>
                                <p>5.4 Verwerker zal de Klant informeren indien een instructie in strijd is met de AVG.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">6. Inschakeling van subverwerkers</h2>
                                <p>6.1 Verwerker mag gebruik maken van subverwerkers, waaronder vervoerders en hostingproviders, voor de uitvoering van de diensten.</p>
                                <p>6.2 Verwerker zorgt ervoor dat subverwerkers passende beveiligingsmaatregelen treffen.</p>
                                <p>6.3 De Klant geeft hierbij algemene toestemming voor het inschakelen van subverwerkers.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">7. Doorgifte van gegevens</h2>
                                <p>7.1 Persoonsgegevens worden in beginsel verwerkt binnen de Europese Economische Ruimte (EER).</p>
                                <p>7.2 Indien gegevens buiten de EER worden verwerkt, zorgt Verwerker voor passende waarborgen conform de AVG.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">8. Datalekken</h2>
                                <p>8.1 Verwerker meldt datalekken zonder onredelijke vertraging aan de Klant.</p>
                                <p>8.2 Verwerker verstrekt daarbij alle relevante informatie die nodig is voor de Klant om aan zijn meldplicht te voldoen.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">9. Rechten van betrokkenen</h2>
                                <p>9.1 Verwerker ondersteunt de Klant, voor zover redelijk, bij verzoeken van betrokkenen met betrekking tot hun rechten (inzage, correctie, verwijdering).</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">10. Bewaartermijnen</h2>
                                <p>10.1 Verwerker bewaart persoonsgegevens niet langer dan noodzakelijk voor de uitvoering van de diensten, tenzij wettelijke verplichtingen anders vereisen.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">11. Beëindiging</h2>
                                <p>11.1 Bij beëindiging van de overeenkomst worden persoonsgegevens op verzoek van de Klant verwijderd of geretourneerd, tenzij wettelijke verplichtingen anders bepalen.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">12. Aansprakelijkheid</h2>
                                <p>12.1 De aansprakelijkheid van Verwerker in het kader van deze DPA is gelijk aan de aansprakelijkheidsbeperking zoals opgenomen in de algemene voorwaarden van Sendwise.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">13. Slotbepalingen</h2>
                                <p>13.1 Deze DPA maakt integraal onderdeel uit van de algemene voorwaarden van Sendwise.</p>
                                <p>13.2 Op deze DPA is Nederlands recht van toepassing.</p>
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

export default Verwerkersovereenkomst;
