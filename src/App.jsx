import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Genre from "./components/genre_component/Genre";
import { genres, trending, genreMovie } from "./constants/url";
import { useEffect, useState } from "react";
import axios from "./axios/axios";
import { baseUrl } from "./constants/Constants";

function App() {
  const [genre, setGenres] = useState([]);
  

  useEffect(() => {
        axios.get(baseUrl+genres)
            .then((response) => {
                setGenres(response.data.genres.slice(1,4));
            })
  }, []);

  return (
    <>
      <Navbar />
      <Banner />
      <Genre url={trending} title="Trending" />
      {
            genre.map((obj,index) => {
                return  <Genre key={obj.id} url={`${genreMovie}&without_genres=${obj.id}&page=${index + 1}`} title={obj.name} />
            })
      }
      
      <Footer />
    </>
  );
}

export default App;
