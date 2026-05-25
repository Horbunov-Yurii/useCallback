const ImageGalleryItem = ({ largeImageURL, webformatURL, tags, onImage }) => {
  return (
    <li>
      <img src={webformatURL} alt={tags} onClick={() => onImage(largeImageURL)}/>
    </li>
  );
};

export default ImageGalleryItem;