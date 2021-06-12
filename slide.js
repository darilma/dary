+/ funcao do bannert +/

var intervalo = 3000;

function slide1 (){
	document.getElementById("baner").src = "img/banner1.png";
	setTimeout("slide2()",intervalo);
}

function slide2 (){
	document.getElementById("baner").src = "img/banner2.png";
	setTimeout("slide3()",intervalo);
}

function slide3 (){
	document.getElementById("baner").src = "img/banner3.png";
	setTimeout("slide4()",intervalo);
}

function slide4 (){
	document.getElementById("baner").src = "img/banner4.png";
	setTimeout("slide5()",intervalo);
}

function slide5 (){
	document.getElementById("baner").src = "img/banner5.png";
	setTimeout("slide1()",intervalo);
}

+/funcao do formulario +/
		
		function verifica()
		{
			var campos = document.getElementsByTagName("input");
			
			for(var k=0; k<campos.length; k++)
			{
				if(campos[k].value == ""){
					campos[k].style.backgroundColor = "pink";
				}
			}
			
			campos[0].focus();
		}
	
+/fotos+/

function bigImg(x)
 {
   x.style.height="400px";
   x.style.width="400px";
 }

 function normalImg(x)
 {
  x.style.height="200px";
  x.style.width="200px";
}


