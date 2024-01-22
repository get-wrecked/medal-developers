[⬅️Back to Docs Home](/)

# Medal API
Want to embed your clips on your website? Are you a game developer who wants to embed the coolest clips from your game? We got you covered.

  * [Generate API Key](#generate-an-api-key) (/v1/generate_public_key)
  * [Trending Clips ](#v1trending---trending-clips-by-game) (/v1/trending)
  * [Newest Clips (From a user or game) ](#v1latest---latest-clips-from-a-user-or-game) (/v1/latest)
  * [Search Clips](#v1search---search-clips-on-medal) (/v1/search)
  * [Categories (Games)](#v1categories---games-list) (/v1/categories)
  * [Handling & Customizing Content Response](#reading-out-content-objects)
  * [Special Access](#special-access-options)
  * [CORS](#cors)
  * [Game API Documentation](gameapi.md)
  * [Giving Proper Credit](#credit)
  
  
# Examples
  * [Example functions to get top and newest clips by game names](https://github.com/get-wrecked/medal-developers/blob/master/examples/example_functions.js) 
  * [Real-time Office Feed (Public Clips Only)](https://docs.medal.tv/examples/example_office_feed.html?categoryId=62) 
     * [Source Code](https://github.com/get-wrecked/medal-developers/blob/master/examples/example_office_feed.html)
  * [Real-time Hashtag Feed (Public Clips Only)](https://docs.medal.tv/examples/example_hashtag_watch.html) 
     * [Source Code](https://github.com/get-wrecked/medal-developers/blob/master/examples/example_hashtag_watch.html)

# Generate an API Key

In order to make requests, you need to add the API Key in a `Authorization` header. 

## Public-Use API Keys

If you are building a frontend-only application, such as our office feed, you'll want to generate an API key for public use. You are fine to expose these to users, as their rate limits will be on a per-IP basis.  

**Generate a public use key at [this link](https://developers.medal.tv/v1/generate_public_key)**

Public use API keys can not be granted special privileges.


## Private-Use API Keys

Keys for private use can be whitelisted for special privileges. You typically deploy these in backend applications, and make sure your users don't see them. The rate limits for these keys are on a per-key basis, which means you can not deploy them in front-end applications

**Generate a private-use key at [this link](https://developers.medal.tv/v1/generate_private_key)**


If you want more customized access, such as to raw file URLs for your tournaments, or increased limits, you may request so by filling out [this form](https://docs.google.com/forms/d/e/1FAIpQLSeLxbs1UchRGT6Nb6WYD_0gO7821SbRrAnDYjqVOXNrPBrJ4g/viewform
)





# /v1/trending - Trending Clips By Game
Are you a game developer, or developing a game-related site and want to show clips of the game? You can use this API!

If you want to look for a specific game, you can use the search bar below:

This example request produces the top fortnite clip on Medal today.

```bash
curl "https://developers.medal.tv/v1/trending?categoryId=62&limit=1" -X GET -H "Authorization: YOUR_API_KEY"
```
Will return

```json
{
   "contentObjects":[
      {
         "contentId":"cid4954089",
         "rawFileUrl":"not_authorized",
         "contentTitle":"Testing fortnite w/keyboard, damn is hard lol",
         "contentViews":1836,
         "contentLikes":10,
         "categoryId":62,
         "videoLengthSeconds":10,
         "createdTimestamp":1563233109000,
         "directClipUrl":"https://medal.tv/clip/4954089/5xAyYcy7Spquc7Jz",
         "embedIframeUrl":"<iframe width='640' height='360' src='https://medal.tv/clip/4954089/UUzr8lZ41i8pPVC4?loop=1&autoplay=1&cta=1' frameborder='0' allow='autoplay' allowfullscreen class='medal-clip' id='contentId-4954089'></iframe>",
         "credits":"Credits to ODarwed (https://medal.tv/users/452854)"
      }
   ]
}
```

Which renders this:

<iframe width='640' height='360' src='https://medal.tv/clip/4954089/GabuV1ET3hIHZFh3?loop=1&autoplay=1&cta=1' frameborder='0' allow='autoplay' allowfullscreen class='medal-clip' id='contentId-4954089'></iframe>

#### parameters

| Query Parameter | Default      | Description |
| --------------- | ------------ | ----------- |
| categoryId            | `none` | Filter by game. Not sure what `categoryId` to look for? Just search for your game [here](https://jsoneditoronline.org/?url=https%3A%2F%2Fapi-v2.medal.tv%2Fcategories)  |
| limit         | `10` | How many objects to return. By default you have access to 1000 objects per query. |
| offset         | `0` | How many objects to skip. `limit` + `offset` can not exceed 1000 by default. |






# v1/latest - Latest clips from a user or game
Do you want to feature your 2 latest Medal clips on your personal website? Or on a fansite? This is how you do that! You can also use this endpoint to find the latest clips in a game, for example if you want to set up a dope in-office real-time feed of what your users are clipping. 

Notice how the URL contains `categoryId=10`, `limit=2` and `userId=12597`? Those variables allow you to narrow your search! If you wanted to get all the latest clips for Rocket League, for example, you would leave out `userId=12597`.

```bash
curl "https://developers.medal.tv/v1/latest?userId=12597&categoryId=10&limit=2" -X GET -H "Authorization: YOUR_API_KEY"
```

Will return

```json
{
   "contentObjects":[
      {
         "contentId":"cid5042841",
         "rawFileUrl":"not_authorized",
         "contentTitle":"that winning team name...",
         "contentViews":47,
         "contentLikes":1,
         "categoryId":10,
         "videoLengthSeconds":15,
         "createdTimestamp":1563692235000,
         "directClipUrl":"https://medal.tv/clip/5042841/LV0xUt2QyowNBQXL",
         "embedIframeUrl":"<iframe width='640' height='360' src='https://medal.tv/clip/5042841/Z6XRiXu8BKwSrDYW?loop=1&autoplay=1&cta=1' frameborder='0' allow='autoplay' allowfullscreen class='medal-clip' id='contentId-5042841'></iframe>",
         "credits":"Credits to Galkon (https://medal.tv/users/12597)"
      },
      {
         "contentId":"cid5037877",
         "rawFileUrl":"not_authorized",
         "contentTitle":"lmao so close",
         "contentViews":42,
         "contentLikes":4,
         "categoryId":10,
         "videoLengthSeconds":14,
         "createdTimestamp":1563668946000,
         "directClipUrl":"https://medal.tv/clip/5037877/W98gfTlhKN7bw2DG",
         "embedIframeCode":"<iframe width='640' height='360' src='https://medal.tv/clip/5037877/sFfcDeWAI9n0B8Yy?loop=1&autoplay=1&cta=1' frameborder='0' allow='autoplay' allowfullscreen class='medal-clip' id='contentId-5037877'></iframe>",
         "credits":"Credits to Galkon (https://medal.tv/users/12597)"
      }
   ]
}
```


Where `embedIframeCode` renders

<iframe width='640' height='360' src='https://medal.tv/clip/5037877/Z13fByKFf7c39DyC?loop=1&autoplay=1&cta=1' frameborder='0' allow='autoplay' allowfullscreen class='medal-clip' id='contentId-5037877'></iframe>

#### parameters

| Query Parameter | Default      | Description |
| --------------- | ------------ | ----------- |
| userId         | `none` | The user ID to search for. You can find your user ID by searching your profile on medal.tv and clicking on your profile. It'll be medal.tv/users/`userId`  |
| categoryId            | `none` | Filter by game. Not sure what `categoryId` to look for? Just search for your game [here](https://jsoneditoronline.org/?url=https%3A%2F%2Fapi-v2.medal.tv%2Fcategories)  |
| limit         | `10` | How many objects to return. By default you have access to 1000 objects per query. |
| offset         | `0` | How many objects to skip. `limit` + `offset` can not exceed 1000 by default. |






# /v1/search - Search Clips on Medal 
Did you organize a tournament where everybody submitted Medal clips with a hashtag? You can use the Search API to search for hashtags on Medal [medal.tv](https://medal.tv). 

This produces all the results of the #flamingo Medal competition

```bash
curl "https://developers.medal.tv/v1/search?text=%23flamingo&limit=1" -X GET -H "Authorization: YOUR_API_KEY"
```

Will return


```json
{
   "contentObjects":[
      {
         "contentId":"cid4706138",
         "rawFileUrl":"not_authorized",
         "contentTitle":"#Flamingo what the",
         "contentViews":367,
         "contentLikes":6,
         "categoryId":76,
         "videoLengthSeconds":15,
         "createdTimestamp":1561834937000,
         "directClipUrl":"https://medal.tv/clip/5223338/sOT1gOwEOR7AfKqu",
         "embedIframeCode":"<iframe width='640' height='360' src='https://medal.tv/clip/5223338/SbUsIwbU7yO9eUws?loop=1&autoplay=1&cta=1' frameborder='0' allow='autoplay' allowfullscreen class='medal-clip' id='contentId-5223338'></iframe>",
         "credits":"Credits to laikrai (https://medal.tv/users/1908292)"
      }
   ]
}
```

Where `embedIframeCode` renders this:
<iframe width='640' height='360' src='https://medal.tv/clip/5223338/91Siz6s5zfNDpL8I?loop=1&autoplay=1&cta=1' frameborder='0' allow='autoplay' allowfullscreen class='medal-clip' id='contentId-5223338'></iframe>
 
#### example custom search
This example request produces a `get this on steam`-enabled flip reset that autoplays, loops, has a custom class of "rlclip" 
```
curl "https://developers.medal.tv/v1/search?text=flip%20reset&steamappid=252950&autoplay=1&loop=1&cta=0&customStyleClass=rlclip&offset=100&limit=1" -X GET -H "Authorization: YOUR_API_KEY"
```

Will return

```json
{
   "contentObjects":[
      {
         "contentId":"cid3471744",
         "rawFileUrl":"not_authorized",
         "contentTitle":"flip reset",
         "contentViews":20,
         "contentLikes":0,
         "categoryId":10,
         "videoLengthSeconds":15,
         "createdTimestamp":1550037169000,
         "directClipUrl":"https://medal.tv/clip/3471744/2PaSuhVQX5OWKPnO",
         "embedIframeCode":"<iframe width='640' height='360' src='https://medal.tv/clip/3471744/vcMONks6G5T412oH?loop=1&autoplay=1&cta=0&steamappid=252950' frameborder='0' allow='autoplay' allowfullscreen class='rlclip' id='contentId-3471744'></iframe>",
         "credits":"Credits to Hakugei (https://medal.tv/users/233543)"
      }
   ]
}
```

Where `embedIframeCode` renders this:

<iframe width='640' height='360' src='https://medal.tv/clip/3471744/2t1BOdBl3EqNplo3?loop=1&autoplay=1&cta=0&steamappid=252950' frameborder='0' allow='autoplay' allowfullscreen class='rlclip' id='contentId-3471744'></iframe>


#### parameters

| Query Parameter | Default      | Description |
| --------------- | ------------ | ----------- |
| text            | `none` | Customize this field to your needs. Make sure to use URI encoding if your search term contains hashtags or spaces (%20 for spaces, %23 for hashtags) |
| limit           | `10` | Limit how many videos the search returns |
| offset          | `0` | Specify how much you want to offset the search by |






# /v1/categories - Games List
Returns a full list of all the categories on Medal. However, we recommend you use [this link](https://jsoneditoronline.org/?url=https%3A%2F%2Fapi-v2.medal.tv%2Fcategories) to search for a game if you'd like to find a categoryId

```bash
curl "https://developers.medal.tv/v1/categories" -X GET -H "Authorization: YOUR_API_KEY"
```






# Reading out content objects
Every content objects has the fields found below. These will allow you to customize the medal content to the needs of your users. 

## Customize your response on every endpoint
Add the following parameters if you want to customize your responses for using custom links or iframes per our [iframe documentation](https://docs.medal.tv)

#### Example customized response
This returns the top flip reset clip on the platform with the `Get this on Steam` button with iframes that are 400 in width and 200 in height with an offset of 100

```bash
curl "https://developers.medal.tv/v1/search?text=flip%20reset&limit=1&offset=100&steamappid=252950&cta=0&height=200&width=400" -X GET -H "Authorization: YOUR_API_KEY"
```

Will return

```json
{
   "contentObjects":[
      {
         "contentId":"cid3471744",
         "rawFileUrl":"not_authorized",
         "contentTitle":"flip reset",
         "contentViews":20,
         "contentLikes":0,
         "categoryId":10,
         "videoLengthSeconds":15,
         "createdTimestamp":1550037169000,
         "directClipUrl":"https://medal.tv/clip/3471744/yqlkQaRYC0rUS9uu",
         "embedIframeCode":"<iframe width='400' height='200' src='https://medal.tv/clip/3471744/Zq6XKzjAbsSTelec?loop=1&autoplay=1&cta=0&steamappid=252950' frameborder='0' allow='autoplay' allowfullscreen class='medal-clip' id='contentId-3471744'></iframe>",
         "credits":"Credits to Hakugei (https://medal.tv/users/233543"
      }
   ]
}
```

Where `embedIframeCode` renders this:
<iframe width='400' height='200' src='https://medal.tv/clip/3471744/UJggTzBkwJyibL84?loop=1&autoplay=1&cta=0&steamappid=252950' frameborder='0' allow='autoplay' allowfullscreen class='medal-clip' id='contentId-3471744'></iframe>


| Query Parameter | Default      | Description |
| --------------- | ------------ | ----------- |
| steamappid            | `none` | adds `steamappid` to every link and iframe returned, so users viewing and sharing the clip can get the game on steam |
| cta           | `1` | Hide donation buttons or user-generated call-to-actions on the clip, most commonly used for safety reasons |
| autoplay          | `0` | Specify whether whe iframes returned contain the autoplay tag |
| loop          | `0` | Specify whether whe iframes returned loop content |
| muted          | `1` | Specify whether whe iframes returned should auto-play sound. By default it does not. |
| width          | `640` | The height of the returned clip player |
| height          | `360` | The width of the returned clip player |
| customStyleClass          | `medal-clip contentId-$contentId` | Whether we should return a custom class identifier for your medal clip iframe. By default we add a class called `medal-clip` and an id called `contentId-$contentId`|








## Special Access Options

If you want more customized access, you may request so by filling out [this form](https://docs.google.com/forms/d/e/1FAIpQLSeLxbs1UchRGT6Nb6WYD_0gO7821SbRrAnDYjqVOXNrPBrJ4g/viewform
)

| Special Acesss | Default      | Description |
| --------------- | ------------ | ----------- |
| rawFileUrl            | `not_authorized` | Access to the raw video file for public clips, if you need to make a highlight reel of all clips submitted to your tournament, for example |
| Content Limits (`limit` and `offset`)          | `1000` | You can have your content limit (limit + offset combined) increased if you need to retrieve information on a large event. By default you have access to 1000 objects per query. |
 

## CORS

We do support CORS. When sending CORS request, please make sure you add the following headers:

| Header | Expected Value      | Description |
| --------------- | ------------ | ----------- |
| Content-Type            | `application/json` | We only support application/json, please make sure you have the header available in your request |
| Authorization          | `YOUR_API_KEY` | You must enter your API key for this to succeed  |

# Credit
Every response object contains a `credits` field. If you do not use the embedded player, please make sure to use this wherever you serve the content, and link back to their Medal user profile. 

