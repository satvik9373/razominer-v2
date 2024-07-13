fetch("https://beta.pickaxeproject.com/api/checklogin")
    .then((response) => response.json())
    .then((data) => {
        const element = document.getElementById("username");
        const hamelement = document.getElementById("hamsignin");

        if (data.useremail === "LOGGED OUT") {
            element.innerHTML =
                "<a href='https://beta.pickaxeproject.com/login' style='text-decoration:none;'>Sign in</a>";
            hamelement.innerHTML =
                "<a href='https://beta.pickaxeproject.com/login' style='text-decoration:none;'>Sign in</a>";
        } else {
            element.textContent = data.useremail;
            hamelement.innerHTML =
                "<a href='https://beta.pickaxeproject.com/logout' style='text-decoration:none;'>Sign out</a>";

            posthog.identify(data.real_email, {
                name: data.useremail,
                email: data.real_email,
                gold: data.gold,
                pro: data.pro,
                credits: data.credits,
                pickaxeforbusiness: data.pickaxeforbusiness,
            });
        }
    });

//Add banner

document.addEventListener("DOMContentLoaded", function() {
    if (window.location.hostname === "beta.pickaxeproject.com") {
        // Create the main banner container
        fetch("https://beta.pickaxeproject.com/api/getbanner")
            .then((response) => response.json())
            .then((data) => {
                if (data.showbanner === true) {
                    const banner = document.getElementById("announcement");
                    const banner_text = document.getElementById("announcement-text");

                    banner_text.innerHTML = data.bannerhtml;
                    banner.style.display = "flex";
                }
            });
    }
});