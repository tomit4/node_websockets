### A Very Basic WebSocket Server/Client Chat App using ExpressJS

Nothing really all that special here. Set up of basic configuration for a
WebSocket Server/Client.

Not taken from this, but ideas for further expansion can be researched [here](https://scribe.rip/@cpan001/websockets-chat-application-d8161863f4c1).

The main code of this was taken from a tutorial, but had to be adjusted to
address UnBlock Error message (websockets needs to be passed a http server
either from Node or express) and also data.toString() method needed to be used
to get proper formatting in html.

__Installing and Getting Started__
```
git clone <this_repo_url>
```
```
cd <this_repo_name>
```
```
npm install
```
```
npm run start
```
