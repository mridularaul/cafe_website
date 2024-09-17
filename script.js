document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Thank you for reaching out, " + name + ". We'll get back to you soon!");
        document.getElementById("contactForm").reset();
    }
});
// Function to open the modal and display the clicked card's image and text
function openModal(imageSrc, title, description) {
    // Get modal elements
    const modal = document.getElementById("menuModal");
    const modalImg = document.getElementById("modalImage");
    const caption = document.getElementById("modalCaption");

    // Set the image and text for the modal
    modal.style.display = "block";
    modalImg.src = imageSrc;
    caption.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("menuModal");
    modal.style.display = "none";
}
