function submitForm() {
  // Get form data
  var formData = new FormData(document.getElementById("myForm"));

  // Send data to PHP script
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "insert.php");
  // xhr.onload = function() {
  //   if (xhr.status === 200) {
  //     // Do something with response (if needed)
  //     console.log(xhr.responseText);
  //   }
  // };
  xhr.send(formData);
}
