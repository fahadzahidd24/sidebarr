let cross = document.querySelector('.btn')
let sidebar = document.querySelector('.sidebar')
let ul = document.querySelector('.links');
let bars = document.querySelector('.btnBars');


cross.addEventListener('click',()=>{
    sidebar.classList.toggle('crossSidebar');
    // bars.style.display = 'block';
})

ul.addEventListener('mouseover',(e)=>{
    let current = e.target;
    // let element = current.childElement;
    current.firstElementChild.style.color= 'rgb(0, 157, 255)';
})
ul.addEventListener('mouseout',(e)=>{
    let current = e.target;
    // let element = current.childElement;
    current.firstElementChild.style.color= 'black'
})

bars.addEventListener('click',()=>{
    sidebar.classList.toggle('crossSidebar');
    // bars.style.display = 'none';
})