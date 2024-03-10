import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export function isEven(val) {
	return val % 2 === 0 ? true : false;
}

export function checkWin(board) {
	const winConditions = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let condition of winConditions) {
		const [a, b, c] = condition;
		console.log(board[a], board[b], board[c]);
		if (board[a] === board[b] && board[b] === board[c]) {
			return board[a];
		}
	}

	if (board.every((box) => box !== null)) {
		return 'draw';
	}

	return null;
}
