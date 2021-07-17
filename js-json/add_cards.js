const cards_container = document.
getElementById("job-listing");

function creat_skills(company_object)
{
    const skills = [].concat(
    company_object.languages,company_object.tools);

    let lang_tools = "";
    skills.forEach(function(item)
    {
        let str = `<span class="card__skill">
        ${item}
        </span>`
        lang_tools += str;
    });

    let all_skills = `<span class="card__skill">${company_object.role}</span>
    <span class="card__skill">${level}</span>
    ${lang_tools}`;

    return lang_tools;
}
function creat_card_content(company_object)
{
    let my_new = "";
    let featured= "";
    if(company_object.new)
    {
        my_new = "NEW!";
    }
    if(company_object.featured)
    {
        featured = "featured";
    }

    return `
    <div class="card__top">
        <figure class="card__fig">
            <img class="card__img" 
            src="${company_object.logo}" 
            alt="company-logo"/>
        </figure>
        <div>
            <span class="card__name">
                ${company_object.company}
            </span>
            <span class="card__new">
                ${my_new}
            </span>
            <span class="card__featured">
                ${featured}
            </span>
        </div>
        <div class="card__position>
            ${company_object.position}
        </div>
        <div class="card__info">
            <span>
                ${company_object.postedAt}
                <i class="fas fa-circle"></i>
            </span>
            <span>
                ${company_object.contract}
                <i class="fas fa-circle"></i>
            </span>
            <span>
                ${company_object.location}
            </span>
        </div>
    </div>
    <div class="card__bottom">
        ${creat_skills(company_object)}
    </div>`;
}
json_array.farEach(function(object)
{
    const card_content = creat_card_content(object);
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = card_content;
    cards_container.append(card);
});


