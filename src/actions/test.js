import actions from '.';
import types from '../constants/';

describe('Actions', () => {
	const todoText = 'A todo';

	it('Should create an action to add a todo', () => {
		const expectedAction = {
			type: types.SUBMIT_TODO,
			id: 1,
			text: todoText,
		};

		expect(actions.submitTodo(todoText)).toEqual(expectedAction);
	});
});
