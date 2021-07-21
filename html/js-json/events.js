const filter_btn = 
document.getElementById("filter-btn");
const filter_ui = document.querySelector(".filter-ui");
const checkboxes = document.querySelectorAll(".checkbox");
filter_ui.classList.add("no-height");
const reminder = document.querySelector(".reminder");
let checkbox_array = [];

class Checkbox 
{
    constructor(property_name="",value="")
    {
        this.property_name = property_name;
        this.value = value;
    }
}
function update_reminder()
{
    reminder.querySelectorAll(".reminder__item").forEach(item=>
    {
        item.remove();
    });
    checkbox_array.forEach(item=>
    {
        const output = `
        ${item.value}
        <i class="fas fa-times"></i>`
        const reminder_item = document.createElement("SPAN");
        reminder_item.classList.add("reminder__item");
        reminder_item.setAttribute("data-value",`${item.value}`);
        reminder_item.setAttribute("data-property_name",`${item.property_name}`);
        reminder_item.innerHTML = output;
        reminder.append(reminder_item);
    });
}
function clear_cards()
{
    let cards = document.
    querySelectorAll(".card");
    cards.forEach((item)=>
    {
        item.remove();
    });
}
function filter_cards(array)
{
    clear_cards();
    if(array.length == 0)
    {
        return json_array;
    }
    return json_array.reduce((acc,object)=>
    {
        let i;
        for(i=0; i< array.length; i++)
        {
            let property = array[i].property_name;
            let value = array[i].value;
            let emp_array = object[property];
            if(typeof(emp_array) != typeof([]))
            {
                emp_array=[emp_array];
            }
            if(!emp_array.includes(value))
            {
                break;
            }
        }
        if(i==array.length)
        {
            acc.unshift(object);
        }
        return acc;
    },[]);
}
filter_btn.addEventListener("click",()=>
{
    filter_ui.classList.toggle("no-height");
});

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
