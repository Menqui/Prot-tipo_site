 $(document).ready(function() {
    var botao = $('.bt1');
    var dropDown = $('.ul-not');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
});

 //LOGIN
 const init = () => {
    const validateEmail = (event) => {
        const input = event.currentTarget;
        const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
        const emailtest = regex.test(input.value);

        if (emailTest) {
            submitButton.setAttribute('disabled', 'disabled');
            input.nextElementSibling.ClassList.add('error');
        }
        else {
            submitButton.removeAttribute('disabled');
            input.nextElementSibling.ClassList.remove('error');
        }
    }


    const inputName = document.querySelector('input[type="text"]');
    const inputPassword = document.querySelector('input[type="password"]');
    const submitButton = document.getElementsByClassName("submit");

    inputEmail.addEventListener('input', validateEmail);

    console.log(inputName, inputPassword, submitButton);
    if (submitButton) {//se o botão for verdadeiro
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();

            fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers:{ 'Content-Type': 'aplication/json'
            },
                body: JSON.stringify({
                    name: inputName.value,
                    passoword: inputPassword.value,
                })
            }).then((response) => {
                return response.json(); 
            }
            )
        })
    }
}
window.onload = init;


