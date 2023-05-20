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

const searchElementWrapper = $.querySelector('.search-input')
const inputElem = $.querySelector('#inputElement')
const ulElem = $.querySelector('.autocom-box')

inputElem.addEventListener('keyup', function (event) {

    inputValue = inputElem.value

    if (inputValue) {
        searchElementWrapper.classList.add('active')

        let mainWord = suggestions.filter(function (suggestion) {
            return suggestion.toLowerCase().includes(inputValue.toLowerCase())
        })

        resultGenerator(mainWord)


    } else {
        searchElementWrapper.classList.remove('active')
    }
})

function resultGenerator(words) {
    ulElem.innerHTML = ''

    if (words.length) {

        words.forEach(function (word) {
            ulElem.innerHTML += '<li>' + word + '</li>'

            liResultsSearch = ulElem.querySelectorAll('li')

            liResultsSearch.forEach(function (wordsElem) {

                wordsElem.addEventListener('click', function (wordElem) {
                    ulElem.innerHTML = ''

                    inputElem.value = wordElem.target.textContent

                    searchElementWrapper.classList.remove('active')
                })
            })
        })
    } else {
        ulElem.innerHTML = '<li>' + inputElem.value + '</li>'
    }
}