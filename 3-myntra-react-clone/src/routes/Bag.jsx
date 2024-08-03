import BagSummary from "../components/BagSammary";
import BagItem from "../components/BagItem"
import {useSelector} from "react-redux"

const Bag = () => {


 const BagItems = useSelector(store => store.bag);
 const items =  useSelector(store => store.items);

 const finalItems = items.filter(item => {
  const itemIndex = BagItems.indexOf(item.id);
  return itemIndex >= 0;
 })


  return (<>
  
 

    <main>
      <div className="bag-page">
        <div className="bag-items-container">
        {finalItems.map(item =>  <BagItem item={item}/>)}
       
        </div>
      
        <BagSummary/>
      

      </div>
    </main>

  </>)

}

export default Bag;