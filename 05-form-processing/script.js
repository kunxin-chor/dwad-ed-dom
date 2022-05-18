let submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener('click', function(){
    // suppose that the user types in "ACME Anvil" into the text box
    let productInput = document.querySelector('#product-name');
    // => <input#product-name>
    let product = productInput.value;
    // => let product = <input#product-name>.value
    // => let product = "ACME Anvil"

    let deliveryOptions = document.querySelectorAll('.delivery');
    // alternatively, we can select by the name attribute
    // let deliveryOptions = document.querySelectorAll('[name="delivery"]')
    let selectedDelivery = null;
    for (let delivery of deliveryOptions) {
        if (delivery.checked == true) {
          selectedDelivery = delivery;
          break;
        }
    }
    
    // step 1: select all the checkboxes
    let options = document.querySelectorAll('.options');
    let selectedOptions = [];
    for(let o of options) {
        if (o.checked == true) {
            selectedOptions.push(o.value)
        }
    }
    console.log(selectedOptions);

    let country = document.querySelector('#country').value

    alert("Product: " + product 
        + ", delivery: " + selectedDelivery.value 
        + ", country=" + country 
        + ", options=" + selectedOptions.join(','));
});