const getlocation = () => {
    fetch("https://ipapi.co/json/")
        .then((response) => response.json())
        .then((data) => {
            const des = document.querySelector("p");
            des.innerHTML = `<table><tr>    <td>Latitude </td><td> ${data.latitude}</td>    </tr><tr>    <td>Longitude </td><td> ${data.longitude}</td>    </tr><tr>    <td>${data.version} </td><td> ${data.ip}</td>    </tr><tr>    <td>Country </td><td> ${data.country_name}</td>    </tr><tr>    <td>State </td><td> ${data.region}</td>    </tr><tr>    <td>City </td><td> ${data.city}</td>    </tr><tr>    <td>ISP </td><td> ${data.org}</td></tr> </table>`
        })
};