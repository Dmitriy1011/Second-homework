function getUsers(id) {
    const url = `https://reqres.in/api/users/${id}`;
    
    $.ajax({
        url,
        success: function (data) {
            console.log(data);
            addContainer(data);
        }
    })
}


function addContainer (data) {
    
    let container = $("<div>");
    let first_name = $("<h2>");
    let last_name = $("<h2>");
    let ava = $("<img>");
    let email = $("<p>");
    let company= $("<p>");

    first_name.text(data.data.first_name);
    last_name.text(data.data.last_name);
    ava.attr('src', data.data.avatar);
    email.text(data.data.email);
    company.text(data.ad.company);
    company.attr('href', data.ad.url);

    container.append(first_name);
    container.append(last_name);
    container.append(ava);
    container.append(email);
    container.append(company);

    container.addClass('cont');

    $('.output').append(container);

    first_name.on('dblclick', changeValue);
    first_name.text();
    last_name.on('dblclick', changeValue);
    last_name.text();


    return container;

}



$('.to-do-action').on('submit', function(event) { //event - описывает событие
    event.preventDefault();
    let descr = $('.id-text').val();
    getUsers(descr);
})

function saveChanges () {
    let current = $(this);
    let currentText = current.val();
    let h2Elem = $('<h2>');
    h2Elem.text(currentText);
    let parent = current.closest('.cont');
    parent.prepend(h2Elem);
    current.remove();
}

function changeValue () {
    let current = $(this);
    let currentText = current.text();
    let input = $('<input>');
    input.val(currentText);
    let parent = current.closest('.cont');   
    parent.prepend(input); 
    current.remove();
    input.on('blur', saveChanges);
}









