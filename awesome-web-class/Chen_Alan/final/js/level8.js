document.cookie="cookie=cookies_are_yummy";

function validateForm()
{
	var hash = CryptoJS.MD5($("#password").val());
	hash = hash.toString(CryptoJS.enc.Hex);
	console.log(hash);
	if (hash == "a47a4407524c25bbe5f8d4c1450b3f8d") { window.location.href = "9939f9a.html" } else {
		alert("Wrong password");
	}
  return false;
}