import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import ReviewsPage from '../../../components/reviews/ReviewsPage'

describe('<ReviewsPage />', () => {
    it('should render Reviews page', () => {
        render(<ReviewsPage />);
        expect(screen.getByText('Rewviews')).toBeInTheDocument();
    })
})