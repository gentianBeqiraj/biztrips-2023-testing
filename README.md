# 1 Testkonzept

## 1.1 Teststrategie
- Fokus auf:
  - Unit-Tests mit Jest für React-Komponenten.
  - User-Interaction-Tests mit Testing Library.
  - API-Schnittstellentests mit Postman.
- Ziel: Sicherstellen, dass alle CRUD-Operationen und User Stories abgedeckt sind.

## 1.2 Rollen und Verantwortlichkeiten
- Tester 1: Gentian Beqiraj
- Tester 2: Andrej Boroja
- Entwickler 1: Gentian Beqiraj
- Entwickler 2: Andrej Boroja

## 1.3 Testumgebung
- Frontend: ReactJS
- Backend: JSON-Server (http://localhost:3001/trips)
- Tools: Jest, Testing Library, Postman, GitLab CI/CD.

## 1.4 Testfälle

### 1.4.1 Backend
- CRUD-Operatoren (GET, POST, PUT, DELETE) der Trip-Entity werden getestet

### 1.4.2 Frontend

#### 1.4.2.1 Components-Test:
- **Komponente:** TripsList
- **Was wird getestet:**
  - Testen, ob alle Trips angezeigt werden, wenn kein Filter gesetzt ist.
  - Testen, ob die Filterfunktion nach Monaten funktioniert.
  - Testen, ob die korrekte Anzahl der gefilterten Trips angezeigt wird, basierend auf der Auswahl des Monats.
  - Testen, ob das Klicken auf den "Add to Wishlist"-Button einen Trip zur Wunschliste hinzufügt.
  

## 1.5 Fehlerbehandlung
- Fehler in Tests dokumentieren.
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

## 3.1 Component-Tests mit Jest
TODO

## 3.2 User-Interaction-Tests mit Cypress
TODO

## 3.3 User-Stories-Tests mit Cypress
TODO

---

# 4 Pipeline

TODO
