document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons() {
  document.getElementById("postSubmit").addEventListener("click", function(event) {
    var req = new XMLHttpRequest();
    var payload = {
      user: null,
      pass: null
    };
    payload.user = document.getElementById("userName").value;
    payload.pass = document.getElementById("password").value;
    req.open("POST", "http://httpbin.org/post", true);
    req.setRequestHeader("Content-Type", "application/json");
    req.addEventListener("load", function() {
      if (req.status >= 200 && req.status < 400) {
        var response = JSON.parse(JSON.parse(req.responseText).data);
        document.getElementById("postUser").textContent = response.user;
        document.getElementById("postPass").textContent = response.pass;
      } else {
        console.log("Error in network request: " + req.statusText);
      }
    });
    req.send(JSON.stringify(payload));
    event.preventDefault();
  });
}
