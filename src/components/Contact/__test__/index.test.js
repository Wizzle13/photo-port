import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

// releases memory allocated between tests
afterEach(cleanup);

describe('Contact component', () => {
    // First Test
 it('renders', () => {
   render(<Contact />);
 });

 // Second Test
 it('matches snapshot DOM node structure', () => {
   // render Contact
   const { asFragment } = render(<Contact />);
   expect(asFragment()).toMatchSnapshot();
 });
})
// test the contact title is present
it('renders', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
  })

//   test the button is present
  it('renders', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('button')).toHaveTextContent('Submit')
  })