fetch("https://restcountries.com/v3.1/all")
  .then((response) => {
    console.log(response.status);
    console.log(response.ok);
    return response.json(); // This function uses for convert this format to json.
  })
  .then((data) => {
    var countries = `<option value="">Select</option>`;
    data.forEach((country) => {
      countries += `<option value="${country?.area}">${country.name.official}</option>`;
    });
    document.querySelector(".countries").innerHTML = countries;
  })
  .catch((error) => {
    console.log(error);
  });

const mySelect = document.getElementById("mySelect");
const myButton = document.getElementById("myButton");
myButton.addEventListener("click", () => {
  const selectedValue = mySelect.value;

  localStorage.setItem("area", selectedValue);
  console.log(`Selected value '${selectedValue}' saved to local storage`);
  window.location.href = "wheather-show.html";
});
