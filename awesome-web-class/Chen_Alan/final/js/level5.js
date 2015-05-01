function validateForm()
{
	var hash = CryptoJS.MD5($("#password").val());
	hash = hash.toString(CryptoJS.enc.Hex);
	console.log(hash);
	if (hash == "4fa93b7a802d62792311285119bbb88f") { window.location.href = "6745ca3.html" } else {
		alert("Wrong password");
	}
  return false;
}