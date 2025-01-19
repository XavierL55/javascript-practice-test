# Opdracht:
Maak een formulier met input validatie
# Beschrijving:
Het doel van deze opdracht is om een _formulier_ te bouwen en met behulp van Javascript een aantal/
input validaties uit te voeren. Tevens maak je een paar kleine aanpassingen in de CSS code.

**Fork** deze repository naar je eigen systeem om met de bestanden in dit project de opdracht af te maken. 
De repository bestaat uit de volgende onderdelen:

- index.html
- css/styles.css
- js/script.js
- README.md

# Functionele vereisten:
Het is **alleen toegestaan** om wijzigingen aan te brengen in het _js/script.js_ en in de _css/styles.css.
De overige bestanden mogen **niet** worden gewijzigd.

**De volgende _input-validaties_ moeten worden gecodeerd:**
- Bij het betreden van een input veld:
  - wordt de achtergrondkleur van dat veld geel (yellow). 
- Bij het verlaten van een input veld:
  - wordt deze weer wit (white).
- De velden met de username, full name, email en age zijn verplicht:
  - Bij het verlaten van een van deze velden, en het veld is niet correct ingevuld, maak dan de achtergrond rood (red).
  - Wanneer een of meer velden leeg zijn mag het formulier niet worden verstuurd.
  - Wanneer alle verplichte velden zijn ingevuld wordt de 'Submit' button groen.
- De checkbox met de 'privacy policy' moet worden aangevinkt om het formulier te kunnen versturen
- De volgende _validatie met cookies_ moeten worden gecodeerd:
- Wanneer het formulier correct wordt verzonden hou je dit bij met een cookie.:
  - Tel dit bij de 'counter' op bovenaan.
  - Toon het correcte nummer ook wanneer de pagina wordt ververst.

**Alleen** wanneer het formulier _volledig is ingevuld_ inclusief de (verplichte) velden met de Username, full name, 
email en leeftijd niet leeg zijn, 
de checkbox met de "terms en conditions" is aangevinkt 
dan pas kan het formulier worden verstuurd.

## Technische vereisten:
- Gebruik Javascript om de input validaties uit te voeren.
- Gebruik Javascript om de styling van de input velden te wijzigen.
- Gebruik de bestanden zoals aangeleverd in de repository.
- Het is **niet toegestaan** om via Javascript het HTML DOM te manipuleren (dit betekent dus niks toevoegen of verwijderen).