import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import GalleryCard from "../../../components/gallery/GalleryCard";

describe('<GalleryCard />', () => {
    it('should render GalleryCard', () => {
        render(<GalleryCard />);
        expect(screen.getByText('this is the gallerycard')).toBeInTheDocument();
    })
});