let json_array= 0;
fetch("data.json").then(function(response)
{
    return response.json();
}).then(function(data)
{
    json_array= data;
}).catch(function(error)
{
    console.log(error.message);
});
console.log(json_array);

//fucntion description:
//for example if the 1st user object of the array (the json array)
// khow PHP and the 2nd knows python and 3rd PHP ect...
//so the return of the function id ["PHP","python",...]
//each element of the retured array is unique 
// this allow us to put all the languages in one array in none repeatable way

function set_all_types(property_name,typeof_property)
{
    
    return json_object.reduce(function(object,acc)
    {
        let array = object[property_name];
        //converting string to array in such case
        if(typeof_property === String)
        {
            array = array.split(" ");
        }
        
        array.forEach(function(item)
        {
            if(!acc.contains(item))
            {
                acc.add(item);
            }
        });

       return acc;
    },[]);
}

const roles = set_all_types("role",String);
const levels  = set_all_types("level",String);
const contracts = set_all_types("contract",String);
const locations = set_all_types("location",String);
const languages = set_all_types("languages",Array);
const tools = set_all_types("tools",Array);