let openButton = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container')
let closeButton = document.getElementById('close-btn')

openButton.addEventListener('click', function(){
    modalContainer.style.display='block';
});

closeButton.addEventListener('click',function(){
    modalContainer.style.display='none';
});