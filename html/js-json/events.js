
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

