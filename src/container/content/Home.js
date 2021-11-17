//! Dependant Plugin Utility
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=gMdDeVjCJVCqG8tH"
        );
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
      <div>Home Page</div>
      {data.results.map((results, index) => {
        return (
          <div key={index}>
            <Link to={`/comics/${results._id}`}>
              <div>
                <div>{results.title}</div>
                <div>{results.description}</div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
