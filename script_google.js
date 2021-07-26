
async function get() { 
    var search = document.querySelector("#search"); 
    const response = await fetch("//www.googleapis.com/customsearch/v1?key=AIzaSyDw8rgUoflMIi3hGXmwmwz8qRb38A0kSYQ&q="+search);
    const data = await response.json();
    console.log(data)
    data.map(x => x.title)
}
