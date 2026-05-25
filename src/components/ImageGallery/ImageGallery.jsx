import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
const ImageGallery = ({  images, onImage}) => {

    return (
      <ul>
        {images.map(({ id, tags, webformatURL, largeImageURL }) => {
            return (
              <ImageGalleryItem
                key={id}
                tags={tags}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                onImage={onImage}
              />
            );
        })}
      </ul>
    );
}

export default ImageGallery;