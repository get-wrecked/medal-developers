[⬅️Back to Docs Home](/)
  
# Medal Embedded Player
Want to embed your clips on your website? Are you a game developer who wants to embed the coolest clips from your game? We got you covered.

  * [Browse Clips](#browse-clips)
  * [Copy Embed Code](#copy-embed-code)
  * [Advanced Embed Options](#advanced-embed-options)
     * [Default Embed Behavior](#default-embed-behavior)
     * [Control Playback Behavior](#control-playback-behavior)
     * [Enable "Get this on Steam"](#enable-get-this-on-steam)
        * [Hide Steam Call-To-Action](#hide-steam-call-to-action)
     * [Hide Donate Call-To-Action](#hide-donate-call-to-action)

## Browse Clips
You can browse the latest and greatest clips over at [medal.tv](https://medal.tv), or you can use our [developers API](https://docs.medal.tv/api) to automate the process. If you don't see your game on there, feel free to [contact us on Discord](https://medal.tv/discord).

## Copy Embed Code
Once you find the clip you want to embed, open the link in your browser (for example: [https://medal.tv/clips/4954893](https://medal.tv/clips/4954893)) and open the share screen to copy the embed code:

![Example 1](https://i.imgur.com/X1vmypU.png)
![Example 2](https://i.imgur.com/s7njaTr.png)
![Example 3](https://i.imgur.com/kZifBFh.png)

## Advanced Embed Options
If you are looking to control video playback behavior or add a **Get this on Steam** button, you've come to the right place.

### Default Embed Behavior
<iframe width="640" height="360" src="https://medal.tv/clip/4954893/vpkPnOp0o" frameborder="0" allow="autoplay" allowfullscreen style="width: 100%;height:468px;min-height: 360px;"></iframe>

The default embed behavior is to autoplay muted, loop when the video ends, and to show all call-to-actions on the player. Here is an example of a default embed, like the one above:
```html
<iframe width="640" height="360" src="https://medal.tv/clip/4954893/vpkPnOp0o" frameborder="0" allow="autoplay" allowfullscreen></iframe>
```

### Control Playback Behavior
<iframe width="640" height="360" src="https://medal.tv/clip/4954893/vpkPnOp0o?autoplay=0&muted=0&loop=0" frameborder="0" allow="autoplay" allowfullscreen style="width: 100%;height:468px;min-height: 360px;"></iframe>

You can append query parameters to the `src` url in the iframe code to control playback behavior. For example:
```html
<iframe width="640" height="360" src="https://medal.tv/clip/4954893/vpkPnOp0o?autoplay=0&muted=0&loop=0" frameborder="0" allow="autoplay" allowfullscreen></iframe>
```
The above code _would not_ autoplay, it _would_ have sound by default, and it _would not_ loop playback, like in the embed above.

Here is a breakdown of the query parameters for controlling playback behavior:

| Query Parameter | Default      | Description |
| --------------- | ------------ | ----------- |
| autoplay        | `1` | By default videos will autoplay when embedded. Set this to `0` to disable autoplay. |
| muted           | `1` | By default videos will be muted when embedded. Set this to `0` to play videos with sound by default.  **Note:** Autoplay with sound does not work in modern browsers. For autoplay to work you have to set muted to `1` |
| loop            | `1` | By default videos will loop playback when embedded. Set this to `0` to disable looping. |

### Enable "Get this on Steam"
<iframe width="640" height="360" src="https://medal.tv/clip/4954893/vpjHcSsho?autoplay=0&steamappid=252950" frameborder="0" allow="autoplay" allowfullscreen style="width: 100%;height:468px;min-height: 360px;"></iframe>

You can enable the **Get this on Steam** button by passing in a `steamappid` query parameter with your Steam game's app ID. For example, this would display a button that links out to Rocket League on Steam, like in the embed above:
```html
<iframe width="640" height="360" src="https://medal.tv/clip/4954893/vpjHcSsho?autoplay=0&steamappid=252950" frameborder="0" allow="autoplay" allowfullscreen></iframe>
```
Then every time someone copies the embed code from this embed or the share URL, it would also include your Steam app ID so that when they share it, the **Get this on Steam** button persists.

#### Hide Steam Call-To-Action
<iframe width="640" height="360" src="https://medal.tv/clip/4954893/vpjHcSsho?autoplay=0&steamappid=252950&cta=0" frameborder="0" allow="autoplay" allowfullscreen style="width: 100%;height:468px;min-height: 360px;"></iframe>

If you want to keep the share behavior described above, but hide the button when _you_ embed it (for example, on your Steam app page), then you can continue appending `steamappid` with an additional parameter `&cta=0`. This will _hide_ the **Get this on Steam** call-to-action in _your_ embed, but it will keep the Steam app ID attached for anyone who copies the embed or share URL.

For example, this would hide the **Get this on Steam** button but still attach the `steamappid` to share actions, like in the embed above:
```html
<iframe width="640" height="360" src="https://medal.tv/clip/4954893/vpjHcSsho?autoplay=0&steamappid=252950&cta=0" frameborder="0" allow="autoplay" allowfullscreen></iframe>
```

| Query Parameter | Default      | Description |
| --------------- | ------------ | ----------- |
| steamappid      | `none`       | By default videos will not have a steam app ID attached. Attach your own to enable the **Get this on Steam** button. |
| cta             | `1`          | By default videos will show call-to-actions when embedded. This includes Donate buttons and **Get this on Steam** buttons. Set this to `0` to hide _all_ call-to-actions. |

### Hide Donate Call-To-Action
By default the embedded player will include a **Donate** button if the clip poster has enabled it and if no `steamappid` is specified. If you don't want to show the **Donate** button at all, you can disable it with the following query parameter:

| Query Parameter | Default      | Description |
| --------------- | ------------ | ----------- |
| donate          | `1`          | By default videos will show **Donate** call-to-actions when embedded (unless `steamappid` is specified). Set this to `0` to hide **Donate** call-to-actions. |
