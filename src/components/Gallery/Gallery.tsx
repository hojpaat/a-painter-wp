import { FC } from "react";
import "./Gallery.scss";
import ImageTile from "./ImageTile";

const GalleryComponent: FC = () => {
    return (
        <div className="gallery-container">
            This is a gallery card
            <div className="image-tiles-container">
                <ImageTile key="firt" />
                <ImageTile key="second" />
                <ImageTile key="second" />
                <ImageTile key="second" />
                <ImageTile key="second" />
                <ImageTile key="second" />
                <ImageTile key="second" />
                <ImageTile key="second" />
                <ImageTile key="second" />
                <ImageTile key="second" />
                <ImageTile key="second" />
                <ImageTile key="second" />
                <ImageTile key="second" />
                <ImageTile key="second" />
                <ImageTile key="second" />
            </div>
        </div>
    )
}

export default GalleryComponent;