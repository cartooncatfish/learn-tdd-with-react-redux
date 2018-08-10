import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '.';

describe('TodoList component', () => {
	/*
    1. define the state object which needs to be pass to the compoent
    2. check the render result of the component of the test state
    */
	const todos = [
		{
			id: 1,
			text: 'A todo',
		},
	];
	const component = shallow(<TodoList todos={todos} />);

	it('Should render successfully', () => {
		expect(component.exists()).toEqual(true);
	});

	it('Should display a todo when passed in as a prop', () => {
		expect(component.find('.todo-text').text()).toEqual(todos[0].text);
	});
});
