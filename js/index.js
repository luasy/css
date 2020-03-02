var text = document.querySelector('p')

var content = text.textContent

text.textContent = ''

var splitContent = content.split('')

splitContent.forEach(function(word, i) {
  var span = document.createElement('span')
  span.textContent = word
  span.style.animationDelay = `${i * 0.05}s`;
  text.appendChild(span)
})
