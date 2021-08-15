document.getElementById('login-submit').addEventListener('click',function(){
    //get user email
    const userField = document.getElementById('user-email');
    const userEmail = userField.value;
    //user pass
    const userPassField =document.getElementById('user-pass');
    const userPass = userPassField.value;

    if(userEmail == 'x@gmail.com' && userPass == '123456'){
        window.location.href = 'banking.html';
    };
    
    //Redirect another page function
    /* document.getElementById('login-submit').onclick = function(){
        location.href = 'banking.html';
    }; */ 

});

