function validateForm()
{
	var hash = CryptoJS.MD5($("#password").val());
	hash = hash.toString(CryptoJS.enc.Hex);
	if (hash == "43bebae34216725671c13a2f3aef8ebb") { window.location.href = "47f817e.html" } else {
		alert("Wrong password");
	}
  return false;
}