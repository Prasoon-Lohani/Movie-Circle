import axios from "axios";
import { useEffect, useState } from "react";

import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SimpleBottomNavigation from "../../components/Mainnav";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    );
    setContent(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
    // eslint-disable-next-line
  }, [page]);

  return (
    <>
      <div>
        <span className="pageTitle">Movies</span>

        <div className="trending">
          {content &&
            content.map((c) => (
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title}
                date={c.release_date}
                vote_average={c.vote_average}
              />
            ))}
        </div>
        <div className="pagination">
          <CustomPagination setPage={setPage} />
        </div>
      </div>
      <SimpleBottomNavigation />
    </>
  );
};

export default Movies;
