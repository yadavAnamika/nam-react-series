import ReactDOM from "react-dom/client"

const Header = () => {
    return <div className="header">
        <img className="headerlogo" src="https://www.pngall.com/wp-content/uploads/8/Restaurant-Logo-PNG-Free-Image.png" />
        <ul className="navItems">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
    </div>
}

const backgroudncolor = {
    backgroundColor: "#f0f0f0"
}
const CardComponent = (props) => {
    console.log(props);
    //destructuring on the fly, where new variables should have same name as the key of the object, otherwise it will give undefined
    const { cloudinaryImageId, name, cuisines, avgRatingString, sla } = props?.resData?.info;
    return (
        <div className="cardComp" style={backgroudncolor}>
            <img className="card-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4 className="cuisineWords">{cuisines.join(", ")}</h4>
            <h4>{avgRatingString}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}

let respObjList = [
    {
        "info": {
            "id": "89916",
            "name": "Pizza Hut",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/15/4354a7f7-1c2f-4693-8735-97f745cb63a7_89916.JPG",
            "locality": "Zone-6",
            "areaName": "Raj Nagar",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 4.3,
            "parentId": "721",
            "avgRatingString": "4.3",
            "totalRatingsString": "8.0K+",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 1.9,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "1.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-07-06 02:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "android/static-assets/icons/big_rx.png",
                        "description": "bolt!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "android/static-assets/icons/big_rx.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "70% OFF",
                "subHeader": "UPTO ₹130"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.0",
                    "ratingCount": "2.0K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-323b3de0-3af0-4406-ae6e-6eab903f1b6a"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/noida/pizza-hut-zone-6-raj-nagar-rest89916",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "302707",
            "name": "Barbeque Nation",
            "cloudinaryImageId": "sihzgcpcxszv7fzvv0ri",
            "locality": "Raj Nagar",
            "areaName": "Raj Nagar",
            "costForTwo": "₹600 for two",
            "cuisines": [
                "North Indian",
                "Barbecue",
                "Kebabs",
                "Biryani",
                "Street Food",
                "Snacks"
            ],
            "avgRating": 4.1,
            "parentId": "2438",
            "avgRatingString": "4.1",
            "totalRatingsString": "1.7K+",
            "sla": {
                "deliveryTime": 43,
                "lastMileTravel": 1.8,
                "serviceability": "SERVICEABLE",
                "slaString": "40-50 mins",
                "lastMileTravelString": "1.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-07-06 01:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "5.0",
                    "ratingCount": "4"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-323b3de0-3af0-4406-ae6e-6eab903f1b6a"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/noida/barbeque-nation-raj-nagar-rest302707",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "686202",
            "name": "Chinese Wok",
            "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
            "locality": "Raj Nagar",
            "areaName": "VVIP Style Mall",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Chinese",
                "Asian",
                "Tibetan",
                "Desserts"
            ],
            "avgRating": 4.2,
            "parentId": "61955",
            "avgRatingString": "4.2",
            "totalRatingsString": "2.1K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 4.3,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "4.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-07-05 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "brand_cards/Badges%202026/46_Best%20in%20Chinese2026.png",
                        "description": "Top-rated for Chinese, based on user votes."
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Top-rated for Chinese, based on user votes.",
                                    "imageId": "brand_cards/Badges%202026/46_Best%20in%20Chinese2026.png",
                                    "theme": ""
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "70% OFF",
                "subHeader": "UPTO ₹140"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-323b3de0-3af0-4406-ae6e-6eab903f1b6a"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/noida/chinese-wok-raj-nagar-vvip-style-mall-rest686202",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "254130",
            "name": "McDonald's",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/eb2c142e-7432-4bd4-b727-260a5ab90dfa_254130.JPG",
            "locality": "BRS Nagar",
            "areaName": "Raj Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "American",
                "Fast Food",
                "Beverages"
            ],
            "avgRating": 4.5,
            "parentId": "630",
            "avgRatingString": "4.5",
            "totalRatingsString": "14K+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 1.9,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "1.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-07-05 22:50:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                        "description": "Top-rated for Bolt, based on user votes."
                    },
                    {
                        "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                        "description": "Top-rated for Burger, based on user votes."
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Top-rated for Bolt, based on user votes.",
                                    "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                                    "theme": ""
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Top-rated for Burger, based on user votes.",
                                    "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                    "theme": ""
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹52"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.2",
                    "ratingCount": "6.7K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-323b3de0-3af0-4406-ae6e-6eab903f1b6a"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/noida/mcdonalds-brs-nagar-raj-nagar-rest254130",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "57276",
            "name": "Burger King",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/2a3b5f63-b958-4ada-8266-b1f36fedd5e5_57276.jpg",
            "locality": "A Block",
            "areaName": "Raj Nagar",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Burgers",
                "American"
            ],
            "avgRating": 4.3,
            "parentId": "166",
            "avgRatingString": "4.3",
            "totalRatingsString": "34K+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-07-06 05:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "android/static-assets/icons/big_rx.png",
                        "description": "bolt!"
                    },
                    {
                        "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                        "description": "Top-rated for Burger, based on user votes."
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "android/static-assets/icons/big_rx.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Top-rated for Burger, based on user votes.",
                                    "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                    "theme": ""
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹59"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-323b3de0-3af0-4406-ae6e-6eab903f1b6a"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/noida/burger-king-a-block-raj-nagar-rest57276",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "626553",
            "name": "La Pino'z Pizza",
            "cloudinaryImageId": "mkbgksj3ou3gsc7znsdd",
            "locality": "sector 10",
            "areaName": "Raj Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.2,
            "parentId": "636558",
            "avgRatingString": "4.2",
            "totalRatingsString": "11K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-07-05 23:59:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "70% OFF",
                "subHeader": "UPTO ₹140"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.1",
                    "ratingCount": "681"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-323b3de0-3af0-4406-ae6e-6eab903f1b6a"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/noida/la-pinoz-pizza-sector-10-raj-nagar-rest626553",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "605418",
            "name": "Dum Safar Biryani",
            "cloudinaryImageId": "f0b39544132fc9ccbece07153462cd5d",
            "locality": "RDC Concrete (India) Pvt Ltd",
            "areaName": "Raj Nagar",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "Biryani",
                "Hyderabadi",
                "Kebabs",
                "North Indian",
                "barbeque"
            ],
            "avgRating": 4.2,
            "parentId": "351013",
            "avgRatingString": "4.2",
            "totalRatingsString": "1.3K+",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 1.8,
                "serviceability": "SERVICEABLE",
                "slaString": "30-40 mins",
                "lastMileTravelString": "1.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-07-06 01:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-323b3de0-3af0-4406-ae6e-6eab903f1b6a"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/noida/dum-safar-biryani-rdc-concrete-india-pvt-ltd-raj-nagar-rest605418",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "543897",
            "name": "Wow! Momo",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/25/4ecc39c8-d5c4-45a6-b366-5995e1c0f6b5_543897.JPG",
            "locality": "Food Court Area",
            "areaName": "Rajnagar Extension",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Momos",
                "Chinese",
                "fastfood",
                "Asian",
                "Beverages"
            ],
            "avgRating": 4.3,
            "parentId": "1776",
            "avgRatingString": "4.3",
            "totalRatingsString": "1.2K+",
            "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 4.4,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "4.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-07-06 01:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "brand_cards/Badges%202026/66_Best%20in%20Momo2026.png",
                        "description": "Top-rated for Momo, based on user votes."
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Top-rated for Momo, based on user votes.",
                                    "imageId": "brand_cards/Badges%202026/66_Best%20in%20Momo2026.png",
                                    "theme": ""
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "70% OFF",
                "subHeader": "UPTO ₹130"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-323b3de0-3af0-4406-ae6e-6eab903f1b6a"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/noida/wow-momo-food-court-area-rajnagar-extension-rest543897",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "710824",
            "name": "The Belgian Waffle Co.",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/16/19cf9eae-2ebf-4e3d-8c67-f48f9c610b10_710824.jpg",
            "locality": "KHASRA",
            "areaName": "RAJ NAGAR EXTENSION",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Waffle",
                "Desserts",
                "Ice Cream"
            ],
            "avgRating": 4.7,
            "veg": true,
            "parentId": "2233",
            "avgRatingString": "4.7",
            "totalRatingsString": "1.6K+",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 4.2,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "4.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-07-06 03:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Serves only 100% vegetarian food, with no non-veg items.",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                    "theme": ""
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹98"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-323b3de0-3af0-4406-ae6e-6eab903f1b6a"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/noida/the-belgian-waffle-co-khasra-raj-nagar-extension-rest710824",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "335050",
            "name": "Theobroma",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/25/d842a8a7-2c34-4946-814d-4dac9657cd8b_335050.JPG",
            "locality": "Raj Nagar",
            "areaName": "Raj Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Bakery",
                "Desserts"
            ],
            "avgRating": 4.6,
            "parentId": "1040",
            "avgRatingString": "4.6",
            "totalRatingsString": "3.9K+",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 1,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-07-05 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "android/static-assets/icons/big_rx.png",
                        "description": "bolt!"
                    },
                    {
                        "imageId": "brand_cards/Badges%202026/43_Best%20in%20Cakes%20&%20Desserts2026.png",
                        "description": "Top-rated for Cakes & Desserts, based on user votes."
                    },
                    {
                        "imageId": "newg.png",
                        "description": "Premium gourmet restaurant offering an elevated, high-quality food experience."
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "android/static-assets/icons/big_rx.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Top-rated for Cakes & Desserts, based on user votes.",
                                    "imageId": "brand_cards/Badges%202026/43_Best%20in%20Cakes%20&%20Desserts2026.png",
                                    "theme": ""
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                                    "imageId": "newg.png",
                                    "theme": ""
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹85"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.3",
                    "ratingCount": "107"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-323b3de0-3af0-4406-ae6e-6eab903f1b6a"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/noida/theobroma-raj-nagar-rest335050",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "340382",
            "name": "KFC",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/7/1/7a515815-931c-41f0-be95-4ca897e6e83f_340382.JPG",
            "locality": "P And T Colony",
            "areaName": "Raj Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Fast Food",
                "Rolls & Wraps"
            ],
            "avgRating": 4,
            "parentId": "547",
            "avgRatingString": "4.0",
            "totalRatingsString": "6.5K+",
            "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 1.9,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "1.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-07-06 02:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "android/static-assets/icons/big_rx.png",
                        "description": "bolt!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "android/static-assets/icons/big_rx.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-323b3de0-3af0-4406-ae6e-6eab903f1b6a"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/noida/kfc-p-and-t-colony-raj-nagar-rest340382",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "634719",
            "name": "Goila Butter Chicken",
            "cloudinaryImageId": "5e19832da032dd69547565e27104706f",
            "locality": "Raj Nagar",
            "areaName": "Raj Nagar",
            "costForTwo": "₹600 for two",
            "cuisines": [
                "Biryani",
                "Kebabs",
                "Desserts"
            ],
            "avgRating": 4,
            "parentId": "322587",
            "avgRatingString": "4.0",
            "totalRatingsString": "1.0K+",
            "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 1.9,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "1.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-07-06 01:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "android/static-assets/icons/big_rx.png",
                        "description": "bolt!"
                    },
                    {
                        "imageId": "newg.png",
                        "description": "Premium gourmet restaurant offering an elevated, high-quality food experience."
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "android/static-assets/icons/big_rx.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                                    "imageId": "newg.png",
                                    "theme": ""
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹149"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "3.1",
                    "ratingCount": "7"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-323b3de0-3af0-4406-ae6e-6eab903f1b6a"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/noida/goila-butter-chicken-raj-nagar-rest634719",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "686203",
            "name": "Big Bowl",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/30548ac4-2e57-4c1d-ba73-8372f74a1ad2_686203.JPG",
            "locality": "Raj Nagar",
            "areaName": "VVIP Style Mall",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Chinese",
                "Tibetan",
                "Desserts"
            ],
            "avgRating": 4.2,
            "parentId": "434792",
            "avgRatingString": "4.2",
            "totalRatingsString": "1.3K+",
            "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 4.3,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "4.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-07-05 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "70% OFF",
                "subHeader": "UPTO ₹140"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-323b3de0-3af0-4406-ae6e-6eab903f1b6a"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/noida/big-bowl-raj-nagar-vvip-style-mall-rest686203",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "220321",
            "name": "Subway",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/2229e6bb-a4ab-47ae-bff2-0d7a34816368_220321.jpg",
            "locality": "C Block",
            "areaName": "Raj Nagar",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "sandwich",
                "Salads",
                "wrap",
                "Healthy Food"
            ],
            "avgRating": 4.4,
            "parentId": "2",
            "avgRatingString": "4.4",
            "totalRatingsString": "4.5K+",
            "sla": {
                "deliveryTime": 21,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-07-06 02:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "android/static-assets/icons/big_rx.png",
                        "description": "bolt!"
                    },
                    {
                        "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                        "description": "Meals with high protein, low calorie and no added sugar"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "android/static-assets/icons/big_rx.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Meals with high protein, low calorie and no added sugar",
                                    "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                                    "theme": ""
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-323b3de0-3af0-4406-ae6e-6eab903f1b6a"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/noida/subway-c-block-raj-nagar-rest220321",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "58915",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/5/35a762ae-29f6-4685-a9c0-a6731f013aae_58915.JPG",
            "locality": "P & T Colony",
            "areaName": "Raj Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
            ],
            "avgRating": 4.4,
            "parentId": "2456",
            "avgRatingString": "4.4",
            "totalRatingsString": "7.7K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-07-05 23:59:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "android/static-assets/icons/big_rx.png",
                        "description": "bolt!"
                    },
                    {
                        "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                        "description": "Top-rated for Bolt, based on user votes."
                    },
                    {
                        "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                        "description": "Top-rated for Pizza, based on user votes."
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "android/static-assets/icons/big_rx.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Top-rated for Bolt, based on user votes.",
                                    "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                                    "theme": ""
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Top-rated for Pizza, based on user votes.",
                                    "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                                    "theme": ""
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹59"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-323b3de0-3af0-4406-ae6e-6eab903f1b6a"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/noida/dominos-pizza-p-and-t-colony-raj-nagar-rest58915",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "263781",
            "name": "Veg Meals By LunchBox",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/15/ac83f783-26d6-410d-a527-e5bb5b5c587d_263781.JPG",
            "locality": "Azad Building",
            "areaName": "Navyug Market",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Desserts",
                "Biryani"
            ],
            "avgRating": 4,
            "veg": true,
            "parentId": "21938",
            "avgRatingString": "4.0",
            "totalRatingsString": "346",
            "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 3.9,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-07-05 23:59:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Serves only 100% vegetarian food, with no non-veg items.",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                    "theme": ""
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹99"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-323b3de0-3af0-4406-ae6e-6eab903f1b6a"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/noida/veg-meals-by-lunchbox-azad-building-navyug-market-rest263781",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "539151",
            "name": "Cheesecake & Co.",
            "cloudinaryImageId": "b318c0b4bc2169550145ace1d6e791a2",
            "locality": "Raj Nagar",
            "areaName": "Raj Nagar",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "Bakery"
            ],
            "avgRating": 4.7,
            "veg": true,
            "parentId": "387417",
            "avgRatingString": "4.7",
            "totalRatingsString": "2.3K+",
            "sla": {
                "deliveryTime": 20,
                "lastMileTravel": 1.1,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-07-05 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "newg.png",
                        "description": "Premium gourmet restaurant offering an elevated, high-quality food experience."
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                                    "imageId": "newg.png",
                                    "theme": ""
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.3",
                    "ratingCount": "86"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-323b3de0-3af0-4406-ae6e-6eab903f1b6a"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/noida/cheesecake-and-co-raj-nagar-rest539151",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "355360",
            "name": "Grameen Kulfi",
            "cloudinaryImageId": "hbcf1dgnbb8bxzyc4onk",
            "locality": "Navyug Market",
            "areaName": "Naya Ganj",
            "costForTwo": "₹120 for two",
            "cuisines": [
                "Ice Cream",
                "Desserts"
            ],
            "avgRating": 4.8,
            "veg": true,
            "parentId": "12175",
            "avgRatingString": "4.8",
            "totalRatingsString": "554",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-07-06 00:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "brand_cards/Badges%202026/56_Best%20in%20Ice%20Cream2026.png",
                        "description": "Top-rated for Ice Cream, based on user votes."
                    },
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Top-rated for Ice Cream, based on user votes.",
                                    "imageId": "brand_cards/Badges%202026/56_Best%20in%20Ice%20Cream2026.png",
                                    "theme": ""
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Serves only 100% vegetarian food, with no non-veg items.",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                    "theme": ""
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹60 OFF",
                "subHeader": "ABOVE ₹99",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-323b3de0-3af0-4406-ae6e-6eab903f1b6a"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/noida/grameen-kulfi-navyug-market-naya-ganj-rest355360",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "161161",
            "name": "LunchBox - Meals and Thalis",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/e5ccaf24-9824-4c8a-a599-b4ce3909cd73_161161.jpg",
            "locality": "Azad Building",
            "areaName": "Navyug Market",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Thalis",
                "North Indian",
                "Biryani"
            ],
            "avgRating": 4.2,
            "parentId": "4925",
            "avgRatingString": "4.2",
            "totalRatingsString": "4.2K+",
            "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 3.9,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-07-05 23:59:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                        "description": "Meals with high protein, low calorie and no added sugar"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Meals with high protein, low calorie and no added sugar",
                                    "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                                    "theme": ""
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹99"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-323b3de0-3af0-4406-ae6e-6eab903f1b6a"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/noida/lunchbox-meals-and-thalis-azad-building-navyug-market-rest161161",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "71405",
            "name": "Donald's Pastry Shop",
            "cloudinaryImageId": "b14ce410905af6e9366e79f3386893c5",
            "locality": "Raj Nagar",
            "areaName": "Raj Nagar",
            "costForTwo": "₹600 for two",
            "cuisines": [
                "Desserts"
            ],
            "avgRating": 4.5,
            "parentId": "13680",
            "avgRatingString": "4.5",
            "totalRatingsString": "16K+",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 0.9,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "0.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-07-05 22:45:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "android/static-assets/icons/big_rx.png",
                        "description": "bolt!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "android/static-assets/icons/big_rx.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.3",
                    "ratingCount": "5.9K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-323b3de0-3af0-4406-ae6e-6eab903f1b6a"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/noida/donalds-pastry-shop-raj-nagar-rest71405",
            "type": "WEBLINK"
        }
    }
];

const BodyComponent = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {respObjList.map(res =>
                    <CardComponent key={res.info.id} resData={res} />
                )}
            </div>
        </div>
    )
}

const AppComponent = () => {
    return (
        <div className="app-card">
            <Header />
            <BodyComponent />
            <div className="footer"></div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);