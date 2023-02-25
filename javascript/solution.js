// question one
const question1 = document.querySelector(".app-1 .solution");

question1.style.backgroundColor = "lightskyblue";
question1.style.marginInline = "auto";
question1.style.color = "blue";
let x = 33,
  y = 10;

question1.innerHTML = `
*******************Simple Caculator*******************
<hr>
x=${x} and y=${y}
<hr>
sum=${x + y}
diff=${x - y}
<hr>
prod=${x * y}
div=${x / y}
<hr>
mod=${x % y}
<hr>
x++=${++x}
<hr>
y--=${--y}
<hr>
*****************End Simple Caculator*****************
`;

// question two
const question2 = document.querySelector(".app-2 .solution");

question2.innerHTML = `
*******************Simple Caculator*******************
<table>
      <tr>
        <td>x=</td>
        <td>${--x}</td>
        <td>y=</td>
        <td>${++y}</td>
      </tr>
      <tr>
        <td colspan="2">sum=</td>
        <td colspan="2">${x + y}</td>
      </tr>
      <tr>
        <td colspan="2">diff=</td>
        <td colspan="2">${x - y}</td>
      </tr>
      <tr>
        <td colspan="2">prod=</td>
        <td colspan="2">${x * y}</td>
      </tr>
      <tr>
        <td colspan="2">div=</td>
        <td colspan="2">${x / y}</td>
      </tr>
      <tr>
        <td colspan="2">mod=</td>
        <td colspan="2">${x % y}</td>
      </tr>
      <tr>
        <td colspan="2">x++=</td>
        <td colspan="2">${++x}</td>
      </tr>
      <tr>
        <td colspan="2">y--=</td>
        <td colspan="2">${--y}</td>
      </tr>
    </table>
*****************End Simple Caculator*****************
`;

// question three
const question3 = document.querySelector(".app-3 .solution");

question3.innerHTML = `
<h2>F(x)</h2>
<img src="./assets/function.jpg" alt="" />
<table>
  <tr>
    <td>x</td>
    <td colspan="2"><input type="number" /></td>
  </tr>
  <tr>
    <td>F(x)</td>
    <td colspan="2"><span class="result">0</span></td>
  </tr>
</table>
<div class="btn-container">
  <button class="btn center">calculate</button>
</div>
`;

question3.className = "question-3";

const input = question3.querySelector("input");
const result = question3.querySelector(".result");
const button = question3.querySelector(".btn");
const f = function (x) {
  if (x < 0) {
    return x ** 2;
  } else if (x >= 1 && x < 20) {
    return x ** 2 - 4;
  } else if (x >= 20 && x <= 35) {
    return (Math.sqrt(x - 4) / 2) * x;
  } else {
    return undefined;
  }
};

button.addEventListener("click", () => {
  result.innerHTML = f(input.value);
});

// question four

const question4 = document.querySelector(".app-4 .solution");

question4.innerHTML = `
<h2>Registration form</h2>
<p class="error-message"></p>
<form>
  <label for="name">Enter yout name:</label>
  <input type="text" id="name" />
  <br />
  <label for="email">Enter yout email:</label>
  <input type="email" id="email" />
  <br />
  <button>Check Myname</button>
</form>
`;

const errorMessage = question4.querySelector(".error-message");
const registrationForm = question4.querySelector("form");
const nameInput = registrationForm.querySelector("[type=text]");

registrationForm.onsubmit = function (event) {
  event.preventDefault();
  if (!nameInput.value) {
    errorMessage.innerHTML = "You should enter your name";
    errorMessage.style.color = "green";
  } else {
    errorMessage.innerHTML = "";
    window.alert(`Thanks for registration ${nameInput.value}`);
  }
};

// question five
const question5 = document.querySelector(".app-5 .solution");

question5.innerHTML = `
<h2>Ordering form</h2>
<form>
  <label for="name">Enter your name:</label>
  <input type="text" id="name" />
  <span class="name-error"></span>
  <br />
  <label for="pass">Enter password:</label>
  <input type="password" id="pass" />
  <span class="pass-error"></span>
  <br />
  <input type="radio" id="sam" name="phone" />
  <label for="sam">Samsung Note 5</label>
  <br />
  <input type="radio" id="iphone" name="phone" />
  <label for="iphone">iPhone 7</label>
  <br />
  <label for="quantitiy">Enter the quantitiy:</label>
  <input type="number" id="quantitiy" />
  <br />
  <button>Submit Order</button>
</form>
`;

question5.className = "question-5";

const orderingForm = question5.querySelector("form");
const nameError = question5.querySelector(".name-error");
const passError = question5.querySelector(".pass-error");

orderingForm.onsubmit = (event) => {
  event.preventDefault();

  if (!orderingForm.querySelector("#name").value) {
    nameError.innerHTML = "Name Error!";
    nameError.style.color = "red";
  } else {
    nameError.innerHTML = "";
  }
  if (!orderingForm.querySelector("#pass").value) {
    passError.innerHTML = "Password Error!";
    passError.style.color = "red";
  } else {
    passError.innerHTML = "";
  }

  if (
    orderingForm.querySelector("#name").value == "xyz" &&
    orderingForm.querySelector("#pass").value == "1234"
  ) {
    window.alert("Thank your order is completed");
  }
};
