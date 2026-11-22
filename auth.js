document.addEventListener("DOMContentLoaded", function () {

    const nav = document.querySelector(".nav-links");

    if (!nav) {
        return;
    }

    const currentUserEmail = localStorage.getItem("currentUser");

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const currentUser = users.find(
        user => user.email === currentUserEmail
    );


    /* REMOVE OLD AUTH LINKS */
    nav.querySelectorAll(".auth-item").forEach(item => {
        item.remove();
    });


    /* =========================
       LOGGED IN
    ========================= */

    if (currentUserEmail && currentUser) {

        const userName =
            currentUser.name
                ? currentUser.name.split(" ")[0]
                : "User";


        const userText = document.createElement("span");

        userText.className = "auth-item";

        userText.style.cssText = `
            color: #d97706;
            font-weight: 700;
            white-space: nowrap;
            margin-left: 5px;
        `;

        userText.textContent = "👤 " + userName;


        const logoutLink = document.createElement("a");

        logoutLink.className = "auth-item";

        logoutLink.href = "#";

        logoutLink.textContent = "Logout";

        logoutLink.style.cssText = `
            color: #dc2626;
            font-weight: 700;
            text-decoration: none;
            white-space: nowrap;
            margin-left: 5px;
        `;


        logoutLink.addEventListener("click", function (e) {

            e.preventDefault();

            localStorage.removeItem("currentUser");

            window.location.href = "index2.html";

        });


        nav.appendChild(userText);

        nav.appendChild(logoutLink);

    }


    /* =========================
       LOGGED OUT
    ========================= */

    else {

        const signupLink = document.createElement("a");

        signupLink.className = "auth-item";

        signupLink.href = "signup.html";

        signupLink.textContent = "Sign Up";

        signupLink.style.cssText = `
            color: #d97706;
            font-weight: 700;
            text-decoration: none;
            white-space: nowrap;
        `;


        const loginLink = document.createElement("a");

        loginLink.className = "auth-item";

        loginLink.href = "login.html";

        loginLink.textContent = "Login";

        loginLink.style.cssText = `
            background: #d97706;
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-weight: 700;
            text-decoration: none;
            white-space: nowrap;
            display: inline-block;
        `;


        nav.appendChild(signupLink);

        nav.appendChild(loginLink);
    }

});