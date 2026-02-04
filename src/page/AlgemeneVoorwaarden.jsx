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
                                    Versie 1.0 – Ingangsdatum: 11 oktober 2025
                                </p>
                            </div>
                            <div className="text-gray-700 inter-medium text-[0.98rem] leading-relaxed">
                                <p>Sendwise</p>
                                <p>Ondernemingsweg 66</p>
                                <p>2404HN Alphen aan den Rijn – Nederland</p>
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
                                <p>1.1 Deze algemene voorwaarden ("Voorwaarden") zijn van toepassing op alle aanbiedingen, overeenkomsten en diensten van Sendwise betreffende het gebruik van het online verzendplatform www.sendwise.nl en app.sendwise.nl (het "Platform").</p>
                                <p>1.2 Door gebruik te maken van het Platform of het plaatsen van een bestelling verklaart de klant ("Klant") akkoord te gaan met deze Voorwaarden.</p>
                                <p>1.3 Algemene of inkoopvoorwaarden van de Klant zijn niet van toepassing, tenzij uitdrukkelijk en schriftelijk door Sendwise aanvaard.</p>
                                <p>1.4 Sendwise behoudt zich het recht voor deze Voorwaarden te wijzigen. Gewijzigde voorwaarden worden minimaal 30 dagen voor inwerkingtreding via het Platform of per e-mail aangekondigd. Bij een voor de Klant nadelige wijziging mag de Klant binnen deze termijn de overeenkomst beëindigen.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">2. Diensten</h2>
                                <p>2.1 Sendwise exploiteert een online platform waarmee Klanten verzendlabels kunnen aanmaken, zendingen kunnen volgen en aanvullende verzendopties kunnen beheren.</p>
                                <p>2.2 Alle verzendingen worden uitgevoerd via vervoerders ("Vervoerders") waarmee Sendwise contracten heeft afgesloten. De Klant verzendt dus onder de contracten van Sendwise.</p>
                                <p>2.3 De daadwerkelijke uitvoering van het vervoer – inclusief het ophalen, transporteren, afleveren en eventueel verzekeren van pakketten – gebeurt door de betreffende Vervoerder. Sendwise treedt daarbij uitsluitend op als tussenpersoon (expediteur) in de zin van artikel 8:60 Burgerlijk Wetboek.</p>
                                <p>2.4 Pickupdiensten en verzekeringen worden altijd uitgevoerd door de Vervoerder. Sendwise is hiervoor niet aansprakelijk.</p>
                                <p>2.5 Het aanbod, de actuele vervoerders en eventuele toeslagen worden vermeld op het Platform.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">3. Registratie en gebruik van het Platform</h2>
                                <p>3.1 De Klant dient een Account aan te maken om gebruik te kunnen maken van het Platform. Bij registratie moeten correcte en volledige (bedrijfs)gegevens worden verstrekt.</p>
                                <p>3.2 De Klant is verantwoordelijk voor het veilig bewaren van inloggegevens en het voorkomen van ongeoorloofd gebruik.</p>
                                <p>3.3 Sendwise mag Accounts tijdelijk blokkeren of beëindigen bij vermoeden van misbruik, overtreding van deze Voorwaarden of andere ongeoorloofde handelingen.</p>
                                <p>3.4 De Klant is volledig verantwoordelijk voor alle activiteiten die plaatsvinden onder zijn Account.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">4. Acceptable Use (toegestaan gebruik)</h2>
                                <p>4.1 Het is de Klant niet toegestaan het Platform te gebruiken voor:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>onrechtmatige, frauduleuze of schadelijke activiteiten;</li>
                                    <li>verspreiding van spam, malware of virussen;</li>
                                    <li>toegang tot of verstoring van systemen van Sendwise of derden;</li>
                                    <li>datamining, scraping of geautomatiseerde extractie van gegevens zonder schriftelijke toestemming;</li>
                                    <li>het aanbieden of bouwen van concurrerende diensten;</li>
                                    <li>schending van intellectuele eigendomsrechten of privacy van derden.</li>
                                </ul>
                                <p>4.2 Sendwise mag het gebruik van het Platform monitoren en bij overtreding de toegang beperken, opschorten of beëindigen.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">5. Tarieven, toeslagen en betalingen</h2>
                                <p>5.1 Klanten betalen uitsluitend voor de daadwerkelijk aangemaakte verzendlabels. Er zijn geen maandelijkse abonnementskosten.</p>
                                <p>5.2 Alle prijzen zijn exclusief btw en eventuele heffingen, tenzij anders vermeld.</p>
                                <p>5.3 Toeslagen (zoals piektoeslagen, brandstoftoeslagen, of individuele toeslagen wegens afwijkend gewicht, formaat of andere vervoerderskosten) worden doorberekend aan de Klant.</p>
                                <p>5.4 De bindende metingen en toeslagen zoals vastgesteld door de Vervoerder zijn leidend voor de facturatie. Sendwise kan deze gegevens zonder verder bewijs hanteren.</p>
                                <p>5.5 Structurele of vaste toeslagen worden vermeld bij de betreffende Vervoerder op het Platform. Tijdelijke toeslagen (zoals piektoeslagen) worden tijdig en duidelijk op het Platform gecommuniceerd.</p>
                                <p>5.6 Ongebruikte verzendlabels worden automatisch niet gefactureerd.</p>
                                <p>5.7 Facturatie vindt automatisch plaats (thans maandelijks, mogelijk later via automatische incasso).</p>
                                <p>5.8 Betaling dient te geschieden binnen 14 dagen na factuurdatum.</p>
                                <p>5.9 Bij overschrijding van de betalingstermijn is de Klant van rechtswege in verzuim, zonder dat een ingebrekestelling is vereist. Vanaf dat moment is de Klant wettelijke handelsrente en redelijke buitengerechtelijke incassokosten verschuldigd.</p>
                                <p>5.10 Sendwise mag haar dienstverlening opschorten of Accounts blokkeren bij betalingsachterstand.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">6. Transport en aansprakelijkheid van vervoerders</h2>
                                <p>6.1 De Vervoerder is volledig verantwoordelijk voor het feitelijke transport, inclusief schade, vertraging of verlies van zendingen.</p>
                                <p>6.2 Sendwise bemiddelt namens de Klant bij klachten of schadeclaims richting de Vervoerder, maar is niet aansprakelijk voor de uitkomst van die procedures.</p>
                                <p>6.3 Alle zendingen vallen onder de voorwaarden van de betreffende Vervoerder. Deze zijn op aanvraag of via de vervoerderspagina's beschikbaar.</p>
                                <p>6.4 Eventuele aansprakelijkheid voor schade tijdens vervoer ligt uitsluitend bij de Vervoerder volgens diens voorwaarden en wettelijke bepalingen. Sendwise sluit elke aansprakelijkheid in dit verband uit.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">7. Klachten en aansprakelijkheid</h2>
                                <p>7.1 Klachten over facturen of diensten dienen binnen 14 dagen na ontdekking schriftelijk te worden gemeld via info@sendwise.nl.</p>
                                <p>7.2 Na het verstrijken van deze termijn vervalt elk recht op reclamatie of schadevergoeding.</p>
                                <p>7.3 Sendwise is niet aansprakelijk voor enige vorm van schade, direct of indirect, waaronder begrepen gevolgschade, winstderving, verlies van gegevens, reputatieschade of bedrijfsstagnatie, behalve bij aantoonbare opzet of bewuste roekeloosheid van de directie van Sendwise.</p>
                                <p>7.4 In alle gevallen waarin Sendwise ondanks het voorgaande toch aansprakelijk zou zijn, is de aansprakelijkheid beperkt tot het bedrag van de betreffende zending waarop de schade betrekking heeft.</p>
                                <p>7.5 Sendwise is niet verantwoordelijk voor storingen, onderbrekingen of technische problemen met het Platform. Sendwise spant zich in om de dienstverlening naar beste vermogen te continueren ("inspanningsverplichting").</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">8. Intellectuele eigendom en vertrouwelijkheid</h2>
                                <p>8.1 Alle intellectuele eigendomsrechten op het Platform, de software, documentatie, lay-out, ontwerpen en handelsnamen behoren toe aan Sendwise.</p>
                                <p>8.2 De Klant krijgt een beperkt, niet-exclusief en niet-overdraagbaar gebruiksrecht op het Platform zolang zijn Account actief is.</p>
                                <p>8.3 Zonder schriftelijke toestemming mag de Klant geen onderdelen van het Platform kopiëren, hergebruiken of doorverkopen.</p>
                                <p>8.4 Partijen zullen vertrouwelijke informatie niet delen met derden, behalve indien wettelijk vereist of voor zover noodzakelijk voor uitvoering van de overeenkomst.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">9. Privacy en gegevensbescherming</h2>
                                <p>9.1 Sendwise verwerkt persoonsgegevens uitsluitend voor de uitvoering van haar diensten, zoals verzending, communicatie en facturatie.</p>
                                <p>9.2 Sendwise verwerkt deze gegevens als verwerker namens de Klant (verwerkingsverantwoordelijke) in de zin van de Algemene Verordening Gegevensbescherming (AVG).</p>
                                <p>9.3 De verwerking geschiedt volgens de Privacyverklaring en Verwerkersovereenkomst (DPA) van Sendwise, die integraal deel uitmaken van deze Voorwaarden.</p>
                                <p>9.4 Alle gegevens worden gehost en opgeslagen binnen de Europese Unie.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">10. Beëindiging en opschorting</h2>
                                <p>10.1 Sendwise mag de dienstverlening of toegang tot het Platform opschorten of beëindigen indien de Klant zijn verplichtingen niet nakomt, waaronder betalingsachterstand of misbruik van het Platform.</p>
                                <p>10.2 Bij beëindiging worden openstaande bedragen onmiddellijk opeisbaar.</p>
                                <p>10.3 De Klant kan de overeenkomst beëindigen door het Account te verwijderen of door schriftelijke opzegging. Lopende facturen blijven verschuldigd.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">11. Overmacht</h2>
                                <p>11.1 Sendwise is niet aansprakelijk bij overmacht, waaronder begrepen storingen bij vervoerders, internetuitval, cyberaanvallen, brand, overheidsmaatregelen, stakingen, of andere omstandigheden die buiten de redelijke invloedssfeer van Sendwise liggen.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">12. Toepasselijk recht en geschillen</h2>
                                <p>12.1 Op deze Voorwaarden en alle overeenkomsten tussen Sendwise en de Klant is Nederlands recht van toepassing.</p>
                                <p>12.2 Geschillen worden exclusief voorgelegd aan de bevoegde rechter te Utrecht.</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">13. Slotbepalingen</h2>
                                <p>13.1 Indien enige bepaling van deze Voorwaarden ongeldig of onafdwingbaar blijkt, blijven de overige bepalingen volledig van kracht. De ongeldige bepaling zal worden vervangen door een bepaling die zoveel mogelijk aansluit bij het doel en de strekking van de oorspronkelijke bepaling.</p>
                                <p>13.2 De meest recente versie van deze Voorwaarden is steeds beschikbaar via www.sendwise.nl/algemene-voorwaarden.</p>
                            </div>

                            <div className="space-y-2">
                                <h2 className="inter-medium text-[1.3rem] text-gray-900">Vragen?</h2>
                                <p>Voor vragen over deze algemene voorwaarden kunt u contact opnemen via:</p>
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
