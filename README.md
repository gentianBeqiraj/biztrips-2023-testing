# 1. Testkonzept

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
- **Frontend:**
  - Komponenten-Tests (z.B. TripList, Wishlist).
  - User-Interaction-Tests (z. B. Button-Klick, Formulare).
- **Backend:**
  - API-Tests: GET, POST, PUT, DELETE für `/trips`.

## 1.5 Fehlerbehandlung
- Fehler in Tests dokumentieren.
- Über GitLab CI/CD automatisch melden.

---

# 2. Backend-Tests mit PostMan
Wir haben alle CRUD-Operatoren für die Trip-Entity erfolgreich auf PostMan getestet. Anschliessend 
haben wird die Collection exportiert ([siehe collection](./src/backend_tests.json)), um diese mit 
newman automatisieren zu können:

```bash
newman run ./src/backend_tests.json
```
