import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ContactsPage from '../../../components/contacts/ContactsPage';

describe('<ContactsPage />', () => {
    it('should render ContactsPage', () => {
        render(<ContactsPage />);
        expect(screen.getByText('Contacts')).toBeInTheDocument();
    })
})