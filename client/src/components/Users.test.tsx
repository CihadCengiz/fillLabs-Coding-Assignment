import React from 'react';
import { render, screen } from '@testing-library/react';
import Users from './Users';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders a table and 3 buttons', () => {
  render(
    <Provider store={store}>
      <Router>
        <Users />
      </Router>
    </Provider>
  );

  const divElement = screen.getByRole('table');
  expect(divElement).toBeInTheDocument();

  const buttonsElement = screen.getAllByRole('button');
  const button1 = screen.getByTestId('button1');
  const button2 = screen.getByTestId('button2');
  const button3 = screen.getByTestId('button3');
  expect(buttonsElement).toContain(button1);
  expect(buttonsElement).toContain(button2);
  expect(buttonsElement).toContain(button3);
});
