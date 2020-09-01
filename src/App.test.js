import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import App from './App';

afterEach(cleanup)

it('contains the file uploader', () => {
	const { getByText } = render (<App />)
	expect(getByText(/Click/i).textContent).toBe('Drop file here or Click to upload');
});


