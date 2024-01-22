
# Medal Games & Servers API

### Base URL

```
<http://localhost:12665>
```

Please note that this API is designed to run locally and will be accessible through the aforementioned base URL.

### Authentication

```json
{
  "publicKey": "YOUR_PUBLIC_KEY"
}
```

<aside>
⚠️ For all API requests, it's mandatory to include your public key in the publicKey header. This ensures that each request is properly authenticated and linked to your application.

</aside>

# Endpoints

## Submit Context

This endpoint allows the submission of game context which includes details about the local player, the server, and any relevant tags that describe the global context of the game. 

- **URL**: **`/api/v1/context/submit`**
- **Method**: **`POST`**
- **Header**: **`publicKey: [valid public key]`**
- **Body** (Example):
    
    ```json
    
    {
        "serverId": "mc.playdiamondcraft.gg", //unique identifier for the server
        "serverName": "DiamondCraft", //display name for the server
        "localPlayer": {
            "playerId": "playerSteve01", //unique identifier for the player
            "playerName": "SteveTheMiner" //display name for the player
        },
        "globalContextTags": { //Context tags will be automatically added as #hashtags
            "client": "clientname",
            "mode": "survival",
    				"server": "diamondcraft"
        },
        "globalContextData": { //Invisible metadata used by medal for discovery
            "biome": "Plains",
            "weather": "Clear",
            "joinUrl": "https://altv.run/serverId1234"
        }
    }
    ```

    <aside>
    💡 Note: globalContextTags are visible as #hashtags on clips, while globalContextData is invisible metadata. 
    </aside>
    
- **Response**:
    - Success (**`200 OK`**): A message confirming successful storage of the context.
    - Error: An error message with details (e.g., **`400 Bad Request`** for invalid requests).

## Invoke Game Event

Trigger a game event which will initiate a clip capture or bookmark with the attached context tags

- **URL**: **`/api/v1/event/invoke`**
- **Method**: **`POST`**
- **Header**: **`publicKey: [valid public key]`**
- **Body** (Example):
    
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
        "triggerActions": ["SaveClip", "Screenshot"], //Actions to trigger
        "clipOptions": {
            "duration": 30
        }
    
    ```
    
    <aside>
    💡 Note: contextTags will be visible as #hashtags on clips.
    </aside>
    
- **Response**:
    - Success (**`200 OK`**): A **`GameEventResponse`** object with details of the event processing. Example:
        
        ```json
        {
          "success": true,
          "eventName": "Ender Dragon Defeated",
          "message": "Event received and processed.",
          "actionsCompleted": ["SaveClip", "Screenshot"] //Actions that were completed
        }
        ```
        
    - Error: An error message with HTTP status codes based on the error type.

### **Error Handling**

Errors are communicated through HTTP status codes. For **`400 Bad Request`**, verify the request format and headers. For **`500 Internal Server Error`**, contact support.

## **Overview**

Medal’s Game API allows game developers to integrate their games with the Medal capture system to trigger video clips and share contextual information during gameplay. This documentation will guide you through using the available API endpoints.

- **Context**: Provides game state information like level or score, enhancing clips with meaningful details.
- **Events**: Triggers video captures at key moments, capturing exciting or important gameplay.
- **Monetize:** Earn revenue by prompting players to use your creator code when subscribing to Medal Premium.
- **Discoverability**: Clips link back to the server or experience that they were recorded in, allowing interested viewers to jump right into the fun.
