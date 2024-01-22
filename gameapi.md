
# Medal Games & Servers API

## **Endpoints**

[Global Game Context](https://www.notion.so/Global-Game-Context-368eb3392e074f88807c4f268abb929b?pvs=21)

[Triggering Events](https://www.notion.so/Triggering-Events-34426d37e27f4e2a8e41358791a1d044?pvs=21)

[Creator Codes](https://www.notion.so/Creator-Codes-4b9521895ad4403491a4c5958818c170?pvs=21)

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
⚠️ For all API requests, it's mandatory to include your public key in the **`publicKey`** header. This ensures that each request is properly authenticated and linked to your application.

</aside>

## **Overview**

Medal’s Game API allows game developers to integrate their games with the Medal capture system to trigger video clips and share contextual information during gameplay. This documentation will guide you through using the available API endpoints.

### Benefits

- **Context**: Provides game state information like level or score, enhancing clips with meaningful details.
- **Events**: Triggers video captures at key moments, capturing exciting or important gameplay.
- **Monetize:** Earn revenue by prompting players to use your creator code when subscribing to Medal Premium.
- **Discoverability**: Clips link back to the server or experience that they were recorded in, allowing interested viewers to jump right into the fun.
