
# Medal Games & Servers API Documentation

Welcome to the Medal Games & Servers API documentation. This guide provides comprehensive details to help you integrate your games with the Medal capture system, enhancing gameplay with triggered video captures and rich contextual information.

---

## Base URL

**`http://localhost:12665`**

*Note:* This API is intended for local use and can be accessed via the above base URL.

## Authentication

To authenticate your requests, include your public key in the header of each API call:

```json
"publicKey": "YOUR_PUBLIC_KEY"
```

**⚠️ Important:** Authentication with a valid public key is mandatory for all API requests.

---

## Endpoints

### 1. Submit Context

This endpoint allows for the submission of game context, including details about the local player, the server, and relevant global context tags.

- **Endpoint**: `/api/v1/context/submit`
- **Method**: `POST`
- **Header**: `publicKey: [valid public key]`
- **Body**: JSON object containing server ID, player information, context tags, and context data.
- **Response**: Success message (`200 OK`) or error details (e.g., `400 Bad Request`).

**Example Request Body:**

```json
{
    "serverId": "mc.playdiamondcraft.gg",
    "serverName": "DiamondCraft",
    "localPlayer": {
        "playerId": "playerSteve01",
        "playerName": "SteveTheMiner"
    },
    "globalContextTags": {
        "client": "clientname",
        "mode": "survival",
        "server": "diamondcraft"
    },
    "globalContextData": {
        "biome": "Plains",
        "weather": "Clear",
        "joinUrl": "https://altv.run/serverId1234"
    }
}
```

**💡 Note:** `globalContextTags` appear as #hashtags on clips. `globalContextData` is used as invisible metadata.

### 2. Invoke Game Event

Trigger a game event to initiate clip capture or bookmarking with associated context tags.

- **Endpoint**: `/api/v1/event/invoke`
- **Method**: `POST`
- **Header**: `publicKey: [valid public key]`
- **Body**: JSON object containing event details, player information, context tags, and trigger actions.
- **Response**: `GameEventResponse` object on success (`200 OK`) or error details.

**Example Request Body:**

```json
{
    "eventId": "evt_dragon_defeat01",
    "eventName": "Ender Dragon Defeated",
    "otherPlayers": [ 
        { "playerId": "playerAlex02", "playerName": "AlexTheExplorer" }
    ],
    "contextTags": {
        "location": "finalboss",
        "boss": "enderdragon"
    },
    "triggerActions": ["SaveClip", "Screenshot"],
    "clipOptions": {
        "duration": 30
    }
}
```

**💡 Note:** `contextTags` will be visible as #hashtags on clips.

**Example Success Response:**

```json
{
  "success": true,
  "eventName": "Ender Dragon Defeated",
  "message": "Event received and processed.",
  "actionsCompleted": ["SaveClip", "Screenshot"]
}
```

### Error Handling

Errors are communicated through HTTP status codes. If you encounter a `400 Bad Request`, check your request format and headers. For a `500 Internal Server Error`, please contact support.

---

## Overview

The Medal Games API enables game developers to:

- **Contextualize Gameplay**: Enhance clips with game state information like level or score.
- **Capture Key Moments**: Trigger video captures during significant gameplay events.
- **Monetize**: Encourage players to use your creator code for Medal Premium subscriptions.
- **Boost Discoverability**: Link clips back to the game server or experience for easy access by viewers.

This API is a powerful tool for enriching player experiences and increasing engagement with your game content.
