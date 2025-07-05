const input = document.getElementById('ctaInput');
const button = document.getElementById('updateBtn');
const cta = document.getElementById('cta');

button.addEventListener('click', () => {
  const newText = input.value.trim();
  if (newText !== "") {
    cta.textContent = newText;
  }
});