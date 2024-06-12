const p1Display= document.querySelector('#p1-display')
const p2Display= document.querySelector('#p2-display')
const p1Btn = document.querySelector('#p1-button')
const p2Btn = document.querySelector('#p2-button')
const resetBtn = document.querySelector('#reset')
const scoreMaxOption = document.querySelector('#playto')
const h2 = document.querySelector('h2')

let p1Score = 0;
let p2Score = 0;
let scoreMax = 3;
let gameFinis = false;
h2.innerText = 'READY'

function reset(){
    p1Score = 0;
    p2Score = 0;
    gameFinis = false;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
     h2.innerText = 'READY'
}


p1Btn.addEventListener('click', function() {
    if(!gameFinis){
        p1Score+= 1;
           h2.innerText = 'IN GAMES'
        if( p1Score === scoreMax){
            gameFinis = true;
            h2.innerText = 'FINISH'
        }
        p1Display.textContent =  p1Score;
    };
    
    
})

p2Btn.addEventListener('click', function() {
    if(!gameFinis){
        p2Score+= 1;
        h2.innerText = 'IN GAMES'
        if( p2Score === scoreMax){
            gameFinis = true;
             h2.innerText = 'FINISH'
        }
        p2Display.textContent =  p2Score;
    }
})

resetBtn.addEventListener('click',reset)

scoreMaxOption.addEventListener('change', function() {
   scoreMax = parseInt(this.value)
    reset()
})

// scoreMaxOption.addEventListener('change', (event) => {
//     scoreMax = parseInt(event.target.value);
//     console.log(scoreMax);
//     console.dir(event.target);
//  });

