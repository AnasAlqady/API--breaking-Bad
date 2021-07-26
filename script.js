

// fetch("https://www.breakingbadapi.com/api/")
//    .then(function(response){ 
//         console.log(response)
//        return response.json();
// })
//    .then(function(data) {
//      console.log(data)
//  })

// //  promise 

async function get() { 
     const response = await fetch("https://www.breakingbadapi.com/api/characters");
     const data = await response.json();
    //  `<select id='id' onchange="getall()">
     var select= document.querySelector("#id")
     
        //  data.map(x => 
        //     document.querySelector("#id").append(`<option value="${x.char_id}"> ${x.name} </option>`)
        //     // document.querySelector("#id").append('<option value=""'+ x.char_id+'"> '+x.name+ '</option>')

        //      )
        var x=
             data.forEach(element => {
                // document.getElementById("sam").append(`<option value="${element.char_id}"> ${element.name} </option>`)
                document.getElementById("sam").innerHTML+= '<option value="'+ element['char_id']+'"> '+element['name']+ '</option>'
             });
           
           //  '<option value=""'+ x.char_id+'"> '+x.name+ '</option>'
    //  </select> `
    }
    document.getElementById("sam").addEventListener('change',getall)
     async function getall () {
        // var id = value;
        var id= document.querySelector("#sam").value;
        const response = await fetch("https://www.breakingbadapi.com/api/characters/"+id);
        const data = await response.json();
        // data.map(x => x.name )
        document.querySelector("#content h1").innerHTML=data[0].name
        document.querySelector("#content h5").innerHTML=data[0].birthday
        document.querySelector("#content img").src =data[0].img
        // document.querySelector("#actor").innerHTML =
    }
    get();