import React from 'react';
import { shallow, mount } from 'enzyme';
import AddTodo from '.';

describe('AddTodo component', () => {
	let component;
	const submitMock = jest.fn();

	beforeEach(() => {
		component = shallow(<AddTodo submitTodo={submitMock} />);
	});

	it('Should render successfully', () => {
		expect(component.exists()).toEqual(true);
	});

	it('Should have one input', () => {
		expect(component.find('.todo-input').length).toEqual(1);
	});

	describe('Add todo button', () => {
		it('Should exist', () => {
			expect(component.find('.todo-submit').length).toEqual(1);
		});

		it('Should call the submitTodo function when clicked', () => {
			// We still have to keep this assignment because we actually want to mount it when rendering for this test.
			const component = mount(<AddTodo submitTodo={submitMock} />);

			expect(submitMock.mock.calls.length).toEqual(0);
			component.find('form').simulate('submit');
			expect(submitMock.mock.calls.length).toEqual(1);
			// add this unmount function according to
			// https://medium.com/capital-one-developers/unit-testing-behavior-of-react-components-with-test-driven-development-ae15b03a3689
			component.unmount();
		});
	});
});
