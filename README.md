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

6. | **User Story**         | Als Nutzer möchte ich eine Nachricht sehen, wenn meine Wunschliste leer ist, damit ich weiss, dass ich noch keine Favoriten hinzugefügt habe.                            |
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
haben wird die Collection exportiert ([siehe collection](https://github.com/gentianBeqiraj/biztrips-2023-testing/blob/main/src/backend_tests.json)), um diese mit
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
- [src/tests/TripList.test.js](https://github.com/gentianBeqiraj/biztrips-2023-testing/blob/main/src/tests/TripList.test.js)
- [src/tests/Wishlist.test.js](https://github.com/gentianBeqiraj/biztrips-2023-testing/blob/main/src/tests/Wishlist.test.js)

Diese Tests können mit dem folgenden Befehl ausgeführt werden:

```bash
npm test
```

---

# 4 Pipeline
Für die Pipeline habe wir die beiden Dateien [.github/workflows/deploy.yml](./.github/workflows/deploy.yml) und [.github/workflows/test.yml](./.github/workflows/test.yml) erstellt.

## 4.1 Trigger
**Push:** Die Pipeline wird ausgelöst, wenn Änderungen in den `main-Branch` gepusht werden.

## 4.2 Jobs
### 4.2.1 build
Ein Job, der auf einem Ubuntu-Host `ubuntu-latest` ausgeführt wird.

**Schritte:**

1. **Checkout des Repositories:**
    - **Action:** `actions/checkout@v3`
    - **Beschreibung:** Dieser Schritt sorgt dafür, dass der Code aus dem GitHub-Repository auf den Runner heruntergeladen wird, sodass er in den folgenden Schritten verwendet werden kann.

2. **Erstellen des Docker-Images:**
    - **Name:** Build the Docker image
    - **Befehl:** `docker build -t gentian2002/biztrips-2023-testing .`
    - **Beschreibung:** Dieser Schritt baut das Docker-Image aus dem aktuellen Verzeichnis (`.`) und taggt es als `gentian2002/biztrips-2023-testing`. Es verwendet dabei die im Repository enthaltene Dockerfile, um das Image zu erstellen.

3. **Login bei Docker Hub:**
    - **Name:** Log in to Docker Hub
    - **Befehl:** `docker login -u gentian2002 -p ${{ secrets.DOCKER_ACCESS_TOKEN }}`
    - **Beschreibung:** In diesem Schritt meldet sich die Pipeline bei Docker Hub mit dem Benutzernamen `gentian2002` und einem geheimen Zugangstoken `DOCKER_ACCESS_TOKEN`, das sicher aus den GitHub Secrets geladen wird, an. Dies ermöglicht es der Pipeline, auf Docker Hub zuzugreifen und das Image zu pushen.

4. **Pushen des Docker-Images:**
    - **Name:** Push the Docker image
    - **Befehl:** `docker push gentian2002/biztrips-2023-testing`
    - **Beschreibung:** Nachdem das Docker-Image erfolgreich gebaut und das Login bei Docker Hub durchgeführt wurde, wird das Image `gentian2002/biztrips-2023-testing` auf Docker Hub hochgeladen. Dadurch wird das Image im Docker Hub für die weitere Nutzung verfügbar.

### 4.2.2 deploy
Ein Job, der auf einem Ubuntu-Host `ubuntu-latest` ausgeführt wird. Build Stage muss fertig sein um augeführt zu werden.

**Schritte:**

1. **Checkout des Repositories:**
    - **Name:** Checkout repository
    - **Action:** `actions/checkout@v4`
    - **Beschreibung:** Dieser Schritt sorgt dafür, dass der Code aus dem GitHub-Repository auf den Runner heruntergeladen wird, sodass er in den folgenden Schritten verwendet werden kann.

2. **Set up Docker:**
    - **Name:** Set up Docker
    - **Action:** `docker/setup-buildx-action@v3`
    - **Beschreibung:** In diesem Schritt wird Docker auf dem Runner eingerichtet, um Docker-Container zu verwenden. Die `buildx`-Funktion wird aktiviert, um erweiterte Build-Optionen zu ermöglichen.

3. **Pull des Docker-Images:**
    - **Name:** Pull the Docker image
    - **Befehl:** `docker pull gentian2002/biztrips-2023-testing:latest`
    - **Beschreibung:** In diesem Schritt wird das Docker-Image `gentian2002/biztrips-2023-testing` mit dem Tag latest von Docker Hub heruntergeladen.

4. **Extrahieren der App-Dateien aus dem Container:**
    - **Name:** Extract app files from the container
    - **Befehl:**
      `container_id=$(docker create gentian2002/biztrips-2023-testing:latest)
       mkdir -p ./app/build
       docker cp $container_id:/app/build ./app/
       docker rm $container_id`
    - **Beschreibung:** Dieser Schritt erstellt einen Container aus dem heruntergeladenen Docker-Image, extrahiert die Build-Dateien der App aus dem Container und speichert sie im lokalen Verzeichnis `./app/build`. Anschliessend wird der Container entfernt.

5. **Installieren des Netlify CLI:**
    - **Name:** Install Netlify CLI
    - **Befehl:** `npm install -g netlify-cli`
    - **Beschreibung:** In diesem Schritt wird das Netlify CLI (Command Line Interface) global auf dem Runner installiert, um die Bereitstellung auf Netlify zu ermöglichen.

6. **Deployment auf Netlify:**
    - **Name:** Deploy to Netlify
    - **Befehl:** `netlify deploy --dir=./app/build --prod`
    - **Umgebungsvariablen:**
        - `NETLIFY_AUTH_TOKEN`: Das geheime Token für die Netlify-Authentifizierung aus den GitHub Secrets.
        - `NETLIFY_SITE_ID`: Die Site-ID für die Netlify-Webseite aus den GitHub Secrets.
    - **Beschreibung:** In diesem Schritt wird die App mithilfe des Netlify CLI auf Netlify bereitgestellt. Das Verzeichnis `./app/build` enthält die bereitgestellten Dateien, und der `--prod-Schalter` sorgt dafür, dass die Bereitstellung auf der Produktionsumgebung von Netlify erfolgt.

7. **Verifizierung der Bereitstellung:**
    - **Name:** Verify Deployment
    - **Befehl:** `echo "Deployment to Netlify complete. You can check the site at your Netlify URL."`
    - **Beschreibung:** Nachdem die Bereitstellung abgeschlossen ist, wird eine Bestätigung ausgegeben, die darauf hinweist, dass das Deployment erfolgreich war. Die URL der Netlify-Site kann überprüft werden.
