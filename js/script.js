let suggestions = [
    "Channel",
    "CodingLab",
    "CodingNepal",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to become Freelancer",
    "How to become Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
];

let $ = document

const inputElem = $.querySelector('#inputElement')
const ulElem = $.querySelector('.autocom-box')
const searchInputElem = $.querySelector('.search-input')

inputElem.focus() // !

inputElem.addEventListener('keyup', function () {
    let searchInputValue = inputElem.value

    if (searchInputValue) {
        searchInputElem.classList.add('active')

        let mainWord = suggestions.filter(function (words) {
            return words.toLowerCase().includes(searchInputValue.toLowerCase())
        })

        suggestionGenerator(mainWord)

    } else {
        searchInputElem.classList.remove('active')
    }
})

function suggestionGenerator(words) {
    ulElem.innerHTML = ''

    if (words.length) {
        words.forEach(function (word) {
            ulElem.innerHTML += '<li>' + word + '</li>'

            let liElems = ulElem.querySelectorAll('li')

            liElems.forEach(function (wordsElem) {
                wordsElem.addEventListener("click", function (event) {
                    inputElem.value = event.target.textContent

                    searchInputElem.classList.remove('active')
                })
            })
        })
    } else {
        ulElem.innerHTML = '<li>' + inputElem.value + '</li>'
    }
}