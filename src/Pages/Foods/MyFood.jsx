import { use, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

import FoodCard from "../../components/FoodCard";
const MyFood = () => {
    const {user} = use(AuthContext)
    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {

        fetch(`https://assignment-11-server2.vercel.app/my-meals?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
        .then(res=> res.json())
        .then(data=> {
            
            setMeals(data)
            setLoading(false)
        })

    }, [user])


    if(loading) {
        return <div> i am coming....</div>
    }

    return (
        <div>
              <div className="grid grid-cols-3 lg:grid-cols-4 gap-3">
                     {meals.map(meal => <FoodCard key={meal._id} meal={meal}/>)}
                  </div>
            
        </div>
    );
};

export default MyFood;