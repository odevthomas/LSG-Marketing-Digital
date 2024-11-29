import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

test('renders the contact form', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/Seu nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
});

test('shows alert on empty submit', () => {
    render(<ContactForm />);
    fireEvent.click(screen.getByText(/Enviar/i));
    expect(screen.getByText(/Por favor, preencha todos os campos/i)).toBeInTheDocument();
});
