import { useStateValue } from "../../StateProvider";
import "./Product.css";

const Product = ({id, title, image, price, rating}) => {

  const [{basket}, dispatch] = useStateValue();

  const addToBasket = () =>{
    dispatch({
      type:"ADD_TO_BASKET",
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill().map((_,i)=>(
            <p key={Math.random()}>&#11088;</p>
          ))}
        </div>
      </div>
        <img
          src={image}
          alt="laptop"
        />
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
