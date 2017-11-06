function getResults (){
var month = document.getElementById("month").value;
var date = document.getElementById("number_input").value;


{


	if (month == 1 && date >=20 || month == 2 && date <=18) {document.getElementById("Result_Display").innerHTML = "Aquarius";}
	if (month == 1 && date > 31) {document.getElementById("Result_Display").innerHTML = "Huh?";}
	if (month == 2 && date >=19 || month == 3 && date <=20) {document.getElementById("Result_Display").innerHTML = "Pisces";}
	if (month == 2 && date > 29) {document.getElementById("Result_Display").innerHTML = "Say what?";}
	if (month == 3 && date >=21 || month == 4 && date <=19) {document.getElementById("Result_Display").innerHTML = "Aries";}
	if (month == 3 && date > 31) {document.getElementById("Result_Display").innerHTML = "OK.  Whatever.";}
	if (month == 4 && date >=20 || month == 5 && date <=20) {document.getElementById("Result_Display").innerHTML = "Taurus";}
	if (month == 4 && date > 30) {document.getElementById("Result_Display").innerHTML = "I'm soooo sorry!";}
	if (month == 5 && date >=21 || month == 6 && date <=21) {document.getElementById("Result_Display").innerHTML = "Gemini";}
	if (month == 5 && date > 31) {document.getElementById("Result_Display").innerHTML = "Umm ... no.";}
	if (month == 6 && date >=22 || month == 7 && date <=22) {document.getElementById("Result_Display").innerHTML = "Cancer";}
	if (month == 6 && date > 30) {document.getElementById("Result_Display").innerHTML = "Sorry.";}
	if (month == 7 && date >=23 || month == 8 && date <=22) {document.getElementById("Result_Display").innerHTML = "Leo";}
	if (month == 7 && date > 31) {document.getElementById("Result_Display").innerHTML = "Excuse me?";}
	if (month == 8 && date >=23 || month == 9 && date <=22) {document.getElementById("Result_Display").innerHTML = "Virgo";}
	if (month == 8 && date > 31) {document.getElementById("Result_Display").innerHTML = "Yeah. Right.";}
	if (month == 9 && date >=23 || month == 10 && date <=22) {document.getElementById("Result_Display").innerHTML = "Libra";}
	if (month == 9 && date > 30) {document.getElementById("Result_Display").innerHTML = "Try Again.";}
	if (month == 10 && date >=23 || month == 11 && date <=21) {document.getElementById("Result_Display").innerHTML = "Scorpio";}
	if (month == 10 && date > 31) {document.getElementById("Result_Display").innerHTML = "Forget it!";}
	if (month == 11 && date >=22 || month == 12 && date <=21) {document.getElementById("Result_Display").innerHTML = "Sagittarius";}
	if (month == 11 && date > 30) {document.getElementById("Result_Display").innerHTML = "Invalid Date";}
	if (month == 12 && date >=22 || month == 1 && date <=19) {document.getElementById("Result_Display").innerHTML = "Capricorn";}
	if (month == 12 && date > 31) {document.getElementById("Result_Display").innerHTML = "No way!";}
}

}


function showsigns (){
	var sign = document.getElementById("info").value;

	{
	if (sign == 1){document.getElementById("Result_Display2").innerHTML = "The Ram, Fire, Cardinal, Super macho";}
	if (sign == 2){document.getElementById("Result_Display2").innerHTML = "The Bull, Earth, Fixed, Super chill";}
	if (sign == 3){document.getElementById("Result_Display2").innerHTML = "The Twins, Air, Mutable, Super smart";}
	if (sign == 4){document.getElementById("Result_Display2").innerHTML = "The Crab, Water, Cardinal, Super sweet";}
	if (sign == 5){document.getElementById("Result_Display2").innerHTML = "The Lion, Fire, Fixed, Super seductive";}
	if (sign == 6){document.getElementById("Result_Display2").innerHTML = "The Virgin, Earth, Mutable, Super spazzy";}
	if (sign == 7){document.getElementById("Result_Display2").innerHTML = "The Scales, Air, Cardinal, Super liberal";}
	if (sign == 8){document.getElementById("Result_Display2").innerHTML = "The Scorpion, Water, Fixed, Super awesome";}
	if (sign == 9){document.getElementById("Result_Display2").innerHTML = "The Centaur, Fire, Mutable, Super fun";}
	if (sign == 10){document.getElementById("Result_Display2").innerHTML = "The Sea-goat, Earth, Cardinal, Super focused";}
	if (sign == 11){document.getElementById("Result_Display2").innerHTML = "The Water-bearer, Air, Fixed, Super uniuqe";}
	if (sign == 12){document.getElementById("Result_Display2").innerHTML = "The Two Fish, Water, Mutable, Super mysterious";}
}
}




function addAndSaveCustomer(){
  		var aName = document.getElementById("text").value
  		var aBirthday = document.getElementById("number_input").value * 1
  		var aMonth = document.getElementById("month").value * 1
  		var atime = document.getElementById("time").value * 1
  		var ampm = document.getElementById("nightday").value * 1		
  		var medium = document.getElementById("medium").value
  		var aCustomer = {
  			"name":aName,
  			"birthday":aBirthday,
  			"month":aMonth,
  			"specific_time":atime,
  			"day_night":ampm,
  			"medium": medium,

  		}
  		var allCustomers = null
		var storedCustomersString = localStorage["all_customers"]
		if(storedCustomersString == null){
			allCustomers = []
		}
		else{
			allCustomers = JSON.parse(storedCustomersString)
		}
		allCustomers.push(aCustomer)
		var allCusomersString = JSON.stringify(allCustomers)
		localStorage["all_customers"] = allCusomersString
		cats()

		document.getElementById("text").value = null
		document.getElementById("number_input").value  = null
		document.getElementById("month").value = null
		document.getElementById("time").value = null
		document.getElementById("nightday").value  = null
		document.getElementById("medium").value = null
  	}

function cats(){
  		var storedCustomersString = localStorage["all_customers"]
		if(storedCustomersString != null){
			var allCustomers = JSON.parse(storedCustomersString)
			var customerDisplayer = document.getElementById("all_customers_display")
	  		customerDisplayer.innerHTML = null
	  		var numberOfCustomers = allCustomers.length
	  		for (var i = 0; i < allCustomers.length; i++) {
	  			var aCustomer = allCustomers[i]
	  			customerDisplayer.innerHTML += "<hr><p>Customer: "+ aCustomer["name"] +"</p>"+"<p>birthday: "+ aCustomer["birthday"] +"</p>"+"<p>month: "+ aCustomer["month"] +"</p>"
	  			+"<p>time:" + aCustomer["specific_time"] + "</p>" + "<p>nightday:" + aCustomer["nightday"] + "</p>" + "<p>medium:" + aCustomer["medium"] +"</p>"
	  		}
		}
  	}