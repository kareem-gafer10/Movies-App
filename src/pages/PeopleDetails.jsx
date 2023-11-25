import { Link } from "react-router-dom";
import useFetchSingle from "../hooks/useFetchSingle"
const imgUrl = "https://image.tmdb.org/t/p/w500";
import { LiaStarSolid } from "react-icons/lia";
import Loading from "../components/Loading";


const PeopleDetails = () => {

  let {details,loading}=useFetchSingle("person")

  return (
    <div className="row">
 
    { loading ? <Loading /> : <>
    
    <div className="col-md-5">
   
       <div className=" ">
       {details.poster_path ? 
   <img className=" cursor-pointer img-details mx-auto w-100" src={`${imgUrl}${details.poster_path}`} alt={details.title} />
   :  <img className=" cursor-pointer img-details"
    src={`${imgUrl}${details.profile_path}`}
     alt={details.name} />
    }
       </div>
   
   </div>
   
   <div className="col-md-7">
   
   <div className="mt-5 text-white">
   {details.original_title ? <h2 className='p-2'>{details?.original_title}</h2> 
   : <h2 className='p-2'>{details?.original_name}</h2>}
   
   <p className='p-2'>{details.overview}</p>
   
     <div className=' mt-3 d-flex align-items-center'>
     {details.vote_average && <>
       <span className='text-info p-2 fs-4 '> Rate :</span> 
       <LiaStarSolid className=" text-warning" size={30} />
       <span className='p-1 fs-5'>{details.vote_average}</span>
     </> }
      
       </div>
       
       <div className=' mt-3'>
       <span className='text-info p-2 fs-4'> Vote count :</span> 
       <span className='p-1 fs-5'>{details.vote_count}</span>
       </div>
       
       <div className=' mt-3'>
       <span className='text-info p-2 fs-4'> Popularity :</span> 
       <span className='p-1 fs-5'>{details.revenue}{details.popularity}</span>
       </div>
      
       <div className=' mt-3'>
       <span className='text-info p-2 fs-4'> Release Date :</span> 
       <span className='p-1 fs-5'>{details.release_date} {details.last_air_date}</span>
       </div>
   
       </div>
          <Link to={"/"} className=" btn btn-primary mt-5 my-5">Go Back</Link>
       </div>
    </>
    }
   
   
   
       </div>
  )
}

export default PeopleDetails;
