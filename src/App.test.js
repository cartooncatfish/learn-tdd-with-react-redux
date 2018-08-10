import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { App } from './App';
import { initialState } from './reducers/';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('App renders without crashing version 2, test with the enzyme', () => {
	const component = shallow(<App />);
	expect(component.exists()).toEqual(true);
});

it('App renders without crashing version 3, the redux way', () => {
	const mockFunction = jest.fn();

	const component = shallow(<App state={initialState} submitTodo={mockFunction} />);

	expect(component.exists()).toEqual(true);
});
