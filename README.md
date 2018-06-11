Tutorials used:

1.  https://www.grafikart.fr/tutoriels/javascript/webrtc-864
1.  https://websitebeaver.com/insanely-simple-webrtc-video-chat-using-firebase-with-codepen-demo
1.  https://dev.to/rynobax_7/creating-a-multiplayer-game-with-webrtc

Currently only using two STUN server:

```js
config: {
  iceServers: [
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:global.stun.twilio.com:3478?transport=udp' },
  ]
}
```

Free STUN server of Mozilla : `{urls: 'stun:stun.services.mozilla.com'}`

(viagenie)[http://numb.viagenie.ca/] provides a free TURN server:

```js
{urls: 'turn:numb.viagenie.ca','credential': '****','username': '****'}
```

Ultimate config:

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
