const listItems = document.querySelectorAll('.list')

listItems.forEach(listItem => listItem.addEventListener('click', displayVid))

function displayVid(e) {
  let className = e.target.getAttribute('data-video')

  document.querySelector(className).style.display = 'block'
}
