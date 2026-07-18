/* ==========================================================
   CAFE CRUST
   Main JavaScript File
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       Smooth Scroll
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    /* ==========================================
       Sticky Navbar Shadow
    ========================================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";

            navbar.style.transition = ".3s";

        }
        else {

            navbar.style.boxShadow = "0 2px 15px rgba(0,0,0,.08)";

        }

    });


    /* ==========================================
       Active Navigation Link
    ========================================== */

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });


    /* ==========================================
       Scroll To Top Button
    ========================================== */

    const scrollBtn = document.createElement("button");

    scrollBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

    scrollBtn.className = "scrollTopBtn";

    document.body.appendChild(scrollBtn);

    scrollBtn.style.cssText = `
        position:fixed;
        right:25px;
        bottom:25px;
        width:50px;
        height:50px;
        border:none;
        border-radius:50%;
        background:#ff6b1a;
        color:#fff;
        cursor:pointer;
        display:none;
        z-index:999;
        font-size:18px;
        box-shadow:0 10px 20px rgba(0,0,0,.2);
        transition:.3s;
    `;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 350) {

            scrollBtn.style.display = "block";

        }
        else {

            scrollBtn.style.display = "none";

        }

    });

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });


    scrollBtn.addEventListener("mouseenter", () => {

        scrollBtn.style.transform = "translateY(-5px)";

    });

    scrollBtn.addEventListener("mouseleave", () => {

        scrollBtn.style.transform = "translateY(0)";

    });

});

/* ==========================================================
   SHOW MORE BUTTONS
========================================================== */

const showButtons = document.querySelectorAll(".menu-section .btn-warning");

showButtons.forEach(button => {

    button.addEventListener("click", function () {

        if (this.innerText === "Show More") {

            this.innerText = "Show Less";

        } else {

            this.innerText = "Show More";

        }

    });

});


/* ==========================================================
   NEWSLETTER FORM
========================================================== */

const newsletterForm = document.querySelector(".newsletter-form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = this.querySelector("input");

        const value = email.value.trim();

        const pattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (pattern.test(value)) {

            alert("🎉 Thank you for subscribing!");

            email.value = "";

        }
        else {

            alert("Please enter a valid email address.");

        }

    });

}


/* ==========================================================
   ADD BUTTON EFFECT
========================================================== */

const addButtons = document.querySelectorAll(".btn-add");

addButtons.forEach(button => {

    button.addEventListener("click", function () {

        const originalText = this.innerText;

        this.innerHTML = "✔ Added";

        this.style.background = "#28a745";

        setTimeout(() => {

            this.innerHTML = originalText;

            this.style.background = "#ff6b1a";

        }, 1500);

    });

});


/* ==========================================================
   CARD HOVER TILT
========================================================== */

const cards = document.querySelectorAll(".menu-card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 8;

        const rotateX = ((y / rect.height) - 0.5) * -8;

        card.style.transform =
            `perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});


/* ==========================================================
   FADE-IN ANIMATION
========================================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: .15
});

document.querySelectorAll(
    ".menu-card,.testimonial-card,.category-box"
).forEach(el => {

    el.style.opacity = "0";

    el.style.transform = "translateY(40px)";

    el.style.transition = ".8s ease";

    observer.observe(el);

});


/* ==========================================================
   HERO BUTTON PULSE
========================================================== */

const heroBtn = document.querySelector(".hero .btn");

if (heroBtn) {

    setInterval(() => {

        heroBtn.animate([

            {
                transform: "scale(1)"
            },

            {
                transform: "scale(1.05)"
            },

            {
                transform: "scale(1)"
            }

        ], {

            duration: 1200

        });

    }, 3500);

}


/* ==========================================================
   IMAGE ZOOM ON CLICK
========================================================== */

document.querySelectorAll(".menu-card img")
    .forEach(img => {

        img.style.cursor = "zoom-in";

        img.addEventListener("click", () => {

            const overlay = document.createElement("div");

            overlay.style.cssText = `
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,.85);
display:flex;
justify-content:center;
align-items:center;
z-index:9999;
cursor:pointer;
`;

            const image = document.createElement("img");

            image.src = img.src;

            image.style.maxWidth = "85%";
            image.style.maxHeight = "85%";
            image.style.borderRadius = "15px";
            image.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";

            overlay.appendChild(image);

            document.body.appendChild(overlay);

            overlay.onclick = () => overlay.remove();

        });

    });

    const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        e.preventDefault();

        const search = this.value.trim().toLowerCase();

        const items = document.querySelectorAll(".menu-card");

        let found = false;

        items.forEach(item => {

            const title = item.querySelector("h3").innerText.toLowerCase();

            if(title.includes(search)){

                item.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

                item.style.boxShadow = "0 0 25px orange";
                item.style.transform = "scale(1.05)";

                setTimeout(()=>{
                    item.style.boxShadow = "";
                    item.style.transform = "";
                },2000);

                found = true;
            }

        });

        if(!found){
            alert("Item not found!");
        }

    }

});

/* ================= SHOPPING CART ================= */

const cart = [];

const cartBtn = document.getElementById("cartBtn");
const cartSidebar = document.getElementById("cartSidebar");
const closeCart = document.getElementById("closeCart");

cartBtn.onclick = () => {

    cartSidebar.classList.add("active");

};

closeCart.onclick = () => {

    cartSidebar.classList.remove("active");

};

const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");

document.querySelectorAll(".btn-add").forEach(button => {

    button.addEventListener("click", () => {

        const name = button.dataset.name;
        const price = parseFloat(button.dataset.price);

        const existing = cart.find(item => item.name === name);

        if(existing){

            existing.qty++;

        }else{

            cart.push({

                name,
                price,
                qty:1

            });

        }

        updateCart();

    });

});

function updateCart(){

    cartItems.innerHTML="";

    let total=0;

    let count=0;

    cart.forEach(item=>{

        total+=item.price*item.qty;

        count+=item.qty;

        cartItems.innerHTML+=`

        <div class="cart-item">

            <div>

                <strong>${item.name}</strong>

                <br>

                Qty : ${item.qty}

            </div>

            <div>

                $${(item.price*item.qty).toFixed(2)}

            </div>

        </div>

        `;

    });

    if(cart.length===0){

        cartItems.innerHTML="<p>Your bucket is empty.</p>";

    }

    cartTotal.innerText=total.toFixed(2);

    cartCount.innerText=count;

}

document.getElementById("clearCart").onclick=()=>{

cart.length=0;

updateCart();

};

/* ================= PLACE ORDER ================= */

const checkoutModal = document.getElementById("checkoutModal");
const checkoutTotal = document.getElementById("checkoutTotal");
const closeCheckout = document.getElementById("closeCheckout");

document.getElementById("placeOrder").addEventListener("click", () => {

    if (cart.length === 0) {
        alert("🛒 Your bucket is empty!");
        return;
    }

    checkoutTotal.innerText = cartTotal.innerText;

    checkoutModal.style.display = "flex";

});

closeCheckout.addEventListener("click", () => {

    checkoutModal.style.display = "none";

});

window.addEventListener("click", (e) => {

    if (e.target === checkoutModal) {
        checkoutModal.style.display = "none";
    }

});

document.getElementById("checkoutForm").addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("customerName").value;
    const phone = document.getElementById("customerPhone").value;
    const address = document.getElementById("customerAddress").value;
    const city = document.getElementById("customerCity").value;
    const pin = document.getElementById("customerPin").value;

    const payment = document.getElementById("paymentMethod");
    const paymentText = payment.options[payment.selectedIndex].text;

    const orderId = "CC" + Math.floor(Math.random() * 100000);

    let summary = "";

    cart.forEach(item => {

        summary += `${item.name} x ${item.qty}\n`;

    });

    alert(
`🎉 ORDER CONFIRMED

Order ID: ${orderId}

Customer: ${name}

Phone: ${phone}

Address:
${address}

${city} - ${pin}

Payment: ${paymentText}

Items:
${summary}

Total: $${cartTotal.innerText}

Estimated Delivery:
20-30 Minutes

Thank you for choosing Cafe Crust ☕`
    );

    cart.length = 0;

    updateCart();

    checkoutModal.style.display = "none";

    this.reset();

});

const paymentMethod = document.getElementById("paymentMethod");
const upiSection = document.getElementById("upiSection");
const cardSection = document.getElementById("cardSection");

paymentMethod.addEventListener("change", () => {

    upiSection.style.display = "none";
    cardSection.style.display = "none";

    if (paymentMethod.value === "upi") {

        upiSection.style.display = "block";

    }

    if (paymentMethod.value === "card") {

        cardSection.style.display = "block";

    }

});

const categoryBoxes = document.querySelectorAll(".category-box");

categoryBoxes.forEach(box => {

    box.addEventListener("click", () => {

        const category = box.dataset.category;

        const cards = document.querySelectorAll(".menu-card");

        let firstMatch = null;

        cards.forEach(card => {

            if (card.dataset.category === category) {

                if (!firstMatch) {
                    firstMatch = card;
                }

                card.style.boxShadow = "0 0 25px orange";
                card.style.transform = "scale(1.05)";

                setTimeout(() => {
                    card.style.boxShadow = "";
                    card.style.transform = "";
                }, 2000);
            }

        });

        if (firstMatch) {
            firstMatch.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }

    });

});
