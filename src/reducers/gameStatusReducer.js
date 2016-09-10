'use strict';

import { TURN_CHANGE, WIN_CHECK } from 'actions';


const defaultFieldState = {
	turn: 'player1'
}

export default (state = defaultFieldState, action) => {
	switch (action.type) {
		case TURN_CHANGE:
			return {
				...state,
				...(state.turn === 'player1' ? { turn: 'player2' } : { turn: 'player1' })
			}

		default:
			return state;
	}
};


