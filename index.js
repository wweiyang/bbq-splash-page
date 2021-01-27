let signUpForm = document.getElementById("sign-up-form")
signUpForm.addEventListener("submit", event => {
    event.preventDefault;
    let ourFormData = new FormData(event.target)
    userFirstName = ourFormData.get("firstName")
    
    let updatedHtmlContent = `
        <div class="container-container-form">
            <h2>Congratulations, ${userFirstName}!</h2>

            <p class="form-subtitle">You're on your way to becoming a BBQ Master!</p>
            
            <p class="fine-print">We'll never share your information
            without your permission</p>
        </div>
    `
    let ourMainContent = document.getElementById("mainContent")
    ourMainContent.innerHTML = updatedHtmlContent
})