// Roles
const validationFroms = {
  ele: {
    hpi: document.querySelector("#hpi"),
    "past-history": document.querySelector("#past-history"),
    ros: document.querySelector("#ros"),
    "ph-ex": document.querySelector("#ph-ex"),
    "la-re": document.querySelector("#la-re"),
    "ra-re": document.querySelector("#ra-re"),
    "di-ic": document.querySelector("#di-ic"),
    "re-ad": document.querySelector("#re-ad"),
    "tr-pl": document.querySelector("#tr-pl"),
    note: document.querySelector("#note")
  },
  roles: {
    hpi: "req|alpha",
    "past-history": "req|alpha",
    ros: "req|alpha",
    "ph-ex": "req|alpha",
    "la-re": "req|alpha",
    "ra-re": "req|alpha",
    "di-ic": "req|alpha",
    "re-ad": "req|alpha",
    "tr-pl": "req|alpha",
    note: "req|alpha"
  }
};
const valid = Validation.isValid(validationFroms, "danger");

const selectEelement = document.querySelector("#department");

// Select Validation
selectEelement.onblur = function () {
  if (Validation.add(this.value).select("0").ele == false) {
    this.nextElementSibling.textContent = "Select One Option";
    this.nextElementSibling.classList.add(
      "show-label",
      "alert",
      "alert-danger"
    );
    this.nextElementSibling.parentNode.previousElementSibling.style.color =
      "red";
    return;
  }
  this.nextElementSibling.textContent = "";
  this.nextElementSibling.classList.remove(
    "show-label",
    "alert",
    "alert-danger"
  );
  this.nextElementSibling.parentNode.previousSibling.style.color =
    "#000";
};


const btn = document.querySelector("#btn");
const errorMsg = document.querySelector(".error");
// Check
btn.onclick = function (e) {

  const label = Array.from(document.querySelectorAll(".label"));
  label.forEach(ele => {

    if (ele.classList.contains('show-label'))
    {

      e.preventDefault();
      errorMsg.classList.add('show-error');

    }

  });


};