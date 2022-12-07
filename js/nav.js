//nav
const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <!-- main nav bar -->
    <div class="nav">
        <img src="img/dark-logo.png" alt="dark-logo" class="brand-logo">
        <div class="nav-items">
            <div class="search">
                <input type="text" placeholder="search brand,product" class="search-box">
                <button class="search-btn">search</button>
            </div>
            <a> 
                <img src="img/user.png" id="user-img" alt="user">
                <div class="login-logout-popup hide">
                <p class="account-info">Login in as, name</p>
                <button class="btn" id="user-btn">Log out</button>
                </div>
            </a>
            <a href="#"> <img src="img/cart.png" alt="cart"> </a>
        </div>
    </div>
    <!-- nav link -->
    <ul class="links-container">
        <li class="lik-item"> <a href="home.html" class="link">home</a> </li>
        <li class="lik-item"> <a href="#" class="link">women</a> </li>
        <li class="lik-item"> <a href="#" class="link">men</a> </li>
        <li class="lik-item"> <a href="#" class="link">kids</a> </li>
        <li class="lik-item"> <a href="#" class="link">accessories</a> </li>
    </ul>
    `;
}
createNav();


//nav popup

const userImageButton = document.querySelector('#user-img');
const userPop = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () => {
    userPop.classList.toggle('hide');
})

window.onload = () =>{
    let user = JSON.parse(sessionStorage.user || null);
    if(user != null){
        //means user is loggedin
        popuptext.innerHTML = `log in as , ${user.name}`;
        actionBtn.innerHTML = 'log out';
        actionBtn.addEventListener('click', () => {
            sessionStorage.clear();
            location.reload();
        })

    }
    else{
        //user is logged out
        popuptext.innerHTML = 'log in to place order';
        actionBtn.innerHTML = 'log in';
        actionBtn.addEventListener('click', ()=> {
            location.href = 'Login.html';
        })
    }
}