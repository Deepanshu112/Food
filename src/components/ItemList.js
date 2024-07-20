import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/contains";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {
    
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }

    return(
        <div className="ItemList">
            {items.map((item) => (
                <div key={item.card.info.id} className="Itemlist-inner">
                    
                    <div>
                        <div className="Itemlist-inner-inner">
                    
                            {item.card.info.name} - &#x20b9;
                            {item.card.info.defaultPrice ? item.card.info.defaultPrice/100 : item.card.info.price/100 }
                        </div>
                        {item.card.info.description}
                        
                    </div>
                    <div>
                        <img 
                            src={CDN_URL+item.card.info.imageId}
                            className="image"
                        />
                        <button 
                        className="Add"
                        onClick={() => handleAddItem(item)}>Add +</button>                        
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;