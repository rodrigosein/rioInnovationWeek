let questions = [
    {
        options: [
            { image: "images/1 botao 1.png", selectedImage: "images/1 botao2 1.png", value: "1A" },
            { image: "images/1 botao 2.png", selectedImage: "images/1 botao2 2.png", value: "1B" },
            { image: "images/1 botao 3.png", selectedImage: "images/1 botao2 3.png", value: "1C" }
        ],
        answer: "1B",
        image: "images/pergunta1.jpg"
    },
    {
        
        options: [
            { image: "images/2 botao 1.png", selectedImage: "images/2 botao2 1.png", value: "2A" },
            { image: "images/2 botao 2.png", selectedImage: "images/2 botao2 2.png", value: "2B" },
            { image: "images/2 botao 3.png", selectedImage: "images/2 botao2 3.png", value: "2C" }
        ],
        answer: "2A",
        image: "images/pergunta2.jpg"
    },
    {
       
        options: [
            { image: "images/3 botao 1.png", selectedImage: "images/3 botao2 1.png", value: "3A" },
            { image: "images/3 botao 2.png", selectedImage: "images/3 botao2 2.png", value: "3B" },
            { image: "images/3 botao 3.png", selectedImage: "images/3 botao2 3.png", value: "3C" }
        ],
        answer: "3C",
        image: "images/pergunta3.jpg"
    },
    {
        
        options: [
            { image: "images/4 botao 1.png", selectedImage: "images/4 botao2 1.png", value: "4A" },
            { image: "images/4 botao 2.png", selectedImage: "images/4 botao2 2.png", value: "4B" },
            { image: "images/4 botao 3.png", selectedImage: "images/4 botao2 3.png", value: "4C" }
        ],
        answer: "4C",
        image: "images/pergunta4.jpg"
    },
    {
       
        options: [
            { image: "images/5 botao 1.png", selectedImage: "images/5 botao2 1.png", value: "5A" },
            { image: "images/5 botao 2.png", selectedImage: "images/5 botao2 2.png", value: "5B" },
            { image: "images/5 botao 3.png", selectedImage: "images/5 botao2 3.png", value: "5C" }
        ],
        answer: "5A",
        image: "images/pergunta5.jpg"
    },
    {
        
        options: [
            { image: "images/6 botao 1.png", selectedImage: "images/6 botao2 1.png", value: "6A" },
            { image: "images/6 botao 2.png", selectedImage: "images/6 botao2 2.png", value: "6B" },
            { image: "images/6 botao 3.png", selectedImage: "images/6 botao2 3.png", value: "6C" }
        ],
        answer: "6A",
        image: "images/pergunta6.jpg"
    },
    {
        
        options: [
            { image: "images/7 botao 1.png", selectedImage: "images/7 botao2 1.png", value: "7A" },
            { image: "images/7 botao 2.png", selectedImage: "images/7 botao2 2.png", value: "7B" },
            { image: "images/7 botao 3.png", selectedImage: "images/7 botao2 3.png", value: "7C" }
        ],
        answer: "7C",
        image: "images/pergunta7.jpg"
    },
    // Adicione mais perguntas aqui com a propriedade 'image'
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let currentInfoScreen = 1;

function startQuiz() {
    shuffleQuestions();
    currentQuestionIndex = 0;
    correctAnswers = 0;
    document.getElementById('start-screen').style.display = 'none';
    currentInfoScreen = 1; // Reset para a primeira tela de informação
    showInfoScreen(currentInfoScreen);
}

function shuffleQuestions() {
    questions.sort(() => Math.random() - 0.5);
}

function showInfoScreen(screenNumber) {
    const screens = document.querySelectorAll('.info-screen');
    screens.forEach(screen => screen.style.display = 'none');
    
    const currentScreen = document.getElementById(`info-screen-${screenNumber}`);
    if (currentScreen) {
        currentScreen.style.display = 'flex';
    }
}

function navigateInfoScreens(direction) {
    const totalScreens = document.querySelectorAll('.info-screen').length;
    currentInfoScreen += direction;

    if (currentInfoScreen < 1) {
        currentInfoScreen = 1;
    } else if (currentInfoScreen > totalScreens) {
        showQuestionScreen();
        return;
    }

    showInfoScreen(currentInfoScreen);
}

function showQuestionScreen() {
    document.querySelectorAll('.info-screen').forEach(screen => screen.style.display = 'none');
    document.getElementById('question-screen').style.display = 'flex';
    displayQuestion();
}

function displayQuestion() {
    if (currentQuestionIndex < 3) { // Mostrar 3 perguntas por vez
        let question = questions[currentQuestionIndex];
        document.getElementById('question-screen').style.backgroundImage = `url(${question.image})`;
        let optionsDiv = document.getElementById('options');
        optionsDiv.innerHTML = '';

        question.options.forEach(option => {
            let img = document.createElement('img');
            img.src = option.image;
            img.alt = option.value;
            img.onclick = () => {
                checkAnswer(option.value, img);
            };
            optionsDiv.appendChild(img);
        });
    } else {
        showResultScreen();
    }
}

function checkAnswer(selectedOption, imgElement) {
    let question = questions[currentQuestionIndex];
    imgElement.src = question.options.find(option => option.value === selectedOption).selectedImage;

    if (selectedOption === question.answer) {
        correctAnswers++;
    }

    setTimeout(nextQuestion, 1000); // Esperar 1 segundo antes de ir para a próxima pergunta
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResultScreen();
    }
}

function showResultScreen() {
    document.getElementById('question-screen').style.display = 'none';
    const positiveResultScreen = document.getElementById('positive-result-screen');
    const negativeResultScreen = document.getElementById('negative-result-screen');
    
    if (correctAnswers >= 2) {
        positiveResultScreen.style.display = 'flex';
        negativeResultScreen.style.display = 'none';
    } else {
        positiveResultScreen.style.display = 'none';
        negativeResultScreen.style.display = 'flex';
    }
}

function returnToStart() {
    document.querySelectorAll('.screen').forEach(screen => screen.style.display = 'none');
    document.getElementById('start-screen').style.display = 'flex';
}
