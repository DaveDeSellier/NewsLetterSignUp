const submitButton = document.querySelector('form button')
const formLabelSpan = document.querySelector('form label span')
const formInput = document.querySelector('form input')
const form = document.querySelector('form')

const cardLayout = document.querySelector('.card-wrapper')
const cardInfoWrapper = document.querySelector('.card-info')
const mainImg = document.getElementById('mainImg')
const successImg = document.getElementById('successImg')

submitButton.addEventListener('click', function (event) {
    event.preventDefault()
    const isValidEmail = validateEmail(event)

    if (!isValidEmail) {
        formLabelSpan.classList.add('show')
        formInput.classList.add('danger', 'danger-input')
        return
    }

    // Hide images
    mainImg.classList.add('hide')

    //Unhide success image and styles
    successImg.classList.remove('hide')

    //Change layout from row to column
    cardLayout.classList.add('column')

    //Change the order of the icon to be the first item
    cardInfoWrapper.classList.add('order-2', 'remove-margin')
    cardLayout.classList.add('remove-align-times', 'padding-3')

    //Hide list in card info
    cardInfoWrapper.children[3].classList.add('hide')

    //Hide form label and input
    form.children[0].classList.add('hide') //label
    formInput.classList.add('hide')

    //Update h1
    cardInfoWrapper.children[1].innerHTML = `Thanks for subscribing!`

    //Update p
    cardInfoWrapper.children[2].innerHTML = `A confirmation email has been sent
                    to <span>ash@loremcompany.com.</span> Please open it and click the button
                    inside to confirm your subscription.`

    //Update button text
    submitButton.innerHTML = `Dismiss message`
})

function validateEmail(e) {
    const email = document.querySelector('form input').value

    const isValid = String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )

    if (isValid === null) {
        return false
    }

    return true
}
