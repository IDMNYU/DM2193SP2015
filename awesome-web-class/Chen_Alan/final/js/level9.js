function validateForm()
{
	var hash = CryptoJS.MD5($("#password").val());
	hash = hash.toString(CryptoJS.enc.Hex);
	console.log(hash);
	if (hash == "88d9fbd1ce0577c05f76891fd121c47c") { window.location.href = "level10.html" } else {
		alert("Wrong password");
	}
  return false;
}