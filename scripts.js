var button = document.querySelectorAll('.faq-question')
var text = document.querySelectorAll('.faq-answer')

button.forEach((item) => {
  item.addEventListener('click', function (e) {
    text.forEach((t) => {
      if (t.getAttribute('data-id') === this.id) {
        t.classList.toggle('closed')
      }
    })
  })
})
