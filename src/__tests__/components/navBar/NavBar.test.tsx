import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import Navbar from '../../../components/navBar/NavBar';

describe('<Navbar />', () => {
    it('should render NavBar', () => {
        render(<Navbar />);
        expect(screen.getAllByRole('listitem')).toHaveLength(4);
    })
})