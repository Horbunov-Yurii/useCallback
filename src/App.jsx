import { useState , useEffect} from "react";
import Searchbar from "./components/Searchbar/Searchbar"
import ImageGallery from "./components/ImageGallery/ImageGallery"
import fetchImages from "./services/api"


const App = () => {

  const [images, setImages] = useState([])
  const [query, setQuery] = useState("")


  const handleSearch = (newQuery) => {
    setQuery(newQuery)
  }
  console.log(query);
  useEffect(() => { 
   if (query === "") {
    return
   }
    fetchImages(query).then((res) => setImages(res.hits))
    // console.log(images);
  },
    [query])

  return (
    <>
      
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery images={ images} />
      
    </>
  );

}

export default App