const form = document.getElementById('form');


form.addEventListener('submit', e => {
	e.preventDefault();
	validateForm();
	window.location.reload();
});

function printError(id, msg) {
  document.getElementById(id).innerHTML = msg;
}

function validateForm() {
  let firstname = document.Form.firstname.value;
  let lastname = document.Form.lastname.value;
  let phone = document.Form.phone.value;
  let email = document.Form.email.value;
  let select = document.Form.select.value;

  let firstnameErr = (lastnameErr = phoneErr = emailErr = selectErr = true);

	// FIRSTNAME
  if (firstname == "") {
    printError("firstnameErr", "Iltmos ismingizni kiriting");
    let elem = document.getElementById("firstname");
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(firstname) === false) {
      printError("firstnameErr", "Iltmos ismingizni to'g'ri kiriting");
      let elem = document.getElementById("firstname");
      elem.classList.add("input-2");
      elem.classList.remove("input-1");
    } else {
      printError("firstnameErr", "");
      firstnameErr = false;
      let elem = document.getElementById("firstname");
      elem.classList.add("input-1");
      elem.classList.remove("input-2");
    }
  }

	// LASTNAME
	if (lastname == "") {
    printError("lastnameErr", "Iltmos familyangizni kiriting");
    let elem = document.getElementById("lastname");
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(lastname) === false) {
      printError("firstnameErr", "Iltmos familyangizni to'g'ri kiriting");
      let elem = document.getElementById("lastname");
      elem.classList.add("input-2");
      elem.classList.remove("input-1");
    } else {
      printError("lastnameErr", "");
      lastnameErr = false;
      let elem = document.getElementById("lastname");
      elem.classList.add("input-1");
      elem.classList.remove("input-2");
    }
  }

	// PHONE
	if (phone == "") {
    printError("phoneErr", "Iltmos telefon raqamingizni kiriting");
    let elem = document.getElementById("phone");
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
  } else {
    let regex = /^[1-9]\d{9}$/;
    if (regex.test(phone) === false) {
      printError("phoneErr", "Iltmos telefon raqamingizni to'g'ri kiriting 10 ta raqam tersangiz yetadi");
      let elem = document.getElementById("phone");
      elem.classList.add("input-2");
      elem.classList.remove("input-1");
    } else {
      printError("phoneErr", "");
      phoneErr = false;
      let elem = document.getElementById("phone");
      elem.classList.add("input-1");
      elem.classList.remove("input-2");
    }
  }

	// EMAIL
  if (email == "") {
    printError("emailErr", "Iltmos email manzilingizni kiriting");
    let elem = document.getElementById("email");
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
  } else {
    let regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false) {
      printError("emailErr", "Iltmos to'g'ri email manzil kririting");
      let elem = document.getElementById("email");
      elem.classList.add("input-2");
      elem.classList.remove("input-1");
    } else {
      printError("emailErr", "");
      emailErr = false;
      let elem = document.getElementById("email");
      elem.classList.add("input-1");
      elem.classList.remove("input-2");
    }
  }

	// SELECT
  if (select == "Kurslar") {
    printError("selectErr", "Iltmos kursni tanlang");
    let elem = document.getElementById("select");
    elem.classList.add("input-4");
    elem.classList.remove("input-3");
  } else {
    printError("selectErr", "");
    selectErr = false;
    let elem = document.getElementById("select");
    elem.classList.add("input-3");
    elem.classList.remove("input-4");
  }

  if ((firstnameErr || lastnameErr || phoneErr || emailErr || selectErr) == !true) {
    const my_text = `Result is:%0A - Ism: ${firstname} %0A - Familya: ${lastname} %0A - Telefon: ${phone} %0A - Email: ${email} %0A - Kurs nomi: ${select}`

		const token = "5011210332:AAGVwqBLsNqvq2h0AtpXeRCAukC8Cgy2MBg"
		const chat_id ="-607603440"
		const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`
	
		console.log(firstname, lastname, phone, email, select);
	
		let api = new XMLHttpRequest()
	
		api.open("GET", url, true)
		api.send()
  }
}



// let form = document.getElementById("form");

// let firstnameError = document.getElementById("firstnameError");
// let lastnameError = document.getElementById("lastnameError");
// let phoneError = document.getElementById("phoneError");
// let emailError = document.getElementById("emailError");
// let selectError = document.getElementById("selectError");

// let firstname = document.getElementById("firstname");
// let lastname = document.getElementById("lastname");
// let phone = document.getElementById("phone");
// let email = document.getElementById("email");
// let select = document.getElementById("select");

// // Form Validation

// function checkStuff() {
//   if (firstname.value == "") {
//     firstnameError.style.display = "block";
//     firstnameError.innerHTML = "";
//     firstname.focus();
//     return false;
//   } else {
//     firstnameError.innerHTML = "";
//   }

//   if (lastname.value == "") {
//     lastnameError.style.display = "block";
//     lastnameError.innerHTML = "Iltmos familyangizni kiriting";
//     lastname.focus();
//     return false;
//   } else {
//     lastnameError.innerHTML = "";
//   }

//   if (phone.value == "") {
//     phoneError.style.display = "block";
//     phoneError.innerHTML = "";
//     password.focus();
//     return false;
//   } else {
//     phoneError.innerHTML = "";
//   }

//   if (email.value == "") {
//     emailError.style.display = "block";
//     emailError.innerHTML = "Iltmos email manzilingizni kiriting";
//     email.focus();
//     return false;
//   } else {
//     emailError.innerHTML = "";
//   }

//   var re =
//     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (!re.test(email.value)) {
//     emailError.innerHTML = "Iltmos to'g'ri email manzil kiriting";
//     email.focus();
//     return false;
//   } else {
//     emailError.innerHTML = "";
//   }
// }

// ParticlesJS

// ParticlesJS Config.
particlesJS("particles-js", {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#8bd17c",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.1,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 6,
      random: false,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#8bd17c",
      opacity: 1,
      width: 2,
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "top",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse",
      },
      onclick: {
        enable: false,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});
