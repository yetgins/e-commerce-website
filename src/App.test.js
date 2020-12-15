import React from 'react';
import { render, screen } from '@testing-library/react';
import reducer, { initialState } from './actions/reducer';
import App from './App';
import StateProvider from './contexts/StateProvider';

test('renders learn react link', () => {
  render(
      <StateProvider initialState={initialState} reducer={reducer}>
          <App />
      </StateProvider>
    
    );
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});
