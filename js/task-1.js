const listOfCategories = document.querySelectorAll("#categories .item")

const numberOfCategories = listOfCategories.length;
console.log("Number of categories:", numberOfCategories)

listOfCategories.forEach (element => {
    const category = element.querySelector("h2").textContent;
    console.log("Category:", category)
    const elements = element.querySelectorAll("li").length;
    console.log("Elements:", elements)       
})