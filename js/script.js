const form = document.getElementById('registerForm');
const errorMessage = document.getElementById('errorMessage');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent form from submitting the default way

    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const dob = form.dob.value;
    const address = form.address.value;
    const places = form.places.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // Check if passwords match
    if (password !== confirmPassword) {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    } else {
        errorMessage.style.display = 'none';
        successMessage.style.display = 'block';

        // You can add code to send form data to the server here
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Date of Birth:', dob);
        console.log('Address:', address);
        console.log('Interested Places:', places);
        console.log('Email:', email);
        console.log('Password:', password);
    }
});
