



document.getElementById("btnSubmit").addEventListener("click", openDiv)

function openDiv() {
	console.log("click OpenDiv ok")
	document.getElementById("toggleOn").style.display = "block"
}



let addNom = document.getElementById("NomFamille"); // aller récupérer mes élements dans html
let AddPrenom = document.getElementById("PrenomFamille")
let addNombre = document.getElementById("nbrePers")
let addcote = document.getElementById("invitecote")
let LivredOR = document.getElementById("livredOr")




document.getElementById("btnsubmit").addEventListener("click", Verifie )


function Verifie() {
  console.log("fonction verifie ouverte")
    if (
      document.getElementById("NomFamille").value !== "" 
    && document.getElementById("PrenomFamille").value !== "" 
	&& document.getElementById("nbrePers").value !== ""
	&& document.getElementById("invitecote").value !== ""
	
       ) {
    SendForm()
  }else{
    $("#confirmlabel").html(" SVP Veuillez remplir les champs necessaires.")
  }
}

function SendForm() {
	console.log("fonction SendForm ouverte")
  
	var myDate = new Date
	var theDay = myDate.getDate();
	var theMonth = myDate.getMonth()+1;
	var theYear = myDate.getFullYear();
	var dateText = theYear + "-"  +  theMonth + "-"  + theDay ;
	
  
	var settings = {
		"url": "https://catchme-d1f1b7.appdrag.site/api/AddWedding",
		"data": {
			NomDeFamille : addNom.value ,
			Prenom : AddPrenom.value ,
			Date : dateText,
			NombreDePersonne : addNombre.value,
			inviteCote : addcote.value,
			livredOr : livredOr.value
		},
		"method": "POST",
		"async": true,
		"crossDomain": true,
		"processData": true
	};
	$.ajax(settings).done(function (response) 
  {
	console.log(settings)
	console.log(response)
	
	if (response.status == "OK" && response.affectedRows == 1) { 
		document.getElementById("NomFamille").value = "" ;
		document.getElementById("PrenomFamille").value = "" ;
		document.getElementById("nbrePers").value !== "";
		document.getElementById("invitecote").value !== "";
		document.getElementById("livredOr").value !== "";
	
	  $("#confirmlabel").html("Formulaire envoyé , Merci à très vite."); 
	  document.getElementById("form").style.display = "none"
	}
  }); 
  }




		// COMPTEUR GRAND ECRAN
		var countDownDate = new Date("sep 6, 2020 18:00:00").getTime();
		var x = setInterval(function() {
		  var now = new Date().getTime();
		  var distance = countDownDate - now;
		  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
			

		  document.getElementById("jour").innerHTML = days ;
		  document.getElementById("heure").innerHTML = hours ;
		  document.getElementById("minute").innerHTML = minutes ;
		  document.getElementById("seconde").innerHTML =  seconds;

		  if (distance < 0) {
			clearInterval(x);
			document.getElementById("demo").innerHTML = "EXPIRED";
		  }
		}, 1000);




			// COMPTEUR TELEPHONE
			var countDownDate = new Date("sep 6, 2020 18:00:00").getTime();
			var x = setInterval(function() {
			var now = new Date().getTime();
			var distance = countDownDate - now;
				
			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);
				

			document.getElementById("jour2").innerHTML = days ;
			document.getElementById("heure2").innerHTML = hours ;
			document.getElementById("minute2").innerHTML = minutes ;
			document.getElementById("seconde2").innerHTML =  seconds;

			if (distance < 0) {
				clearInterval(x);
				document.getElementById("demo").innerHTML = "EXPIRED";
			}
			}, 1000);





	
	
	

	



  

  