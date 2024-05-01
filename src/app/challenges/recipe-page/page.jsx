import Image from "next/image";

export default function recipepage() {
  const prepTime = [
    {
      title: "Total",
      time: "Approximately 10 minutes",
    },
    {
      title: "Preparation",
      time: "5 minutes",
    },
    {
      title: "Cooking",
      time: "5 minutes",
    },
  ];

  const ingredients = [
    "2-3 large eggs",
    "Salt, to taste",
    "Pepper, to taste",
    "1 tablespoon of butter or oil",
    "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
  ];

  const instructions = [
    {
      number: 1,
      title: "Beat the eggs:",
      description:
        "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
    },
    {
      number: 2,
      title: "Heat the pan:",
      description:
        "Place a non-stick frying pan over medium heat and add butter or oil.",
    },
    {
      number: 3,
      title: "Cook the omelette:",
      description:
        "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
    },
    {
      number: 4,
      title: "Add fillings (optional):",
      description:
        "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
    },
    {
      number: 5,
      title: "Fold and serve:",
      description:
        "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
    },
    {
      number: 6,
      title: "Enjoy:",
      description: "Serve hot, with additional salt and pepper if needed.",
    },
  ];

  const nutrition = [
    {
      type: "Calories",
      amount: "277kcal",
    },
    {
      type: "Carbs",
      amount: "0g",
    },
    {
      type: "Protein",
      amount: "20g",
    },
    {
      type: "Fat",
      amount: "22g",
    },
  ];

  return (
    <main className="bg-recipepage-eggshell min-h-screen flex justify-center items-center pt-[123px] pb-[123px]">
      {/* Recipe */}
      <div className="bg-recipepage-white flex flex-col p-10 rounded-[24px] max-w-[736px]">
        <Image
          className="rounded-[12px]"
          src={"/recipe-page/image-omelette.jpeg"}
          height={300}
          width={656}
        ></Image>
        <div className="flex flex-col gap-8">
          {/* Title */}
          <div className="flex flex-col gap-6 mt-10">
            <h1 className="font-youngserif text-[40px] text-recipepage-dark-charcoal">
              Simple Omelette Recipe
            </h1>
            <p className="font-outfit text-recipepage-wenge-brown">
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
          </div>
          {/* Prep Time */}
          <div className="flex flex-col p-7 gap-4">
            <h2 className="font-outfit text-recipepage-dark-raspberry text-[20px] font-semibold">
              Preparation time
            </h2>
            <div className="flex flex-col">
              <ol className="list-inside inline marker:text-recipepage-dark-raspberry font-outfit">
                {prepTime.map((item) => (
                  <li key={item} className=" text-recipepage-wenge-brown">
                    <span className="font-bold ml-4">{item.title}:</span>{" "}
                    {item.time}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          {/* Ingredients */}
          <div className="flex flex-col gap-6">
            <h1 className="text-recipepage-brandy-red text-[28px] font-youngserif">
              Ingredients
            </h1>
            <ul className="list-inside inline list-disc marker:text-recipepage-brandy-red font-outfit">
              {ingredients.map((item) => (
                <li key={item} className="ml-4 text-recipepage-wenge-brown text-[16px]">
                  <span className="ml-4">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <hr className="bg-recipepage-white-coffee" />
          {/* Instructions */}
          <div className="flex flex-col gap-6">
            <h1 className="text-recipepage-brandy-red text-[28px] font-youngserif">
              Instructions
            </h1>
            <div className="flex flex-col gap-2">
              {instructions.map((item) => (
                <div key={item} className="flex flex-row gap-8">
                  <p className="font-outfit text-recipepage-brandy-red font-bold">
                    {item.number}.
                  </p>
                  <p className="text-recipepage-wenge-brown font-outfit">
                    <span className="font-bold ">{item.title} </span>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <hr className="bg-recipepage-white-coffee" />
          {/* Nutrition Table */}
          <div className="flex flex-col gap-6">
            <h1 className="text-recipepage-brandy-red text-[28px] font-youngserif">
              Nutrition
            </h1>
            <p className="font-outfit text-recipepage-wenge-brown">
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <table className="font-outfit">
              {nutrition.map((item) => (
                <tr key={item} className={`${item.type !== "Fat" && 'border-b'} border-recipepage-white-coffee`}>
                  <td className="text-recipepage-wenge-brown pl-8 pt-3 pb-3">{item.type}</td>
                  <td className="text-recipepage-brandy-red font-bold pr-8 pt-3 pb-3">{item.amount}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
