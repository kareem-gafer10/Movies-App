import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";
import CardList from "../components/CardList";

const People = () => {
  let { dataList, loading } = useFetch("trending/person");

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
                Trending people <br />
                to watch Right 
                now{" "}
              </h2>
              <p className="text-white">Trending people today</p>
              <div className="border-line mt-3"></div>
            </div>
          </div>

          {dataList.map((item) => (
            <CardList key={item.id} {...item} />
          ))}
        </>
      )}
    </div>
  );
};

export default People;
