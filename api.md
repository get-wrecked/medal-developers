# Medal API
Want to embed your clips on your website? Are you a game developer who wants to embed the coolest clips from your game? We got you covered.

## Generate an API Key
You can generate an API key instantly without approval at [this link](https://developers.medal.tv/v1/generate_key). If you want more customized access, you may request so by filling out [this form](https://docs.google.com/forms/d/e/1FAIpQLSeLxbs1UchRGT6Nb6WYD_0gO7821SbRrAnDYjqVOXNrPBrJ4g/viewform
)

| Special Acesss | Default      | Description |
| --------------- | ------------ | ----------- |
| rawFileUrl            | `not_authorized` | Access to the raw video file for public clips, if you need to make a highlight reel of all clips submitted to your tournament, for example |
| limit + offset           | `10` | You can have your content limit (limit + offset combined) increased if you need to retrieve information on a large event |

## Search Clips
Did you organize a tournament where everybody submitted Medal clips with a hashtag? You can use the Search API to search for hashtags on Medal [medal.tv](https://medal.tv). If you don't see your game on there, feel free to [contact us on Discord](https://medal.tv/discord).

### Example request
```
curl "https://developers.medal.tv/v1/search?text=#marshmello&limit=1" -X GET -H "API-Key: YOUR_API_KEY"
```

### Customize your request
| Query Parameter | Default      | Description |
| --------------- | ------------ | ----------- |
| text            | `none` | Customize this field to your needs |
| limit           | `10` | Limit how many videos the search returns |
| offset          | `0` | Specify how much you want to offset the search by |

## Copy Embed Code
Once you find the clip you want to embed, open the link in your browser (for example: [https://medal.tv/clips/4954893](https://medal.tv/clips/4954893)) and open the share screen to copy the embed code:

![Example 1](https://i.imgur.com/X1vmypU.png)
![Example 2](https://i.imgur.com/s7njaTr.png)
![Example 3](https://i.imgur.com/kZifBFh.png)

## Advanced Embed Options
If you are looking to control video playback behavior or add a **Get this on Steam** button, you've come to the right place.

### Default Embed Behavior
The default embed behavior is to autoplay muted, loop when the video ends, and to show all call-to-actions on the player. Here is an example of a default embed:
```
<iframe width="640" height="360" src="https://medal.tv/clip/4954893/vpkPnOp0o" frameborder="0" allow="autoplay" allowfullscreen></iframe>
```

### Control Playback Behavior
You can append query parameters to the `src` url in the iframe code to control playback behavior. For example:
```
<iframe width="640" height="360" src="https://medal.tv/clip/4954893/vpkPnOp0o?autoplay=0&muted=0&loop=0" frameborder="0" allow="autoplay" allowfullscreen></iframe>
```
The above code _would not_ autoplay, it _would_ have sound by default, and it _would not_ loop playback.

Here is a breakdown of the query parameters for controlling playback behavior:

| Query Parameter | Default      | Description |
| --------------- | ------------ | ----------- |
| autoplay        | `1` | By default videos will autoplay when embedded. Set this to `0` to disable autoplay. |
| muted           | `1` | By default videos will be muted when embedded. Set this to `0` to play videos with sound by default.  **Note:** Autoplay with sound does not work in modern browsers. For autoplay to work you have to set muted to `1` |
| loop            | `1` | By default videos will loop playback when embedded. Set this to `0` to disable looping. |

### Enable "Get this on Steam"
![Get this on Steam](https://i.imgur.com/ZfUc7hP.png)
You can enable the **Get this on Steam** button by passing in a `steamappid` query parameter with your Steam game's app ID. For example, this would display a button that links out to Rocket League on Steam, like in the image above:
```
<iframe width="640" height="360" src="https://medal.tv/clip/4954893/vpkPnOp0o?steamappid=252950" frameborder="0" allow="autoplay" allowfullscreen></iframe>
```
Then every time someone copies the embed code from this embed or the share URL, it would also include your Steam app ID so that when they share it, the **Get this on Steam** button persists.

If you want to keep this behavior but hide the button when _you_ embed it (for example, on your Steam app page), you can continue appending `steamappid` but also add `&cta=0`. This will _hide_ the **Get this on Steam** call-to-action in _your_ embed, but it will keep the Steam app ID attached for anyone who copies the embed or share URL.

| Query Parameter | Default      | Description |
| --------------- | ------------ | ----------- |
| steamappid      | `none`       | By default videos will not have a steam app ID attached. Attach your own to enable **Get this on Steam** |

### Hide Call-To-Action
By default the embedded player will include a **Donate** button if the clip poster has enabled it, or a **Get this on Steam** button if you are appending the `steamappid`. If you don't want to show either, you can disable it with the following query parameter:

| Query Parameter | Default      | Description |
| --------------- | ------------ | ----------- |
| cta             | `1`          | By default videos will show call-to-actions when embedded. This includes Donate buttons and **Get this on Steam** buttons. Set this to `0` to hide all call-to-actions. |

**Note:** You can hide the call-to-action and still attach a `steamappid` to make any shares _from the embed_ include the **Get this on Steam** button.
