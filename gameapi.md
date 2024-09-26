
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

Don't have a key yet? Generate one [here](https://thirdpartyregister.pages.dev/).

---

## Endpoints

### Submit Context

This endpoint allows for the submission of game context, including details about the local player, the server, and relevant global context tags.

- **Endpoint**: `/api/v1/context/submit`
- **Method**: `POST`
- **Header**: `publicKey: [valid public key]`

**GameContext Object**:

| Property Name        | Description                               | Example Value               | Required |
|----------------------|-------------------------------------------|-----------------------------|----------|
| serverId           | Unique ID of the server                   | `"n446av"`  | No      |
| serverName         | Name of the server                        | `"SpaceTurtles RolePlay"`            | No      |
| localPlayer        | Object containing local player information| `{"playerId": "trevorP12345", "playerName": "Trevor Philips"}` | No |
| customStatus       | Custom activity status to set for the user | `Skydiving from Mount Chiliad` | No |
| globalContextTags  | Tags for global context as hashtags       | `{"client": "fivem", "mode": "survival", "server": "strp"}` | No |
| globalContextData  | Additional metadata for global context    | `{"biome": "Plains", "weather": "Clear", "joinUrl": "https://cfx.re/join/n446av"}` | No |

**Example GameContext:**

```json
{
    "serverId": "n446av",
    "serverName": "SpaceTurtles RolePlay",
    "localPlayer": {
        "playerId": "trevorP12345",
        "playerName": "Trevor Philips"
    },
    "globalContextTags": {
        "client": "fivem",
        "mode": "survival",
        "server": "strp"
    },
    "globalContextData": {
        "biome": "Plains",
        "weather": "Clear",
        "joinUrl": "https://cfx.re/join/n446av"
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
        "duration": 30,
        "alertType": "Disabled"
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
The optional `alertType` field accepts the following enum values:

| Value       | Description                             |
|-------------|-----------------------------------------|
| `Default`   | Default alert behavior                  |
| `Disabled`  | Disable alerts for this event           |
| `SoundOnly` | Plays a clip sound if enabled, but no overlay                      |
| `OverlayOnly` | Displays an overlay if enabled, but no clip sound                      |
---

### Error Handling

Errors are communicated through HTTP status codes. If you encounter a `400 Bad Request`, check your request format and headers. For a `500 Internal Server Error`, please contact support.

---

## Possible Errors

| Endpoint | Error Code | HTTP Status | Description |
|----------|------------|-------------|-------------|
| /event | INVALID_MODEL | 400 | The request body does not match the expected model structure. |
| /event | INVALID_EVENT | 400 | The provided game event details are invalid. |
| /event | MISSING_PUBLIC_KEY | 400 | The publicKey header is missing from the request. |
| /event | INVALID_APP_DATA | 400 | Failed to retrieve app data associated with the provided public key. |
| /event | INACTIVE_GAME | 200 | The event was received but not processed because the categoryId does not match the active game. |
| /event | DISABLED_EVENT | 200 | The event was received but not processed because it is disabled in the user's ICYMI settings. |
| /event | INTERNAL_ERROR | 500 | An unexpected error occurred while processing the request. |

| Endpoint | Error Code | HTTP Status | Description |
|----------|------------|-------------|-------------|
| /context | INVALID_MODEL | 400 | The request body does not match the expected model structure. |
| /context | MISSING_PUBLIC_KEY | 400 | The publicKey header is missing from the request. |
| /context | INVALID_APP_DATA | 400 | Failed to retrieve app data associated with the provided public key. |
| /context | INTERNAL_ERROR | 500 | An unexpected error occurred while processing the request.

---

## Overview

The Medal Games API enables game developers to:

- **Contextualize Gameplay**: Enhance clips with game state information like level or score.
- **Capture Key Moments**: Trigger video captures during significant gameplay events.
- **Boost Discoverability**: Link clips back to the game server or experience for easy access by viewers.

This API is a powerful tool for enriching player experiences and increasing engagement with your game content.

