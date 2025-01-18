import { FC } from "react";
import "./ImageTile.scss";

const ImageTile: FC = () => {
    return (
        <>

            <div className="imageTile">
                <img className="imageTilePic" src="https://frscott.co.uk/wp-content/uploads/2023/03/iStock-1372374195-scaled.jpg" alt='picture of a door' />
            </div>
            <div className="imageTile alt">
                <img className="imageTilePic" src="https://frscott.co.uk/wp-content/uploads/2023/03/iStock-1372374195-scaled.jpg" alt='picture of a door' />
            </div>
        </>
    )
};

export default ImageTile;