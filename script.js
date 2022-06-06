function computerPlay() {
    let choices=['Rock','Paper','Scissors']
    let computerChoice=Math.floor(Math.random()*choices.length)
    return choices[computerChoice]
} 

var user_score = 0;
var computer_score = 0;

function playRound(playerSelection,computerSelection) {
    // make user input case-insensitive
    var user_input = playerSelection.toLowerCase()
    user_input = user_input[0].toUpperCase() + user_input.slice(1);
    
    let user=user_input
    let computer=computerSelection

    console.log(user,computer)
    if (user == computer) {
        return('tie');
    } else if (user == 'Paper') {
        if (computer == 'Rock') {     //case1
            user_score+=1
            return('You win, paper beats rock');
            
        } else if (computer=='Scissors') {
            computer_score+=1
            return('You lose, scissors beat paper');
            
        }
    } else if (user == 'Rock') {   //case2
        if (computer=='Paper') {
            computer_score+=1
            return('You lose, paper beats rock');
        } else if (computer=='Scissors') {
            user_score+=1
            return('You win, rock beats scissors');
        }
    } else if (user == 'Scissors') {  //case3
        if (computer=='Paper') {
            user_score+=1
            return('You win, scissors beat paper');
            
        } else if (computer == 'Rock') {
            computer_score+=1
            return('You lose, rock beats scissors');
            
        }
    }
}

const button = document.querySelector("#button")
const update_user = document.querySelector("#update")
var promptdata

button.addEventListener('click', function (e) {
    let promptdata=prompt('Your choice:');
    game(1,promptdata)
    update_user.innerHTML = `your current score: ${user_score},<br>Computer score: ${computer_score}`
    console.log(user_score,computer_score)
    button.innerHTML = 'Continue playing'
    
  });
  
console.log(promptdata)
function game(n,data) {
    for (let i=0;i<n;i++) {
        const your_choice = document.getElementById('container')
        const computer_choice = computerPlay()
        const user_choice = data
        var game_result = playRound(user_choice,computer_choice)
        your_choice.innerHTML = `You chose: ${user_choice}<br>Computer chose: ${computer_choice}
        <br>Game result: ${game_result}`
    }
}





