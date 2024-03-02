import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";
import CardList from "../components/CardList";
import Pagination from "../components/Pagination";

const People = () => {
  let { dataList, loading,pageCount,getPage } = useFetch("trending/person");


  return (
    <div className=" row">
      {loading ? (
        <Loading />
      ) : (
        <>
         

          {dataList?.map((item) => (
            <CardList key={item.id} {...item} links="/people"/>
          ))}
        </>
      )}

      <Pagination pageCount={pageCount} getPage={getPage}/>


    </div>
  );
};

export default People;
