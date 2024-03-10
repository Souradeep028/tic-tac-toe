import { createContext, useState } from 'react';
import Boxes from './boxes';
import { isEven } from '@/lib/utils';

export const boardContext = createContext();

export default function Board() {
	const [turn, setTurn] = useState(0);
	const [winner, setWinner] = useState('');
	const [boardState, setBoardState] = useState(Array(9).fill(null));

	return (
		<boardContext.Provider value={{ turn, setTurn, boardState, setBoardState, winner, setWinner }}>
			<div className='flex flex-col justify-center items-center mt-10'>
				{winner ? (
					<p className='text-black font-bold text-2xl mb-10'>Winner: {winner}</p>
				) : (
					<p className='text-black font-bold text-2xl mb-10'>Turn: {isEven(turn) ? 'Player 1' : 'Player 2'}</p>
				)}
				<div className='grid grid-cols-3 gap-2'>
					{boardState.map((_, i) => (
						<Boxes key={i} boxIndex={i} />
					))}
				</div>
			</div>
		</boardContext.Provider>
	);
}
