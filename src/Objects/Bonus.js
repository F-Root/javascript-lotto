const { Messages } = require('../Constants');

class Bonus {
	constructor(bonus) {
		this.validate(bonus);
	}

	validate(bonus) {
		if (typeof Number(bonus) !== 'number') {
			throw new Error(Messages.ERROR.BONUS_NUMBER.NOT_NUMBER);
		}
		if (this.checkBelongTo(bonus)) {
			throw new Error(Messages.ERROR.BONUS_NUMBER.NOT_BELONG_NUMBER);
		}
		if (bonus.length !== 1) {
			throw new Error(Messages.ERROR.BONUS_NUMBER.NOT_ONE_NUMBER);
		}
	}

	checkBelongTo(bonus) {
		return bonus >= 1 && bonus <= 45;
	}
}

module.exports = Bonus;
