var page4 = 1;
var page8 = 1;
var page12 = 1;
var page16 = 1;
var page20 = 1;
var page24 = 1;
var page28 = 1;
var page32 = 1;
var page36 = 1;
var page40 = 1;
var page44 = 1;
var page48 = 1;
var page52 = 1;
var page56 = 1;
var page60 = 1;
var page64 = 1;
var page68 = 1;
var page72 = 1;
var page76 = 1;
var page80 = 1;
var page84 = 1;
var page88 = 1;
var page92 = 1;
var page96 = 1;
var page100 = 1;


function Start4()
{
	document.getElementById("story4").style.display = "";
	document.getElementById("start4").style.display = "none";
}
function Restart4()
{
	page4 = 1;
	document.getElementById("4-me").style.display = "";
	document.getElementById("4-scout").style.display = "none";
	document.getElementById("4-kid1").style.display = "none";
	document.getElementById("4-kid2").style.display = "none";
	document.getElementById("4-kid3").style.display = "none";
	document.getElementById("4-kid4").style.display = "none";
	document.getElementById("4-kid5").style.display = "none";
	document.getElementById("4-kid6").style.display = "none";
	document.getElementById("4-kid7").style.display = "none";
	document.getElementById("text-4-1").style.display = "";
	document.getElementById("text-4-2").style.display = "none";
	document.getElementById("text-4-3").style.display = "none";
	document.getElementById("text-4-4").style.display = "none";
	document.getElementById("text-4-5a").style.display = "none";
	document.getElementById("text-4-5b").style.display = "none";
	document.getElementById("text-4-6").style.display = "none";
	document.getElementById("text-4-7a").style.display = "none";
	document.getElementById("text-4-7b").style.display = "none";
	document.getElementById("next4").style.display = "";
}
function Next4()
{
	if(page4 == 1)
	{
		page4 = 2;
		document.getElementById("4-me").style.display = "none";
		document.getElementById("4-scout").style.display = "";
		document.getElementById("text-4-1").style.display = "none";
		document.getElementById("text-4-2").style.display = "";
	}
	else if(page4 == 2)
	{
		page4 = 3;
		document.getElementById("4-scout").style.display = "none";
		document.getElementById("4-kid1").style.display = "";
		document.getElementById("4-kid2").style.display = "";
		document.getElementById("4-kid3").style.display = "";
		document.getElementById("4-kid4").style.display = "";
		document.getElementById("4-kid5").style.display = "";
		document.getElementById("4-kid6").style.display = "";
		document.getElementById("4-kid7").style.display = "";
		document.getElementById("text-4-2").style.display = "none";
		document.getElementById("text-4-3").style.display = "";
	}
	else if(page4 == 3)
	{
		page4 = 4;
		document.getElementById("4-me").style.display = "";
		document.getElementById("4-scout").style.display = "";
		document.getElementById("text-4-3").style.display = "none";
		document.getElementById("text-4-4").style.display = "";
	}
	else if(page4 == 4)
	{
		page4 = 5;
		document.getElementById("text-4-4").style.display = "none";
		document.getElementById("text-4-5a").style.display = "";
		document.getElementById("text-4-5b").style.display = "";
	}
	else if(page4 == 5)
	{
		page4 = 6;
		document.getElementById("text-4-5a").style.display = "none";
		document.getElementById("text-4-5b").style.display = "none";
		document.getElementById("text-4-6").style.display = "";
	}
	else if(page4 == 6)
	{
		document.getElementById("next4").style.display = "none";
		document.getElementById("text-4-6").style.display = "none";
		document.getElementById("text-4-7a").style.display = "";
		document.getElementById("text-4-7b").style.display = "";
	}
}

function Start8()
{
	document.getElementById("story8").style.display = "";
	document.getElementById("start8").style.display = "none";
}
function Restart8()
{
	page8 = 1;
	document.getElementById("8-me").style.display = "";
	document.getElementById("8-me-sad").style.display = "none";
	document.getElementById("8-scout").style.display = "none";
	document.getElementById("8-ava").style.display = "none";
	document.getElementById("8-courtney").style.display = "none";
	document.getElementById("text-8-1").style.display = "";
	document.getElementById("text-8-2").style.display = "none";
	document.getElementById("text-8-3").style.display = "none";
	document.getElementById("text-8-4").style.display = "none";
	document.getElementById("text-8-5a").style.display = "none";
	document.getElementById("text-8-5b").style.display = "none";
	document.getElementById("text-8-6").style.display = "none";
	document.getElementById("text-8-7").style.display = "none";
	document.getElementById("text-8-8a").style.display = "none";
	document.getElementById("text-8-8b").style.display = "none";
	document.getElementById("next8").style.display = "";
}
function Next8()
{
	if(page8 == 1)
	{
		page8 = 2;
		document.getElementById("8-me").style.display = "none";
		document.getElementById("8-scout").style.display = "";
		document.getElementById("text-8-1").style.display = "none";
		document.getElementById("text-8-2").style.display = "";
	}
	else if(page8 == 2)
	{
		page8 = 3;
		document.getElementById("8-scout").style.display = "none";
		document.getElementById("8-ava").style.display = "";
		document.getElementById("8-courtney").style.display = "";
		document.getElementById("text-8-2").style.display = "none";
		document.getElementById("text-8-3").style.display = "";
	}
	else if(page8 == 3)
	{
		page8 = 4;
		document.getElementById("8-me").style.display = "";
		document.getElementById("8-scout").style.display = "";
		document.getElementById("text-8-3").style.display = "none";
		document.getElementById("text-8-4").style.display = "";
	}
	else if(page8 == 4)
	{
		page8 = 5;
		document.getElementById("8-me").style.display = "none";
		document.getElementById("8-ava").style.display = "none";
		document.getElementById("text-8-4").style.display = "none";
		document.getElementById("text-8-5a").style.display = "";
		document.getElementById("text-8-5b").style.display = "";
	}
	else if(page8 == 5)
	{
		page8 = 6;
		document.getElementById("8-me-sad").style.display = "";
		document.getElementById("text-8-5a").style.display = "none";
		document.getElementById("text-8-5b").style.display = "none";
		document.getElementById("text-8-6").style.display = "";
	}
	else if(page8 == 6)
	{
		page8 = 7;
		document.getElementById("8-me-sad").style.display = "none";
		document.getElementById("8-courtney").style.display = "none";
		document.getElementById("8-me").style.display = "";
		document.getElementById("8-scout").style.display = "";
		document.getElementById("text-8-6").style.display = "none";
		document.getElementById("text-8-7").style.display = "";
	}
	else if(page8 == 7)
	{
		document.getElementById("next8").style.display = "none";
		document.getElementById("text-8-7").style.display = "none";
		document.getElementById("text-8-8a").style.display = "";
		document.getElementById("text-8-8b").style.display = "";
	}
}

function Start12()
{
	document.getElementById("story12").style.display = "";
	document.getElementById("start12").style.display = "none";
}
function Restart12()
{
	page12 = 1;
	document.getElementById("12-me").style.display = "";
	document.getElementById("12-scout").style.display = "none";
	document.getElementById("12-lucas").style.display = "none";
	document.getElementById("12-lucas-devil").style.display = "none";
	document.getElementById("12-alex").style.display = "none";
	document.getElementById("12-alex-devil").style.display = "none";
	document.getElementById("12-alex-cute").style.display = "none";
	document.getElementById("text-12-1").style.display = "";
	document.getElementById("text-12-2").style.display = "none";
	document.getElementById("text-12-3").style.display = "none";
	document.getElementById("text-12-4").style.display = "none";
	document.getElementById("text-12-5").style.display = "none";
	document.getElementById("text-12-6").style.display = "none";
	document.getElementById("text-12-7").style.display = "none";
	document.getElementById("text-12-8a").style.display = "none";
	document.getElementById("text-12-8b").style.display = "none";
	document.getElementById("next12").style.display = "";
}
function Next12()
{
	if (page12 == 1)
	{
		page12 = 2;
		document.getElementById("12-me").style.display = "none";
		document.getElementById("12-scout").style.display = "";
		document.getElementById("text-12-1").style.display = "none";
		document.getElementById("text-12-2").style.display = "";
	}
	else if (page12 == 2)
	{
		page12 = 3;
		document.getElementById("12-scout").style.display = "none";
		document.getElementById("12-lucas").style.display = "";
		document.getElementById("12-alex").style.display = "";
		document.getElementById("text-12-2").style.display = "none";
		document.getElementById("text-12-3").style.display = "";
	}
	else if (page12 == 3)
	{
		page12 = 4;
		document.getElementById("12-lucas").style.display = "none";
		document.getElementById("12-alex").style.display = "none";
		document.getElementById("12-lucas-devil").style.display = "";
		document.getElementById("12-alex-devil").style.display = "";
		document.getElementById("text-12-3").style.display = "none";
		document.getElementById("text-12-4").style.display = "";
	}
	else if (page12 == 4)
	{
		page12 = 5;
		document.getElementById("12-lucas-devil").style.display = "none";
		document.getElementById("12-alex-devil").style.display = "none";
		document.getElementById("12-scout").style.display = "";
		document.getElementById("12-lucas").style.display = "";
		document.getElementById("12-alex").style.display = "";
		document.getElementById("text-12-4").style.display = "none";
		document.getElementById("text-12-5").style.display = "";
	}
	else if (page12 == 5)
	{
		page12 = 6;
		document.getElementById("12-lucas").style.display = "none";
		document.getElementById("12-alex").style.display = "none";
		document.getElementById("12-alex-cute").style.display = "";
		document.getElementById("text-12-5").style.display = "none";
		document.getElementById("text-12-6").style.display = "";
	}
	else if (page12 == 6)
	{
		page12 = 7;
		document.getElementById("12-alex-cute").style.display = "none";
		document.getElementById("12-alex").style.display = "";
		document.getElementById("12-lucas").style.display = "";
		document.getElementById("text-12-6").style.display = "none";
		document.getElementById("text-12-7").style.display = "";
	}
	else if (page12 == 7)
	{
		document.getElementById("next12").style.display = "none";
		document.getElementById("12-me").style.display = "";
		document.getElementById("12-scout").style.display = "";
		document.getElementById("text-12-7").style.display = "none";
		document.getElementById("text-12-8a").style.display = "";
		document.getElementById("text-12-8b").style.display = "";
	}
}

function Start16()
{
	document.getElementById("story16").style.display = "";
	document.getElementById("start16").style.display = "none";
}
function Restart16()
{
	page16 = 1;
	document.getElementById("16-me").style.display = "";
	document.getElementById("16-me-sad1").style.display = "none";
	document.getElementById("16-me-sad2").style.display = "none";
	document.getElementById("16-me-sad3").style.display = "none";
	document.getElementById("16-me-happy1").style.display = "none";
	document.getElementById("16-me-happy2").style.display = "none";
	document.getElementById("16-me-happy3").style.display = "none";
	document.getElementById("16-heart").style.display = "none";
	document.getElementById("text-16-1").style.display = "";
	document.getElementById("text-16-2").style.display = "none";
	document.getElementById("text-16-3").style.display = "none";
	document.getElementById("text-16-5").style.display = "none";
	document.getElementById("text-16-6").style.display = "none";
	document.getElementById("text-16-8a").style.display = "none";
	document.getElementById("text-16-8b").style.display = "none";
	document.getElementById("text-16-8c").style.display = "none";
	document.getElementById("next16").style.display = "";
}
function Next16()
{
	if (page16 == 1)
	{
		page16 = 2;
		document.getElementById("16-me").style.display = "none";
		document.getElementById("16-me-sad1").style.display = "";
		document.getElementById("text-16-1").style.display = "none";
		document.getElementById("text-16-2").style.display = "";
	}
	else if (page16 == 2)
	{
		page16 = 3;
		document.getElementById("16-me-sad1").style.display = "none";
		document.getElementById("16-me-sad2").style.display = "";
		document.getElementById("text-16-2").style.display = "none";
		document.getElementById("text-16-3").style.display = "";
	}
	else if (page16 == 3)
	{
		page16 = 4;
		document.getElementById("16-me-sad2").style.display = "none";
		document.getElementById("16-me-sad3").style.display = "";
	}
	else if (page16 == 4)
	{
		page16 = 5;
		document.getElementById("16-me-sad3").style.display = "none";
		document.getElementById("16-me-happy1").style.display = "";
		document.getElementById("text-16-3").style.display = "none";
		document.getElementById("text-16-5").style.display = "";
	}
	else if (page16 == 5)
	{
		page16 = 6;
		document.getElementById("16-me-happy1").style.display = "none";
		document.getElementById("16-me-happy2").style.display = "";
		document.getElementById("text-16-5").style.display = "none";
		document.getElementById("text-16-6").style.display = "";
	}
	else if (page16 == 6)
	{
		page16 = 7;
		document.getElementById("16-me-happy2").style.display = "none";
		document.getElementById("16-me-happy3").style.display = "";
	}
	else if (page16 == 7)
	{
		document.getElementById("next16").style.display = "none";
		document.getElementById("16-me-happy3").style.display = "none";
		document.getElementById("16-heart").style.display = "";
		document.getElementById("text-16-6").style.display = "none";
		document.getElementById("text-16-8a").style.display = "";
		document.getElementById("text-16-8b").style.display = "";
		document.getElementById("text-16-8c").style.display = "";
	}
}

function Start20()
{
	document.getElementById("story20").style.display = "";
	document.getElementById("start20").style.display = "none";
}
function Restart20()
{
	page20 = 1;
	document.getElementById("20-scout").style.display = "";
	document.getElementById("text-20-1").style.display = "";
	document.getElementById("text-20-2a").style.display = "none";
	document.getElementById("text-20-2b").style.display = "none";
	document.getElementById("text-20-3a").style.display = "none";
	document.getElementById("text-20-3b").style.display = "none";
	document.getElementById("next20").style.display = "";
}
function Next20()
{
	if(page20 == 1)
	{
		page20 = 2;
		document.getElementById("text-20-1").style.display = "none";
		document.getElementById("text-20-2a").style.display = "";
		document.getElementById("text-20-2b").style.display = "";
	}
	else if(page20 == 2)
	{
		document.getElementById("next20").style.display = "none";
		document.getElementById("text-20-2a").style.display = "none";
		document.getElementById("text-20-2b").style.display = "none";
		document.getElementById("text-20-3a").style.display = "";
		document.getElementById("text-20-3b").style.display = "";
	}
}

function Start24()
{
	document.getElementById("story24").style.display = "";
	document.getElementById("start24").style.display = "none";
}
function Restart24()
{
	page24 = 1;
	document.getElementById("24-jax").style.display = "";
	document.getElementById("24-rexi").style.display = "none";
	document.getElementById("24-gigi").style.display = "none";
	document.getElementById("24-pete").style.display = "none";
	document.getElementById("text-24-1").style.display = "";
	document.getElementById("text-24-2").style.display = "none";
	document.getElementById("text-24-3").style.display = "none";
	document.getElementById("text-24-4").style.display = "none";
	document.getElementById("text-24-5").style.display = "none";
	document.getElementById("text-24-6").style.display = "none";
	document.getElementById("text-24-7a").style.display = "none";
	document.getElementById("text-24-7b").style.display = "none";
	document.getElementById("text-24-8").style.display = "none";
	document.getElementById("text-24-9a").style.display = "none";
	document.getElementById("text-24-9b").style.display = "none";
	document.getElementById("next24").style.display = "";
}
function Next24()
{
	if(page24 == 1)
	{
		page24 = 2;
		document.getElementById("24-jax").style.display = "none";
		document.getElementById("24-rexi").style.display = "";
		document.getElementById("text-24-1").style.display = "none";
		document.getElementById("text-24-2").style.display = "";
	}
	else if(page24 == 2)
	{
		page24 = 3;
		document.getElementById("24-rexi").style.display = "none";
		document.getElementById("24-gigi").style.display = "";
		document.getElementById("text-24-2").style.display = "none";
		document.getElementById("text-24-3").style.display = "";
	}
	else if(page24 == 3)
	{
		page24 = 4;
		document.getElementById("24-gigi").style.display = "none";
		document.getElementById("24-pete").style.display = "";
		document.getElementById("text-24-3").style.display = "none";
		document.getElementById("text-24-4").style.display = "";
	}
	else if(page24 == 4)
	{
		page24 = 5;
		document.getElementById("24-jax").style.display = "";
		document.getElementById("24-rexi").style.display = "";
		document.getElementById("24-gigi").style.display = "";
		document.getElementById("text-24-4").style.display = "none";
		document.getElementById("text-24-5").style.display = "";
	}
	else if(page24 == 5)
	{
		page24 = 6;
		document.getElementById("text-24-5").style.display = "none";
		document.getElementById("text-24-6").style.display = "";
	}
	else if(page24 == 6)
	{
		page24 = 7;
		document.getElementById("24-pete").style.display = "none";
		document.getElementById("24-pete-no").style.display = "";
		document.getElementById("text-24-6").style.display = "none";
		document.getElementById("text-24-7a").style.display = "";
		document.getElementById("text-24-7b").style.display = "";
	}
	else if(page24 == 7)
	{
		page24 = 8;
		document.getElementById("24-pete-no").style.display = "none";
		document.getElementById("text-24-7a").style.display = "none";
		document.getElementById("text-24-7b").style.display = "none";
		document.getElementById("text-24-8").style.display = "";
	}
	else if(page24 == 8)
	{
		document.getElementById("next24").style.display = "none";
		document.getElementById("24-pete").style.display = "";
		document.getElementById("text-24-8").style.display = "none";
		document.getElementById("text-24-9a").style.display = "";
		document.getElementById("text-24-9b").style.display = "";
	}
}

function Start28()
{
	document.getElementById("story28").style.display = "";
	document.getElementById("start28").style.display = "none";
}
function Restart28()
{
	page28 = 1;
	document.getElementById("28-person1").style.display = "";
	document.getElementById("28-person2").style.display = "none";
	document.getElementById("28-person3").style.display = "none";
	document.getElementById("28-person4").style.display = "none";
	document.getElementById("28-person5").style.display = "none";
	document.getElementById("28-person6").style.display = "none";
	document.getElementById("28-person7").style.display = "none";
	document.getElementById("28-person8").style.display = "none";
	document.getElementById("28-person9").style.display = "none";
	document.getElementById("28-person10").style.display = "none";
	document.getElementById("28-person11").style.display = "none";
	document.getElementById("28-person12").style.display = "none";
	document.getElementById("28-person13").style.display = "none";
	document.getElementById("28-person14").style.display = "none";
	document.getElementById("28-person15").style.display = "none";
	document.getElementById("28-person16").style.display = "none";
	document.getElementById("28-person17").style.display = "none";
	document.getElementById("28-person18").style.display = "none";
	document.getElementById("28-person19").style.display = "none";
	document.getElementById("28-person20").style.display = "none";
	document.getElementById("28-person21").style.display = "none";
	document.getElementById("28-person22").style.display = "none";
	document.getElementById("28-person23").style.display = "none";
	document.getElementById("28-person24").style.display = "none";
	document.getElementById("28-people").style.display = "none";
	document.getElementById("text-28-1").style.display = "";
	document.getElementById("text-28-2").style.display = "none";
	document.getElementById("text-28-25").style.display = "none";
	document.getElementById("text-28-26a").style.display = "none";
	document.getElementById("text-28-26b").style.display = "none";
	document.getElementById("next28").style.display = "";
}
function Next28()
{
	if(page28 == 1)
	{
		page28 = 2;
		document.getElementById("28-person1").style.display = "none";
		document.getElementById("28-person2").style.display = "";
		document.getElementById("text-28-1").style.display = "none";
		document.getElementById("text-28-2").style.display = "";
	}
	else if(page28 == 2)
	{
		page28 = 3;
		document.getElementById("28-person2").style.display = "none";
		document.getElementById("28-person3").style.display = "";
	}
	else if(page28 == 3)
	{
		page28 = 4;
		document.getElementById("28-person3").style.display = "none";
		document.getElementById("28-person4").style.display = "";
	}
	else if(page28 == 4)
	{
		page28 = 5;
		document.getElementById("28-person4").style.display = "none";
		document.getElementById("28-person5").style.display = "";
	}
	else if(page28 == 5)
	{
		page28 = 6;
		document.getElementById("28-person5").style.display = "none";
		document.getElementById("28-person6").style.display = "";
	}
	else if(page28 == 6)
	{
		page28 = 7;
		document.getElementById("28-person6").style.display = "none";
		document.getElementById("28-person7").style.display = "";
	}
	else if(page28 == 7)
	{
		page28 = 8;
		document.getElementById("28-person7").style.display = "none";
		document.getElementById("28-person8").style.display = "";
	}
	else if(page28 == 8)
	{
		page28 = 9;
		document.getElementById("28-person8").style.display = "none";
		document.getElementById("28-person9").style.display = "";
	}
	else if(page28 == 9)
	{
		page28 = 10;
		document.getElementById("28-person9").style.display = "none";
		document.getElementById("28-person10").style.display = "";
	}
	else if(page28 == 10)
	{
		page28 = 11;
		document.getElementById("28-person10").style.display = "none";
		document.getElementById("28-person11").style.display = "";
	}
	else if(page28 == 11)
	{
		page28 = 12;
		document.getElementById("28-person11").style.display = "none";
		document.getElementById("28-person12").style.display = "";
	}
	else if(page28 == 12)
	{
		page28 = 13;
		document.getElementById("28-person12").style.display = "none";
		document.getElementById("28-person13").style.display = "";
	}
	else if(page28 == 13)
	{
		page28 = 14;
		document.getElementById("28-person13").style.display = "none";
		document.getElementById("28-person14").style.display = "";
	}
	else if(page28 == 14)
	{
		page28 = 15;
		document.getElementById("28-person14").style.display = "none";
		document.getElementById("28-person15").style.display = "";
	}
	else if(page28 == 15)
	{
		page28 = 16;
		document.getElementById("28-person15").style.display = "none";
		document.getElementById("28-person16").style.display = "";
	}
	else if(page28 == 16)
	{
		page28 = 17;
		document.getElementById("28-person16").style.display = "none";
		document.getElementById("28-person17").style.display = "";
	}
	else if(page28 == 17)
	{
		page28 = 18;
		document.getElementById("28-person17").style.display = "none";
		document.getElementById("28-person18").style.display = "";
	}
	else if(page28 == 18)
	{
		page28 = 19;
		document.getElementById("28-person18").style.display = "none";
		document.getElementById("28-person19").style.display = "";
	}
	else if(page28 == 19)
	{
		page28 = 20;
		document.getElementById("28-person19").style.display = "none";
		document.getElementById("28-person20").style.display = "";
	}
	else if(page28 == 20)
	{
		page28 = 21;
		document.getElementById("28-person20").style.display = "none";
		document.getElementById("28-person21").style.display = "";
	}
	else if(page28 == 21)
	{
		page28 = 22;
		document.getElementById("28-person21").style.display = "none";
		document.getElementById("28-person22").style.display = "";
	}
	else if(page28 == 22)
	{
		page28 = 23;
		document.getElementById("28-person22").style.display = "none";
		document.getElementById("28-person23").style.display = "";
	}
	else if(page28 == 23)
	{
		page28 = 24;
		document.getElementById("28-person23").style.display = "none";
		document.getElementById("28-person24").style.display = "";
	}
	else if(page28 == 24)
	{
		page28 = 25;
		document.getElementById("28-person24").style.display = "none";
		document.getElementById("28-people").style.display = "";
		document.getElementById("text-28-2").style.display = "none";
		document.getElementById("text-28-25").style.display = "";
	}
	else if(page28 == 25)
	{
		document.getElementById("next28").style.display = "none";
		document.getElementById("text-28-25").style.display = "none";
		document.getElementById("text-28-26a").style.display = "";
		document.getElementById("text-28-26b").style.display = "";
		document.getElementById("text-28-26c").style.display = "";
	}
}

function Start32()
{
	document.getElementById("story32").style.display = "";
	document.getElementById("start32").style.display = "none";
}
function Restart32()
{
	page32 = 1;
	document.getElementById("32-princess").style.display = "";
	document.getElementById("32-princess-park").style.display = "none";
	document.getElementById("32-princess-beach").style.display = "none";
	document.getElementById("32-princess-space").style.display = "none";
	document.getElementById("32-princess-nap").style.display = "none";
	document.getElementById("text-32-1a").style.display = "";
	document.getElementById("text-32-1b").style.display = "";
	document.getElementById("text-32-1c").style.display = "";
	document.getElementById("text-32-2").style.display = "none";
	document.getElementById("text-32-3").style.display = "none";
	document.getElementById("text-32-4").style.display = "none";
	document.getElementById("text-32-5").style.display = "none";
	document.getElementById("text-32-6a").style.display = "none";
	document.getElementById("text-32-6b").style.display = "none";
	document.getElementById("text-32-6c").style.display = "none";
	document.getElementById("next32").style.display = "";
}
function Next32()
{
	if(page32 == 1)
	{
		page32 = 2;
		document.getElementById("32-princess").style.display = "none";
		document.getElementById("32-princess-park").style.display = "";
		document.getElementById("text-32-1a").style.display = "none";
		document.getElementById("text-32-1b").style.display = "none";
		document.getElementById("text-32-1c").style.display = "none";
		document.getElementById("text-32-2").style.display = "";
	}
	else if(page32 == 2)
	{
		page32 = 3;
		document.getElementById("32-princess-park").style.display = "none";
		document.getElementById("32-princess-beach").style.display = "";
		document.getElementById("text-32-2").style.display = "none";
		document.getElementById("text-32-3").style.display = "";
	}
	else if(page32 == 3)
	{
		page32 = 4;
		document.getElementById("32-princess-beach").style.display = "none";
		document.getElementById("32-princess-space").style.display = "";
		document.getElementById("text-32-3").style.display = "none";
		document.getElementById("text-32-4").style.display = "";
	}
	else if(page32 == 4)
	{
		page32 = 5;
		document.getElementById("32-princess-space").style.display = "none";
		document.getElementById("32-princess-nap").style.display = "";
		document.getElementById("text-32-4").style.display = "none";
		document.getElementById("text-32-5").style.display = "";
	}
	else if(page32 == 5)
	{
		document.getElementById("next32").style.display = "none";
		document.getElementById("32-princess-nap").style.display = "none";
		document.getElementById("32-princess").style.display = "";
		document.getElementById("text-32-5").style.display = "none";
		document.getElementById("text-32-6a").style.display = "";
		document.getElementById("text-32-6b").style.display = "";
		document.getElementById("text-32-6c").style.display = "";
	}
}

function Start36()
{
	document.getElementById("story36").style.display = "";
	document.getElementById("start36").style.display = "none";
}
function Restart36()
{
	page36 = 1;
	document.getElementById("36-me").style.display = "";
	document.getElementById("36-scout").style.display = "none";
	document.getElementById("36-us-lake").style.display = "none";
	document.getElementById("36-us-walk").style.display = "none";
	document.getElementById("36-us-movies").style.display = "none";
	document.getElementById("36-us-sixflags").style.display = "none";
	document.getElementById("36-us-burgers").style.display = "none";
	document.getElementById("36-us-bed").style.display = "none";
	document.getElementById("text-36-1").style.display = "";
	document.getElementById("text-36-2a").style.display = "none";
	document.getElementById("text-36-2b").style.display = "none";
	document.getElementById("text-36-3").style.display = "none";
	document.getElementById("text-36-4").style.display = "none";
	document.getElementById("text-36-5").style.display = "none";
	document.getElementById("text-36-6").style.display = "none";
	document.getElementById("text-36-7").style.display = "none";
	document.getElementById("text-36-8").style.display = "none";
	document.getElementById("text-36-9").style.display = "none";
	document.getElementById("text-36-10a").style.display = "none";
	document.getElementById("text-36-10b").style.display = "none";
	document.getElementById("next36").style.display = "";
}
function Next36()
{
	if(page36 == 1)
	{
		page36 = 2;
		document.getElementById("36-me").style.display = "none";
		document.getElementById("36-scout").style.display = "";
		document.getElementById("text-36-1").style.display = "none";
		document.getElementById("text-36-2a").style.display = "";
		document.getElementById("text-36-2b").style.display = "";
	}
	else if(page36 == 2)
	{
		page36 = 3;
		document.getElementById("36-me").style.display = "";
		document.getElementById("text-36-2a").style.display = "none";
		document.getElementById("text-36-2b").style.display = "none";
		document.getElementById("text-36-3").style.display = "";
	}
	else if(page36 == 3)
	{
		page36 = 4;
		document.getElementById("36-me").style.display = "none";
		document.getElementById("36-scout").style.display = "none";
		document.getElementById("36-us-lake").style.display = "";
		document.getElementById("text-36-3").style.display = "none";
		document.getElementById("text-36-4").style.display = "";
	}
	else if(page36 == 4)
	{
		page36 = 5;
		document.getElementById("36-us-lake").style.display = "none";
		document.getElementById("36-us-walk").style.display = "";
		document.getElementById("text-36-4").style.display = "none";
		document.getElementById("text-36-5").style.display = "";
	}
	else if(page36 == 5)
	{
		page36 = 6;
		document.getElementById("36-us-walk").style.display = "none";
		document.getElementById("36-us-movies").style.display = "";
		document.getElementById("text-36-5").style.display = "none";
		document.getElementById("text-36-6").style.display = "";
	}
	else if(page36 == 6)
	{
		page36 = 7;
		document.getElementById("36-us-movies").style.display = "none";
		document.getElementById("36-us-sixflags").style.display = "";
		document.getElementById("text-36-6").style.display = "none";
		document.getElementById("text-36-7").style.display = "";
	}
	else if(page36 == 7)
	{
		page36 = 8;
		document.getElementById("36-us-sixflags").style.display = "none";
		document.getElementById("36-us-burgers").style.display = "";
		document.getElementById("text-36-7").style.display = "none";
		document.getElementById("text-36-8").style.display = "";
	}
	else if(page36 == 8)
	{
		page36 = 9;
		document.getElementById("36-us-burgers").style.display = "none";
		document.getElementById("36-us-bed").style.display = "";
		document.getElementById("text-36-8").style.display = "none";
		document.getElementById("text-36-9").style.display = "";
	}
	else if(page36 == 9)
	{
		document.getElementById("next36").style.display = "none";
		document.getElementById("36-us-bed").style.display = "none";
		document.getElementById("36-me").style.display = "";
		document.getElementById("36-scout").style.display = "";
		document.getElementById("text-36-9").style.display = "none";
		document.getElementById("text-36-10a").style.display = "";
		document.getElementById("text-36-10b").style.display = "";
	}
}

function Start40()
{
	document.getElementById("story40").style.display = "";
	document.getElementById("start40").style.display = "none";
}
function Restart40()
{
	page40 = 1;
	document.getElementById("40-red").style.display = "";
	document.getElementById("40-orange").style.display = "none";
	document.getElementById("40-yellow").style.display = "none";
	document.getElementById("40-green").style.display = "none";
	document.getElementById("40-blue").style.display = "none";
	document.getElementById("40-purple").style.display = "none";
	document.getElementById("40-pink").style.display = "none";
	document.getElementById("text-40-1").style.display = "";
	document.getElementById("text-40-2").style.display = "none";
	document.getElementById("text-40-3").style.display = "none";
	document.getElementById("text-40-4").style.display = "none";
	document.getElementById("text-40-5").style.display = "none";
	document.getElementById("text-40-6").style.display = "none";
	document.getElementById("text-40-7a").style.display = "none";
	document.getElementById("text-40-7b").style.display = "none";
	document.getElementById("text-40-8a").style.display = "none";
	document.getElementById("text-40-8b").style.display = "none";
	document.getElementById("next40").style.display = "";
}
function Next40()
{
	if(page40 == 1)
	{
		page40 = 2;
		document.getElementById("40-red").style.display = "none";
		document.getElementById("40-orange").style.display = "";
		document.getElementById("text-40-1").style.display = "none";
		document.getElementById("text-40-2").style.display = "";
	}
	else if(page40 == 2)
	{
		page40 = 3;
		document.getElementById("40-orange").style.display = "none";
		document.getElementById("40-yellow").style.display = "";
		document.getElementById("text-40-2").style.display = "none";
		document.getElementById("text-40-3").style.display = "";
	}
	else if(page40 == 3)
	{
		page40 = 4;
		document.getElementById("40-yellow").style.display = "none";
		document.getElementById("40-green").style.display = "";
		document.getElementById("text-40-3").style.display = "none";
		document.getElementById("text-40-4").style.display = "";
	}
	else if(page40 == 4)
	{
		page40 = 5;
		document.getElementById("40-green").style.display = "none";
		document.getElementById("40-blue").style.display = "";
		document.getElementById("text-40-4").style.display = "none";
		document.getElementById("text-40-5").style.display = "";
	}
	else if(page40 == 5)
	{
		page40 = 6;
		document.getElementById("40-blue").style.display = "none";
		document.getElementById("40-purple").style.display = "";
		document.getElementById("text-40-5").style.display = "none";
		document.getElementById("text-40-6").style.display = "";
	}
	else if(page40 == 6)
	{
		page40 = 7;
		document.getElementById("40-purple").style.display = "none";
		document.getElementById("40-pink").style.display = "";
		document.getElementById("text-40-6").style.display = "none";
		document.getElementById("text-40-7a").style.display = "";
		document.getElementById("text-40-7b").style.display = "";
	}
	else if(page40 == 7)
	{
		document.getElementById("next40").style.display = "none";
		document.getElementById("text-40-7a").style.display = "none";
		document.getElementById("text-40-7b").style.display = "none";
		document.getElementById("text-40-8a").style.display = "";
		document.getElementById("text-40-8b").style.display = "";
	}
}

function Start44()
{
	document.getElementById("story44").style.display = "";
	document.getElementById("start44").style.display = "none";
}
function Restart44()
{
	page44 = 1;
	document.getElementById("44-red").style.display = "";
	document.getElementById("44-yellow").style.display = "none";
	document.getElementById("44-blue").style.display = "none";
	document.getElementById("44-orange").style.display = "none";
	document.getElementById("44-purple").style.display = "none";
	document.getElementById("44-green").style.display = "none";
	document.getElementById("44-rainbow").style.display = "none";
	document.getElementById("text-44-1a").style.display = "none";
	document.getElementById("text-44-1b").style.display = "none";
	document.getElementById("text-44-2").style.display = "";
	document.getElementById("text-44-3").style.display = "none";
	document.getElementById("text-44-4").style.display = "none";
	document.getElementById("text-44-5").style.display = "none";
	document.getElementById("text-44-6").style.display = "none";
	document.getElementById("text-44-7").style.display = "none";
	document.getElementById("text-44-8").style.display = "none";
	document.getElementById("text-44-9").style.display = "none";
	document.getElementById("text-44-10a").style.display = "none";
	document.getElementById("text-44-10b").style.display = "none";
	document.getElementById("text-44-11").style.display = "none";
	document.getElementById("text-44-12").style.display = "none";
	document.getElementById("text-44-13").style.display = "none";
	document.getElementById("next44").style.display = "";
}
function Next44()
{
	if(page44 == 1)
	{
		page44 = 2;
		document.getElementById("44-red").style.display = "";
		document.getElementById("text-44-1a").style.display = "none";
		document.getElementById("text-44-1b").style.display = "none";
		document.getElementById("text-44-2").style.display = "";
	}
	else if(page44 == 2)
	{
		page44 = 3;
		document.getElementById("44-red").style.display = "none";
		document.getElementById("44-yellow").style.display = "";
		document.getElementById("text-44-2").style.display = "none";
		document.getElementById("text-44-3").style.display = "";
	}
	else if(page44 == 3)
	{
		page44 = 4;
		document.getElementById("44-yellow").style.display = "none";
		document.getElementById("44-blue").style.display = "";
		document.getElementById("text-44-3").style.display = "none";
		document.getElementById("text-44-4").style.display = "";
	}
	else if(page44 == 4)
	{
		page44 = 5;
		document.getElementById("44-blue").style.display = "none";
		document.getElementById("44-red").style.display = "";
		document.getElementById("44-yellow").style.display = "";
		document.getElementById("text-44-4").style.display = "none";
		document.getElementById("text-44-5").style.display = "";
	}
	else if(page44 == 5)
	{
		page44 = 6;
		document.getElementById("44-red").style.display = "none";
		document.getElementById("44-yellow").style.display = "none";
		document.getElementById("44-orange").style.display = "";
		document.getElementById("text-44-5").style.display = "none";
		document.getElementById("text-44-6").style.display = "";
	}
	else if(page44 == 6)
	{
		page44 = 7;
		document.getElementById("44-orange").style.display = "none";
		document.getElementById("44-red").style.display = "";
		document.getElementById("44-blue").style.display = "";
		document.getElementById("text-44-6").style.display = "none";
		document.getElementById("text-44-7").style.display = "";
	}
	else if(page44 == 7)
	{
		page44 = 8;
		document.getElementById("44-red").style.display = "none";
		document.getElementById("44-blue").style.display = "none";
		document.getElementById("44-purple").style.display = "";
		document.getElementById("text-44-7").style.display = "none";
		document.getElementById("text-44-8").style.display = "";
	}
	else if(page44 == 8)
	{
		page44 = 9;
		document.getElementById("44-purple").style.display = "none";
		document.getElementById("44-blue").style.display = "";
		document.getElementById("44-yellow").style.display = "";
		document.getElementById("text-44-8").style.display = "none";
		document.getElementById("text-44-9").style.display = "";
	}
	else if(page44 == 9)
	{
		page44 = 10;
		document.getElementById("44-blue").style.display = "none";
		document.getElementById("44-yellow").style.display = "none";
		document.getElementById("44-green").style.display = "";
		document.getElementById("text-44-9").style.display = "none";
		document.getElementById("text-44-10a").style.display = "";
		document.getElementById("text-44-10b").style.display = "";
	}
	else if(page44 == 10)
	{
		page44 = 11;
		document.getElementById("44-green").style.display = "none";
		document.getElementById("44-red").style.display = "";
		document.getElementById("44-yellow").style.display = "";
		document.getElementById("44-blue").style.display = "";
		document.getElementById("text-44-10a").style.display = "none";
		document.getElementById("text-44-10b").style.display = "none";
		document.getElementById("text-44-11").style.display = "";
	}
	else if(page44 == 11)
	{
		page44 = 12;
		document.getElementById("44-red").style.display = "none";
		document.getElementById("44-yellow").style.display = "none";
		document.getElementById("44-blue").style.display = "none";
		document.getElementById("44-rainbow").style.display = "";
		document.getElementById("text-44-11").style.display = "none";
		document.getElementById("text-44-12").style.display = "";
	}
	else if(page44 == 12)
	{
		document.getElementById("next44").style.display = "none";
		document.getElementById("text-44-12").style.display = "none";
		document.getElementById("text-44-13").style.display = "";
	}
}

function Start48()
{
	document.getElementById("story48").style.display = "";
	document.getElementById("start48").style.display = "none";
}
function Restart48()
{
	page48 = 1;
	document.getElementById("48-scout").style.display = "";
	document.getElementById("48-me").style.display = "none";
	document.getElementById("48-bubble1").style.display = "none";
	document.getElementById("48-bubble2").style.display = "none";
	document.getElementById("48-bubble3").style.display = "none";
	document.getElementById("48-bubble4").style.display = "none";
	document.getElementById("48-bubble5").style.display = "none";
	document.getElementById("48-us").style.display = "none";
	document.getElementById("48-heart").style.display = "none";
	document.getElementById("text-48-1a").style.display = "";
	document.getElementById("text-48-1b").style.display = "";
	document.getElementById("text-48-2a").style.display = "none";
	document.getElementById("text-48-2b").style.display = "none";
	document.getElementById("text-48-3").style.display = "none";
	document.getElementById("text-48-4").style.display = "none";
	document.getElementById("text-48-5").style.display = "none";
	document.getElementById("text-48-6").style.display = "none";
	document.getElementById("text-48-7").style.display = "none";
	document.getElementById("text-48-8").style.display = "none";
	document.getElementById("text-48-9").style.display = "none";
	document.getElementById("text-48-10a").style.display = "none";
	document.getElementById("text-48-10b").style.display = "none";
	document.getElementById("next48").style.display = "";
}
function Next48()
{
	if(page48 == 1)
	{
		page48 = 2;
		document.getElementById("48-scout").style.display = "none";
		document.getElementById("48-me").style.display = "";
		document.getElementById("text-48-1a").style.display = "none";
		document.getElementById("text-48-1b").style.display = "none";
		document.getElementById("text-48-2a").style.display = "";
		document.getElementById("text-48-2b").style.display = "";
	}
	else if(page48 == 2)
	{
		page48 = 3;
		document.getElementById("48-me").style.display = "none";
		document.getElementById("48-bubble1").style.display = "";
		document.getElementById("text-48-2a").style.display = "none";
		document.getElementById("text-48-2b").style.display = "none";
		document.getElementById("text-48-3").style.display = "";
	}
	else if(page48 == 3)
	{
		page48 = 4;
		document.getElementById("48-bubble1").style.display = "none";
		document.getElementById("48-bubble2").style.display = "";
		document.getElementById("text-48-3").style.display = "none";
		document.getElementById("text-48-4").style.display = "";
	}
	else if(page48 == 4)
	{
		page48 = 5;
		document.getElementById("48-bubble2").style.display = "none";
		document.getElementById("48-bubble3").style.display = "";
		document.getElementById("text-48-4").style.display = "none";
		document.getElementById("text-48-5").style.display = "";
	}
	else if(page48 == 5)
	{
		page48 = 6;
		document.getElementById("48-bubble3").style.display = "none";
		document.getElementById("48-bubble4").style.display = "";
		document.getElementById("text-48-5").style.display = "none";
		document.getElementById("text-48-6").style.display = "";
	}
	else if(page48 == 6)
	{
		page48 = 7;
		document.getElementById("48-bubble4").style.display = "none";
		document.getElementById("48-bubble5").style.display = "";
		document.getElementById("text-48-6").style.display = "none";
		document.getElementById("text-48-7").style.display = "";
	}
	else if(page48 == 7)
	{
		page48 = 8;
		document.getElementById("48-bubble5").style.display = "none";
		document.getElementById("48-us").style.display = "";
		document.getElementById("text-48-7").style.display = "none";
		document.getElementById("text-48-8").style.display = "";
	}
	else if(page48 == 8)
	{
		page48 = 9;
		document.getElementById("48-us").style.display = "none";
		document.getElementById("48-heart").style.display = "";
		document.getElementById("text-48-8").style.display = "none";
		document.getElementById("text-48-9").style.display = "";
	}
	else if(page48 == 9)
	{
		document.getElementById("next48").style.display = "none";
		document.getElementById("text-48-9").style.display = "none";
		document.getElementById("text-48-10a").style.display = "";
		document.getElementById("text-48-10b").style.display = "";
	}
}

function Start52()
{
	document.getElementById("story52").style.display = "";
	document.getElementById("start52").style.display = "none";
}
function Restart52()
{
	page52 = 1;
	document.getElementById("52-me").style.display = "";
	document.getElementById("52-scout").style.display = "none";
	document.getElementById("52-gerard").style.display = "none";
	document.getElementById("52-frank").style.display = "none";
	document.getElementById("52-concert1").style.display = "none";
	document.getElementById("52-concert2").style.display = "none";
	document.getElementById("text-52-1").style.display = "";
	document.getElementById("text-52-2").style.display = "none";
	document.getElementById("text-52-3").style.display = "none";
	document.getElementById("text-52-4").style.display = "none";
	document.getElementById("text-52-5").style.display = "none";
	document.getElementById("text-52-6").style.display = "none";
	document.getElementById("text-52-7").style.display = "none";
	document.getElementById("text-52-8a").style.display = "none";
	document.getElementById("text-52-8b").style.display = "none";
	document.getElementById("next52").style.display = "";
}
function Next52()
{
	if(page52 == 1)
	{
		page52 = 2;
		document.getElementById("52-me").style.display = "none";
		document.getElementById("52-scout").style.display = "";
		document.getElementById("text-52-1").style.display = "none";
		document.getElementById("text-52-2").style.display = "";
	}
	else if(page52 == 2)
	{
		page52 = 3;
		document.getElementById("52-scout").style.display = "none";
		document.getElementById("52-gerard").style.display = "";
		document.getElementById("text-52-2").style.display = "none";
		document.getElementById("text-52-3").style.display = "";
	}
	else if(page52 == 3)
	{
		page52 = 4;
		document.getElementById("52-gerard").style.display = "none";
		document.getElementById("52-frank").style.display = "";
		document.getElementById("text-52-3").style.display = "none";
		document.getElementById("text-52-4").style.display = "";
	}
	else if(page52 == 4)
	{
		page52 = 5;
		document.getElementById("52-frank").style.display = "none";
		document.getElementById("52-concert1").style.display = "";
		document.getElementById("text-52-4").style.display = "none";
		document.getElementById("text-52-5").style.display = "";
	}
	else if(page52 == 5)
	{
		page52 = 6;
		document.getElementById("52-concert1").style.display = "none";
		document.getElementById("52-concert2").style.display = "";
		document.getElementById("text-52-5").style.display = "none";
		document.getElementById("text-52-6").style.display = "";
	}
	else if(page52 == 6)
	{
		page52 = 7;
		document.getElementById("52-concert2").style.display = "none";
		document.getElementById("52-me").style.display = "";
		document.getElementById("52-scout").style.display = "";
		document.getElementById("52-gerard").style.display = "";
		document.getElementById("52-frank").style.display = "";
		document.getElementById("text-52-6").style.display = "none";
		document.getElementById("text-52-7").style.display = "";
	}
	else if(page52 == 7)
	{
		document.getElementById("next52").style.display = "none";
		document.getElementById("text-52-7").style.display = "none";
		document.getElementById("text-52-8a").style.display = "";
		document.getElementById("text-52-8b").style.display = "";
	}
}

function Start56()
{
	document.getElementById("story56").style.display = "";
	document.getElementById("start56").style.display = "none";
}
function Restart56()
{
	page56 = 1;
	document.getElementById("56-gerard").style.display = "";
	document.getElementById("56-frank").style.display = "none";
	document.getElementById("text-56-1").style.display = "";
	document.getElementById("text-56-2").style.display = "none";
	document.getElementById("text-56-3").style.display = "none";
	document.getElementById("text-56-4a").style.display = "none";
	document.getElementById("text-56-4b").style.display = "none";
	document.getElementById("next56").style.display = "";
}
function Next56()
{
	if(page56 == 1)
	{
		page56 = 2;
		document.getElementById("56-gerard").style.display = "none";
		document.getElementById("56-frank").style.display = "";
		document.getElementById("text-56-1").style.display = "none";
		document.getElementById("text-56-2").style.display = "";
	}
	else if(page56 == 2)
	{
		page56 = 3;
		document.getElementById("56-gerard").style.display = "";
		document.getElementById("text-56-2").style.display = "none";
		document.getElementById("text-56-3").style.display = "";
	}
	else if(page56 == 3)
	{
		document.getElementById("next56").style.display = "none";
		document.getElementById("text-56-3").style.display = "none";
		document.getElementById("text-56-4a").style.display = "";
		document.getElementById("text-56-4b").style.display = "";
	}
}

function Start60()
{
	document.getElementById("story60").style.display = "";
	document.getElementById("start60").style.display = "none";
}
function Restart60()
{
	page60 = 1;
	document.getElementById("60-me").style.display = "";
	document.getElementById("60-scout").style.display = "none";
	document.getElementById("60-dog1").style.display = "none";
	document.getElementById("60-dog2").style.display = "none";
	document.getElementById("60-dog3").style.display = "none";
	document.getElementById("60-walk").style.display = "none";
	document.getElementById("text-60-1").style.display = "";
	document.getElementById("text-60-2").style.display = "none";
	document.getElementById("text-60-3a").style.display = "none";
	document.getElementById("text-60-3b").style.display = "none";
	document.getElementById("text-60-4").style.display = "none";
	document.getElementById("text-60-5a").style.display = "none";
	document.getElementById("text-60-5b").style.display = "none";
	document.getElementById("text-60-6a").style.display = "none";
	document.getElementById("text-60-6b").style.display = "none";
	document.getElementById("next60").style.display = "";
}
function Next60()
{
	if(page60 == 1)
	{
		page60 = 2;
		document.getElementById("60-me").style.display = "none";
		document.getElementById("60-scout").style.display = "";
		document.getElementById("text-60-1").style.display = "none";
		document.getElementById("text-60-2").style.display = "";
	}
	else if(page60 == 2)
	{
		page60 = 3;
		document.getElementById("60-scout").style.display = "none";
		document.getElementById("60-dog1").style.display = "";
		document.getElementById("60-dog2").style.display = "";
		document.getElementById("60-dog3").style.display = "";
		document.getElementById("text-60-2").style.display = "none";
		document.getElementById("text-60-3a").style.display = "";
		document.getElementById("text-60-3b").style.display = "";
	}
	else if(page60 == 3)
	{
		page60 = 4;
		document.getElementById("60-dog1").style.display = "none";
		document.getElementById("60-dog2").style.display = "none";
		document.getElementById("60-dog3").style.display = "none";
		document.getElementById("60-walk").style.display = "";
		document.getElementById("text-60-3a").style.display = "none";
		document.getElementById("text-60-3b").style.display = "none";
		document.getElementById("text-60-4").style.display = "";
	}
	else if(page60 == 4)
	{
		page60 = 5;
		document.getElementById("text-60-4").style.display = "none";
		document.getElementById("text-60-5a").style.display = "";
		document.getElementById("text-60-5b").style.display = "";
	}
	else if(page60 == 5)
	{
		document.getElementById("next60").style.display = "none";
		document.getElementById("60-walk").style.display = "none";
		document.getElementById("60-me").style.display = "";
		document.getElementById("60-scout").style.display = "";
		document.getElementById("60-dog1").style.display = "";
		document.getElementById("60-dog2").style.display = "";
		document.getElementById("60-dog3").style.display = "";
		document.getElementById("text-60-5a").style.display = "none";
		document.getElementById("text-60-5b").style.display = "none";
		document.getElementById("text-60-6a").style.display = "";
		document.getElementById("text-60-6b").style.display = "";
	}
}

function Start64()
{
	document.getElementById("story64").style.display = "";
	document.getElementById("start64").style.display = "none";
}
function Restart64()
{
	page64 = 1;
	document.getElementById("64-hearts1").style.display = "";
	document.getElementById("64-hearts2").style.display = "none";
	document.getElementById("64-hearts3").style.display = "none";
	document.getElementById("64-hearts4").style.display = "none";
	document.getElementById("64-hearts5").style.display = "none";
	document.getElementById("64-hearts6").style.display = "none";
	document.getElementById("64-hearts7").style.display = "none";
	document.getElementById("64-hearts8").style.display = "none";
	document.getElementById("64-hearts9").style.display = "none";
	document.getElementById("64-hearts10").style.display = "none";
	document.getElementById("64-hearts11").style.display = "none";
	document.getElementById("64-hearts12").style.display = "none";
	document.getElementById("text-64-1a").style.display = "";
	document.getElementById("text-64-1b").style.display = "";
	document.getElementById("text-64-2").style.display = "none";
	document.getElementById("text-64-12").style.display = "none";
	document.getElementById("next64").style.display = "";
}
function Next64()
{
	if(page64 == 1)
	{
		page64 = 2;
		document.getElementById("64-hearts1").style.display = "none";
		document.getElementById("64-hearts2").style.display = "";
		document.getElementById("text-64-1a").style.display = "none";
		document.getElementById("text-64-1b").style.display = "none";
		document.getElementById("text-64-2").style.display = "";
	}
	else if(page64 == 2)
	{
		page64 = 3;
		document.getElementById("64-hearts2").style.display = "none";
		document.getElementById("64-hearts3").style.display = "";
	}
	else if(page64 == 3)
	{
		page64 = 4;
		document.getElementById("64-hearts3").style.display = "none";
		document.getElementById("64-hearts4").style.display = "";
	}
	else if(page64 == 4)
	{
		page64 = 5;
		document.getElementById("64-hearts4").style.display = "none";
		document.getElementById("64-hearts5").style.display = "";
	}
	else if(page64 == 5)
	{
		page64 = 6;
		document.getElementById("64-hearts5").style.display = "none";
		document.getElementById("64-hearts6").style.display = "";
	}
	else if(page64 == 6)
	{
		page64 = 7;
		document.getElementById("64-hearts6").style.display = "none";
		document.getElementById("64-hearts7").style.display = "";
	}
	else if(page64 == 7)
	{
		page64 = 8;
		document.getElementById("64-hearts7").style.display = "none";
		document.getElementById("64-hearts8").style.display = "";
	}
	else if(page64 == 8)
	{
		page64 = 9;
		document.getElementById("64-hearts8").style.display = "none";
		document.getElementById("64-hearts9").style.display = "";
	}
	else if(page64 == 9)
	{
		page64 = 10;
		document.getElementById("64-hearts9").style.display = "none";
		document.getElementById("64-hearts10").style.display = "";
	}
	else if(page64 == 10)
	{
		page64 = 11;
		document.getElementById("64-hearts10").style.display = "none";
		document.getElementById("64-hearts11").style.display = "";
	}
	else if(page64 == 11)
	{
		document.getElementById("next64").style.display = "none";
		document.getElementById("64-hearts11").style.display = "none";
		document.getElementById("64-hearts12").style.display = "";
		document.getElementById("text-64-2").style.display = "none";
		document.getElementById("text-64-12").style.display = "";
	}
}

function Start68()
{
	document.getElementById("story68").style.display = "";
	document.getElementById("start68").style.display = "none";
}
function Restart68()
{
	page68 = 1;
	document.getElementById("68-me").style.display = "";
	document.getElementById("68-scout").style.display = "none";
	document.getElementById("68-guitar1").style.display = "none";
	document.getElementById("68-guitar2").style.display = "none";
	document.getElementById("text-68-1").style.display = "";
	document.getElementById("text-68-2").style.display = "none";
	document.getElementById("text-68-3").style.display = "none";
	document.getElementById("text-68-4").style.display = "none";
	document.getElementById("text-68-5").style.display = "none";
	document.getElementById("text-68-6a").style.display = "none";
	document.getElementById("text-68-6b").style.display = "none";
	document.getElementById("next68").style.display = "";
}
function Next68()
{
	if(page68 == 1)
	{
		page68 = 2;
		document.getElementById("68-me").style.display = "none";
		document.getElementById("68-scout").style.display = "";
		document.getElementById("text-68-1").style.display = "none";
		document.getElementById("text-68-2").style.display = "";
	}
	else if(page68 == 2)
	{
		page68 = 3;
		document.getElementById("68-me").style.display = "";
		document.getElementById("text-68-2").style.display = "none";
		document.getElementById("text-68-3").style.display = "";
	}
	else if(page68 == 3)
	{
		page68 = 4;
		document.getElementById("68-me").style.display = "none";
		document.getElementById("68-scout").style.display = "none";
		document.getElementById("68-guitar1").style.display = "";
		document.getElementById("text-68-3").style.display = "none";
		document.getElementById("text-68-4").style.display = "";
	}
	else if(page68 == 4)
	{
		page68 = 5;
		document.getElementById("68-guitar1").style.display = "none";
		document.getElementById("68-guitar2").style.display = "";
		document.getElementById("text-68-4").style.display = "none";
		document.getElementById("text-68-5").style.display = "";
	}
	else if(page68 == 5)
	{
		document.getElementById("68-guitar2").style.display = "none";
		document.getElementById("next68").style.display = "none";
		document.getElementById("68-me").style.display = "";
		document.getElementById("68-scout").style.display = "";
		document.getElementById("text-68-5").style.display = "none";
		document.getElementById("text-68-6a").style.display = "";
		document.getElementById("text-68-6b").style.display = "";
	}
}

function Start72()
{
	document.getElementById("story72").style.display = "";
	document.getElementById("start72").style.display = "none";
}
function Restart72()
{
	page72 = 1;
	document.getElementById("72-me").style.display = "";
	document.getElementById("72-scout").style.display = "none";
	document.getElementById("72-space").style.display = "none";
	document.getElementById("72-moon").style.display = "none";
	document.getElementById("text-72-1").style.display = "";
	document.getElementById("text-72-2").style.display = "none";
	document.getElementById("text-72-3").style.display = "none";
	document.getElementById("text-72-4").style.display = "none";
	document.getElementById("text-72-5a").style.display = "none";
	document.getElementById("text-72-5b").style.display = "none";
	document.getElementById("text-72-6").style.display = "none";
	document.getElementById("text-72-7").style.display = "none";
	document.getElementById("next72").style.display = "";
}
function Next72()
{
	if(page72 == 1)
	{
		page72 = 2;
		document.getElementById("72-me").style.display = "none";
		document.getElementById("72-scout").style.display = "";
		document.getElementById("text-72-1").style.display = "none";
		document.getElementById("text-72-2").style.display = "";
	}
	else if(page72 == 2)
	{
		page72 = 3;
		document.getElementById("72-me").style.display = "";
		document.getElementById("text-72-2").style.display = "none";
		document.getElementById("text-72-3").style.display = "";
	}
	else if(page72 == 3)
	{
		page72 = 4;
		document.getElementById("72-me").style.display = "none";
		document.getElementById("72-scout").style.display = "none";
		document.getElementById("72-space").style.display = "";
		document.getElementById("text-72-3").style.display = "none";
		document.getElementById("text-72-4").style.display = "";
	}
	else if(page72 == 4)
	{
		page72 = 5;
		document.getElementById("72-space").style.display = "none";
		document.getElementById("72-moon").style.display = "";
		document.getElementById("text-72-4").style.display = "none";
		document.getElementById("text-72-5a").style.display = "";
		document.getElementById("text-72-5b").style.display = "";
	}
	else if(page72 == 5)
	{
		page72 = 6;
		document.getElementById("72-moon").style.display = "none";
		document.getElementById("72-space").style.display = "";
		document.getElementById("text-72-5a").style.display = "none";
		document.getElementById("text-72-5b").style.display = "none";
		document.getElementById("text-72-6").style.display = "";
	}
	else if(page72 == 6)
	{
		document.getElementById("next72").style.display = "none";
		document.getElementById("72-space").style.display = "none";
		document.getElementById("72-me").style.display = "";
		document.getElementById("72-scout").style.display = "";
		document.getElementById("text-72-6").style.display = "none";
		document.getElementById("text-72-7").style.display = "";
	}
}

function Start76()
{
	document.getElementById("story76").style.display = "";
	document.getElementById("start76").style.display = "none";
}
function Restart76()
{
	page76 = 1;
	document.getElementById("76-scout").style.display = "";
	document.getElementById("76-bus").style.display = "none";
	document.getElementById("76-dinosaurs").style.display = "none";
	document.getElementById("text-76-1").style.display = "";
	document.getElementById("text-76-2").style.display = "none";
	document.getElementById("text-76-3").style.display = "none";
	document.getElementById("text-76-4").style.display = "none";
	document.getElementById("text-76-5").style.display = "none";
	document.getElementById("next76").style.display = "";
}
function Next76()
{
	if(page76 == 1)
	{
		page76 = 2;
		document.getElementById("76-scout").style.display = "none";
		document.getElementById("76-bus").style.display = "";
		document.getElementById("text-76-1").style.display = "none";
		document.getElementById("text-76-2").style.display = "";
	}
	else if(page76 == 2)
	{
		page76 = 3;
		document.getElementById("text-76-2").style.display = "none";
		document.getElementById("text-76-3").style.display = "";
	}
	else if(page76 == 3)
	{
		page76 = 4;
		document.getElementById("76-bus").style.display = "none";
		document.getElementById("76-dinosaurs").style.display = "";
		document.getElementById("text-76-3").style.display = "none";
		document.getElementById("text-76-4").style.display = "";
	}
	else if(page76 == 4)
	{
		document.getElementById("next76").style.display = "none";
		document.getElementById("text-76-4").style.display = "none";
		document.getElementById("text-76-5").style.display = "";
	}
}

function Start80()
{
	document.getElementById("story80").style.display = "";
	document.getElementById("start80").style.display = "none";
}
function Restart80()
{
	page80 = 1;
	document.getElementById("80-me").style.display = "";
	document.getElementById("80-scout").style.display = "none";
	document.getElementById("80-us").style.display = "none";
	document.getElementById("text-80-1a").style.display = "";
	document.getElementById("text-80-1b").style.display = "";
	document.getElementById("text-80-2a").style.display = "none";
	document.getElementById("text-80-2b").style.display = "none";
	document.getElementById("text-80-3").style.display = "none";
	document.getElementById("text-80-4").style.display = "none";
	document.getElementById("text-80-5a").style.display = "none";
	document.getElementById("text-80-5b").style.display = "none";
	document.getElementById("next80").style.display = "";
}
function Next80()
{
	if(page80 == 1)
	{
		page80 = 2;
		document.getElementById("80-me").style.display = "none";
		document.getElementById("80-scout").style.display = "";
		document.getElementById("text-80-1a").style.display = "none";
		document.getElementById("text-80-1b").style.display = "none";
		document.getElementById("text-80-2a").style.display = "";
		document.getElementById("text-80-2b").style.display = "";
	}
	else if(page80 == 2)
	{
		page80 = 3;
		document.getElementById("80-me").style.display = "";
		document.getElementById("text-80-2a").style.display = "none";
		document.getElementById("text-80-2b").style.display = "none";
		document.getElementById("text-80-3").style.display = "";
	}
	else if(page80 == 3)
	{
		page80 = 4;
		document.getElementById("80-me").style.display = "none";
		document.getElementById("80-scout").style.display = "none";
		document.getElementById("80-us").style.display = "";
		document.getElementById("text-80-3").style.display = "none";
		document.getElementById("text-80-4").style.display = "";
	}
	else if(page80 == 4)
	{
		document.getElementById("next80").style.display = "none";
		document.getElementById("text-80-4").style.display = "none";
		document.getElementById("text-80-5a").style.display = "";
		document.getElementById("text-80-5b").style.display = "";
	}
}

function Start84()
{
	document.getElementById("story84").style.display = "";
	document.getElementById("start84").style.display = "none";
}
function Restart84()
{
	page84 = 1;
	document.getElementById("84-me").style.display = "";
	document.getElementById("84-scout").style.display = "none";
	document.getElementById("84-park").style.display = "none";
	document.getElementById("84-flowers").style.display = "none";
	document.getElementById("text-84-1").style.display = "";
	document.getElementById("text-84-2").style.display = "none";
	document.getElementById("text-84-3").style.display = "none";
	document.getElementById("text-84-4").style.display = "none";
	document.getElementById("text-84-5").style.display = "none";
	document.getElementById("text-84-6a").style.display = "none";
	document.getElementById("text-84-6b").style.display = "none";
	document.getElementById("next84").style.display = "";
}
function Next84()
{
	if(page84 == 1)
	{
		page84 = 2;
		document.getElementById("84-me").style.display = "none";
		document.getElementById("84-scout").style.display = "";
		document.getElementById("text-84-1").style.display = "none";
		document.getElementById("text-84-2").style.display = "";
	}
	else if(page84 == 2)
	{
		page84 = 3;
		document.getElementById("84-me").style.display = "";
		document.getElementById("text-84-2").style.display = "none";
		document.getElementById("text-84-3").style.display = "";
	}
	else if(page84 == 3)
	{
		page84 = 4;
		document.getElementById("84-me").style.display = "none";
		document.getElementById("84-scout").style.display = "none";
		document.getElementById("84-park").style.display = "";
		document.getElementById("text-84-3").style.display = "none";
		document.getElementById("text-84-4").style.display = "";
	}
	else if(page84 == 4)
	{
		page84 = 5;
		document.getElementById("84-park").style.display = "none";
		document.getElementById("84-flowers").style.display = "";
		document.getElementById("text-84-4").style.display = "none";
		document.getElementById("text-84-5").style.display = "";
	}
	else if(page84 == 5)
	{
		document.getElementById("next84").style.display = "none";
		document.getElementById("84-flowers").style.display = "none";
		document.getElementById("84-me").style.display = "";
		document.getElementById("84-scout").style.display = "";
		document.getElementById("text-84-5").style.display = "none";
		document.getElementById("text-84-6a").style.display = "";
		document.getElementById("text-84-6b").style.display = "";
	}
}

function Start88()
{
	document.getElementById("story88").style.display = "";
	document.getElementById("start88").style.display = "none";
}
function Restart88()
{
	page88 = 1;
	document.getElementById("88-me").style.display = "";
	document.getElementById("88-scout").style.display = "";
	document.getElementById("text-88-1a").style.display = "";
	document.getElementById("text-88-1b").style.display = "";
	document.getElementById("text-88-2").style.display = "none";
	document.getElementById("next88").style.display = "";
}
function Next88()
{
	document.getElementById("next88").style.display = "none";
	document.getElementById("text-88-1a").style.display = "none";
	document.getElementById("text-88-1b").style.display = "none";
	document.getElementById("text-88-2").style.display = "";
}

function Start92()
{
	document.getElementById("story92").style.display = "";
	document.getElementById("start92").style.display = "none";
}
function Restart92()
{
	page92 = 1;
	document.getElementById("92-me").style.display = "";
	document.getElementById("92-scout").style.display = "none";
	document.getElementById("text-92-1").style.display = "";
	document.getElementById("text-92-2").style.display = "none";
	document.getElementById("text-92-3").style.display = "none";
	document.getElementById("text-92-4").style.display = "none";
	document.getElementById("text-92-5").style.display = "none";
	document.getElementById("text-92-6").style.display = "none";
	document.getElementById("text-92-7").style.display = "none";
	document.getElementById("text-92-8a").style.display = "none";
	document.getElementById("text-92-8b").style.display = "none";
	document.getElementById("text-92-8c").style.display = "none";
	document.getElementById("next92").style.display = "";
}
function Next92()
{
	if(page92 == 1)
	{
		page92 = 2;
		document.getElementById("92-me").style.display = "none";
		document.getElementById("92-scout").style.display = "";
		document.getElementById("text-92-1").style.display = "none";
		document.getElementById("text-92-2").style.display = "";
	}
	else if(page92 == 2)
	{
		page92 = 3;
		document.getElementById("92-me").style.display = "";
		document.getElementById("text-92-2").style.display = "none";
		document.getElementById("text-92-3").style.display = "";
	}
	else if(page92 == 3)
	{
		page92 = 4;
		document.getElementById("text-92-3").style.display = "none";
		document.getElementById("text-92-4").style.display = "";
	}
	else if(page92 == 4)
	{
		page92 = 5;
		document.getElementById("text-92-4").style.display = "none";
		document.getElementById("text-92-5").style.display = "";
	}
	else if(page92 == 5)
	{
		page92 = 6;
		document.getElementById("text-92-5").style.display = "none";
		document.getElementById("text-92-6").style.display = "";
	}
	else if(page92 == 6)
	{
		page92 = 7;
		document.getElementById("text-92-6").style.display = "none";
		document.getElementById("text-92-7").style.display = "";
	}
	else if(page92 == 7)
	{
		document.getElementById("next92").style.display = "none";
		document.getElementById("text-92-7").style.display = "none";
		document.getElementById("text-92-8a").style.display = "";
		document.getElementById("text-92-8b").style.display = "";
		document.getElementById("text-92-8c").style.display = "";
	}
}

function Start96()
{
	document.getElementById("story96").style.display = "";
	document.getElementById("start96").style.display = "none";
}
function Restart96()
{
	page96 = 1;
	document.getElementById("96-hug").style.display = "";
	document.getElementById("96-kiss").style.display = "none";
	document.getElementById("96-cute").style.display = "none";
	document.getElementById("96-heart").style.display = "none";
	document.getElementById("text-96-1").style.display = "";
	document.getElementById("text-96-2").style.display = "none";
	document.getElementById("text-96-3").style.display = "none";
	document.getElementById("text-96-4").style.display = "none";
	document.getElementById("next96").style.display = "";
}
function Next96()
{
	if(page96 == 1)
	{
		page96 = 2;
		document.getElementById("96-hug").style.display = "none";
		document.getElementById("96-kiss").style.display = "";
		document.getElementById("text-96-1").style.display = "none";
		document.getElementById("text-96-2").style.display = "";
	}
	else if(page96 == 2)
	{
		page96 = 3;
		document.getElementById("96-kiss").style.display = "none";
		document.getElementById("96-cute").style.display = "";
		document.getElementById("text-96-2").style.display = "none";
		document.getElementById("text-96-3").style.display = "";
	}
	else if(page96 == 3)
	{
		document.getElementById("next96").style.display = "none";
		document.getElementById("96-cute").style.display = "none";
		document.getElementById("96-heart").style.display = "";
		document.getElementById("text-96-3").style.display = "none";
		document.getElementById("text-96-4").style.display = "";
	}
}

function Start100()
{
	document.getElementById("story100").style.display = "";
	document.getElementById("start100").style.display = "none";
}
function Restart100()
{
	page100 = 1;
	document.getElementById("100-red").style.display = "";
	document.getElementById("100-orange").style.display = "none";
	document.getElementById("100-yellow").style.display = "none";
	document.getElementById("100-green").style.display = "none";
	document.getElementById("100-blue").style.display = "none";
	document.getElementById("100-purple").style.display = "none";
	document.getElementById("100-pink").style.display = "none";
	document.getElementById("next100").style.display = "";
}
function Next100()
{
	if(page100 == 1)
	{
		page100 = 2;
		document.getElementById("100-red").style.display = "none";
		document.getElementById("100-orange").style.display = "";
	}
	else if(page100 == 2)
	{
		page100 = 3;
		document.getElementById("100-orange").style.display = "none";
		document.getElementById("100-yellow").style.display = "";
	}
	else if(page100 == 3)
	{
		page100 = 4;
		document.getElementById("100-yellow").style.display = "none";
		document.getElementById("100-green").style.display = "";
	}
	else if(page100 == 4)
	{
		page100 = 5;
		document.getElementById("100-green").style.display = "none";
		document.getElementById("100-blue").style.display = "";
	}
	else if(page100 == 5)
	{
		page100 = 6;
		document.getElementById("100-blue").style.display = "none";
		document.getElementById("100-purple").style.display = "";
	}
	else if(page100 == 6)
	{
		document.getElementById("next100").style.display = "none";
		document.getElementById("100-purple").style.display = "none";
		document.getElementById("100-pink").style.display = "";
	}
}