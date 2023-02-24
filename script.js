$(document).ready(function(){
    $("#experiencia").click(function(){
      $("#experiencia-info").toggle();
    });
    
    $("#educacion").click(function(){
      $("#educacion-info").toggle();
    });
  }); 

  let imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach((container) => {
  let showInfoButton = document.createElement('button');
  showInfoButton.classList.add('show-info-button');
  showInfoButton.textContent = 'Mostrar información';

  let imageInfo = container.querySelector('.image-info');
  container.appendChild(showInfoButton);

  showInfoButton.addEventListener('click', () => {
    imageInfo.style.display = 'block';
  });

  imageInfo.addEventListener('click', () => {
    imageInfo.style.display = 'none';
  });
});

  



  /* // Obtener los elementos de los botones
const experienceBtn = document.getElementById("experience-btn");
const educationBtn = document.getElementById("education-btn");
const experienceInfo = document.getElementById("experience-info");
const educationInfo = document.getElementById("education-info");

// Agregar un event listener a los botones para mostrar/ocultar la información
experienceBtn.addEventListener("click", () => {
  experienceInfo.classList.toggle("hidden");
});

educationBtn.addEventListener("click", () => {
  educationInfo.classList.toggle("hidden");
}); */
