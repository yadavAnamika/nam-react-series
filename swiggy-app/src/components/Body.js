import CardComponent from "./CardComponent";
import respObjList from "../utils/mockData";
import { useState, useEffect } from 'react';

const BodyComponent = () => {
    const [restaurantList, setRestaurantList] = useState(respObjList);
    const [searchText, setSearchText] = useState('');

    useEffect(() => { fetchData() }, []);

    // use effect is called when the component is mounted for the first time, and it is called only once.
    //  It is used to fetch data from an API or perform any side effects. 
    // The second argument of useEffect is an empty array, which means that the effect will only run once when the component is mounted.
    //  If we want to run the effect every time a state variable changes, we can pass that state variable in the array.
    //  For example, if we want to run the effect every time the searchText state variable changes, we can pass [searchText] in the array.
    const fetchData = async () => {
        console.log("useEffect called");
        let fetchedData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6826062&lng=77.44740139999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        let receiveddata = await fetchedData.json();
        setRestaurantList(
            receiveddata.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    };

    const handleSearch = (event) => {
        const searchTextValue = event.target.value;
        setSearchText(searchTextValue);
        if (searchTextValue.length > 0) {
            let filterlistForSearch = restaurantList.filter(res => res.info.name.toLowerCase().includes(searchTextValue.toLowerCase()));
            setRestaurantList(filterlistForSearch);
        } else {
            setRestaurantList(respObjList);
        }
    }
    return (
        <div className="body">
            <div className="search">
                <button className="btn-top-rated" onClick={() => {
                    const filteredList = restaurantList.filter(res => res.info.avgRating > 4.5);
                    setRestaurantList(filteredList);
                }}>Top Rated Restaurants</button>
                <input className="Search-box" type="text" placeholder="Search for restaurants, cuisines or a dish"
                    value={searchText} onChange={handleSearch} />
            </div>


            <div className="res-container">
                {restaurantList.map(res =>
                    <CardComponent key={res.info.id} resData={res} />
                )}
            </div>
        </div>
    )
};

export default BodyComponent;