setInterval(()=>{
window.inject_click = true;
window.addEventListener("contextmenu", 
  function(click){
    click.stopPropagation()
}, true);
 document.addEventListener('contextmenu', function (click) {
    click.stopPropagation();
}, true);
},300)




   
          






   
          

   
          
