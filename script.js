function openPopup(contentHTML, showButtons = false) {
  const popup = document.getElementById('reusablePopup');
  const content = document.getElementById('popup-body');
  const actions = document.getElementById('popup-actions');

  content.innerHTML = contentHTML;

  if (showButtons) {
    actions.innerHTML = `
      <button class="popup-btn" onclick="handleYes()">Yes</button>
      <button class="popup-btn" onclick="closePopup()">No</button>
    `;
  } else {
    actions.innerHTML = '';
  }

  popup.classList.add('active');
}

function closePopup() {
  const popup = document.getElementById('reusablePopup');
  popup.classList.remove('active');
  document.getElementById('popup-body').innerHTML = '';
  document.getElementById('popup-actions').innerHTML = '';
}

// Optional: Add your action here
function handleYes() {
  alert("You clicked Yes!");
  closePopup();
}

document.getElementById('reusablePopup').addEventListener('click', (e) => {
  if (e.target.id === 'reusablePopup') closePopup();
});
