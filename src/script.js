
const hamburger_button=document.getElementById('hamburger_button');
const menu=document.getElementById('menu');
const hero_section=document.getElementById('hero_section');
//const lower_bg=document.getElementById('lower_bg');

let toggle='on';

hamburger_button.addEventListener('click',(e)=>{
    console.log('Hamburger clicked ')
    if(toggle=='on'){
    menu.classList.remove('hidden')
  //  lower_bg.classList.remove('hidden')
    toggle='off';
    }
    else if(toggle=='off'){
        menu.classList.add('hidden')
      //  lower_bg.classList.add('hidden')

        toggle='on';
        }
})

