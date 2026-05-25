import { useState, useEffect, useCallback } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import fetchImages from "./services/api";
import Loader from "./components/Loader/Loader";
import Button from "./components/Button/Button";
import Modal from "./Modal/Modal";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  // const loadMore = useCallback(() => {
  //   setPage((prevState) => prevState + 1);
  // }, []);

  // const openModal = useCallback((image) => {
  //   setSelectedImage(image);
  // }, []);

  // const closeModal = useCallback(() => {
  //   setSelectedImage(null);
  // }, []);

  // const handleSearch = useCallback((newQuery) => {
  //   setQuery(newQuery);
  //   setPage(1);
  //   setImages([]);
  // }, []);

  const loadMore = () => {
    setPage((prevState) => prevState + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    setLoading(true);

    fetchImages(query, page)
      .then((res) => setImages((prevState) => [...prevState, ...res.hits]))
      .finally(() => setLoading(false));
  }, [query, page]);
  console.log(selectedImage);
  return (
    <>
      <Searchbar onSubmit={handleSearch} />
      {loading && <Loader />}
      <ImageGallery images={images} onImage={openModal} />
      {selectedImage && (
        <Modal selectedImage={selectedImage} closeModal={closeModal} />
      )}
      {images.length > 0 && <Button onLoad={loadMore} />}
    </>
  );
};

export default App;
