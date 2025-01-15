const form = document.querySelector('.form')


form.addEventListener("submit", (e) => {
    e.preventDefault()

    // Дані з форми 

    const name = form.name.value
    const email = form.email.value
    const message = form.message.value

    //Об’єкт для зберігання даних форми

    const formData = {
        name: name,
        email: email,
        message: message,
    }
    console.log(formData);
    document.getElementById('successMessage').classList.remove('hidden')

    form.reset() // Очищення форми
    
})
