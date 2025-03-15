let food = document.querySelector(".food");

let recipe;
let Indian = document.getElementById("Indian");
let Canadian = document.getElementById("Canadian");
let American = document.getElementById("American");
let Thailand = document.getElementById("Thailand");
let British = document.getElementById("British");
let Russian = document.getElementById("Russian");

let fetchData = async (area) => {
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)

    const data = await api.json();
    recipe = data.meals;
    showdata(recipe);

}

let showdata = (recipe) => {
    food.innerHTML = recipe.map((meal) =>
        `
        <div class="inner_food">
        <div class="sub_inner_food">
        <img class="meals_image" src= "${meal.strMealThumb}"/>
        </div>
        <h5 id="meal_name">
        ${meal.strMeal}
        </h5>
        <p id="meal_id">
        ${meal.idMeal}
        </p>
        </div>
        `
    ).join("")
}
fetchData("indian");

Indian.addEventListener("click", fetchData("Indian"))
American.addEventListener("click", () => {

    fetchData("american");
});
Russian.addEventListener("click", () => {
    fetchData("russian")
})
Thailand.addEventListener("click", () => {
    fetchData("thai")
})
British.addEventListener("click", () => {
    fetchData("british")
})
Indian.addEventListener("click", () => {
    fetchData("indian")
})
Canadian.addEventListener("click", () => {
    fetchData("Canadian")
})

//Because fetchdata is async function so I can only receive the data using await keyword
//for which again I have to define another function
// let showdata= async () =>{
//     recipe=await fetchData("Indian");
//     console.log(recipe);

//     food.innerHTML= recipe.map((meal)=>
//     `
//     <div class="inner_food">
//     <div class="sub_inner_food">
//     <img class="meals_image" src= "${meal.strMealThumb}"/>
//     </div>
//     <h5 id="meal_name">
//     ${meal.strMeal}
//     </h5>
//     <p id="meal_id">
//     ${meal.idMeal}
//     </p>
//     </div>
//     `
//     ).join("")

// }
// showdata();


const fetchsearch =(search) => {
    let input = document.querySelector("#search");
    input.addEventListener("keydown", async (e) => {
        if (e.key === "Enter") {
            let inputvalue = input.value;
            console.log(inputvalue);
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputvalue}`

            );

            const data = await api.json();
            recipe = data.meals;
            showdata(recipe);
        }
    })
}
fetchsearch();

