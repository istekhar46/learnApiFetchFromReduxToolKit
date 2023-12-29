let slider = document.querySelector('.slider .list')
let items = document.querySelectorAll('.slider .list .item')
let prev = document.getElementById('prev')
let next = document.getElementById('next')
let dots = document.querySelectorAll('.slider .dots li')

let active = 0;
let length = items.length - 1;

next.onclick = function(){
    if (active + 1 > length){
        active = 0;
    }else{
        active = active+1;
    }

    reloader();
}

prev.onclick = function(){
    if(active - 1 < 0){
        active = length;
    }else{
        active = active - 1 ;
    }
     reloader();
}


let refresh = setInterval(()=>{next.onclick()},3000)
function reloader (){
    slider.style.left = -items[active].offsetLeft +'px'
    let lastActive = document.querySelector('.slider .dots li.active');
    lastActive.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refresh);
    refresh = setInterval(()=>{next.onclick()},5000)
    

}

dots.forEach((item, key)=>{
          item.addEventListener('click', ()=>{
            active = key;
            reloader();
          })

})

// new 

const innerScroller  = document.querySelector('.scroller .innerScroller');
const innerScrollerContent = Array.from(innerScroller.children)
innerScrollerContent.forEach((li) =>{
       let duplicateItems = li.cloneNode(true);
       duplicateItems.setAttribute('arial-hidden', true);
       innerScroller.append(duplicateItems);
 } )
console.log(innerScrollerContent)

let a = [1,2,3,4];
a.splice(0,1);
console.log(a);
let b = 'istekhar khan'
 let c= b.split(' ')
  let d=c.toString();
 console.log(d)