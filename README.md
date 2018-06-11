Tutorials used:

1.  https://www.grafikart.fr/tutoriels/javascript/webrtc-864
1.  https://websitebeaver.com/insanely-simple-webrtc-video-chat-using-firebase-with-codepen-demo
1.  https://dev.to/rynobax_7/creating-a-multiplayer-game-with-webrtc

Definition of STUN/SERVER

> A STUN/TURN server is used for NAT traversal in VoIP. Whether you're at home behind a common router, at work behind an enterprise firewall, or traveling, chances are that you will be behind a NAT which must be traversed before making calls.
> You can add as many STUN and TURN servers as you like. If a STUN server doesn’t work, then WebRTC will try the next server, which is why you should add several. STUN servers are cheaper than TURN servers, which is why Google and Firefox allow anyone to access their STUN servers for free. TURN servers are harder to find for free, but they do exist.

(simple-peer)[https://github.com/feross/simple-peer] provides by default two STUN server:

```js
config: {
  iceServers: [
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:global.stun.twilio.com:3478?transport=udp' },
  ]
}
```

Mozilla provides another free STUN server : `{urls: 'stun:stun.services.mozilla.com'}`

(viagenie)[http://numb.viagenie.ca/] provides a free TURN server:

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
