let search_bar = document.
getElementById("top-search-bar");
// const checked_propeties = 
// ["logo","company","position","postedAt",
// "contract","location","languages",
// "tools","level","role"];
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