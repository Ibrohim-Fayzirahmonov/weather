$(".form").addEventListener('submit', (e) => {
    e.preventDefault()
    let location = $(".input").value;
    fetch(`https://api.weatherapi.com/v1/current.json?key=d6ebff5a04da407d8b444856222111&q=${location}`)
        .then(res => res.json())
        .then(data => render(data));
        $(".wrapper").innerHTML = ""
});



function render(data) {
    
    $(".wrapper").innerHTML = `
    <img src="https:${data.current.condition.icon}" alt="icon">
    <p>${data.location.name}</p>
    <p>${data.location.country}</p>
    <p>${data.location.tz_id}</p>
    <p>${data.current.temp_c}C <sup>o</sup></p>
    `
}