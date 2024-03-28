const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

//var A=document.querySelector("#elem1")
//var B=A.getAttribute("data-name")
//console.log(B)

var elem1=document.querySelector("#elem-container")
var fixed=document.querySelector("#fixed-image")
elem1.addEventListener("mouseenter",function(){
    fixed.style.display="block"
})
elem1.addEventListener("mouseleave",function(){
    fixed.style.display="none"
})

//var elem1=document.querySelector("#elem1")
//elem1.addEventListener("mouseenter",function(){
  //  var image=elem1.getAttribute("data-image")
    //fixed.style.backgroundImage=`url(${image})`   // `url(${})`=Template Literals bolte h isko padh le Ankit iske baare me
//})

//  <!--- above code are need to repeat for all images .which is very long process. so we DO ..Below --!>


var elems=document.querySelectorAll(".elem")          //  querySelectorAll = able to Acces Lot's of Elements In Once. Data occurs in the form of NodeLists= similar to Array
elems.forEach(function(e){                       // forEach is a HigherOrder Function   Loop to acces all array/nodelist size
    e.addEventListener("mouseenter",function(){
        var image=e.getAttribute("data-image")
        fixed.style.backgroundImage=`url(${image})`
    })
})