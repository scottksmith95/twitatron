Source code for the Twitatron tutorial series

####Part 01

While writing the [Beer Locker tutorials](/blog/2014/05/02/building-restful-apis-with-node/) many readers commented on how helpful it was to have a full walk through on creating RESTful APIs. I am going to continue this trend and start a multi part tutorial series on how to create a production ready Node web application.

Some of you may know about my latest project [Favatron](https://favatron.com). It is a Node web application that integrates with Twitter to provide an automated bookmark and read later service for Twitter favorites. Using [Favatron](https://favatron.com) as a guide, I will take you through the entire process of creating a fully functional production ready Node web application. Some of the many parts we will touch on include authorization, user accounts, data storage, background workers, security, email, APIs, RSS, third party service integrations, and much more.

I am proud to introduce Twitatron, the web application we will be making. Twitatron will automatically monitor your Twitter account for mentions. When it finds those mentions, it will process them, store them, show them in the UI, expose them via an API endpoint and RSS feed, send an email digest, and share weekly stats with integrated social networks.

[Twitatron: Building a production web app with Node](http://scottksmith.com/blog/2014/10/05/twitatron-building-a-production-web-app-with-node/)