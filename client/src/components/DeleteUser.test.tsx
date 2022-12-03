import React from 'react';
import { render, screen } from '@testing-library/react';
import DeleteUser from './DeleteUser';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders a form, a label, a select element and 2 buttons', () => {
  render(
    <Provider store={store}>
      <Router>
        <DeleteUser />
      </Router>
    </Provider>
  );

  const divElement = screen.getByTestId('form');
  expect(divElement).toBeInTheDocument();

  const label = screen.getByLabelText("Choose an ID to delete:")
  const select = screen.getByTestId("select")
  expect(divElement).toContainElement(label)
  expect(divElement).toContainElement(select)

  const buttonsElement = screen.getAllByRole("button")
  const button1 = screen.getByTestId("button-1")
  const button2 = screen.getByTestId("button-2")
  expect(buttonsElement).toContain(button1)
  expect(buttonsElement).toContain(button2)
});
