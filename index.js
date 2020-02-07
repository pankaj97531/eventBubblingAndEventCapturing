/* document.querySelector(".bullets").addEventListener('click',function(e){
	e.target.classList.toggle('redtext');
}) */
document.querySelector(".bullets").addEventListener('click',function(e){
	if(e.target.getAttribute('id')=='b2'){
	e.target.classList.toggle('redtext');		
	}

}) 
document.getElementById("b4").addEventListener('click',function(e){
	
	e.target.classList.toggle("largerFont");
	e.stopPropagation();
})
/*document.getElementById("b1").addEventListener('click',function(e){
	e.target.classList.toggle("redtext");
})

document.getElementById("b2").addEventListener('click',function(e){
	e.target.classList.toggle("redtext");
})

document.getElementById("b3").addEventListener('click',function(e){
	e.target.classList.toggle("redtext");
})

document.getElementById("b4").addEventListener('click',function(e){
	e.target.classList.toggle("redtext");
})*/