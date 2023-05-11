// Get the form element and add an event listener for form submission
const form = document.querySelector('.myForm1');
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the form data as an object
    const formData = new FormData(form);
    const data = {};
    formData.forEach(function (value, key) {
        data[key] = value;
        console.log(key, ":", value);
    });

    // Save the data to localStorage
    localStorage.setItem('myFormData', JSON.stringify(data));

    // Display a success message
    alert('Data saved successfully!');
});
const savedData = localStorage.getItem('myFormData');
if (savedData) {
    const data = JSON.parse(savedData);
    //Do anything with the data here

}
