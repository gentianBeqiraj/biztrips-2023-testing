# 1 Testkonzept

## 1.1 Teststrategie
- **Fokus**:
  - Unit-Tests mit Jest für React-Komponenten.
  - Integrations-Tests mit Testing Library.
  - API-Schnittstellentests mit Postman.
- **Ziel**: Sicherstellen, dass alle CRUD-Operationen und User Stories abgedeckt sind.

## 1.2 Rollen und Verantwortlichkeiten
- **Tester 1**: Gentian Beqiraj
- **Tester 2**: Andrej Boroja
- **Entwickler 1**: Gentian Beqiraj
- **Entwickler 2**: Andrej Boroja

## 1.3 Testumgebung
- **Frontend**: ReactJS
- **Backend**: JSON-Server (http://localhost:3001/trips)
- **Tools**: Jest, Testing Library, Postman, GitLab CI/CD.

## 1.4 User Stories
1. | **User Story**         | Als Nutzer möchte ich, dass alle verfügbaren Reisen angezeigt werden, wenn kein Filter gesetzt ist, damit ich eine vollständige Übersicht über alle Reisen erhalte. |
   |------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | **Akzeptanzkriterien** | - Alle verfügbaren Reisen erscheinen in der Liste. <br/>- Kein Filter ist standardmässig aktiv.                                                                     |

2. | **User Story**         | Als Nutzer möchte ich Reisen nach Monaten filtern können, damit ich schnell passende Reisen für meinen gewünschten Zeitraum finde.                                                                                                                 |
   |------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | **Akzeptanzkriterien** | - Der Nutzer kann einen Monat auswählen, und nur Reisen für diesen Monat werden angezeigt. <br/>- Die Liste wird sofort aktualisiert, wenn ein Filter gesetzt wird. <br/>- Es wird sichergestellt, dass Reisen ohne Monat nicht angezeigt werden.  |

3. | **User Story**         | Als Nutzer möchte ich die genaue Anzahl der Reisen sehen, die den gesetzten Filterkriterien entsprechen, um zu wissen, wie viele Optionen verfügbar sind.  |
   |------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | **Akzeptanzkriterien** | -Die Anzahl der angezeigten Reisen entspricht den Filterkriterien. <br/>-Eine leere Liste wird angezeigt, wenn keine Reisen dem Filter entsprechen.        |

4. | **User Story**         | Als Nutzer möchte ich einen Trip durch einen Klick auf „Add to Wishlist“ zur Wunschliste hinzufügen, damit ich meine Favoriten schnell wiederfinden kann.                                     |
   |------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | **Akzeptanzkriterien** | - Der Button „Add to Wishlist“ ist für jede Reise verfügbar. <br/>- Nach dem Klick erscheint der Trip in der Wunschliste. <br/>- Eine Rückmeldung (z. B. „Added to Wishlist“) wird angezeigt. |

5. | **User Story**         | Als Nutzer möchte ich alle Einträge in meiner Wunschliste sehen, damit ich meine Favoriten leicht überprüfen kann.                                                   |
   |------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | **Akzeptanzkriterien** | - Alle hinzugefügten Reisen werden in der Wunschliste angezeigt. <br/>- Jede Reise enthält die Details (z. B. Name, Reiseziel), die ursprünglich gespeichert wurden. |

6. | **User Story**         | Als Nutzer möchte ich eine Nachricht sehen, wenn meine Wunschliste leer ist, damit ich weiß, dass ich noch keine Favoriten hinzugefügt habe.                             |
   |------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | **Akzeptanzkriterien** | - Eine Nachricht wie „Wishlist is empty“ wird angezeigt, wenn keine Reisen in der Wunschliste sind. <br/>- Die Nachricht verschwindet, sobald ein Trip hinzugefügt wird. |

## 1.5 Testfälle

### 1.5.1 Backend
- CRUD-Operatoren (GET, POST, PUT, DELETE) der Trip-Entity werden getestet

### 1.5.2 Frontend
- **Komponente:** TripList
  - Testen, ob alle Trips angezeigt werden, wenn kein Filter gesetzt ist.
  - Testen, ob die Filterfunktion nach Monaten funktioniert.
  - Testen, ob die korrekte Anzahl der gefilterten Trips angezeigt wird, basierend auf der Auswahl des Monats.
  - Testen, ob das Klicken auf den "Add to Wishlist"-Button einen Trip zur Wunschliste hinzufügt.
- **Komponente:** Wishlist
  - Testen, ob Wishlist-Einträge korrekt dargestellt werden.
  - Testen, ob "Wishlist is empty" gezeigt wird, wenn keine Artikel in der Wishlist vorhanden sind.

## 1.6 Fehlerbehandlung
- Über GitLab CI/CD automatisch melden.

---

# 2 Backend-Tests mit PostMan
Wir haben alle CRUD-Operatoren für die Trip-Entity erfolgreich auf PostMan getestet. Anschliessend 
haben wird die Collection exportiert ([siehe collection](./src/backend_tests.json)), um diese mit 
newman automatisieren zu können:

```bash
newman run ./src/backend_tests.json
```

---

# 3 Frontend-Tests
Im Frontend haben wir Component-Tests, Integration-Tests und UI-Tests durchgeführt. Ein Fokus wurde 
auf die beiden Komponenten 'TripList' und 'Wishlist' gelegt. Dabei haben wir auch überprüft, ob die
Integration der einzelnen Funktionen reibungslos läuft. Im UI wird geprüft, ob die Daten korrekt 
dargestellt werden.

Folgende Test-Files wurden erstellt:
- [src/tests/TripList.test.js](./src/tests/TripList.test.js)
- [src/tests/Wishlist.test.js](./src/tests/Wishlist.test.js)

---

# 4 Pipeline

TODO
