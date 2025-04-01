import { render, screen } from "@testing-library/react"
import HomePage from "../../../components/homePage/HomePage"

describe('<HomePage />', () => {
    it('should render Home page', () => {
        render(<HomePage />);
        expect(screen.getByText('Home page')).toBeInTheDocument();
    });
})