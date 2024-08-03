import { IoIosAddCircleOutline } from "react-icons/io";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";

const HomeItem = ({item}) => {

  const dispatch = useDispatch()
  const bagItems = useSelector(store => store.bag)
  const elementFound = bagItems.indexOf(item.id)>= 0;
  console.log(item.id , elementFound)
 

  const handleAddToBag = () => {

    dispatch(bagActions.addToBag(item.id))
  }

  const handleRemove = () => {

    dispatch(bagActions.removeFromBag(item.id))
  }




  return  <>
     <div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>

      {!elementFound ?<button type="button" className="btn btn-success btn-add-bag" onClick={handleAddToBag}>Add to Bag <IoIosAddCircleOutline /> </button>  :<button type="button" className="btn w-100 mt-2 btn-danger" onClick={handleRemove}>Remove <IoMdRemoveCircleOutline /></button>
}
   
   

    
    </div>
  </>

}

export default HomeItem;