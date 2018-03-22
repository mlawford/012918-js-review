const URL = 'http://api.jikan.me/anime/3355'

document.addEventListener('DOMContentLoaded', function(event){

  (function getFortuneDogsOnly(){
    return fetch(URL)
    .then(resp => resp.json())
    .then(json => renderFortuneDogs(json))
  })()

  let title = document.createElement('h1')
  title.innerText = 'Fortune Dogs'
  document.body.append(title)

  let dogs = document.createElement('p')
  dogs.innerText = 'Dogs:'
  dogs.id = 'doggers'
  dogs.style.fontSize = '30px'

  document.body.append(dogs)

  renderFortuneDogs = (json) => {
    console.log(json);
    let dogImageTag = document.createElement('img');
    dogImageTag.src = json.image_url
    document.body.append(dogImageTag)
  }

  let doggersForm = document.createElement('form');
  doggersForm.innerHTML = `
    <label>Dog Name</label>
    <br>
    <input type="text" id= "Zarben">
    <br>
    <input type="submit" id="Zorben">
  `
  document.body.append(doggersForm)

  doggersForm.addEventListener('submit', e => {
    e.preventDefault();
    let dogList = document.getElementById('dog-list')
    let dogSpace = document.createElement('div')
    let newDog = document.createElement('p')
    let deleteButton = document.createElement('button')
    dogSpace.append(newDog, deleteButton)
    newDog.innerText = e.target.children[2].value
    dogSpace.setAttribute('id', '012918')
    dogList.append(dogSpace)
    e.target.reset()
    deleteButton.addEventListener('click', deleteDogger)
    // e.target.children[2].value = ''
  })

  deleteDogger = event => {
    // event.target.parentNode
    let dogToAnnihilate = document.getElementById('012918')
    dogToAnnihilate.remove()
  }



})
