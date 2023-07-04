var classElements = document.getElementById("heading");
console.log(classElements.classList);
var buttonclick=document.getElementById("btn");
buttonclick.addEventListener('click', ()=>{
    classElements.classList.remove('head');
})

var ham_burger=document.getElementById('hamburg');
var side_bar=document.getElementById('sidebar');

ham_burger.addEventListener('click', ()=>{
    if(side_bar.classList.contains('show')){
    side_bar.classList.remove('show')
    side_bar.classList.add('hide')
}
else{
    side_bar.classList.add('show');
    side_bar.classList.remove('remove');

}

})

