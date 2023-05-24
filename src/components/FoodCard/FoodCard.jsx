
const FoodCard = ({item}) => {
    const {name,recipe,image,price} = item
    // console.log(item);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image}  alt="Shoes" /></figure>
        <p className="absolute right-5 top-4 text-white rounded-md py-2 bg-slate-600 px-5">${price}</p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;