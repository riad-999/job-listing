const cards_container = document.
querySelector(".job-listing");

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
    <span class="card__skill">${company_object.level}</span>
    ${lang_tools}`;

    return lang_tools;
}

function creat_card__bottom_content(object)
{
    let output = `
    <span class="card__skill">
        ${object.role}
    </span>
    <span class="card__skill">
        ${object.level}
    </span>
    ` ;
    output += creat_skills(object);
    return output;
}
function creat_card_content(company_object)
{
    let no_dipslay_featured= "no-display";
    let no_display_new = "no-display";
    if(company_object.new)
    {
        no_display_new = "";
    }
    if(company_object.featured)
    {
        no_dipslay_featured = "";
    }

    return `
    <div class="card__top">
        <figure class="card__fig">
            <img class="card__img" 
            src="${company_object.logo}" 
            alt="company-logo"/>
        </figure>
        <div class="card__container">
                <div>
                    <span class="card__name">
                        ${company_object.company}
                    </span>
                    <span class="card__new ${no_display_new}">
                        New
                    </span>
                    <span class="card__featured ${no_dipslay_featured}">
                        featured
                    </span>
                </div>
                <div class="card__position">
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
    </div>
    <div class="card__bottom">
        ${creat_card__bottom_content(company_object)}
    </div>`;
}
function add_cards(data)
{
    data.forEach(function(object)
    {
        const card_content = creat_card_content(object);
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = card_content;
        cards_container.append(card);
    });
}


