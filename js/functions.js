
            var randomNumber = Math.floor(Math.random()*99) +1;
            var guesses = document.querySelector('#guesses');
            var lastResult = document.querySelector('#lastResult');
            var lowOrHi = document.querySelector('#lowOrHi');
            
            var guessSubmit = document.querySelector('#guessSubmit');
            var guessField = document.querySelector('#guessField');
            
            var guessCount = 1;
            var resetButton = document.querySelector('#reset');
            resetButton.style.display = 'none';
            console.log(randomNumber);
            document.getElementById("numberToGuess").innerHTML = randomNumber;
            
            var resetButton;
            guessField.focus();
            
            function checkGuess(){
                var userGuess = Number(guessField.value);
                if (guessCount === 1){
                    guesses.innerHTML = 'Previous guesses: ';
                }
                guesses.innerHTML += userGuess + ' ';
                
                if(userGuess==randomNumber){
                    lastResult.innerHTML = 'Congratulations! You got it right!';
                    lastResult.style.backgroundColor = 'green';
                    lowOrHi.innerHTML = '';
                    setGameOver();
                } else if(guessCount===7){
                    lastResult.innerHTML = 'Sorry you lost!';
                    setGameOver();
                } else {
                    lastResult.innerHTML = 'Wrong!';
                    lastResult.style.backgroundColor = 'red';
                    if (userGuess < randomNumber){
                        lowOrHi.innerHTML = 'Last guess was too low';
                    } else if (userGuess> randomNumber){
                        lowOrHi.innerHTML = 'Last guess was too high';
                    }
                }
                
                guessCount++;
                guessField.value = '';
                guessField.focus();
            }
            
            guessSubmit.addEventListener('click', checkGuess);
            
            function setGameOver(){
                guessField.disabled = true;
                guessSubmit.disabled = true;
                resetButton.style.display = 'inline';
                resetButton.addEventListener('click', resetGame);
            }
            
            function resetGame(){
                guessCount = 1;
                
                var resetParas = document.querySelectorAll('.resultPars p');
                for (var i=0; i<resetParas.length; i++){
                    resetParas[i].textContent = '';
                }
                
                resetButton.style.display = 'none';
                guessField.disabled = false;
                guessSubmit.disabled = false;
                guessField.value = '';
                guessField.focus();
                
                lastResult.style.backgroundColor = 'white';
                
                randomNumber = Math.floor(Math.random()*99) + 1;
            }
        
/*It’s Your Turn!
 
Try implementing the following features:

Display an error message if the number entered is higher than 99 or if it’s not a number (shouldn't count as an attempt!) 


Display and update the total numbers of games "won" and "lost" (guessing or not guessing the number within 7 attempts) 

Replace at least five lines of code from using plain JavaScript to using jQuery (you’d need to include the jQuery library) */

