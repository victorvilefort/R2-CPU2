const questions = [
   {
    question:"Quando um programa é aberto, qual componente busca instruções namemória RAM e realiza o processamento dos dados?",
    alternatives: ["SSD","CPU","Fonte","Placa de rede"],
    correct: 2
   },
   {
    question:"Qual parte do processador é essencial para executar operações aritméticas etestes condicionais em programas?",
    alternatives:["Placa-mãe","Fonte","ULA","Cache L2"],
    correct: 3
   },
   {
    question:"Dentro da arquitetura de computadores, qual estrutura possui acesso extremamente rápido para auxiliar a CPU durante o processamento?",
    alternatives:["Memória RAM","Registradores","HD","Fonte"],
    correct: 2
   },
   {
    question:"Qual conjunto abaixo reúne tipos de memória responsáveis tanto pelo armazenamento temporário quanto pelo armazenamento permanente em sistemas computacionais modernos?",
    alternatives:["RAM, ROM, EPROM","Flash e memória de massa","CPU, ULA, registradores e cache","GPU, SSD, fonte e barramento","BIOS, cooler, chipset e monitor"],
    correct: 1
   },
   {
    question:"Qual técnica de transferência de dados é amplamente utilizada por discos,placas de rede e outros periféricos para otimizar operações de entrada e saída?",
    alternatives:["Cache L1","DMA","ULA","ROM"],
    correct: 2
   },
   {
    question:"Qual mecanismo é responsável por selecionar qual dispositivo integrado deve responder a uma comunicação no barramento?",
    alternatives:["Cache","Registradores","CS - Chip Select", "Flash"],
    correct: 3
   },
   {
    question:"Em um sistema computacional, qual alternativa descreve corretamente a diferença entre Address Bus e Data Bus?",
    alternatives:["O Address Bus transporta dados e o Data Bus transporta endereços","O Address Bus seleciona periféricos e o Data Bus controla o clock","O Address Bus define onde acessar e o Data Bus transporta as informações","Ambos possuem exatamente a mesma função"],
    correct: 3
   },
   {
    question:"Qual das alternativas abaixo representa linhas de processadores desenvolvidas pela Intel voltadas para computadores de alto desempenho?",
    alternatives:["Ryzen 5 e Ryzen 7","Core i5 e Core i7","NVIDIA 4060 e NVIDIA 4070","XEON3 e XEON5"],
    correct: 2
   },
   {
    question:"arquitetura de computadores, qual tecnologia permite que uma CPU execute múltiplas tarefas simultaneamente utilizando quatro núcleos físicos?",
    alternatives:["DMA","Quad Core","EPROM","Quad Boot"],
    correct: 2
   },
   {
    question:"Em relação ao desempenho multitarefa, por que processadores Octa Core geralmente superam os Quad Core?",
    alternatives:["Porque utilizam menos energia elétrica","Porque possuem barramentos maiores","Porque contam com mais núcleos para dividir tarefas simultaneamente","Porque usam apenas memória cache"],
    correct: 3
   }
]

let acertos = 0;
let erros = 0;
let currentQuestionCounter = 0;
let currentQuestion = "";
let currentAlternative = 0;

let alternativaA = "";
let alternativaB = "";
let alternativaC = "";
let alternativaD = "";

let responseA = document.querySelector(".alternative-response-1 p")
let responseB = document.querySelector(".alternative-response-2 p")
let responseC = document.querySelector(".alternative-response-3 p")
let responseD = document.querySelector(".alternative-response-4 p")

function renderQuestion(){

        currentQuestion = questions[currentQuestionCounter].question;

        alternativeA = questions[currentQuestionCounter].alternatives[0]
        alternativeB = questions[currentQuestionCounter].alternatives[1]
        alternativeC = questions[currentQuestionCounter].alternatives[2]
        alternativeD = questions[currentQuestionCounter].alternatives[3]

        let mainQuestion = document.querySelector(".main-quest-title p")

        mainQuestion.innerHTML = `<p>${currentQuestionCounter + 1}) ${currentQuestion}</p>`;

        responseA.innerHTML = `<p>${alternativeA}</p>`
        responseB.innerHTML = `<p>${alternativeB}</p>`
        responseC.innerHTML = `<p>${alternativeC}</p>`
        responseD.innerHTML = `<p>${alternativeD}</p>`
}

function selectAnswer(index){
    if (index === questions[currentQuestionCounter].correct){
        acertos++   
        console.log(acertos)
    } else{
        erros++
        console.log(erros)
    }
}

function nextQuestion(){
    if(currentQuestionCounter < questions.length){
        currentQuestionCounter++
        renderQuestion()
    } else {
        showResult()
    }
}

function showResult(){
    let resultQuiz = document.querySelector(".result p")
    resultQuiz.innerHTML = `<p>Peças Reparadas: ${acertos} <br> Erros Técnicos: ${erros}</p>` 
}

renderQuestion();