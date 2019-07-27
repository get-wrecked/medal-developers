# Medal API
Want to embed your clips on your website? Are you a game developer who wants to embed the coolest clips from your game? We got you covered.

## Generate an API Key
You can generate an API key instantly without approval at [this link](https://developers.medal.tv/v1/generate_key). If you want more customized access, you may request so by filling out [this form](https://docs.google.com/forms/d/e/1FAIpQLSeLxbs1UchRGT6Nb6WYD_0gO7821SbRrAnDYjqVOXNrPBrJ4g/viewform
)

| Special Acesss | Default      | Description |
| --------------- | ------------ | ----------- |
| rawFileUrl            | `not_authorized` | Access to the raw video file for public clips, if you need to make a highlight reel of all clips submitted to your tournament, for example |
| Content Limits (`limit` and `offset`)          | `10` | You can have your content limit (limit + offset combined) increased if you need to retrieve information on a large event. By default you have access to 1000 objects per query. |

## /v1/trending - Trending Clips 
Are you a game developer, or developing a game-related site and want to show clips of the game? You can use this API!

#### /v1/trending - Example Trending Clips request
This example request produces the top 10 fortnite clips on Medal today.
```
curl "https://developers.medal.tv/v1/trending?categoryId=62&limit=10" -X GET -H "API-Key: YOUR_API_KEY"
```

#### /v1/trending - Parameters
| Query Parameter | Default      | Description |
| --------------- | ------------ | ----------- |
| categoryId      | `none` | This allows you to filter down by specific game ids. Not sure what category ID to look for? Just search for your game [here](https://jsoneditoronline.org/?url=https%3A%2F%2Fapi-v2.medal.tv%2Fcategories) |
| limit           | `10` | Limit how many videos the trending request returns |
| offset          | `0` | Specify how much you want to offset the trending results by |

## /v1/search - Search Clips
Did you organize a tournament where everybody submitted Medal clips with a hashtag? You can use the Search API to search for hashtags on Medal [medal.tv](https://medal.tv). 

#### /v1/search - Example request
This example request produces a `get this on steam`-enabled flip reset that autoplays, loops, has a custom class of "rlclip" 
```
curl "https://developers.medal.tv/v1/search?text=flip reset&steamappid=252950&autoplay=1&loop=1&cta=0&customStyleClass=rlclip&offset=100" -X GET -H "API-Key: YOUR_API_KEY"
```

#### /v1/search - Parameters
| Query Parameter | Default      | Description |
| --------------- | ------------ | ----------- |
| text            | `none` | Customize this field to your needs |
| limit           | `10` | Limit how many videos the search returns |
| offset          | `0` | Specify how much you want to offset the search by |

## Reading out content objects
Every content objects has the fields found below. These will allow you to customize the medal content to the needs of your users. 

### Default Response on every endpoint

```
{
"contentObjects":[
  {
    "rawFileUrl":"http://files.medal.tv/237536/720p-4900670.mp4", // note: you need special access for this one
    "contentTitle":"Tuk tuk attack! ",
    "contentViews":5048,
    "contentLikes":28,
    "categoryId":41,
    "directClipUrl":"https://medal.tv/clip/4900670/DIEHX35oWn6Vidhb",
    "embedIframeUrl":"<iframe width='640' height='360' src='https://medal.tv/clip/4900670/3XTFZkZ5nkXN4tME' frameborder='0' allow='autoplay' allowfullscreen></iframe>"
  }
}
```

### Customize your response on every endpoint
Add the following parameters if you want to customize your responses for using custom links or iframes per our [iframe documentation](https://docs.medal.tv)

#### Example customized response
This returns the top flip reset clip on the platform with the `Get this on Steam` button with iframes that are 200 in width and height
```
curl "https://developers.medal.tv/v1/search?text=flip%20reset&limit=1&steamappid=252950&cta=0&height=200&width=200" -X GET -H "API-Key: YOUR_API_KEY"
```

| Query Parameter | Default      | Description |
| --------------- | ------------ | ----------- |
| steamappid            | `none` | adds `steamappid` to every link and iframe returned, so users viewing and sharing the clip can get the game on steam |
| cta           | `1` | Hide donation buttons or user-generated call-to-actions on the clip, most commonly used for safety reasons |
| autoplay          | `0` | Specify whether whe iframes returned contain the autoplay tag |
| loop          | `0` | Specify whether whe iframes returned loop content |
| muted          | `0` | Specify whether whe iframes returned should auto-play sound |
| width          | `640` | The height of the returned clip player |
| height          | `360` | The width of the returned clip player |
| customStyleClass          | `medal-clip contentId-$contentId` | Whether we should return a custom class identifier for your medal clip iframe. By default we add a class called `medal-clip` and an id called `contentId-$contentId`|

