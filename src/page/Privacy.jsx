import { Flex } from "antd";
import { useEffect } from "react";

const Privacy = () => {
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
                                    Privacyverklaring Sendwise
                                </h1>
                                <p className="text-gray-600 inter-medium text-[0.98rem]">
                                    Laatst bijgewerkt: 11 oktober 2025
                                </p>
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
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">1. Inleiding</h2>
                                <p>Deze privacyverklaring heeft tot doel u te informeren over hoe Sendwise (hierna: "wij", "ons", "onze") omgaat met uw persoonsgegevens. Wij hechten groot belang aan de bescherming van uw privacy en verwerken uw gegevens uitsluitend in overeenstemming met de geldende privacywetgeving, waaronder de Algemene Verordening Gegevensbescherming (AVG).</p>
                                <p>Deze verklaring is van toepassing op het gebruik van onze website www.sendwise.nl en ons online verzendplatform app.sendwise.nl (gezamenlijk: het "Platform"), evenals op alle diensten die wij via deze kanalen aanbieden.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">2. Verwerkingsverantwoordelijke</h2>
                                <p>Sendwise</p>
                                <p>Ondernemingsweg 66</p>
                                <p>2404HN Alphen aan den Rijn</p>
                                <p>KvK-nummer: 98390376</p>
                                <p>Btw-nummer: NL868472256B01</p>
                                <p>E-mail: info@sendwise.nl</p>
                                <p>Telefoon: +31 6 19156123</p>
                                <p>Sendwise is de verwerkingsverantwoordelijke voor de verwerking van persoonsgegevens zoals beschreven in deze privacyverklaring.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">3. Persoonsgegevens die wij verwerken</h2>
                                <p>Wij verwerken persoonsgegevens van verschillende categorieën betrokkenen, afhankelijk van de manier waarop gebruik wordt gemaakt van ons Platform.</p>
                                <div className="space-y-2">
                                    <p className="text-gray-900 inter-semibold">A. Van onze klanten (webshops):</p>
                                    <ul className="list-disc pl-6 space-y-1">
                                        <li>Bedrijfsnaam, KvK-nummer, btw-nummer</li>
                                        <li>Voor- en achternaam van contactpersonen</li>
                                        <li>Adresgegevens</li>
                                        <li>E-mailadres, telefoonnummer</li>
                                        <li>Inloggegevens (gebruikersnaam, wachtwoord)</li>
                                        <li>Betalings- en factuurgegevens</li>
                                    </ul>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-gray-900 inter-semibold">B. Van eindklanten (ontvangers van zendingen):</p>
                                    <ul className="list-disc pl-6 space-y-1">
                                        <li>Naam en adresgegevens</li>
                                        <li>E-mailadres en/of telefoonnummer (voor verzend- en trackingsmeldingen)</li>
                                        <li>Zending- en trackingsinformatie</li>
                                        <li>Gegevens over de gekozen vervoerder en afleveropties</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">4. Doeleinden en rechtsgrondslag van de verwerking</h2>
                                <p>Wij verwerken persoonsgegevens uitsluitend voor de volgende doeleinden en op basis van de hieronder vermelde rechtsgronden:</p>
                                <div className="space-y-2">
                                    <div className="grid grid-cols-1 gap-2">
                                        <p>Het aanmaken en beheren van klantaccounts — Uitvoering van een overeenkomst (6(1)(b))</p>
                                        <p>Het verwerken van zendingen en leveren van verzenddiensten — Uitvoering van een overeenkomst (6(1)(b))</p>
                                        <p>Het versturen van track & trace notificaties aan ontvangers — Gerechtvaardigd belang (6(1)(f))</p>
                                        <p>Het uitvoeren van betalingen en facturatie via Mollie — Wettelijke verplichting & uitvoering overeenkomst (6(1)(c) / (b))</p>
                                        <p>Klantenservice en ondersteuning — Gerechtvaardigd belang (6(1)(f))</p>
                                        <p>Het verbeteren en beveiligen van onze website en systemen — Gerechtvaardigd belang (6(1)(f))</p>
                                        <p>Het voldoen aan wettelijke verplichtingen (bijv. belastingwetgeving) — Wettelijke verplichting (6(1)(c))</p>
                                    </div>
                                </div>
                                <p>Wij gebruiken persoonsgegevens uitsluitend voor de doeleinden waarvoor ze zijn verkregen en bewaren ze niet langer dan noodzakelijk (zie paragraaf 8).</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">5. Delen van persoonsgegevens met derden</h2>
                                <p>Wij verkopen geen persoonsgegevens aan derden en delen deze uitsluitend indien dat noodzakelijk is voor de uitvoering van onze dienstverlening of om te voldoen aan een wettelijke verplichting.</p>
                                <p>Wij delen gegevens enkel met:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>Vervoerders: uitsluitend de gegevens die nodig zijn voor het uitvoeren van de zending (zoals naam, adres, e-mailadres en trackingsinformatie).</li>
                                    <li>Betaaldienstverlener Mollie B.V.: voor het afhandelen van betalingen en facturatie.</li>
                                    <li>IT- en hostingpartners: die het platform, e-mailverkeer of beveiligingssystemen ondersteunen.</li>
                                    <li>Overheidsinstanties: indien wij daartoe wettelijk verplicht zijn (bijvoorbeeld politie of Belastingdienst).</li>
                                </ul>
                                <p>Met alle partijen die namens ons persoonsgegevens verwerken, sluiten wij een verwerkersovereenkomst die voldoet aan de eisen van de AVG. Deze partijen handelen uitsluitend in onze opdracht en volgens onze instructies.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">6. Internationale doorgifte van gegevens</h2>
                                <p>Wij streven ernaar alle persoonsgegevens binnen de Europese Economische Ruimte (EER) te verwerken. Indien het noodzakelijk is gegevens door te geven naar een partij buiten de EER, zorgen wij voor passende waarborgen zoals de EU-standaardcontractbepalingen of andere wettelijk toegestane mechanismen.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">7. Beveiliging van persoonsgegevens</h2>
                                <p>Sendwise neemt passende technische en organisatorische maatregelen om persoonsgegevens te beschermen tegen verlies, ongeoorloofde toegang, misbruik of wijziging. Deze maatregelen omvatten onder andere:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>Versleutelde verbindingen (SSL/TLS)</li>
                                    <li>Beperkte toegangsrechten tot systemen</li>
                                    <li>Sterke authenticatieprocedures</li>
                                    <li>Periodieke beveiligingscontroles en updates</li>
                                </ul>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">8. Bewaartermijnen</h2>
                                <p>Wij bewaren persoonsgegevens niet langer dan noodzakelijk voor het doel waarvoor ze zijn verzameld, tenzij een langere bewaartermijn wettelijk verplicht is.</p>
                                <p>Concreet hanteren wij de volgende richtlijnen:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>Klantaccounts: zolang de klant actief is + maximaal 2 jaar na beëindiging</li>
                                    <li>Zending- en factuurgegevens: 7 jaar (belastingwetgeving)</li>
                                    <li>Contact- en supportinformatie: maximaal 2 jaar</li>
                                    <li>Technische loggegevens: maximaal 12 maanden</li>
                                </ul>
                                <p>Na afloop van de bewaartermijn worden gegevens verwijderd of geanonimiseerd.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">9. Rechten van betrokkenen</h2>
                                <p>U heeft als betrokkene de volgende rechten op grond van de AVG:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>Recht op inzage (artikel 15 AVG)</li>
                                    <li>Recht op rectificatie (artikel 16 AVG)</li>
                                    <li>Recht op verwijdering ("recht op vergetelheid") (artikel 17 AVG)</li>
                                    <li>Recht op beperking van verwerking (artikel 18 AVG)</li>
                                    <li>Recht op overdraagbaarheid van gegevens (artikel 20 AVG)</li>
                                    <li>Recht van bezwaar tegen verwerking (artikel 21 AVG)</li>
                                    <li>Recht om een eerder gegeven toestemming in te trekken</li>
                                </ul>
                                <p>Een verzoek tot uitoefening van deze rechten kunt u indienen via info@sendwise.nl. Wij reageren binnen vier weken op uw verzoek.</p>
                                <p>U heeft tevens het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens (www.autoriteitpersoonsgegevens.nl).</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">10. Cookies en vergelijkbare technieken</h2>
                                <p>Onze website maakt gebruik van functionele en analytische cookies om het gebruiksgemak te verbeteren en onze diensten te optimaliseren.</p>
                                <p>Trackingcookies of marketingcookies worden alleen geplaatst met uw voorafgaande toestemming, conform de Telecommunicatiewet en de AVG. Meer informatie vindt u in onze Cookieverklaring.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">11. Minderjarigen</h2>
                                <p>Onze website en diensten zijn niet gericht op personen jonger dan 16 jaar. Wij verzamelen niet bewust gegevens van minderjarigen. Indien u van mening bent dat wij zonder ouderlijke toestemming gegevens hebben verzameld, kunt u contact opnemen via info@sendwise.nl. Wij zullen deze informatie dan verwijderen.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">12. Wijzigingen in deze privacyverklaring</h2>
                                <p>Sendwise behoudt zich het recht voor om deze privacyverklaring te wijzigen. Wijzigingen worden gepubliceerd op www.sendwise.nl/privacy met vermelding van de datum van inwerkingtreding. Wij adviseren u deze verklaring regelmatig te raadplegen zodat u op de hoogte blijft van de manier waarop wij persoonsgegevens beschermen.</p>
                            </div>

                            <div className="space-y-2">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">Contact</h2>
                                <p>Voor vragen over deze privacyverklaring of de verwerking van persoonsgegevens kunt u contact opnemen via:</p>
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

export default Privacy;
