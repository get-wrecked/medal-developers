
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

Don't have a key yet? Apply for one [here](https://medal.typeform.com/to/STomVfTO).

---

## Endpoints

### Set Creator Code

This endpoint is used to set a creator code for a specific game or server. Upon successful setting of the creator code, it returns the associated Medal user ID.

- **Endpoint**: `/api/v1/creatorcode/set`
- **Method**: `POST`
- **Header**: `publicKey: [valid public key]`

**CreatorCode Object**:

| Property Name   | Description                       | Example Value   | Required |
|-----------------|-----------------------------------|-----------------|----------|
| creatorCode   | The creator code to be set        | `"YourCreatorCode123"` | Yes      |

##### Example CreatorCode

```json
{
    "creatorCode": "YourCreatorCode123"
}
```

##### Example Success Response

```json
{
    "success": true,
    "message": "Requested creator code update for medal user YourCreatorCode123",
    "medalUserId": "medalUserIdExample"
}
```

---

### Submit Context

This endpoint allows for the submission of game context, including details about the local player, the server, and relevant global context tags.

- **Endpoint**: `/api/v1/context/submit`
- **Method**: `POST`
- **Header**: `publicKey: [valid public key]`

**GameContext Object**:

| Property Name        | Description                               | Example Value               | Required |
|----------------------|-------------------------------------------|-----------------------------|----------|
| serverId           | Unique ID of the server                   | `"mc.playdiamondcraft.gg"`  | No      |
| serverName         | Name of the server                        | `"DiamondCraft"`            | No      |
| localPlayer        | Object containing local player information| `{"playerId": "playerSteve01", "playerName": "SteveTheMiner"}` | No |
| customStatus       | Custom activity status to set for the user | `Fighting the Ender Dragon` | No |
| globalContextTags  | Tags for global context as hashtags       | `{"client": "clientname", "mode": "survival", "server": "diamondcraft"}` | No |
| globalContextData  | Additional metadata for global context    | `{"biome": "Plains", "weather": "Clear", "joinUrl": "https://altv.run/serverId1234"}` | No |

**Example GameContext:**

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

---

### Invoke Game Event

Trigger a game event to initiate clip capture or bookmarking with associated context tags.

- **Endpoint**: `/api/v1/event/invoke`
- **Method**: `POST`
- **Header**: `publicKey: [valid public key]`

**GameEvent Object**:

| Property Name        | Description                               | Example Value               | Required |
|----------------------|-------------------------------------------|-----------------------------|----------|
| eventId            | Unique ID of the game event               | `"evt_dragon_defeat01"`     | Yes      |
| eventName          | Name of the game event                    | `"Ender Dragon Defeated"`   | Yes      |
| otherPlayers       | Array of other player objects             | `[{"playerId": "playerAlex02", "playerName": "AlexTheExplorer"}]` | No       |
| contextTags        | Tags for event context as hashtags        | `{"location": "finalboss", "boss": "enderdragon"}` | No |
| triggerActions     | Actions to be triggered by the event      | `["SaveClip", "SaveScreenshot"]`| No      |
| clipOptions        | Options for clip capture                  | `{"duration": 30}`          | No       |

**Example GameEvent:**

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
    "triggerActions": ["SaveClip", "SaveScreenshot"],
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
  "actionsCompleted": ["SaveClip", "SaveScreenshot"]
}
```

---

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
