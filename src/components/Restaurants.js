import { useEffect } from "react";
import Shimmer from "./Shimmer";

const Restaurant = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.8973944&lng=78.0880129&restaurantId=728503&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();
        console.log(json);
        setResInfo(json.data)
    };


    return resInfo === 0 ? (
        <Shimmer />
    ) : (
        <div className="menu">
            <h2>Kunjilal</h2>
            <h2>Menu</h2>
            <ul>
                <li>Sonpapdi</li>
                <li>Kaju Katli</li>
                <li>Samosa</li>
            </ul>
        </div>
    )
}

export default Restaurant;