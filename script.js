function computerPlay() {
    let choices=['Rock','Paper','Scissors']
    let computerChoice=Math.floor(Math.random()*choices.length)
    return choices[computerChoice]
} 

const user_choice=prompt('Your choice:');

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
            return('You win, paper beats rock');
        } else if (computer=='Scissors') {
            return('You lose, scissors beat paper');
        }
    } else if (user == 'Rock') {   //case2
        if (computer=='Paper') {
            return('You lose, paper beats rock');
        } else if (computer=='Scissors') {
            return('You win, rock beats scissors');
        }
    } else if (user == 'Scissors') {  //case3
        if (computer=='Paper') {
            return('You win, scissors beat paper');
        } else if (computer == 'Rock') {
            return('You lose, rock beats scissors');
        }
    }   
}

function game(user,computer) {
    let user_score=0
    let computer_score=0
    for (let i=0; i< 5; i++) {
        computer=computerPlay()     //generate new choice every iteration
        result=playRound(user,computer)
        let your_score=result.slice(0,8).replace(',','')
        console.log(result)
        if (your_score == 'You win') {
            user_score+=1
        } else if (your_score == 'You lose') {
            computer_score+=1
        }
    }
    console.log(`User score:${user_score}\nComputer score:${computer_score}`)

    
}

game(user_choice,computerPlay())
