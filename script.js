function acceptDate() {
    showModal('flower.gif');
  }
  
  function rejectDate() {
    const chance = Math.random();
    if (chance < 0.33) {
      showModal('200.gif');
    } else if (chance < 0.66) {
      showModal('100.gif');
    } 
    else if (chance < 0.68) {
        showModal('400.gif');
      } else {
      showModal('300.gif');
    }
  }
  
  
  function showModal(content) {
    const modal = document.getElementById('customModal');
    const modalText = document.querySelector('.modal-text');
    const modalGif = document.querySelector('.modal-gif');
    
    modalText.textContent = ''; // Clear previous text content
    
    if (content.endsWith('.gif')) {
      modalGif.src = content; // Display the GIF
    } else {
      modalText.textContent = content; // Display text content
    }
    
    modal.style.display = 'flex';
  }
  
  function closeModal() {
    const modal = document.getElementById('customModal');
    modal.style.display = 'none';
  }
  