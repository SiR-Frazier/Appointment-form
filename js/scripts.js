var combine = function(client, reason, date, time) {
  return client + " " + reason + " " + date + " " + time;
}

$(document).ready(function() {
  $("form#form-1").submit(function(event) {
    event.preventDefault();
    var client = ($("#client").val());
    var reason = ($("#reason").val());
    var date = ($("#date").val());
    var time = ($("#time").val());
    console.log(client);
    var result = combine(client, reason, date, time);
    $("#form-data").text(result);
  });
});
