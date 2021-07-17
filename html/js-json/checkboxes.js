const contract_list = document
.getElementById("contract-checkboxes");
const role_list = document.
getElementById("role-checkboxes");
const level_list = document
.getElementById("level-checkboxes");
const location_list = document
.getElementById("location-checkboxes");
const language_list = document
.getElementById("language_checkboxes");
const tools_list = document
.getElementById("tools-checkboxes");


function creat_checkboxe(content)
{
    return `
    <input id="${content}-id" 
    class="filter-ui__ckeckbox" type="checkbox" />
    <label for="${content}-id">${content}</label>`;
}
function fill_list(list_element,array)
{
    array.forEach(function(item)
    {
        const list_item = document.createElement("li");
        list_item.classList.add("filter-ui__item");
        list_item.classList.add("checkbox");
        list_item.innerHTML = creat_checkboxe(item);
        list_element.append(list_item);
    });
}
fill_list(contract_list,contracts);
fill_list(role_list,roles);
fill_list(level_list,levels);
fill_list(location_list,locations);
fill_list(language_list,languages);
fill_list(tools_list,tools);


