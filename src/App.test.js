import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('App renders without crashing version 2, test with the enzyme', () => {
	const component = shallow(<App />);
	expect(component.exists()).toEqual(true);
});
