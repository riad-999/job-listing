
function creat_checkboxe(content)
{
    return `
    <input id="${content}-id" 
    class="filter-ui__ckeckbox" type="checkbox" />
    <label for="${content}-id">${content}</label>`;
}
function fill_list(list_element,array)
{   
    let index;
    let list_item;
    for(index=0;index < array.length ;index++)
    {
        list_item = document.createElement("li");
        list_item.classList.add("filter-ui__item");
        list_item.classList.add("checkbox");
        list_item.setAttribute("data-value",array[index]);
        list_item.innerHTML = creat_checkboxe(array[index]);
        list_element.append(list_item);
    }
}