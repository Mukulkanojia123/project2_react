import { CDN_URL } from "../utils/constant";
import {addItem} from '../utils/cartSlice';
import {useDispatch}  from "react-redux";
const ItemList = ({ items }) => {

        const dispatch = useDispatch();

    const handleAddItem =(item)=>{
            // Dispatch and Action
            dispatch(addItem(item))
    }

    return (
        <div>
            {/* <h4>hello</h4> */}
            {items.map((item) => (
                <div key={item.card.info.id}
                    className="p-2 m-2  border-grey-200 border-b-2 text-left flex justify-evenly"
                >

                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span>- ₹ {item.card.info.price
                                ? item.card.info.price / 100
                                : item.card.info.defaultPrice / 100}</span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className=" p-4 w-3/12">

                        <div className="absolute">
                            <button className="p-2 bg-white shadow-lg m-auto"
                            onClick={()=>handleAddItem(item)}>
                                 Add + 
                            </button>
                        </div>
                        <img src={CDN_URL + item.card.info.imageId} />
                    </div>
                </div>
            ))}
        </div>
    )
}


export default ItemList;