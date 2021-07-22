let json_array = new Array();
fetch("js-json/data.json").then(function(response)
{
    return response.json();
}).then(function(data)
{
  function set_all_types(property_name)
{
    
    let ret = json_array.reduce(function(acc,object)
    {
      let array = object[property_name];
      if(typeof(array) != typeof([]))
      {
        array = [array];
      }
      array.forEach(function(item)
      {
        if(!acc.includes(item))
        {
          acc.unshift(item);
        }
      });
      return acc;
    },[]);
   
    return ret;
}

  const roles = set_all_types("role");
  const levels  = set_all_types("level");
  const contracts = set_all_types("contract");
  const locations = set_all_types("location");
  const languages = set_all_types("languages");
  const tools = set_all_types("tools");

  Object.assign(json_array,data);
  add_cards(json_array);
  //checkboxes
  const contract_list = document
  .getElementById("contract-checkboxes");
  const role_list = document.
  getElementById("role-checkboxes");
  const level_list = document
  .getElementById("level-checkboxes");
  const location_list = document
  .getElementById("location-checkboxes");
  const language_list = document
  .getElementById("language-checkboxes");
  const tools_list = document
  .getElementById("tools-checkboxes");

  fill_list(contract_list,contracts);
  fill_list(role_list,roles);
  fill_list(level_list,levels);
  fill_list(location_list,locations);
  fill_list(language_list,languages);
  fill_list(tools_list,tools);
  // event
  const filter_btn = 
  document.getElementById("filter-btn");
  const filter_ui = document.querySelector(".filter-ui");
  const checkboxes = document.querySelectorAll(".checkbox");
  filter_ui.classList.add("no-height");
  const reminder = document.querySelector(".reminder");
  let checkbox_array = [];

  checkboxes.forEach(item =>
{
    item.addEventListener("click",e=>
    {
        {
            const property_name = e.currentTarget.
            closest(".filter-ui__list").dataset.property_name;
            const value = e.currentTarget.querySelector("label")
            .innerHTML;
            const obj = new Checkbox(property_name,value);

            if(e.currentTarget.querySelector("input").checked)
            {
                checkbox_array.push(obj);
            }
            else
            {
                checkbox_array = checkbox_array.filter(item=>
                {
                    return !( item.property_name == property_name 
                        && item.value == value);
                });
            }
            add_cards(filter_cards(checkbox_array));
            update_reminder();
        }
    });
});
reminder.addEventListener("click",e=>
{
    const target = e.target;
    if(target.classList.contains("fa-times"))
    {
        const property_name = target.parentElement.
        getAttribute("data-property_name");
        const value = target.parentElement.
        getAttribute("data-value");
        console.log(value);
        console.log(property_name);
        const list = document.
        querySelector(`ul[data-property_name="${property_name}"]`);
        console.log(list);
        const checkbox = list.
        querySelector(`li[data-value="${value}"`).querySelector("input");
        console.log(checkbox);
        checkbox.click();
        target.parentElement.remove();
    }
});
  const clear_btn = document.querySelector(".clear");
  clear_btn.addEventListener("click",e=>
{
    checkbox_array = [];
    add_cards(filter_cards(checkbox_array));
    clear_btn.parentElement.querySelectorAll("span")
    .forEach(item=>item.remove());
    document.querySelectorAll(`input[type="checkbox"]`)
    .forEach(item=>item.checked = false);
});
 // search 
let search_bar = document.
getElementById("top-search-bar");
let search_form = document.querySelector(".top-search");
search_form.addEventListener("submit",e=>
{
    e.preventDefault();
});

search_bar.addEventListener("change",(e)=>
{   
    
    let value = e.currentTarget.value;
    value.toLowerCase();
    add_cards(filter_cards(checkbox_array));
    if(value.length != 0)
    {
        const cards = document.querySelectorAll(".card");
        cards.forEach(card=>
        {
            if(!card.textContent.includes(value))
            {
                card.remove();
            }
        });
    }
});

}).catch(function(error)
{
    console.log(error.message);
});

const roles = set_all_types("role");
const levels  = set_all_types("level");
const contracts = set_all_types("contract");
const locations = set_all_types("location");
const languages = set_all_types("languages");
const tools = set_all_types("tools");