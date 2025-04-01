import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Gallery from "../../../components/gallery/Gallery";

describe('<Gallery />', () => {
    it('should render Gallery component', async () => {
        render(<Gallery />);
        expect(screen.getAllByRole('img')).toHaveLength(2);
    })
})