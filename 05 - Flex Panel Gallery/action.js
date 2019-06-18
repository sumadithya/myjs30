const panels = document.querySelectorAll('.panel');
function openToggle() {
    const opend = document.querySelector('.open');
    this.classList.add('open');
    if(opend!=null){
        opend.classList.remove('open');    
    }
}
panels.forEach(panel => panel.addEventListener('click',openToggle));