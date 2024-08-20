
// Tab content script Overview section
const tabData = {
    company: {
        text: "The meaning of production in Carlio is the creation, development, and the path to  progress, and the starting point to achieve the goals that we all have the Petroforce brand, with over 20 years of experience in the oil and petrochemical industry, we officially started our activities in the field of design, engineering, construction of refinery equipment, and the production ofvarious motor and industrial lubricants in the year 1390(2011)",
        buttonText: "Learn More"
    },
    products: {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        buttonText: "View Products"
    },
    ourteam: {
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        buttonText: "Meet the Team"
    }
};



function changeTab(tab, clickedButton) {

    document.getElementById("tab-content").textContent = tabData[tab].text;
    document.getElementById("tab-button").textContent = tabData[tab].buttonText;


}


document.querySelectorAll('.flex-grow .button').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const tab = this.getAttribute('data-tab');
        changeTab(tab, this);
        document.querySelectorAll('.flex-grow .button').forEach(button => {
          
            if (button === this) {
                button.classList.remove('gray');
                button.classList.add('pink');
            } else {
                button.classList.remove('pink');
                button.classList.add('gray');
            }
        });
    });
});






// accordion FAQs script
function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.accordion-icon');
    content.classList.toggle('accordion-content-active');
    if (content.classList.contains('accordion-content-active')) {
        icon.classList.add('accordion-icon-active');
    } else {
        icon.classList.remove('accordion-icon-active');
    }
}






// Footer form script
const form = document.querySelector('.email-form form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.querySelector('.email-form input[type="email"]').value;
    const date = new Date();
    alert(`Thank you for subscribing! ${date.toLocaleString()} ${email}`);
});