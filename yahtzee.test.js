import Yahtzee from "./yahtzee"


describe('', () => {
    it('rolls one dice that returns a number from one to six', () => {
        const yahtzee = new Yahtzee();

        const rolls = yahtzee.roll(1);
        
        expect(rolls[0]).toBeGreaterThanOrEqual(1);
        expect(rolls[0]).toBeLessThanOrEqual(6);
        expect(rolls.length).toBe(1);
    })

    it('rolls 5 dice that returns 5 numbers', () => {
        const yahtzee = new Yahtzee();

        const rolls = yahtzee.roll(5);
        
        expect(rolls.length).toBe(5);
    })

    it('rerolls 5 dice that returns another 5 numbers', () => {
        const yahtzee = new Yahtzee();
        let reRolls = []

        let rolls = yahtzee.roll(5);
        for(let i = 0; i < 25; i++) {
            reRolls = yahtzee.reRoll(rolls);   
        }

        expect(rolls).not.toBe(reRolls)
    })

    it('rerolls first 3 dice so that they are different', () => {
        const yahtzee = new Yahtzee();
        let reRolls = []

        let rolls = yahtzee.roll(5);
        for(let i = 0; i < 25; i++) {
            reRolls = yahtzee.reRoll(rolls, [1, 2, 3]);   
        }

        expect(JSON.stringify(rolls.slice(0, 3))).not.toBe(JSON.stringify(reRolls.slice(0, 3)));
        expect(JSON.stringify(rolls.slice(3, 5))).toBe(JSON.stringify(reRolls.slice(3, 5)));
    })

    it('returns the calculated score of a specified dice value', () => {
        const yahtzee = new Yahtzee();
        
        let fakeRolls = [1, 2, 3, 3, 3];

        expect(yahtzee.scoreDice(fakeRolls, '3')).toBe(9);
    })

    it('returns the calculated score when 3 of a kind is specified', () => {
        const yahtzee = new Yahtzee();
        
        let fakeRolls = [1, 2, 3, 3, 3];

        expect(yahtzee.scoreDice(fakeRolls, '3 of a kind')).toBe(12);
    })

    it('returns the calculated score when 4 of a kind is specified', () => {
        const yahtzee = new Yahtzee();
        
        let fakeRolls = [1, 3, 3, 3, 3];

        expect(yahtzee.scoreDice(fakeRolls, '4 of a kind')).toBe(13);
    })

    it('returns the calculated score when chance is specified', () => {
        const yahtzee = new Yahtzee();
        
        let fakeRolls = [1, 4, 3, 6, 3];

        expect(yahtzee.scoreDice(fakeRolls, 'chance')).toBe(17);
    })

    it('returns the calculated score when full house is specified', () => {
        const yahtzee = new Yahtzee();
        
        let fakeRolls = [1, 1, 3, 3, 3];

        expect(yahtzee.scoreDice(fakeRolls, 'full house')).toBe(25);
    })

    it('returns the calculated score when small straight is specified', () => {
        const yahtzee = new Yahtzee();
        
        let fakeRolls = [2, 3, 4, 5, 3];

        expect(yahtzee.scoreDice(fakeRolls, 'small straight')).toBe(30);
    })

    it('returns the calculated score when large straight is specified', () => {
        const yahtzee = new Yahtzee();
        
        let fakeRolls = [1, 2, 3, 4, 5];

        expect(yahtzee.scoreDice(fakeRolls, 'large straight')).toBe(40);
    })

    it('returns the calculated score when yahtzee is specified', () => {
        const yahtzee = new Yahtzee();
        
        let fakeRolls = [3, 3, 3, 3, 3];

        expect(yahtzee.scoreDice(fakeRolls, 'yahtzee')).toBe(50);
    })
})