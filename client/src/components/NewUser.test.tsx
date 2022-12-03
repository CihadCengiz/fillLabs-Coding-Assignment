import React from 'react';
import { render, screen } from '@testing-library/react';
import NewUser from './NewUser';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from "../redux/store";

test('renders a form, 2 input elements and 2 buttons', () => {
  render(
    <Provider store={store}>
      <Router>
        <NewUser />
      </Router>
    </Provider>
  );

  const divElement = screen.getByTestId('form');
  expect(divElement).toBeInTheDocument();

  const input1 = screen.getByTestId("input-1")
  const input2 = screen.getByTestId("input-2")
  expect(divElement).toContainElement(input1)
  expect(divElement).toContainElement(input2)

  const buttonsElement = screen.getAllByRole("button")
  const button1 = screen.getByTestId("button-1")
  const button2 = screen.getByTestId("button-2")
  expect(buttonsElement).toContain(button1)
  expect(buttonsElement).toContain(button2)
});
