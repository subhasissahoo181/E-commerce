const createFooter = () => {
    let footer = document.querySelector('footer');
    footer.innerHTML = ` 
    <div class="footer-content">
            <img src="img/light-logo.png" alt="logo" class="logo">
            <div class="footer-ul-container">
                <!-- men -->
                <ul class="category">
                    <li class="catagory-title">men</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">trousers</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">casuals</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">watch</a></li>
                </ul>
                <!-- women -->
                <ul class="category">
                    <li class="catagory-title">women</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">trousers</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">casuals</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">watch</a></li>
                </ul>               

            </div>
        </div>
                <p class="footer-title">about-company</p>
                <p class="info">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Aut eaque quam incidunt libero, atque dignissimos inventore magni natus
                    ex reiciendis molestias odio modi assumenda est expedita quo? Illum facilis
                    consequatur itaque qui. Enim maiores architecto rem dolores magni tenetur
                    ratione! Fugiat dignissimos vitae distinctio dolorem, voluptatum laboriosam
                    sunt quod alias dolorum asperiores velit accusamus tempora eum at repudiandae!
                    Nam, voluptas?
                </p>

                <p class="info">support emails - sahoostore.org@gmail.com  </p>
                <p class="info">teliphone - +91 765-6896-830</p>

                <div class="footer-social-container">
                    <div>
                        <a href="#" class="social-link">terms & services</a>
                        <a href="#" class="social-link">privacy page</a>
                    </div>
                    <div>
                        <a href="#" class="social-link">instagram</a>
                        <a href="#" class="social-link">facebook</a>
                        <a href="#" class="social-link">twitter</a>
                        <a href="#" class="social-link">youtube</a>
                    </div>
                </div>
                <p class="footer-credit">Clothing, Best aparels online store</p>
    `;
}
createFooter();