var x;

const ratingNumber = document.querySelectorAll('.rating-button');

function assign_rating(clicked_id){
    x = document.getElementById(clicked_id);
    localStorage.setItem("rating", x.innerHTML);

    const list = x.classList;
    list.toggle("orange");

    ratingNumber.forEach(rate => {
        rate.addEventListener('click', (e) => {
            ratingNumber.forEach(rate => {
                rate.classList.remove("orange");
            })
            e.target.classList.add("orange");
        })
    })
    console.log('hey');
}

function display_rating(){
    document.getElementById('user-selection').innerHTML = localStorage.getItem("rating");
}
