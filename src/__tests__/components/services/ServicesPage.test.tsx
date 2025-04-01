import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import ServicesPage from "../../../components/services/ServicesPage"

describe('<ServicesPage />', () => {
    it('should render Services Page', () => {
        render(<ServicesPage />);
        expect(screen.getByText('Services page')).toBeInTheDocument();
    })
})