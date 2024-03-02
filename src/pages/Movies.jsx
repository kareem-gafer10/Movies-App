import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";
import CardList from "../components/CardList";
import Pagination from "../components/Pagination";

const Movies = () => {


  let { dataList, loading,pageCount,getPage } = useFetch("trending/movie");



  return (
    <div className=" row">
    {loading ? (
      <Loading />
    ) : (
      <>
       

       


          {dataList?.map((item) => (
            <CardList key={item.id} {...item} links="/movies" />
          ))}

            <Pagination pageCount={pageCount} getPage={getPage}/>

      </>
    )}
  </div>
  );
};

export default Movies;
