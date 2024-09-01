// ..............click effect ..............

document.querySelectorAll('.header ul li').forEach(function(item) {
    item.addEventListener('click', function() {
        // Remove 'active' class from all <li> elements
        document.querySelectorAll('.header ul li').forEach(function(li) {
            li.classList.remove('active');
        });
        
        // Add 'active' class to the clicked <li>
        this.classList.add('active');
    });
});


// .............Click Sound.......
const buttons = document.querySelectorAll('.clickButton');
const clickSound = document.getElementById('clickSound');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        clickSound.play();
    });
});




/*◢█ ============ Loading Animation START    ===========█◣*/

document.addEventListener("DOMContentLoaded", function() {
    const loading = document.getElementById('loading');
    const content = document.getElementById('content');

    // Show the loading animation
    loading.classList.add('visible');

    // Simulate content loading
    setTimeout(() => {
        // Hide the loading animation
        loading.classList.remove('visible');

        // Show the main content
        content.style.display = 'block';
    }, 2000); // Adjust the time as needed
});
/*◥█ ============  Loading Animation END    ========== █◤*/






/*◢█ ============ GSAP Animation START    ===========█◣*/

gsap.from("marquee",{
    opacity:0,
    duration:2,
    delay:2.5,
    x:30,
    scale:0.5,
})


gsap.from(".home-button a",{
    opacity:0,
    duration:1.5,
    delay:3,
    y:20,
    scale:0,
    stagger:0.5,
})



gsap.from(".about-img img",{
    opacity:0,
    duration:1.5,
    delay:1.5,
    x:-20,
    scale:0,
    stagger:1,
    scrollTrigger:{
        trigger:".about-img",
        scroller:"body",
        start:"top 60%",
        end: "top 30%",
        scrub:2,

    }

});


gsap.from(".about__box",{
    opacity:0,
    duration:2,
    y:-50,
    scale:0,
    delay:1.5,
    stagger:1,
    scrollTrigger:{
        trigger:".about__info",
        scroller:"body",
        start:"top 60%",
        end:"top 30%",
        scrub:2,
    }

});


gsap.from(".about__description, about-button",{
    opacity:0,
    duration:2,
    y:-20,
    scale:0,
    delay:1.5,
    stagger:1,
    scrollTrigger:{
        trigger:".about__info",
        scroller:"body",
        start:"top 60%",
        end:"top 30%",
        scrub:2,
    }

});



gsap.from(".skill-box",{
    opacity:0,
    duration:2,
    y:-50,
    // rotate:20,
    scale:0,
    delay:1.5,
    stagger:1,
    scrollTrigger:{
        trigger:".skill-section",
        scroller:"body",
        start:"top 45%",
        end:"top 20%",
        scrub:2,
    }

});



gsap.from(".my-projects",{
    opacity:0,
    duration:2.5,
    x:-50,
    // rotate:20,
    scale:0,
    stagger:1,
    delay:1.5,
    scrollTrigger:{
        trigger:".portfolio-section",
        scroller:"body",
        start:"top 45%",
        end:"top 20%",
        scrub:2,
    }

});



gsap.from(".contact-form",{
    opacity:0,
    duration:3,
    y:50,
    scale:0,
    stagger:1,
    delay:1.5,
    scrollTrigger:{
        trigger:".contact-section",
        scroller:"body",
        start:"top 30%",
        end:"top 20%",
        scrub:2,
    }

});



gsap.from(".footer",{
    opacity:0,
    duration:2.4,
    y:20,
    scale:0,
    stagger:1,
    delay:1.5,
    scrollTrigger:{
        trigger:".footer",
        scroller:"body",
        start:"top 95%",
        end:"top 80%",
        scrub:2,
    }

});








// ............... 

// function sendMail() {
//     let parms = {
//         name : document.getElementById("name").value,
//         email : document.getElementById("email").value,
//         message : document.getElementById("message").value,
//     }

//     emailJs.send("service_2cyfmaj", "template_zu32sz8",parms).then(alert("Email sent Succesfully"))
// }


// function sendMail() {
//     let parms = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         message: document.getElementById("message").value,
//     };

//     emailjs.send("service_pppqv35", "template_zu32sz8", parms)
//         .then(function(response) {
//             alert("Email sent successfully!");
//         })
//         .catch(function(error) {
//             console.error("Failed to send email:", error);
//             alert("Failed to send the email. Please try again later.");
//     });
// }



document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission

    sendMail();  // Call the sendMail function
});

function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_pppqv35", "template_zu32sz8", parms)
    .then(function(response) {
        alert("Email sent successfully!");

         // Clear the form fields after successful submission
         document.getElementById("contactForm").reset();
    
    })
    .catch(function(error) {
        console.error("Failed to send email:", error);
        alert("Failed to send the email. Please try again later.");
    });
}

