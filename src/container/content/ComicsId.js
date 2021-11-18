//! Dependant Plugin Utility
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Comics = () => {
  const location = useLocation();

  const { id } = location.state;

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/comics/${id}`);
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchData();
  }, [id]);

  return isLoading ? (
    <span>Loading, please wait ...</span>
  ) : (
    <div>
      <div className="home-page">
        <div className="to-characters-page">{data.name} Page</div>
      </div>
      <div className="home-page" >
        <img
          className="comics-img"
          src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
          alt=""
        />
        <div className="comics-description">{data.description}</div>
      </div>
      <div className="comics-page">
        {data.comics.map((comics, index) => {
          const comicsImage =
            comics.thumbnail.path + "." + comics.thumbnail.extension;
          return (
            <div className="comics-list" key={comics._id}>
              <div className="comics-form">
                <img className="comics-img" src={comicsImage} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comics;
