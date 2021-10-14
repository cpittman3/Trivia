window.onload = function () {
    categoryArray();
}

/* const trivia = [
*  { question:  "Who was the singer for Genesis in 1968?",
*    answerA:   "Rob Halford",
*    answerB:   "Phil Collins",
*    answerC:   "John Fogerty",
*    answerD:   "Peter Gabriel",
*    answer:    B,
*    category:  "MUSIC"
*   },
*   { question: "On which Eagles’ album is the song\n" + "‘Take it to the Limit’?",
*     answerA:  "Desperado",
*     answerB:  "Hotel California",
*     answerC:  "One of These Nights",
*     answerD:  "The Long Road",
*     answer:   C,
*     category: "MUSIC"
*    }
* */

// Global Vars
let currentCategory = 1;
let currentQuestion = 1;
let category = [0, 0];
let question = [0, 0];
const A = 1, B = 2, C = 3, D = 4, answer = 5;

// CATEGORY ARRAY
function categoryArray() {
    switch(currentCategory) {
        case 1:
            category[1, 0] = "MUSIC";
            break;
        case 2:
            category[2, 0] = "TV";
            break;
        case 3:
            category[3, 0] = "SPORTS";
            break;
        case 4:
            category[4, 0] = "MOVIES";
            break;
    }
    questionArray();
}

// QUESTION ARRAY
function questionArray() {
    switch(currentQuestion) {
// MUSIC question 1
        case 1: question[1, 0] = "Who was the singer for Genesis in 1968?";
                question[1, A] = "Rob Halford";
                question[1, B] = "Phil Collins";
                question[1, C] = "John Fogerty";
                question[1, D] = "Peter Gabriel";
                question[1, answer] = B;
                break;
// MUSIC question 2
        case 2: question[2, 0] = "On which Eagles’ album is the song\n" + "‘Take it to the Limit’?";
                question[2, A] = "Desperado";
                question[2, B] = "Hotel California";
                question[2, C] = "One of These Nights";
                question[2, D] = "The Long Road";
                question[2, answer] = C;
                break;
// MUSIC question 3
        case 3: question[3, 0] = "What year was the song ’The Middle’ by\n" + "Zedd, Maren Morris and Grey released?";
                question[3, A] = "2018";
                question[3, B] = "2015";
                question[3, C] = "1999";
                question[3, D] = "2008";
                question[3, answer] = A;
                break;
// TV question 4
        case 4: question[4, 0] = "On the Walking Dead, what is Glenn’s child named?";
                question[4, A] = "Negan";
                question[4, B] = "Hershel";
                question[4, C] = "Glenn";
                question[4, D] = "Shane";
                question[4, answer] = B;
                break;
// TV question 5
        case 5: question[5, 0] = "On Game of Thrones, who is Lord of house Frey?";
                question[5, A] = "Brynden";
                question[5, B] = "Balon";
                question[5, C] = "Eddard";
                question[5, D] = "Walder";
                question[5, answer] = D;
                break;
// TV question 6
        case 6: question[6, 0] = "What show was Bryan Cranston known for\n" + "before he starred in Breaking Bad?";
                question[6, A] = "Malcolm in the Middle";
                question[6, B] = "Days of our Lives";
                question[6, C] = "Frasier";
                question[6, D] = "The Wire";
                question[6, answer] = A;
                break;
// SPORTS question 7
        case 7: question[7, 0] = "Who won Super Bowl XXVII in 1993?";
                question[7, A] = "Houston Oilers";
                question[7, B] = "Buffalo Bills";
                question[7, C] = "Dallas Cowboys";
                question[7, D] = "San Francisco 49ers";
                question[7, answer] = C;
                break;
// SPORTS question 8
        case 8: question[8, 0] = "How many NBA Championships did Kobe Bryant win?";
                question[8, A] = "2";
                question[8, B] = "4";
                question[8, C] = "6";
                question[8, D] = "5";
                question[8, answer] = D;
                break;
// SPORTS question 9
        case 9: question[9, 0] = "In football (NFL) what does an audible do?";
                question[9, A] = "Changes a play";
                question[9, B] = "Changes a formation";
                question[9, C] = "Alerts the QB of a blitz";
                question[9, D] = "Makes the ball easier to hold";
                question[9, answer] = A;
// MOVIES question 10
        case 10: question[10, 0] = "Who was NOT in the 1988 film ‘Young Guns’?";
                 question[10, A] = "Emilio Estevez";
                 question[10, B] = "Sam Elliot";
                 question[10, C] = "Charlie Sheen";
                 question[10, D] = "Kiefer Sutherland";
                 question[10, answer] = B;
                 break;
// MOVIES question 11
        case 11: question[11, 0] = "In the 2018 film A Quite Place what kind\n" + "of toy does Beau take out on the bridge?";
                 question[11, A] = "Police car";
                 question[11, B] = "Buzz Lightyear";
                 question[11, C] = "Space rocket";
                 question[11, D] = "Fire truck";
                 question[11, answer] = C;
                 break;
// MOVIES question 12
        case 12: question[12, 0] = "Which 90’s movie portrayed Taco Bell as\n" + "a fancy upscale restaurant?";
                 question[12, A] = "Running Man";
                 question[12, B] = "Total Recall";
                 question[12, C] = "Demolition Man";
                 question[12, D] = "Judge Dredd";
                 question[12, answer] = C;
                 break;
    }
    initPage2();
}

function initPage2 () {
    let categoryHtml = createCategoryH1 ();
    let questionHtml = createQuestionBtn ();
    let categoryRef = document.getElementById("categoryH1");
    let questionRef = document.getElementById("questionBtns");
    categoryRef.insertAdjacentHTML("beforebegin",categoryHtml);
    questionRef.insertAdjacentHTML("afterend", questionHtml);
    console.log(currentQuestion);
}

function createCategoryH1 () {
    return `<h1><b> ${category[currentCategory,0]} </b></h1>
            <h2> ${question[currentQuestion,0]} </h2>`;
}

/*function createQuestionBtn () {
    return `<button> ${question[currentQuestion,A]} </button>
            <button> ${question[currentQuestion,B]} </button>
            <button> ${question[currentQuestion,C]} </button>
            <button> ${question[currentQuestion,D]} </button>`;
} */

function createQuestionBtn () {
    return `<ol id="olAnswer">
                <li id="answerA"> ${question[currentQuestion,A]} </li>
                <li id="answerB"> ${question[currentQuestion,B]} </li>
                <li id="answerC"> ${question[currentQuestion,C]} </li>
                <li id="answerD"> ${question[currentQuestion,D]} </li>
           </ol>`;
}

