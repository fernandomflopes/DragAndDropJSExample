const cards = document.querySelectorAll(".card")
const dropzones = document.querySelectorAll(".dropzone")

cards.forEach(card => {
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
    card.addEventListener('dragstart', dragstart)
})

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('drop', drop)
})

function log(message) {
    console.log("> " + message)
}

function dragstart() {
    //log("start dragging")
    dropzones.forEach(dropzone => dropzone.classList.add("highlight"))
    this.classList.add("is-dragging")
}

function drag() {
    //log("is draggin")
}

function dragend() {
    //log("drag stop")
     dropzones.forEach(dropzone => dropzone.classList.remove("highlight"))
     this.classList.remove("is-dragging")
}

function dragenter() {
    log("drag enter")
}
function dragleave() {
    log("drag leave")
}
function dragover() {
    log("drag over")
    const cardBeingDragged = document.querySelector(".is-dragging")
    this.appendChild(cardBeingDragged)
}
function drop() {
    log("drop")
}
