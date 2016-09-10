'use strict';

import { SIGN_ADD, PHASE_CHECK } from 'actions';

const defaultFieldState = {
	field: [
		[
			null, null, null
		],
		[
			null, null, null
		],
		[
			null, null, null
		]
	],
	gamePhase: 'ingame'
};

export default (state = defaultFieldState, action) => {
	switch (action.type) {
		case SIGN_ADD:
			return {
				...state,
				field: state.field.map((row,i) => {
					return (
						(i === action.x) ? (
							row.map((cell, j) => {
								return (j === action.y) ? (action.sign) : cell;
							})
						) : row
					);
				})
			}

		case PHASE_CHECK:
			// check row
			for (let i = 0; i < state.field.length; i++) {
				if (state.field[action.x][i] !== action.sign)
					break;
				if (i == state.field.length - 1) {
					return {
						...state,
						gamePhase: action.sign + ' wins'
					}
				}
			}
			// check col
			for (let i = 0; i < state.field.length; i++) {
				if (state.field[i][action.y] !== action.sign)
					break;
				if (i == state.field.length - 1) {
					return {
						...state,
						gamePhase: action.sign + ' wins'
					}
				}
			}
			// check diag
			if (action.x === action.y){
				for (let i = 0; i < state.field.length; i++){
					if (state.field[i][i] != action.sign)
						break;
					if (i ==  state.field.length - 1){
						return {
							...state,
							gamePhase: action.sign + ' wins'
						}
					}
				}
			}
			// check reverse diag
			for (let i = 0; i < state.field.length; i++){
				if (state.field[i][(state.field.length - 1) - i] != action.sign)
					break;
				if (i == state.field.length - 1){
					return {
						...state,
						gamePhase: action.sign + ' wins'
					}
				}
			}

		default:
			return state;
	}
};
