import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './index.html'; // Предполагается, что компоненты экспортированы

describe('Portfolio App', () => {
    test('renders home page', () => {
        render(<BrowserRouter><App /></BrowserRouter>);
        expect(screen.getByText(/Blockchain Developer/i)).toBeInTheDocument();
        expect(screen.getByText(/About Me/i)).toBeInTheDocument();
    });

    test('renders blockchain project page', () => {
        window.history.pushState({}, 'Blockchain', '/project/0');
        render(<BrowserRouter><App /></BrowserRouter>);
        expect(screen.getByText(/Custom Blockchain/i)).toBeInTheDocument();
        expect(screen.getByText(/Fetch Blockchain/i)).toBeInTheDocument();
    });

    test('renders arbitrage project page', () => {
        window.history.pushState({}, 'Arbitrage', '/project/1');
        render(<BrowserRouter><App /></BrowserRouter>);
        expect(screen.getByText(/DEX Arbitrage Bot/i)).toBeInTheDocument();
        expect(screen.getByText(/Fetch Prices/i)).toBeInTheDocument();
    });

    test('renders dApp project page', () => {
        window.history.pushState({}, 'dApp', '/project/2');
        render(<BrowserRouter><App /></BrowserRouter>);
        expect(screen.getByText(/Web3 dApp/i)).toBeInTheDocument();
        expect(screen.getByText(/Send USDC/i)).toBeInTheDocument();
    });

    test('renders Web3 widgets', () => {
        render(<BrowserRouter><App /></BrowserRouter>);
        expect(screen.getByText(/NFT Gallery/i)).toBeInTheDocument();
        expect(screen.getByText(/ENS Resolver/i)).toBeInTheDocument();
        expect(screen.getByText(/Recent Transactions/i)).toBeInTheDocument();
    });
});