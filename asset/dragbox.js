const dragDropBox = document.querySelector('#drag-drop-box');

// Empêcher le comportement par défaut pour l'événement dragover
dragDropBox.addEventListener('dragover', function(e) {
  e.preventDefault();
});

// Récupérer les fichiers déposés sur la boîte
dragDropBox.addEventListener('drop', function(e) {
  e.preventDefault();
  const files = e.dataTransfer.files;
  console.log(files);
});

// Afficher un message lorsque l'utilisateur survole la boîte
dragDropBox.addEventListener('dragenter', function(e) {
  e.preventDefault();
  dragDropBox.style.backgroundColor = '#eee';
  dragDropBox.querySelector('p').textContent = 'Déposez le fichier ici';
});

// Réinitialiser le style et le message lorsque l'utilisateur quitte la boîte
dragDropBox.addEventListener('dragleave', function(e) {
  e.preventDefault();
  dragDropBox.style.backgroundColor = 'white';
  dragDropBox.querySelector('p').textContent = 'Déposez un fichier ici';
});
