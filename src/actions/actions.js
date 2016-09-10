'use strict';

export const SIGN_ADD = 'SIGN_ADD';
export const signAdd = (x, y, sign) => ({
	type: SIGN_ADD,
	x,
	y,
	sign
});

export const TURN_CHANGE = 'TURN_CHANGE';
export const turnChange = () => ({
	type: TURN_CHANGE
});

export const PHASE_CHECK = 'PHASE_CHECK';
export const phaseCheck = (x, y, sign)  => ({
	type: PHASE_CHECK,
	x,
	y,
	sign
});
