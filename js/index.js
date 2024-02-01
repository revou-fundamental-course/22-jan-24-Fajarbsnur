//variabel
const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');

const button = document.getElementById('tombol-kirim');

button.addEventListener('click', function () {
  let name = inputName.value;
  let email = inputEmail.value;

  if (!name) {
    const nameError = document.getElementById('name-error');
    nameError.classList.add('error-message');

    nameError.innerText = 'Nama harus diisi!';
  }
  if (!email) {
    const emailError = document.getElementById('email-error');
    emailError.classList.add('error-message');

    emailError.innerText = 'Email harus diisi!';
  }
});

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName('my-slides');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = 'block';
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
