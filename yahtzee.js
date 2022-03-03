export default class Yahtzee {
    
    roll(numberOfDice) {
        let rolls = []
        for(let roll = 0; roll < numberOfDice; roll ++) {
            rolls.push(Math.floor(Math.random() * 6 + 1));
        }
        return rolls
    }

    reRoll(rolls, diceSelected) {
        let reRolls = Array.from(rolls);
        let diceToReRoll = this.getSelectedDiceIndices(diceSelected);

        for(let reRollIdx = 0; reRollIdx < diceToReRoll.length; reRollIdx ++) {
            reRolls[diceToReRoll[reRollIdx] - 1] = Math.floor(Math.random() * 6 + 1);
        }
        return reRolls
    }

    scoreDice(rolls, targetRow, diceSelected) {
        //let selectedDiceToCount = this.getSelectedDiceIndices(diceSelected);

        let sortedRolls = rolls.sort();
        
        if(!isNaN(targetRow)) {
            const countTotalTargetNumber = (rollToScore, targetNumber) => rollToScore.reduce((count, num) => (num === targetNumber ? count + 1 : count), 0);
            let targetNumberCount = countTotalTargetNumber(sortedRolls, parseInt(targetRow));
            return targetNumberCount * parseInt(targetRow);
        }
        else {
            let score = 0;
            targetRow = targetRow.toLowerCase()
            if (targetRow === '3 of a kind' || targetRow === '4 of a kind' || targetRow === 'chance') {
                score = sortedRolls.reduce((total, amount) => total + amount)
            }
            else if(targetRow === 'full house') {
                score = 25;
            }
            else if(targetRow === 'small straight') {
                score = 30
            }
            else if(targetRow === 'large straight') {
                score = 40
            }
            else if(targetRow === 'yahtzee') {
                score = 50
            }
            return score;
        }


        return diceTotal;
    }

    getSelectedDiceIndices(diceSelected) {
        if(diceSelected === undefined || diceSelected.length === 0) {
            diceSelected = [1, 2, 3, 4, 5];
        }
        return diceSelected
    }
    /**

    displayScoreCard() {

    }
    */
}

let yahtzee = new Yahtzee();
let rolls = yahtzee.roll(5);
let reRolls = [5, 6, 5, 5, 1]
let count = yahtzee.scoreDice(reRolls, '5');
console.log(reRolls, count);