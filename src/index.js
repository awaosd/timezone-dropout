function alertTime(event) {
  if (event.target.value === "paris") {
    alert(
      `${moment()
        .tz("Europe/Paris")
        .format("[It is] dddd, MMMM D, YYYY h:mm A")}`
    );
  }
  if (event.target.value === "tokyo") {
    alert(
      `${moment().tz("Asia/Tokyo").format("[It is] dddd, MMMM D, YYYY h:mm A")}`
    );
  }
  if (event.target.value === "sydney") {
    alert(
      `${moment()
        .tz("Australia/Sydney")
        .format("[It is] dddd, MMMM D, YYYY h:mm A")}`
    );
  }
}

let button = document.querySelector("#countries");
countries.addEventListener("change", alertTime);
