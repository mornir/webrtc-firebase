const showMyFaceButton = document.querySelector('#start')
const showFriendsFaceButton = document.querySelector('#receiver')
const showMyFaceVideo = document.querySelector('#emitter-video')
const showFriendsFaceVideo = document.querySelector('#receiver-video')
const offerTextarea = document.querySelector('#offer')

const yourId = Math.floor(Math.random() * 1000000000)

import { database } from './firebase-init.js'

function readMessage(data) {
  const msg = JSON.parse(data.val().message)
  const sender = data.val().sender

  if (sender != yourId) {
    console.log(msg)

    /*   let p = new SimplePeer({
      initiator: false,
    }) */
  }

  /*   if (sender != yourId) {
    if (msg.ice != undefined)
      pc.addIceCandidate(new RTCIceCandidate(msg.ice));
    else if (msg.sdp.type == "offer")
      pc.setRemoteDescription(new RTCSessionDescription(msg.sdp))
        .then(() => pc.createAnswer())
        .then(answer => pc.setLocalDescription(answer))
        .then(() => sendMessage(yourId, JSON.stringify({ 'sdp': pc.localDescription })));
    else if (msg.sdp.type == "answer")
      pc.setRemoteDescription(new RTCSessionDescription(msg.sdp));
  } */
}

function bindEvents(p) {
  p.on('error', err => {
    console.log(err)
  })

  p.on('signal', data => {
    const msg = database.push({
      sender: yourId,
      message: JSON.stringify(data),
    })

    msg.remove()
  })

  p.on('stream', stream => {
    showFriendsFaceVideo.srcObject = stream
  })
}

database.on('child_added', readMessage)

async function startPeer(initiator) {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    })

    let p = new SimplePeer({
      initiator,
      stream,
      trickle: true,
    })

    bindEvents(p)

    showMyFaceVideo.srcObject = stream
  } catch (e) {
    console.log(e.message)
  }
}

showMyFaceButton.addEventListener('click', e => {
  startPeer(true)
})

showFriendsFaceButton.addEventListener('click', e => {
  startPeer(false)
})
