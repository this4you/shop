import { useState } from 'react';
import './PhotoGallery.scss';
type Props = {
    photos: string[]
}
const PhotoGallery = ({ photos }: Props) => {
    const [selected, setSelected] = useState(photos[0]);

    const onSelectPhoto = (p: string) => {
        setSelected(p);
    }

    return (
        <div className="gallery">
            <div className="gallery_list">
                {photos.map(p =>
                    <div onClick={() => onSelectPhoto(p)}
                        key={p}
                        className={`gallery_list_item ${p === selected && 'gallery_list_item-active'}`}
                        style={{ backgroundImage: `url(${p})` }} />
                )}
            </div>
            <div className="gallery_selected">
                <div className="gallery_selected_item"
                    style={{ backgroundImage: `url(${selected})` }} />
            </div>
        </div>
    )
}

export default PhotoGallery;