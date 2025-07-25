function rentCar(carModel) {
    alert(`You have chosen to rent ${carModel}.`);
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    alert(`Thank you, ${name}! We have received your message: "${message}" We will contact you at ${email}.`);
});
