const startVideoButton = document.querySelector('#start')
const emitterVideo = document.querySelector('#emitter-video')
const receiverVideo = document.querySelector('#receiver-video')
const offerTextarea = document.querySelector('#offer')

let p = null

function bindEvents(p) {
  p.on('error', err => {
    console.log(err)
  })

  p.on('signal', data => {
    offerTextarea.textContent = JSON.stringify(data)
  })

  p.on('stream', stream => {
    receiverVideo.srcObject = stream
    receiverVideo.play()
  })
}

startVideoButton.addEventListener('click', async e => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    })

    p = new SimplePeer({
      initiator: true,
      stream,
      trickle: false,
    })

    bindEvents(p)

    emitterVideo.srcObject = stream
    emitterVideo.play()
  } catch (e) {
    console.log(e.message)
  }
})

document.querySelector('#incoming').addEventListener('submit', e => {
  e.preventDefault()

  if (p === null) {
    p = new SimplePeer({
      initiator: false,
      trickle: false,
    })
    bindEvents(p)
  }

  p.signal(JSON.parse(e.target.querySelector('textarea').value))
})
