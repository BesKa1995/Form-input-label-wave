const labels = document.querySelectorAll('.form-controll label')
labels.forEach(label => label.innerHTML = label.textContent
  .split('')
  .map((word, idx) => `<span style="transition-delay:${idx * 50}ms">${word}</span>`)
  .join('')
)