import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Details() {
  //extracting id from path :id in the App.js

  const { recipeDetailData, setRecipeDetailData } = useContext(GlobalContext);
  const { id } = useParams();

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();
      console.log(data);
      if (data?.data) {
        setRecipeDetailData(data?.data);
      }
    }

    //invoke gerRecipeDetails
    getRecipeDetails();
  }, []);

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetailData?.recipe?.image_url}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
            alt={recipeDetailData?.recipe?.title}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {recipeDetailData?.recipe?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {recipeDetailData?.recipe?.title}
        </h3>
      </div>
    </div>
  );
}
