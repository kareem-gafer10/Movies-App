import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";
import CardList from "../components/CardList";
import Pagination from "../components/Pagination";

const Tv = () => {
  let { dataList, loading, pageCount, getPage } = useFetch("trending/tv");

  return (
    <div className=" row">
      {loading ? (
        <Loading />
      ) : (
        <>
          {dataList?.map((item) => (
            <CardList key={item.id} {...item} links="/tv" />
          ))}
        </>
      )}

      <Pagination pageCount={pageCount} getPage={getPage} />
    </div>
  );
};

export default Tv;
