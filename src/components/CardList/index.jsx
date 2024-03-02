import { Link } from "react-router-dom";

const imgUrl = "https://image.tmdb.org/t/p/w500";

const CardList = (props) => {
  const { title, name, vote_average, poster_path, profile_path, id, links } =
    props;

  return (
    <div className=" col-md-3 gy-5 mx-auto">
      <Link className=" text-white" to={`${links}/${id}`}>
        <div className=" position-relative card-layer ">
          <div className="layer position-absolute cursor-pointer text-white d-flex align-items-center justify-content-center ">
            <h5 className=" fw-bolder">Click to see more</h5>
          </div>

          {vote_average && (
            <div className="position-absolute top-0 end-0 bg-info p-2">
              <span>{vote_average.toFixed(1)}</span>
            </div>
          )}

          <div>
            {poster_path ? (
              <img
                className="w-100 "
                src={`${imgUrl}${poster_path}`}
                alt={title}
              />
            ) : (
              <img
                className="w-100 "
                src={`${imgUrl}${profile_path}`}
                alt={name}
              />
            )}
          </div>
        </div>

        <div className=" text-center p-3">
          {title ? (
            <h6 className="mt-3  p-2  text-ellipsis">
              {title.split(" ").slice(0, 2).join(" ")}
            </h6>
          ) : (
            <h6 className="mt-3  p-2  text-ellipsis">
              {name.split(" ").slice(0, 2).join(" ")}
            </h6>
          )}
        </div>
      </Link>
    </div>
  );
};

export default CardList;
