import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";


const MyFoods = () => {

  const { user } = useContext(AuthContext);

  const [foods, setFoods] = useState([]);


  useEffect(() => {

    if (!user?.email) return;

    fetch(`http://localhost:3000/meals?chef=${user.email}`)
      .then(res => res.json())
      .then(data => setFoods(data));

  }, [user]);


  return (
    <div>

      <h2 className="text-xl font-bold mb-4">
        My Foods
      </h2>


      {
        foods.map(food => (

          <div
            key={food._id}
            className="border p-3 mb-2 rounded"
          >
            {food.name} - ${food.price}
          </div>

        ))
      }

    </div>
  );
};

export default MyFoods