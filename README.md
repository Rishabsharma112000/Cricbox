# Cricbox

**Cricbox** is a full-stack cricket match tracking application that displays **live scores**, **upcoming fixtures**, **completed match results**, **scorecards**, and **ball-by-ball commentary**.

The project is split into two independent parts:

- **`backend/`** — A lightweight TypeScript + Express REST API that serves mock, in-memory cricket data.
- **`mobile/`** — An **Expo (React Native)** cross-platform mobile app that consumes the backend API and presents the data in a polished, native UI with light/dark theme support.

---

## ✨ Features

- ✅ **Live, Upcoming & Completed match tabs** — filter matches by status.
- ✅ **Match cards** — team codes, venue, date, status pill, current score, and result.
- ✅ **Match details screen** — full score, venue, date, batsman scorecard, and commentary.
- ✅ **Ball-by-ball commentary** — over-by-over text updates.
- ✅ **Pull-to-refresh** on the match list.
- ✅ **Light & dark theme** support based on the device color scheme.
- ✅ **Splash screen** with app branding.

---

## 🛠️ Tech Stack

### Backend
| Technology | Purpose |
|------------|---------|
| [TypeScript] | Language (strict mode) |
| [Express] | HTTP server & routing |
| [ts-node-dev] | Dev server with hot reload |
| Mock in-memory data | No database required |

### Mobile
| Technology | Purpose |
|------------|---------|
| [Expo SDK 57](https://expo.dev/) | React Native framework & tooling |
| [React Native](https://reactnative.dev/) | Cross-platform UI |
| [React Navigation (native-stack)](https://reactnavigation.org/) | Screen navigation |
| [Axios](https://axios-http.com/) | HTTP client for API calls |

---

## 📁 Project Structure

```
Cricbox/
├── backend/                     # Express REST API
│   ├── scripts/                 # (empty) helper scripts
│   ├── src/
│   │   ├── app.ts               # Express app & middleware setup
│   │   ├── server.ts            # Server bootstrap (listens on PORT)
│   │   ├── controllers/
│   │   │   └── matchController.ts   # HTTP request handlers
│   │   ├── data/
│   │   │   └── matches.ts       # Types + mock match data
│   │   ├── routes/
│   │   │   └── index.ts         # API route definitions
│   │   ├── services/
│   │   │   └── matchService.ts  # Business logic / data access
│   │   └── types/               # Backend TypeScript types
│   ├── package.json
│   ├── tsconfig.json
│   └── .gitignore
│
└── mobile/                      # Expo React Native app
    ├── assets/                  # Icons, splash images
    ├── src/
    │   ├── components/
    │   │   ├── CommentaryItem.tsx   # Single commentary row
    │   │   ├── MatchCard.tsx        # Match list card
    │   │   └── ScoreCard.tsx        # Batsman scorecard table
    │   ├── navigation/
    │   │   └── AppNavigator.tsx     # Stack navigator + themes
    │   ├── screens/
    │   │   ├── SplashScreen.tsx     # Branded splash screen
    │   │   ├── MatchListScreen.tsx  # Live/Upcoming/Completed tabs
    │   │   └── MatchDetailsScreen.tsx # Scorecard + commentary
    │   ├── services/
    │   │   └── matchService.ts      # Axios API client
    │   ├── theme/
    │   │   └── colors.ts            # Light & dark color palettes
    │   └── types/
    │       └── index.ts             # Shared TypeScript types
    ├── App.tsx                   # App entry point
    ├── index.ts
    ├── app.json                  # Expo config
    ├── package.json
    └── tsconfig.json
```

---

## 🧰 Prerequisites

Before you begin, make sure you have the following installed:

- **[Node.js](https://nodejs.org/)** (v16 or later recommended)
- **[npm](https://www.npmjs.com/)** (bundled with Node.js)
- **[Expo Go](https://expo.dev/go)** app on your physical device (to run the mobile app), **or** an Android emulator / iOS simulator
- *(Optional)* `git`

---

## 🚀 Getting Started

### 1. Install dependencies

Open a terminal in the project root and install backend dependencies, then mobile dependencies:

```bash
cd backend
npm install
```

```bash
cd ../mobile
npm install
```

---

### 2. Start the backend server

```bash
cd backend
npm run dev
```

This starts the API with `ts-node-dev` (auto-reload on changes). By default it runs on:

```
http://localhost:3000
```

You can override the port with the `PORT` environment variable:

```bash
# Example (PowerShell)
$env:PORT=4000
npm run dev
```

You should see output similar to:

```
Server is running on http://localhost:3000
```

> **Note:** The backend uses **mock in-memory data** — no database setup is required.

---

### 3. Start the mobile app

Open a second terminal and start the Expo development server:

```bash
cd mobile
npm start
```

Or use any of the platform-specific scripts:

| Command | Description |
|---------|-------------|
| `npm start` | Start the Expo dev server |
| `npm run android` | Start and open on Android emulator/device |
| `npm run ios` | Start and open on iOS simulator |
| `npm run web` | Run in the browser (Expo web) |

Once Expo starts, you can:

- **Physical device:** Scan the QR code with the **Expo Go** app.
- **Emulator:** Press `a` for Android or `i` for iOS.

---

## 🔌 Connecting the Mobile App to the Backend

The mobile app's API client is located at:

```
mobile/src/services/matchService.ts
```

It currently uses a hardcoded base URL:

```ts
const BASE_URL = 'http://192.168.1.39:3000';
```

### Update the base URL to match your environment

- **Physical device:** The backend must be reachable from your phone. Use your **computer's LAN IP address** (e.g. `http://192.168.1.39:3000`) and ensure both devices are on the same network.
- **Android emulator:** Use `http://10.0.2.2:3000` to reach your host machine's `localhost`.
- **iOS simulator / web:** Use `http://localhost:3000`.

Edit the `BASE_URL` constant in `mobile/src/services/matchService.ts` to point to your running backend, then restart Expo.

---

## 📡 API Reference

All endpoints are served under the backend base URL (`http://localhost:3000` by default).

### `GET /matches`

Returns a list of all matches.

**Optional query parameter:**

| Parameter | Type | Values | Description |
|-----------|------|--------|-------------|
| `status` | string | `LIVE`, `UPCOMING`, `COMPLETED` | Filters matches by status |

**Examples:**

```bash
# All matches
curl http://localhost:3000/matches

# Only live matches
curl http://localhost:3000/matches?status=LIVE
```

---

### `GET /matches/:id`

Returns detailed information for a single match.

**Examples:**

```bash
curl http://localhost:3000/matches/1
```

**Possible responses:**
- `200 OK` — match details object
- `404 Not Found` — `{ "message": "Match not found" }`

---

### `GET /matches/:id/commentary`

Returns the ball-by-ball commentary for a single match.

**Examples:**

```bash
curl http://localhost:3000/matches/1/commentary
```

**Possible responses:**
- `200 OK` — array of commentary items
- `404 Not Found` — `{ "message": "Match not found" }`

---

### Response Data Model

**Match object:**

```json
{
  "id": 1,
  "status": "LIVE",
  "teamA": "India",
  "teamB": "Australia",
  "venue": "Narendra Modi Stadium, Ahmedabad",
  "matchDate": "2026-08-04",
  "score": "India 182/4, Australia 0/0",
  "overs": "28.3 / 50",
  "result": "Match in progress",
  "scorecard": [
    {
      "batsman": "Virat Kohli",
      "runs": 74,
      "balls": 62,
      "fours": 8,
      "sixes": 1,
      "strikeRate": 119.35
    }
  ],
  "commentary": [
    { "over": "28.3", "text": "defends back to the bowler." }
  ]
}
```

**Match status values:** `LIVE` | `UPCOMING` | `COMPLETED`

---

## 🔨 Build & Production Scripts

### Backend

| Command | Description |
|---------|-------------|
| `npm run dev` | Run the dev server with auto-reload |
| `npm run build` | Compile TypeScript to `dist/` |
| `npm start` | Run the compiled server from `dist/server.js` |

### Mobile

| Command | Description |
|---------|-------------|
| `npm start` | Start Expo dev server |
| `npm run android` | Run on Android |
| `npm run ios` | Run on iOS |
| `npm run web` | Run in the browser |

---

## 🧑‍💻 Development Notes

- **Backend data:** All match data lives in `backend/src/data/matches.ts` as mock data. Edit this file to add, remove, or update matches.
- **Theming:** Color palettes for light and dark modes are defined in `mobile/src/theme/colors.ts`. The app automatically switches themes based on the device's system color scheme.
- **Navigation:** The navigation stack is configured in `mobile/src/navigation/AppNavigator.tsx`. Available routes are `Splash`, `LiveMatches`, `UpcomingMatches`, `CompletedMatches`, and `MatchDetails`.

---

## 📄 License

See the `mobile/LICENSE` file for license details.

---

Enjoy building with **Cricbox**! 🏏
