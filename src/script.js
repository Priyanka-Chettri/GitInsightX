
const hamburger_button=document.getElementById('hamburger_button');
const menu=document.getElementById('menu');
const hero_section=document.getElementById('hero_section');
const reviewUs=document.getElementById('reviewUs');
const body=document.getElementById('body');

let windowsColor='on'
let toggle='on';

hamburger_button.addEventListener('click',(e)=>{
    console.log('Hamburger clicked ')
    if(toggle=='on'){
    menu.classList.remove('hidden')
    toggle='off';
    }
    else if(toggle=='off'){
        menu.classList.add('hidden')
        toggle='on';
        }
})

reviewUs.addEventListener('click',(e)=>{
  console.log('Review Us clicked')
  if(windowsColor=='on'){
    body.classList.add('bg-gray-700')
    windowsColor='off'
  }
  else if(windowsColor=='off'){
    body.classList.add('bg-gray-700')  
    windowsColor='on'
  }
})

