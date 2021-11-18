//! Dependant Plugin Utility
import axios from "axios";
import { useState, useEffect } from "react";

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/comics");
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
        <div className="to-comics-page">Comics Page</div>
      </div>
      <div className="comics-page">
        {data.results.map((results, index) => {
          const image =
            results.thumbnail.path + "." + results.thumbnail.extension;
          return (
            <div className="comics-list" key={results._id}>
              <div className="comics-form">
                <h4 className="comics-title">{results.title}</h4>

                <img className="comics-img" src={image} alt="" />

                <div className="comics-description">
                  {results.description ? (
                    results.description
                  ) : (
                    <span>No description.</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comics;
