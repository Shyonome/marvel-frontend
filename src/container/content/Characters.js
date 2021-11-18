//! Dependant Plugin Utility
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/characters");
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <div>Loading, please wait ...</div>
  ) : (
    <div>
      <div className="home-page" >
        <div className="to-characters-page" >Characters Page</div>
      </div>
      <div className="characters-page">
        {data.results.map((results, index) => {
          const image =
            results.thumbnail.path + "." + results.thumbnail.extension;
          return (
            <div className="characters-list" key={results._id}>
              <Link
                className="links"
                to={`/comics/${results._id}`}
                state={{
                  title: results.name,
                  image: image,
                  description: results.description,
                  id: results._id,
                }}
              >
                <div className="characters-form">
                  <h4 className="characters-name">{results.name}</h4>

                  <img className="characters-img" src={image} alt="" />

                  <div className="characters-description">
                    {results.description ? (
                      results.description
                    ) : (
                      <span>No description.</span>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Characters;
