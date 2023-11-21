import CardList from "../components/CardList";
import Loading from "../components/Loading";
import useFetch from "../hooks/useFetch";

const Home = () => {
  let { loading } = useFetch();

  const { dataList: movieList } = useFetch("trending/movie");
  const { dataList: tvList } = useFetch("trending/tv");
  const { dataList: peopleList } = useFetch("trending/person");

  return (
    <div className=" row">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className=" col-md-4 d-flex align-items-center">
            <div>
              <div className="border-line w-25 mb-3"></div>
              <h2 className="text-white">
                Trending movies <br /> to watch Right now!
              </h2>
              <p className="text-white">Most watched movies today</p>
              <div className="border-line mt-3"></div>
            </div>
          </div>

          {movieList.slice(0, 10).map((item) => (
            <CardList key={item.id} {...item} />
          ))}

          <div className=" col-md-4 d-flex align-items-center">
            <div>
              <div className="border-line w-25 mb-3"></div>
              <h2 className="text-white">
                Trending TV shows <br /> to watch now!
              </h2>
              <p className="text-white">Most watched TV shows today</p>
              <div className="border-line mt-3"></div>
            </div>
          </div>

          {tvList.slice(0, 10).map((item) => (
            <CardList key={item.id} {...item} />
          ))}

          <div className=" col-md-4 d-flex align-items-center">
            <div>
              <div className="border-line w-25 mb-3"></div>
              <h2 className="text-white">
                Trending people <br />
                to watch Right <br />
                now{" "}
              </h2>
              <p className="text-white">Trending people today</p>
              <div className="border-line mt-3"></div>
            </div>
          </div>

          {peopleList.slice(0, 10).map((item) => (
            <CardList key={item.id} {...item} />
          ))}
        </>
      )}
    </div>
  );
};

export default Home;
