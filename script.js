var random;
var clicked = localStorage.getItem("CLICKED");
var unlocked = localStorage.getItem("UNLOCKED");

var one = localStorage.getItem("ONE");
var two = localStorage.getItem("TWO");
var three = localStorage.getItem("THREE");
var four = localStorage.getItem("FOUR");
var five = localStorage.getItem("FIVE");
var six = localStorage.getItem("SIX");
var seven = localStorage.getItem("SEVEN");
var eight = localStorage.getItem("EIGHT");
var nine = localStorage.getItem("NINE");
var ten = localStorage.getItem("TEN");
var eleven = localStorage.getItem("ELEVEN");
var twelve = localStorage.getItem("TWELVE");
var thirteen = localStorage.getItem("THIRTEEN");
var fourteen = localStorage.getItem("FOURTEEN");
var fifteen = localStorage.getItem("FIFTEEN");
var sixteen = localStorage.getItem("SIXTEEN");
var seventeen = localStorage.getItem("SEVENTEEN");
var eightteen = localStorage.getItem("EIGHTTEEN");
var nineteen = localStorage.getItem("NINETEEN");
var twenty = localStorage.getItem("TWENTY");
var twentyone = localStorage.getItem("TWENTYONE");
var twentytwo = localStorage.getItem("TWENTYTWO");
var twentythree = localStorage.getItem("TWENTYTHREE");
var twentyfour = localStorage.getItem("TWENTYFOUR");
var twentyfive = localStorage.getItem("TWENTYFIVE");
var twentysix = localStorage.getItem("TWENTYSIX");
var twentyseven = localStorage.getItem("TWENTYSEVEN");
var twentyeight = localStorage.getItem("TWENTYEIGHT");
var twentynine = localStorage.getItem("TWENTYNINE");
var thirty = localStorage.getItem("THIRTY");
var thirtyone = localStorage.getItem("THIRTYONE");
var thirtytwo = localStorage.getItem("THIRTYTWO");
var thirtythree = localStorage.getItem("THIRTYTHREE");
var thirtyfour = localStorage.getItem("THIRTYFOUR");
var thirtyfive = localStorage.getItem("THIRTYFIVE");
var thirtysix = localStorage.getItem("THIRTYSIX");
var thirtyseven = localStorage.getItem("THIRTYSEVEN");
var thirtyeight = localStorage.getItem("THIRTYEIGHT");
var thirtynine = localStorage.getItem("THIRTYNINE");
var fourty = localStorage.getItem("FOURTY");
var fourtyone = localStorage.getItem("FOURTYONE");
var fourtytwo = localStorage.getItem("FOURTYTWO");
var fourtythree = localStorage.getItem("FOURTYTHREE");
var fourtyfour = localStorage.getItem("FOURTYFOUR");
var fourtyfive = localStorage.getItem("FOURTYFIVE");
var fourtysix = localStorage.getItem("FOURTYSIX");
var fourtyseven = localStorage.getItem("FOURTYSEVEN");
var fourtyeight = localStorage.getItem("FOURTYEIGHT");
var fourtynine = localStorage.getItem("FOURTYNINE");
var fifty = localStorage.getItem("FIFTY");
var fiftyone = localStorage.getItem("FIFTYONE");
var fiftytwo = localStorage.getItem("FIFTYTWO");
var fiftythree = localStorage.getItem("FIFTYTHREE");
var fiftyfour = localStorage.getItem("FIFTYFOUR");
var fiftyfive = localStorage.getItem("FIFTYFIVE");
var fiftysix = localStorage.getItem("FIFTYSIX");
var fiftyseven = localStorage.getItem("FIFTYSEVEN");
var fiftyeight = localStorage.getItem("FIFTYEIGHT");
var fiftynine = localStorage.getItem("FIFTYNINE");
var sixty = localStorage.getItem("SIXTY");
var sixtyone = localStorage.getItem("SIXTYONE");
var sixtytwo = localStorage.getItem("SIXTYTWO");
var sixtythree = localStorage.getItem("SIXTYTHREE");
var sixtyfour = localStorage.getItem("SIXTYFOUR");
var sixtyfive = localStorage.getItem("SIXTYFIVE");
var sixtysix = localStorage.getItem("SIXTYSIX");
var sixtyseven = localStorage.getItem("SIXTYSEVEN");
var sixtyeight = localStorage.getItem("SIXTYEIGHT");
var sixtynine = localStorage.getItem("SIXTYNINE");
var seventy = localStorage.getItem("SEVENTY");
var seventyone = localStorage.getItem("SEVENTYONE");
var seventytwo = localStorage.getItem("SEVENTYTWO");
var seventythree = localStorage.getItem("SEVENTYTHREE");
var seventyfour = localStorage.getItem("SEVENTYFOUR");
var seventyfive = localStorage.getItem("SEVENTYFIVE");
var seventysix = localStorage.getItem("SEVENTYSIX");
var seventyseven = localStorage.getItem("SEVENTYSEVEN");
var seventyeight = localStorage.getItem("SEVENTYEIGHT");
var seventynine = localStorage.getItem("SEVENTYNINE");
var eighty = localStorage.getItem("EIGHTY");
var eightyone = localStorage.getItem("EIGHTYONE");
var eightytwo = localStorage.getItem("EIGHTYTWO");
var eightythree = localStorage.getItem("EIGHTYTHREE");
var eightyfour = localStorage.getItem("EIGHTYFOUR");
var eightyfive = localStorage.getItem("EIGHTYFIVE");
var eightysix = localStorage.getItem("EIGHTYSIX");
var eightyseven = localStorage.getItem("EIGHTYSEVEN");
var eightyeight = localStorage.getItem("EIGHTYEIGHT");
var eightynine = localStorage.getItem("EIGHTYNINE");
var ninty = localStorage.getItem("NINTY");
var nintyone = localStorage.getItem("NINTYONE");
var nintytwo = localStorage.getItem("NINTYTWO");
var nintythree = localStorage.getItem("NINTYTHREE");
var nintyfour = localStorage.getItem("NINTYFOUR");
var nintyfive = localStorage.getItem("NINTYFIVE");
var nintysix = localStorage.getItem("NINTYSIX");
var nintyseven = localStorage.getItem("NINTYSEVEN");
var nintyeight = localStorage.getItem("NINTYEIGHT");
var nintynine = localStorage.getItem("NINTYNINE");
var onehundred = localStorage.getItem("ONEHUNDRED");

if(clicked == "yes")
{
	document.getElementById("words").style.display = "none";
	document.getElementById("buttons").style.display = "";
}

if(unlocked == "yes")
{
	Correct();
}

if(one == "clicked")
{
	document.getElementById("1").style.opacity = "100%";
}
if(two == "clicked")
{
	document.getElementById("2").style.opacity = "100%";
}
if(three == "clicked")
{
	document.getElementById("3").style.opacity = "100%";
}
if(four == "clicked")
{
	document.getElementById("4").style.opacity = "100%";
}
if(five == "clicked")
{
	document.getElementById("5").style.opacity = "100%";
}
if(six == "clicked")
{
	document.getElementById("6").style.opacity = "100%";
}
if(seven == "clicked")
{
	document.getElementById("7").style.opacity = "100%";
}
if(eight == "clicked")
{
	document.getElementById("8").style.opacity = "100%";
}
if(nine == "clicked")
{
	document.getElementById("9").style.opacity = "100%";
}
if(ten == "clicked")
{
	document.getElementById("10").style.opacity = "100%";
}
if(eleven == "clicked")
{
	document.getElementById("11").style.opacity = "100%";
}
if(twelve == "clicked")
{
	document.getElementById("12").style.opacity = "100%";
}
if(thirteen == "clicked")
{
	document.getElementById("13").style.opacity = "100%";
}
if(fourteen == "clicked")
{
	document.getElementById("14").style.opacity = "100%";
}
if(fifteen == "clicked")
{
	document.getElementById("15").style.opacity = "100%";
}
if(sixteen == "clicked")
{
	document.getElementById("16").style.opacity = "100%";
}
if(seventeen == "clicked")
{
	document.getElementById("17").style.opacity = "100%";
}
if(eightteen == "clicked")
{
	document.getElementById("18").style.opacity = "100%";
}
if(nineteen == "clicked")
{
	document.getElementById("19").style.opacity = "100%";
}
if(twenty == "clicked")
{
	document.getElementById("20").style.opacity = "100%";
}
if(twentyone == "clicked")
{
	document.getElementById("21").style.opacity = "100%";
}
if(twentytwo == "clicked")
{
	document.getElementById("22").style.opacity = "100%";
}
if(twentythree == "clicked")
{
	document.getElementById("23").style.opacity = "100%";
}
if(twentyfour == "clicked")
{
	document.getElementById("24").style.opacity = "100%";
}
if(twentyfive == "clicked")
{
	document.getElementById("25").style.opacity = "100%";
}
if(twentysix == "clicked")
{
	document.getElementById("26").style.opacity = "100%";
}
if(twentyseven == "clicked")
{
	document.getElementById("27").style.opacity = "100%";
}
if(twentyeight == "clicked")
{
	document.getElementById("28").style.opacity = "100%";
}
if(twentynine == "clicked")
{
	document.getElementById("29").style.opacity = "100%";
}
if(thirty == "clicked")
{
	document.getElementById("30").style.opacity = "100%";
}
if(thirtyone == "clicked")
{
	document.getElementById("31").style.opacity = "100%";
}
if(thirtytwo == "clicked")
{
	document.getElementById("32").style.opacity = "100%";
}
if(thirtythree == "clicked")
{
	document.getElementById("33").style.opacity = "100%";
}
if(thirtyfour == "clicked")
{
	document.getElementById("34").style.opacity = "100%";
}
if(thirtyfive == "clicked")
{
	document.getElementById("35").style.opacity = "100%";
}
if(thirtysix == "clicked")
{
	document.getElementById("36").style.opacity = "100%";
}
if(thirtyseven == "clicked")
{
	document.getElementById("37").style.opacity = "100%";
}
if(thirtyeight == "clicked")
{
	document.getElementById("38").style.opacity = "100%";
}
if(thirtynine == "clicked")
{
	document.getElementById("39").style.opacity = "100%";
}
if(fourty == "clicked")
{
	document.getElementById("40").style.opacity = "100%";
}
if(fourtyone == "clicked")
{
	document.getElementById("41").style.opacity = "100%";
}
if(fourtytwo == "clicked")
{
	document.getElementById("42").style.opacity = "100%";
}
if(fourtythree == "clicked")
{
	document.getElementById("43").style.opacity = "100%";
}
if(fourtyfour == "clicked")
{
	document.getElementById("44").style.opacity = "100%";
}
if(fourtyfive == "clicked")
{
	document.getElementById("45").style.opacity = "100%";
}
if(fourtysix == "clicked")
{
	document.getElementById("46").style.opacity = "100%";
}
if(fourtyseven == "clicked")
{
	document.getElementById("47").style.opacity = "100%";
}
if(fourtyeight == "clicked")
{
	document.getElementById("48").style.opacity = "100%";
}
if(fourtynine == "clicked")
{
	document.getElementById("49").style.opacity = "100%";
}
if(fifty == "clicked")
{
	document.getElementById("50").style.opacity = "100%";
}
if(fiftyone == "clicked")
{
	document.getElementById("51").style.opacity = "100%";
}
if(fiftytwo == "clicked")
{
	document.getElementById("52").style.opacity = "100%";
}
if(fiftythree == "clicked")
{
	document.getElementById("53").style.opacity = "100%";
}
if(fiftyfour == "clicked")
{
	document.getElementById("54").style.opacity = "100%";
}
if(fiftyfive == "clicked")
{
	document.getElementById("55").style.opacity = "100%";
}
if(fiftysix == "clicked")
{
	document.getElementById("56").style.opacity = "100%";
}
if(fiftyseven == "clicked")
{
	document.getElementById("57").style.opacity = "100%";
}
if(fiftyeight == "clicked")
{
	document.getElementById("58").style.opacity = "100%";
}
if(fiftynine == "clicked")
{
	document.getElementById("59").style.opacity = "100%";
}
if(sixty == "clicked")
{
	document.getElementById("60").style.opacity = "100%";
}
if(sixtyone == "clicked")
{
	document.getElementById("61").style.opacity = "100%";
}
if(sixtytwo == "clicked")
{
	document.getElementById("62").style.opacity = "100%";
}
if(sixtythree == "clicked")
{
	document.getElementById("63").style.opacity = "100%";
}
if(sixtyfour == "clicked")
{
	document.getElementById("64").style.opacity = "100%";
}
if(sixtyfive == "clicked")
{
	document.getElementById("65").style.opacity = "100%";
}
if(sixtysix == "clicked")
{
	document.getElementById("66").style.opacity = "100%";
}
if(sixtyseven == "clicked")
{
	document.getElementById("67").style.opacity = "100%";
}
if(sixtyeight == "clicked")
{
	document.getElementById("68").style.opacity = "100%";
}
if(sixtynine == "clicked")
{
	document.getElementById("69").style.opacity = "100%";
}
if(seventy == "clicked")
{
	document.getElementById("70").style.opacity = "100%";
}
if(seventyone == "clicked")
{
	document.getElementById("71").style.opacity = "100%";
}
if(seventytwo == "clicked")
{
	document.getElementById("72").style.opacity = "100%";
}
if(seventythree == "clicked")
{
	document.getElementById("73").style.opacity = "100%";
}
if(seventyfour == "clicked")
{
	document.getElementById("74").style.opacity = "100%";
}
if(seventyfive == "clicked")
{
	document.getElementById("75").style.opacity = "100%";
}
if(seventysix == "clicked")
{
	document.getElementById("76").style.opacity = "100%";
}
if(seventyseven == "clicked")
{
	document.getElementById("77").style.opacity = "100%";
}
if(seventyeight == "clicked")
{
	document.getElementById("78").style.opacity = "100%";
}
if(seventynine == "clicked")
{
	document.getElementById("79").style.opacity = "100%";
}
if(eighty == "clicked")
{
	document.getElementById("80").style.opacity = "100%";
}
if(eightyone == "clicked")
{
	document.getElementById("81").style.opacity = "100%";
}
if(eightytwo == "clicked")
{
	document.getElementById("82").style.opacity = "100%";
}
if(eightythree == "clicked")
{
	document.getElementById("83").style.opacity = "100%";
}
if(eightyfour == "clicked")
{
	document.getElementById("84").style.opacity = "100%";
}
if(eightyfive == "clicked")
{
	document.getElementById("85").style.opacity = "100%";
}
if(eightysix == "clicked")
{
	document.getElementById("86").style.opacity = "100%";
}
if(eightyseven == "clicked")
{
	document.getElementById("87").style.opacity = "100%";
}
if(eightyeight == "clicked")
{
	document.getElementById("88").style.opacity = "100%";
}
if(eightynine == "clicked")
{
	document.getElementById("89").style.opacity = "100%";
}
if(ninty == "clicked")
{
	document.getElementById("90").style.opacity = "100%";
}
if(nintyone == "clicked")
{
	document.getElementById("91").style.opacity = "100%";
}
if(nintytwo == "clicked")
{
	document.getElementById("92").style.opacity = "100%";
}
if(nintythree == "clicked")
{
	document.getElementById("93").style.opacity = "100%";
}
if(nintyfour == "clicked")
{
	document.getElementById("94").style.opacity = "100%";
}
if(nintyfive == "clicked")
{
	document.getElementById("95").style.opacity = "100%";
}
if(nintysix == "clicked")
{
	document.getElementById("96").style.opacity = "100%";
}
if(nintyseven == "clicked")
{
	document.getElementById("97").style.opacity = "100%";
}
if(nintyeight == "clicked")
{
	document.getElementById("98").style.opacity = "100%";
}
if(nintynine == "clicked")
{
	document.getElementById("99").style.opacity = "100%";
}
if(onehundred == "clicked")
{
	document.getElementById("100").style.opacity = "100%";
}


function Clear()
{
	localStorage.clear();
	location.reload();
}

function Secret(event)
{
	var x = event.keyCode;
  	
	if (x == 54)
	{
   		document.getElementById("secret").style.display = "";
  	}
}

function Password()
{
	var answer = document.getElementById("password").value;
    
	if(answer=="72688")
    {
        document.getElementById("incorrect").style.display = "none";
        document.getElementById("correct").style.display = "";
        document.getElementById("error").style.display = "none";
		Correct();
    }
    else if(answer=="")
	{
		document.getElementById("incorrect").style.display = "none";
        document.getElementById("correct").style.display = "none";
        document.getElementById("error").style.display = "";
	}
    else
	{
		document.getElementById("incorrect").style.display = "";
        document.getElementById("correct").style.display = "none";
        document.getElementById("error").style.display = "none";
	}
}

function Correct()
{
	localStorage.setItem("UNLOCKED", "yes");
	
	document.getElementById("1").disabled = false;
	document.getElementById("2").disabled = false;
	document.getElementById("3").disabled = false;
	document.getElementById("4").disabled = false;
	document.getElementById("5").disabled = false;
	document.getElementById("6").disabled = false;
	document.getElementById("7").disabled = false;
	document.getElementById("8").disabled = false;
	document.getElementById("9").disabled = false;
	document.getElementById("10").disabled = false;
	document.getElementById("11").disabled = false;
	document.getElementById("12").disabled = false;
	document.getElementById("13").disabled = false;
	document.getElementById("14").disabled = false;
	document.getElementById("15").disabled = false;
	document.getElementById("16").disabled = false;
	document.getElementById("17").disabled = false;
	document.getElementById("18").disabled = false;
	document.getElementById("19").disabled = false;
	document.getElementById("20").disabled = false;
	document.getElementById("21").disabled = false;
	document.getElementById("22").disabled = false;
	document.getElementById("23").disabled = false;
	document.getElementById("24").disabled = false;
	document.getElementById("25").disabled = false;
	document.getElementById("26").disabled = false;
	document.getElementById("27").disabled = false;
	document.getElementById("28").disabled = false;
	document.getElementById("29").disabled = false;
	document.getElementById("30").disabled = false;
	document.getElementById("31").disabled = false;
	document.getElementById("32").disabled = false;
	document.getElementById("33").disabled = false;
	document.getElementById("34").disabled = false;
	document.getElementById("35").disabled = false;
	document.getElementById("36").disabled = false;
	document.getElementById("37").disabled = false;
	document.getElementById("38").disabled = false;
	document.getElementById("39").disabled = false;
	document.getElementById("40").disabled = false;
	document.getElementById("41").disabled = false;
	document.getElementById("42").disabled = false;
	document.getElementById("43").disabled = false;
	document.getElementById("44").disabled = false;
	document.getElementById("45").disabled = false;
	document.getElementById("46").disabled = false;
	document.getElementById("47").disabled = false;
	document.getElementById("48").disabled = false;
	document.getElementById("49").disabled = false;
	document.getElementById("50").disabled = false;
	document.getElementById("51").disabled = false;
	document.getElementById("52").disabled = false;
	document.getElementById("53").disabled = false;
	document.getElementById("54").disabled = false;
	document.getElementById("55").disabled = false;
	document.getElementById("56").disabled = false;
	document.getElementById("57").disabled = false;
	document.getElementById("58").disabled = false;
	document.getElementById("59").disabled = false;
	document.getElementById("60").disabled = false;
	document.getElementById("61").disabled = false;
	document.getElementById("62").disabled = false;
	document.getElementById("63").disabled = false;
	document.getElementById("64").disabled = false;
	document.getElementById("65").disabled = false;
	document.getElementById("66").disabled = false;
	document.getElementById("67").disabled = false;
	document.getElementById("68").disabled = false;
	document.getElementById("69").disabled = false;
	document.getElementById("70").disabled = false;
	document.getElementById("71").disabled = false;
	document.getElementById("72").disabled = false;
	document.getElementById("73").disabled = false;
	document.getElementById("74").disabled = false;
	document.getElementById("75").disabled = false;
	document.getElementById("76").disabled = false;
	document.getElementById("77").disabled = false;
	document.getElementById("78").disabled = false;
	document.getElementById("79").disabled = false;
	document.getElementById("80").disabled = false;
	document.getElementById("81").disabled = false;
	document.getElementById("82").disabled = false;
	document.getElementById("83").disabled = false;
	document.getElementById("84").disabled = false;
	document.getElementById("85").disabled = false;
	document.getElementById("86").disabled = false;
	document.getElementById("87").disabled = false;
	document.getElementById("88").disabled = false;
	document.getElementById("89").disabled = false;
	document.getElementById("90").disabled = false;
	document.getElementById("91").disabled = false;
	document.getElementById("92").disabled = false;
	document.getElementById("93").disabled = false;
	document.getElementById("94").disabled = false;
	document.getElementById("95").disabled = false;
	document.getElementById("96").disabled = false;
	document.getElementById("97").disabled = false;
	document.getElementById("98").disabled = false;
	document.getElementById("99").disabled = false;
	document.getElementById("100").disabled = false;
}

function Close()
{
	document.getElementById("secret").style.display = "none";
	document.getElementById("incorrect").style.display = "none";
    document.getElementById("correct").style.display = "none";
    document.getElementById("error").style.display = "none";
	document.getElementById("password").value = "";
}

function Random()
{
	document.getElementById("words").style.display = "none";
	document.getElementById("buttons").style.display = "";
	
	localStorage.setItem("CLICKED", "yes");
	
	random = Math.floor(Math.random() * 300) + 1;
	
	Choose();
}

function Choose()
{
	if (random == 1)
	{
		document.location = "1.html";
		document.getElementById("1").style.opacity = "100%";
		localStorage.setItem("ONE", "clicked");
	}
	if (random == 2)
	{
		document.location = "2.html";
		document.getElementById("2").style.opacity = "100%";
		localStorage.setItem("TWO", "clicked");
	}
	if (random == 3)
	{
		document.location = "3.html";
		document.getElementById("3").style.opacity = "100%";
		localStorage.setItem("THREE", "clicked");
	}
	if (random == 4)
	{
		document.location = "4.html";
		document.getElementById("4").style.opacity = "100%";
		localStorage.setItem("FOUR", "clicked");
	}
	if (random == 5)
	{
		document.location = "5.html";
		document.getElementById("5").style.opacity = "100%";
		localStorage.setItem("FIVE", "clicked");
	}
	if (random == 6)
	{
		document.location = "6.html";
		document.getElementById("6").style.opacity = "100%";
		localStorage.setItem("SIX", "clicked");
	}
	if (random == 7)
	{
		document.location = "7.html";
		document.getElementById("7").style.opacity = "100%";
		localStorage.setItem("SEVEN", "clicked");
	}
	if (random == 8)
	{
		document.location = "8.html";
		document.getElementById("8").style.opacity = "100%";
		localStorage.setItem("EIGHT", "clicked");
	}
	if (random == 9)
	{
		document.location = "9.html";
		document.getElementById("9").style.opacity = "100%";
		localStorage.setItem("NINE", "clicked");
	}
	if (random == 10)
	{
		document.location = "10.html";
		document.getElementById("10").style.opacity = "100%";
		localStorage.setItem("TEN", "clicked");
	}
	if (random == 11)
	{
		document.location = "11.html";
		document.getElementById("11").style.opacity = "100%";
		localStorage.setItem("ELEVEN", "clicked");
	}
	if (random == 12)
	{
		document.location = "12.html";
		document.getElementById("12").style.opacity = "100%";
		localStorage.setItem("TWELVE", "clicked");
	}
	if (random == 13)
	{
		document.location = "13.html";
		document.getElementById("13").style.opacity = "100%";
		localStorage.setItem("THIRTEEN", "clicked");
	}
	if (random == 14)
	{
		document.location = "14.html";
		document.getElementById("14").style.opacity = "100%";
		localStorage.setItem("FOURTEEN", "clicked");
	}
	if (random == 15)
	{
		document.location = "15.html";
		document.getElementById("15").style.opacity = "100%";
		localStorage.setItem("FIFTEEN", "clicked");
	}
	if (random == 16)
	{
		document.location = "16.html";
		document.getElementById("16").style.opacity = "100%";
		localStorage.setItem("SIXTEEN", "clicked");
	}
	if (random == 17)
	{
		document.location = "17.html";
		document.getElementById("17").style.opacity = "100%";
		localStorage.setItem("SEVENTEEN", "clicked");
	}
	if (random == 18)
	{
		document.location = "18.html";
		document.getElementById("18").style.opacity = "100%";
		localStorage.setItem("EIGHTTEEN", "clicked");
	}
	if (random == 19)
	{
		document.location = "19.html";
		document.getElementById("19").style.opacity = "100%";
		localStorage.setItem("NINETEEN", "clicked");
	}
	if (random == 20)
	{
		document.location = "20.html";
		document.getElementById("20").style.opacity = "100%";
		localStorage.setItem("TWENTY", "clicked");
	}
	if (random == 21 || random == 22)
	{
		document.location = "21.html";
		document.getElementById("21").style.opacity = "100%";
		localStorage.setItem("TWENTYONE", "clicked");
	}
	if (random == 23 || random == 24)
	{
		document.location = "22.html";
		document.getElementById("22").style.opacity = "100%";
		localStorage.setItem("TWENTYTWO", "clicked");
	}
	if (random == 25 || random == 26)
	{
		document.location = "23.html";
		document.getElementById("23").style.opacity = "100%";
		localStorage.setItem("TWENTYTHREE", "clicked");
	}
	if (random == 27 || random == 28)
	{
		document.location = "24.html";
		document.getElementById("24").style.opacity = "100%";
		localStorage.setItem("TWENTYFOUR", "clicked");
	}
	if (random == 29 || random == 30)
	{
		document.location = "25.html";
		document.getElementById("25").style.opacity = "100%";
		localStorage.setItem("TWENTYFIVE", "clicked");
	}
	if (random == 31 || random == 32)
	{
		document.location = "26.html";
		document.getElementById("26").style.opacity = "100%";
		localStorage.setItem("TWENTYSIX", "clicked");
	}
	if (random == 33 || random == 34)
	{
		document.location = "27.html";
		document.getElementById("27").style.opacity = "100%";
		localStorage.setItem("TWENTYSEVEN", "clicked");
	}
	if (random == 35 || random == 36)
	{
		document.location = "28.html";
		document.getElementById("28").style.opacity = "100%";
		localStorage.setItem("TWENTYEIGHT", "clicked");
	}
	if (random == 37 || random == 38)
	{
		document.location = "29.html";
		document.getElementById("29").style.opacity = "100%";
		localStorage.setItem("TWENTYNINE", "clicked");
	}
	if (random == 39 || random == 40)
	{
		document.location = "30.html";
		document.getElementById("30").style.opacity = "100%";
		localStorage.setItem("THIRTY", "clicked");
	}
	if (random == 41 || random == 42)
	{
		document.location = "31.html";
		document.getElementById("31").style.opacity = "100%";
		localStorage.setItem("THIRTYONE", "clicked");
	}
	if (random == 43 || random == 44)
	{
		document.location = "32.html";
		document.getElementById("32").style.opacity = "100%";
		localStorage.setItem("THIRTYTWO", "clicked");
	}
	if (random == 45 || random == 46)
	{
		document.location = "33.html";
		document.getElementById("33").style.opacity = "100%";
		localStorage.setItem("THIRTYTHREE", "clicked");
	}
	if (random == 47 || random == 48)
	{
		document.location = "34.html";
		document.getElementById("34").style.opacity = "100%";
		localStorage.setItem("THIRTYFOUR", "clicked");
	}
	if (random == 49 || random == 50)
	{
		document.location = "35.html";
		document.getElementById("35").style.opacity = "100%";
		localStorage.setItem("THIRTYFIVE", "clicked");
	}
	if (random == 51 || random == 52)
	{
		document.location = "36.html";
		document.getElementById("36").style.opacity = "100%";
		localStorage.setItem("THIRTYSIX", "clicked");
	}
	if (random == 53 || random == 54)
	{
		document.location = "37.html";
		document.getElementById("37").style.opacity = "100%";
		localStorage.setItem("THIRTYSEVEN", "clicked");
	}
	if (random == 55 || random == 56)
	{
		document.location = "38.html";
		document.getElementById("38").style.opacity = "100%";
		localStorage.setItem("THIRTYEIGHT", "clicked");
	}
	if (random == 57 || random == 58)
	{
		document.location = "39.html";
		document.getElementById("39").style.opacity = "100%";
		localStorage.setItem("THIRTYNINE", "clicked");
	}
	if (random == 59 || random == 60)
	{
		document.location = "40.html";
		document.getElementById("40").style.opacity = "100%";
		localStorage.setItem("FOURTY", "clicked");
	}
	if (random == 61 || random == 62 || random == 63)
	{
		document.location = "41.html";
		document.getElementById("41").style.opacity = "100%";
		localStorage.setItem("FOURTYONE", "clicked");
	}
	if (random == 64 || random == 65 || random == 66)
	{
		document.location = "42.html";
		document.getElementById("42").style.opacity = "100%";
		localStorage.setItem("FOURTYTWO", "clicked");
	}
	if (random == 67 || random == 68 || random == 69)
	{
		document.location = "43.html";
		document.getElementById("43").style.opacity = "100%";
		localStorage.setItem("FOURTYTHREE", "clicked");
	}
	if (random == 70 || random == 71 || random == 72)
	{
		document.location = "44.html";
		document.getElementById("44").style.opacity = "100%";
		localStorage.setItem("FOURTYFOUR", "clicked");
	}
	if (random == 73 || random == 74 || random == 75)
	{
		document.location = "45.html";
		document.getElementById("45").style.opacity = "100%";
		localStorage.setItem("FOURTYFIVE", "clicked");
	}
	if (random == 76 || random == 77 || random == 78)
	{
		document.location = "46.html";
		document.getElementById("46").style.opacity = "100%";
		localStorage.setItem("FOURTYSIX", "clicked");
	}
	if (random == 79 || random == 80 || random == 81)
	{
		document.location = "47.html";
		document.getElementById("47").style.opacity = "100%";
		localStorage.setItem("FOURTYSEVEN", "clicked");
	}
	if (random == 82 || random == 83 || random == 84)
	{
		document.location = "48.html";
		document.getElementById("48").style.opacity = "100%";
		localStorage.setItem("FOURTYEIGHT", "clicked");
	}
	if (random == 85 || random == 86 || random == 87)
	{
		document.location = "49.html";
		document.getElementById("49").style.opacity = "100%";
		localStorage.setItem("FOURTYNINE", "clicked");
	}
	if (random == 88 || random == 89 || random == 90)
	{
		document.location = "50.html";
		document.getElementById("50").style.opacity = "100%";
		localStorage.setItem("FIFTY", "clicked");
	}
	if (random == 91 || random == 92 || random == 93)
	{
		document.location = "51.html";
		document.getElementById("51").style.opacity = "100%";
		localStorage.setItem("FIFTYONE", "clicked");
	}
	if (random == 94 || random == 95 || random == 96)
	{
		document.location = "52.html";
		document.getElementById("52").style.opacity = "100%";
		localStorage.setItem("FIFTYTWO", "clicked");
	}
	if (random == 97 || random == 98 || random == 99)
	{
		document.location = "53.html";
		document.getElementById("53").style.opacity = "100%";
		localStorage.setItem("FIFTYTHREE", "clicked");
	}
	if (random == 100 || random == 101 || random == 102)
	{
		document.location = "54.html";
		document.getElementById("54").style.opacity = "100%";
		localStorage.setItem("FIFTYFOUR", "clicked");
	}
	if (random == 103 || random == 104 || random == 105)
	{
		document.location = "55.html";
		document.getElementById("55").style.opacity = "100%";
		localStorage.setItem("FIFTYFIVE", "clicked");
	}
	if (random == 106 || random == 107 || random == 108)
	{
		document.location = "56.html";
		document.getElementById("56").style.opacity = "100%";
		localStorage.setItem("FIFTYSIX", "clicked");
	}
	if (random == 109 || random == 110 || random == 111)
	{
		document.location = "57.html";
		document.getElementById("57").style.opacity = "100%";
		localStorage.setItem("FIFTYSEVEN", "clicked");
	}
	if (random == 112 || random == 113 || random == 114)
	{
		document.location = "58.html";
		document.getElementById("58").style.opacity = "100%";
		localStorage.setItem("FIFTYEIGHT", "clicked");
	}
	if (random == 115 || random == 116 || random == 117)
	{
		document.location = "59.html";
		document.getElementById("59").style.opacity = "100%";
		localStorage.setItem("FIFTYNINE", "clicked");
	}
	if (random == 118 || random == 119 || random == 120)
	{
		document.location = "60.html";
		document.getElementById("60").style.opacity = "100%";
		localStorage.setItem("SIXTY", "clicked");
	}
	if (random == 121 || random == 122 || random == 123 || random == 124)
	{
		document.location = "61.html";
		document.getElementById("61").style.opacity = "100%";
		localStorage.setItem("SIXTYONE", "clicked");
	}
	if (random == 125 || random == 126 || random == 127 || random == 128)
	{
		document.location = "62.html";
		document.getElementById("62").style.opacity = "100%";
		localStorage.setItem("SIXTYTWO", "clicked");
	}
	if (random == 129 || random == 130 || random == 131 || random == 132)
	{
		document.location = "63.html";
		document.getElementById("63").style.opacity = "100%";
		localStorage.setItem("SIXTYTHREE", "clicked");
	}
	if (random == 133 || random == 134 || random == 135 || random == 136)
	{
		document.location = "64.html";
		document.getElementById("64").style.opacity = "100%";
		localStorage.setItem("SIXTYFOUR", "clicked");
	}
	if (random == 137 || random == 138 || random == 139 || random == 140)
	{
		document.location = "65.html";
		document.getElementById("65").style.opacity = "100%";
		localStorage.setItem("SIXTYFIVE", "clicked");
	}
	if (random == 141 || random == 142 || random == 143 || random == 144)
	{
		document.location = "66.html";
		document.getElementById("66").style.opacity = "100%";
		localStorage.setItem("SIXTYSIX", "clicked");
	}
	if (random == 145 || random == 146 || random == 147 || random == 148)
	{
		document.location = "67.html";
		document.getElementById("67").style.opacity = "100%";
		localStorage.setItem("SIXTYSEVEN", "clicked");
	}
	if (random == 149 || random == 150 || random == 151 || random == 152)
	{
		document.location = "68.html";
		document.getElementById("68").style.opacity = "100%";
		localStorage.setItem("SIXTYEIGHT", "clicked");
	}
	if (random == 153 || random == 154 || random == 155 || random == 156)
	{
		document.location = "69.html";
		document.getElementById("69").style.opacity = "100%";
		localStorage.setItem("SIXTYNINE", "clicked");
	}
	if (random == 157 || random == 158 || random == 159 || random == 160)
	{
		document.location = "70.html";
		document.getElementById("70").style.opacity = "100%";
		localStorage.setItem("SEVENTY", "clicked");
	}
	if (random == 161 || random == 162 || random == 163 || random == 164)
	{
		document.location = "71.html";
		document.getElementById("71").style.opacity = "100%";
		localStorage.setItem("SEVENTYONE", "clicked");
	}
	if (random == 165 || random == 166 || random == 167 || random == 168)
	{
		document.location = "72.html";
		document.getElementById("72").style.opacity = "100%";
		localStorage.setItem("SEVENTYTWO", "clicked");
	}
	if (random == 169 || random == 170 || random == 171 || random == 172)
	{
		document.location = "73.html";
		document.getElementById("73").style.opacity = "100%";
		localStorage.setItem("SEVENTYTHREE", "clicked");
	}
	if (random == 173 || random == 174 || random == 175 || random == 176)
	{
		document.location = "74.html";
		document.getElementById("74").style.opacity = "100%";
		localStorage.setItem("SEVENTYFOUR", "clicked");
	}
	if (random == 177 || random == 178 || random == 179 || random == 180)
	{
		document.location = "75.html";
		document.getElementById("75").style.opacity = "100%";
		localStorage.setItem("SEVENTYFIVE", "clicked");
	}
	if (random == 181 || random == 182 || random == 183 || random == 184)
	{
		document.location = "76.html";
		document.getElementById("76").style.opacity = "100%";
		localStorage.setItem("SEVENTYSIX", "clicked");
	}
	if (random == 185 || random == 186 || random == 187 || random == 188)
	{
		document.location = "77.html";
		document.getElementById("77").style.opacity = "100%";
		localStorage.setItem("SEVENTYSEVEN", "clicked");
	}
	if (random == 189 || random == 190 || random == 191 || random == 192)
	{
		document.location = "78.html";
		document.getElementById("78").style.opacity = "100%";
		localStorage.setItem("SEVENTYEIGHT", "clicked");
	}
	if (random == 193 || random == 194 || random == 195 || random == 196)
	{
		document.location = "79.html";
		document.getElementById("79").style.opacity = "100%";
		localStorage.setItem("SEVENTYNINE", "clicked");
	}
	if (random == 197 || random == 198 || random == 199 || random == 200)
	{
		document.location = "80.html";
		document.getElementById("80").style.opacity = "100%";
		localStorage.setItem("EIGHTY", "clicked");
	}
	if (random == 201 || random == 202 || random == 203 || random == 204 || random == 205)
	{
		document.location = "81.html";
		document.getElementById("81").style.opacity = "100%";
		localStorage.setItem("EIGHTYONE", "clicked");
	}
	if (random == 206 || random == 207 || random == 208 || random == 209 || random == 210)
	{
		document.location = "82.html";
		document.getElementById("82").style.opacity = "100%";
		localStorage.setItem("EIGHTYTWO", "clicked");
	}
	if (random == 211 || random == 212 || random == 213 || random == 214 || random == 215)
	{
		document.location = "83.html";
		document.getElementById("83").style.opacity = "100%";
		localStorage.setItem("EIGHTYTHREE", "clicked");
	}
	if (random == 216 || random == 217 || random == 218 || random == 219 || random == 220)
	{
		document.location = "84.html";
		document.getElementById("84").style.opacity = "100%";
		localStorage.setItem("EIGHTYFOUR", "clicked");
	}
	if (random == 221 || random == 222 || random == 223 || random == 224 || random == 225)
	{
		document.location = "85.html";
		document.getElementById("85").style.opacity = "100%";
		localStorage.setItem("EIGHTYFIVE", "clicked");
	}
	if (random == 226 || random == 227 || random == 228 || random == 229 || random == 230)
	{
		document.location = "86.html";
		document.getElementById("86").style.opacity = "100%";
		localStorage.setItem("EIGHTYSIX", "clicked");
	}
	if (random == 231 || random == 232 || random == 233 || random == 234 || random == 235)
	{
		document.location = "87.html";
		document.getElementById("87").style.opacity = "100%";
		localStorage.setItem("EIGHTYSEVEN", "clicked");
	}
	if (random == 236 || random == 237 || random == 238 || random == 239 || random == 240)
	{
		document.location = "88.html";
		document.getElementById("88").style.opacity = "100%";
		localStorage.setItem("EIGHTYEIGHT", "clicked");
	}
	if (random == 241 || random == 242 || random == 243 || random == 244 || random == 245)
	{
		document.location = "89.html";
		document.getElementById("89").style.opacity = "100%";
		localStorage.setItem("EIGHTYNINE", "clicked");
	}
	if (random == 246 || random == 247 || random == 248 || random == 249 || random == 250)
	{
		document.location = "90.html";
		document.getElementById("90").style.opacity = "100%";
		localStorage.setItem("NINTY", "clicked");
	}
	if (random == 251 || random == 252 || random == 253 || random == 254 || random == 255)
	{
		document.location = "91.html";
		document.getElementById("91").style.opacity = "100%";
		localStorage.setItem("NINTYONE", "clicked");
	}
	if (random == 256 || random == 257 || random == 258 || random == 259 || random == 260)
	{
		document.location = "92.html";
		document.getElementById("92").style.opacity = "100%";
		localStorage.setItem("NINTYTWO", "clicked");
	}
	if (random == 261 || random == 262 || random == 263 || random == 264 || random == 265)
	{
		document.location = "93.html";
		document.getElementById("93").style.opacity = "100%";
		localStorage.setItem("NINTYTHREE", "clicked");
	}
	if (random == 266 || random == 267 || random == 268 || random == 269 || random == 270)
	{
		document.location = "94.html";
		document.getElementById("94").style.opacity = "100%";
		localStorage.setItem("NINTYFOUR", "clicked");
	}
	if (random == 271 || random == 272 || random == 273 || random == 274 || random == 275)
	{
		document.location = "95.html";
		document.getElementById("95").style.opacity = "100%";
		localStorage.setItem("NINTYFIVE", "clicked");
	}
	if (random == 276 || random == 277 || random == 278 || random == 279 || random == 280)
	{
		document.location = "96.html";
		document.getElementById("96").style.opacity = "100%";
		localStorage.setItem("NINTYSIX", "clicked");
	}
	if (random == 281 || random == 282 || random == 283 || random == 284 || random == 285)
	{
		document.location = "97.html";
		document.getElementById("97").style.opacity = "100%";
		localStorage.setItem("NINTYSEVEN", "clicked");
	}
	if (random == 286 || random == 287 || random == 288 || random == 289 || random == 290)
	{
		document.location = "98.html";
		document.getElementById("98").style.opacity = "100%";
		localStorage.setItem("NINTYEIGHT", "clicked");
	}
	if (random == 291 || random == 292 || random == 293 || random == 294 || random == 295)
	{
		document.location = "99.html";
		document.getElementById("99").style.opacity = "100%";
		localStorage.setItem("NINTYNINE", "clicked");
	}
	if (random == 296 || random == 297 || random == 298 || random == 299 || random == 300)
	{
		document.location = "100.html";
		document.getElementById("100").style.opacity = "100%";
		localStorage.setItem("ONEHUNDRED", "clicked");
	}
}