function validateForm()
{
	var hash = CryptoJS.MD5($("#password").val());
	hash = hash.toString(CryptoJS.enc.Hex);
	console.log(hash);
	if (hash == "e53ed15cffcae47822d2885c069d16c2") { window.location.href = "5a782ab.html" } else {
		alert("Wrong password");
	}
  return false;
}