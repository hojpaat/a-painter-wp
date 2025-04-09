
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import App from '../App';
import React from 'react';
// import { createRoutesStub } from "react-router";

// const Stub = createRoutesStub([
//     {
//         path: "/login",
//         Component: App,
//     },
// ]);

describe('<App />', () => {
    it('should render Nav bar', async () => {
        render(<App />)
        screen.debug(undefined, 10000000000);
        expect(await screen.findByText('Home')).toBeInTheDocument();
        expect(await screen.findByText('Services')).toBeInTheDocument();
        expect(await screen.findByText('Reviews')).toBeInTheDocument();
        expect(await screen.findByText('Contact')).toBeInTheDocument();
    })
    // it('should render the right page', () => {

    // })
})