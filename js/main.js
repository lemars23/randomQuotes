"use strict";

const quotesObj = {
    btnRandom: document.querySelector(".wrapper-btn-link"),
    quote: document.querySelector(".wrapper-quote"),
    author: document.querySelector(".wrapper-author"),
    quotes: [
        "Франца Кафки-Радости этой жизни суть не ее радости, а наш страх пред восхождением в высшую жизнь; муки этой жизни суть не ее муки, а наше самобичевание из-за этого страха.",
        "Франца Кафки-Так крепко, как рука держит камень. А держит она его крепко лишь для того, чтобы швырнуть его как можно дальше. Но дорога приведет и в ту даль.",
        "Франца Кафки-Задние мысли, с которыми ты впускаешь в себя зло, — это не твои мысли, а зла.",
        "Ивана Бунина-Если человек не потерял способности ждать счастья — он счастлив. Это и есть счастье.",
        "Ивана Бунина-Женщины подобны людям и живут около людей.",
        "Ивана Бунина-Мир — бездна бездн. И каждый атом в нем проникнут богом — жизнью, красотою. Живя и умирая, мы живем единою, всемирною Душою.",
        "Иоганна Гёте-Публика любит, чтобы с нею обходились как с женщинами, которым говори лишь то, что им приятно слышать.",
        "Иоганна Гёте-Высокие цели, хотя бы невыполненные, дороже нам низких целей, хотя бы и достигнутых.",
        "Иоганна Гёте-Кто не слишком мнит о себе, тот лучше, чем он сам думает.",
        "Беллы Ахмадулина-Я уверена, что обязательная черта талантливого человека – это немедленно чувствовать и любить талант другого человека. Я уверена, что все злопыхатели бездарны.",
        "Беллы Ахмадулина-Хороших предчувствий не бывает.",
        "Беллы Ахмадулина-Счастье есть осознанный миг бытия.",
    ],

    getRandomQuote() {
        let randomNumber = Math.floor(Math.random() * this.quotes.length);
        let randomQuote = this.quotes[randomNumber].split("-");
        this.author.innerHTML = "";
        this.quote.innerHTML = "";
        this.author.innerHTML += randomQuote[0];
        this.quote.innerHTML += randomQuote[1];
    },

    outputRandomQuote() {
        this.btnRandom.addEventListener("click", event => {
            event.preventDefault();
            this.getRandomQuote();
        });

        this.btnRandom.removeEventListener("click", event => {
            event.preventDefault();
            this.getRandomQuote();
        });
    }
};

quotesObj.outputRandomQuote();