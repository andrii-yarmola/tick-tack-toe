'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signAdd, turnChange, phaseCheck } from 'actions';

const stateToProps = ({ fieldReducer, gameStatusReducer }) => {
	return {
		fieldReducer,
		gameStatusReducer
	};
};

const dispatchToProps = (dispatch) => {
	return {
		signAdd: (x, y, sign) => dispatch(signAdd(x, y, sign)),
		turnChange: () => dispatch(turnChange()),
		phaseCheck: (x, y, sign) => dispatch(phaseCheck(x, y, sign))
	};
};

const Field = ({ fieldReducer, gameStatusReducer, signAdd, turnChange, phaseCheck }) => {
	return (
		<div className = 'game-block'>
			<h1
				style={{
					color: fieldReducer.gamePhase === 'ingame' ? 'inherit' : 'red'
				}}
			>
				Status: {fieldReducer.gamePhase}
			</h1>
			<table
				className = 'game-table'
				style={{
					opacity: fieldReducer.gamePhase === 'ingame' ? 1 : 0.3,
					pointerEvents: fieldReducer.gamePhase === 'ingame' ? 'auto' : 'none'
				}}
			>
				<tbody>
					{fieldReducer.field.map((row, i) => (
						<tr key = {i}>
							{row.map((cell, j) => (
								<td key = {j}>
									{(() => {
										switch (cell) {
											case 'player1': return (
												<i className='fa fa-times' aria-hidden='true'></i>
											);
											case 'player2': return (
												<i className='fa fa-circle-o' aria-hidden='true'></i>
											);
											default: return (
												<button onClick={() => (signAdd(i, j, gameStatusReducer.turn), turnChange(), phaseCheck(i, j, gameStatusReducer.turn))}></button>
											);
										}
									})()}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
			<h2
				style={{
					display: fieldReducer.gamePhase === 'ingame' ? 'block' : 'none'
				}}
			>
				Turn now: {gameStatusReducer.turn}
			</h2>
		</div>
	)
};

export default connect(stateToProps, dispatchToProps)(Field);
