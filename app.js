const showMyFaceButton = document.querySelector('#start')
const showFriendsFaceButton = document.querySelector('#receiver')
const showMyFaceVideo = document.querySelector('#emitter-video')
const showFriendsFaceVideo = document.querySelector('#receiver-video')
const offerTextarea = document.querySelector('#offer')

import { database } from './firebase-init.js'

function bindEvents(p) {
  p.on('error', err => {
    console.log(err)
  })

  p.on('signal', data => {
    offerTextarea.textContent = JSON.stringify(data)
  })

  p.on('stream', stream => {
    showFriendsFaceVideo.srcObject = stream
  })

  document.querySelector('#incoming').addEventListener('submit', e => {
    e.preventDefault()
    p.signal(JSON.parse(e.target.querySelector('textarea').value))
  })
}

async function startPeer(initiator) {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    })

    let p = new SimplePeer({
      initiator,
      stream,
      trickle: false,
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
