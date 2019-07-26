# medal-developers
Documentation for Medal Developers 

# Use cases
* Customizable Embedded Player
* Hashtag Search
* Trending Clips
* Game Information

# Generating an API key
Every request expects an `API-Key` header with your API key. You can generate a key here: https://developers-v1.medal.tv/generate_key


# Trending Clips
GET `https://developers-v1.medal.tv/trending` If you'd like to get the top trending clips on the platform

GET `https://developers-v1.medal.tv/trending?categoryId=62` If you'd like to get Fornite clips

GET `https://developers-v1.medal.tv/trending?categoryId=10&autoplay=1&steamAppId=252950` If you'd like to get Rocket League clips that autoplay with "Get This Game on Steam"

GET `https://developers-v1.medal.tv/trending?categoryId=10&autoplay=1&showCallToAction=0&showUser=0` If you'd like to get rocket league clips without any user or game information

# Data for specific games
If you are requesting data for a specific game, you'll want to find the `categoryId` for the game you need. The easiest way is to use this tool to search for your category: https://jsoneditoronline.org/?url=https%3A%2F%2Fdevelopers-v1.medal.tv%2Fcategories

When you request API endpoints, you can filter down the results to the game you need by appending ?categoryId=76 (example for roblox)

Some popular games:
```
Fortnite: 62
Roblox: 76
PUBG: 41
Rocket League: 10
CS:GO: 14
Rainbox Sig Siege: 43
```

#Special Permissions

If you need special permissions, please use the instructions below

Step 1: If you had not already - head over to https://developers-v1.medal.tv/generate_key to generate your unique API key. The regular API is free to use. If you require special permissions, you'll need to generate a key. 

Step 2: Please request special access here:

https://docs.google.com/forms/d/e/1FAIpQLSeLxbs1UchRGT6Nb6WYD_0gO7821SbRrAnDYjqVOXNrPBrJ4g/viewform

