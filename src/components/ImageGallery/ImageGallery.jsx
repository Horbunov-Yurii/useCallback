import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
const ImageGallery = ({  images }) => {

    return (
      <ul>
        {images.map(({ id, tags, webformatURL, largeImageURL }) => {
            return (
              <ImageGalleryItem
                key={id}
                tags={tags}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
              />
            );
        })}
      </ul>
    );
}

export default ImageGallery;