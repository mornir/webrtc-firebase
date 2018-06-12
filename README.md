# Tutorials

## Tutorials used:

- WebRTC without setting up server: https://www.grafikart.fr/tutoriels/javascript/webrtc-864
- WebRTC without any external libraries: https://websitebeaver.com/insanely-simple-webrtc-video-chat-using-firebase-with-codepen-demo
- WebRTC with Firebase https://dev.to/rynobax_7/creating-a-multiplayer-game-with-webrtc

## Other tutorials found

- WebRTC with Pusher and Node: https://pusher.com/tutorials/webrtc-video-call-app-nodejs

### Definition of STUN/SERVER

> A STUN/TURN server is used for NAT traversal in VoIP. Whether you're at home behind a common router, at work behind an enterprise firewall, or traveling, chances are that you will be behind a NAT which must be traversed before making calls. [source: [Viagénie](http://numb.viagenie.ca)]

> If a STUN server doesn’t work, then WebRTC will try the next server, which is why you should add several. But using more than two STUN/TURN servers slows down discovery. STUN servers are cheaper than TURN servers, which is why Google and Firefox allow anyone to access their STUN servers for free. TURN servers are harder to find for free, but they do exist. [sources: [websitebeaver](https://websitebeaver.com/insanely-simple-webrtc-video-chat-using-firebase-with-codepen-demo), [Bugzilla](https://bugzilla.mozilla.org/show_bug.cgi?id=1322659)]

### Servers used in this app

[simple-peer](https://github.com/feross/simple-peer) provides by default two STUN server:

```js
config: {
  iceServers: [
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:global.stun.twilio.com:3478?transport=udp' },
  ]
}
```

Mozilla provides another free STUN server : `{urls: 'stun:stun.services.mozilla.com'}`

[Viagénie](http://numb.viagenie.ca) provides a free TURN server:

```js
{urls: 'turn:numb.viagenie.ca','credential': '****','username': '****'}
```

So my final config is as follows:

```js
config: {
  iceServers: [
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:global.stun.twilio.com:3478?transport=udp' },
    { urls: 'stun:stun.services.mozilla.com' },
    { urls: 'turn:numb.viagenie.ca', credential: '****', username: '****' },
  ]
}
```

Paid service provided by [Twilio](https://www.twilio.com/stun-turn):

- [Pricing](https://www.twilio.com/stun-turn/pricing)
- [FAQ](https://www.twilio.com/docs/stun-turn/faq)

### WebRTC in real world apps:

- Google Allo
- Goole Duo
