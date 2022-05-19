let button = document.querySelector('#calculateBtn');
button.addEventListener('click', function(){
    let weight = Number(document.querySelector("#weight").value);
    console.log('data type of weight =>', typeof(weight));
   
    let height = Number(document.querySelector('#height').value);
    console.log('data type of height =>', typeof(height));

    let bmi = weight / height ** 2;
    let status = ""; // empty string means we don't know the status
    if (bmi < 18.5) {
        status = 'underweight';
    } else if (bmi < 25) {
        status = "healthy";
    } else if (bmi < 30) {
        status = "overweight"
    } else {
        status = "obese"
    }
    let resultDiv = document.querySelector('#result');
    resultDiv.innerHTML = `
        <ul>
            <li>BMI: ${bmi}</li>
            <li>Weight class: ${status}</li>            
        </ul>
    `;
})