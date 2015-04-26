console.log("hellll");
function validateForm()
{
	// Validate URL
	var hash = CryptoJS.MD5($("#password").val());
	hash = hash.toString(CryptoJS.enc.Hex);
	if (hash == "43bebae34216725671c13a2f3aef8ebb") { window.location.href = "level4.html" } else {
		alert("Wrong password");
	}
  return false;
}