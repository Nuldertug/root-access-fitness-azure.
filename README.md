# Root Access Fitness — demo website

Nederlandstalige, responsive statische website voor de Azure-public-cloudopdracht. Gebouwd met HTML, CSS en vanilla JavaScript; geen buildstap nodig.

## Voordat je publiceert

Dit is een demo voor school. Vervang de voorbeeldgegevens in `index.html` voordat je deze als echte bedrijfswebsite presenteert:

- `Root Access Fitness`: naam van de sportschool
- `Locatie invullen · Utrecht`: echte locatie of gewenste demo-locatie
- `info@voorbeeld.nl`: jouw school-/demoadres of een adres waarvoor je toestemming hebt
- Openingstijden, lestijden en prijzen: aanpassen aan de case

De e-mailknoppen gebruiken `mailto:`; er is geen server-side formulier of ledenadministratie geïntegreerd.

## Publiceren met Azure Static Web Apps (Free)

1. Maak een GitHub-repository aan, bijvoorbeeld `root-access-fitness-azure`.
2. Upload `index.html`, `styles.css`, `script.js` en eventueel deze README naar de hoofdmap van de repository.
3. Open https://portal.azure.com en zoek `Static Web Apps` → `Create`.
4. Kies je Azure-abonnement en resource group, geef de app een unieke naam en kies plan `Free`.
5. Bij deployment details selecteer je `GitHub`, autoriseer je GitHub en kies je de repository en branch.
6. Kies build preset `Custom`. Gebruik app location `/`, API location leeg en output location leeg (de site is plain HTML/CSS/JS).
7. Maak de Static Web App aan. Wacht tot de GitHub Actions-deployment klaar is en open de gegenereerde `azurestaticapps.net`-URL.
8. Maak screenshots van de Azure-resource, de geslaagde GitHub Actions-run en de publieke website.

## Kostencalculator en certificaat

- Azure Pricing Calculator: https://azure.microsoft.com/pricing/calculator/
- AZ-900 exam study guide: https://learn.microsoft.com/credentials/certifications/resources/study-guides/az-900

De gratis Static Web Apps-tier heeft quota en geen SLA. Controleer de actuele Azure-prijs- en abonnementsvoorwaarden voor de regio en het account dat je gebruikt.
