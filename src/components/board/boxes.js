import { useCallback, useContext } from 'react';
import { boardContext } from './board';
import { isEven, checkWin } from '@/lib/utils';

export default function Boxes({ boxIndex }) {
	const { turn, setTurn, boardState, setBoardState, winner, setWinner } = useContext(boardContext);

	const handleBoxClick = useCallback(() => {
		if (boardState[boxIndex] === null && !winner) {
			const newState = [...boardState];
			newState[boxIndex] = isEven(turn) ? 'X' : 'O';
			setBoardState(newState);
			setTurn((prevTurn) => prevTurn + 1);

			const gameWinner = checkWin(newState);
			console.log(gameWinner);

			if (gameWinner) {
				setWinner(gameWinner === 'X' ? 'Player 1' : gameWinner === 'O' ? 'Player 2' : 'Game is Draw!');
			}
		}
	}, [boardState, boxIndex, turn, winner, setBoardState, setTurn, setWinner]);

	return (
		<div className='h-40 w-40 bg-[#E5E5E5] flex justify-center items-center cursor-pointer' onClick={handleBoxClick}>
			<span className='text-black font-bold text-2xl'>{boardState[boxIndex]}</span>
		</div>
	);
}
