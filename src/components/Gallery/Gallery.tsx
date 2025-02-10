import { FC } from "react";
import "./Gallery.scss";
import ImageTile from "./ImageTile";

const GalleryComponent: FC = () => {
    return (
        <div className="gallery-container">
            <div className="images-container">
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