console.log('button clicking file added');

// document.getElementById('id).addEventListener('click');
// document.getElementById('button-login')
//     .addEventListener('click', function(){})

// search: form submit reloading the page

// step - 1 set event handler
document.getElementById('button-login')
    .addEventListener('click', function(event){
        // step-2: prevent default behavior (prevent reloading browser)
        event.preventDefault(); // <-- Bhejal to beginners
        // console.log('login button clicked');

        // step-3: get the phone number and the pin
        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-number').value;

        console.log(phoneNumber, pinNumber );

        // step -4: validate phone number and pin
        // NOT THE IDEAL WAY. SHOULD NOT DO LIKE THIS
        if(phoneNumber === '5' && pinNumber === '1234'){
            console.log('you are logged in');
            window.location.href = '/home.html';
            // step-5: allow user to use the website
        }
        else{
            alert('Wrong phone number  or PIN');
        }

    })