import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import ImageTile from "../../../components/gallery/ImageTile"

describe('<ImageTile />', () => {
    it('should render ImageTile component', () => {
        render(<ImageTile />);
        expect(screen.getByRole('img')).toBeInTheDocument();
    });
});