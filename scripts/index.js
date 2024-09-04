$(document).ready(function () {
    let isClicked = false;

    $(".hamburger").on("click", function () {
        isClicked = !isClicked;

        if (isClicked) {
            $(".hamburger-nav").addClass("show");
            $("#hamburger-icon").toggleClass("fa-bars-staggered fa-bars");

        } else {
            $(".hamburger-nav").removeClass("show");
            $("#hamburger-icon").toggleClass("fa-bars-staggered fa-bars");
        }
    });

    // $('.list-buku-carousel').trigger('play.owl.autoplay', [4000])
    // $('.tokoh-penulis-carousel').trigger('play.owl.autoplay', [5000])
});

$('.list-buku-carousel').owlCarousel({
    dots: false,
    margin: 20,
    autoWidth: true,
    stagePadding: 50,
    nav: true,
    autoplay: false,
    // autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})
$('.tokoh-penulis-carousel').owlCarousel({
    dots: false,
    margin: 25,
    autoWidth: true,
    stagePadding: 50,
    nav: true,
    autoplay: false,
    // autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
})

const filter = document.getElementById("search");
const items = document.querySelectorAll(".owl-item");

filter.addEventListener("input", (e) => filterData(e.target.value));

function filterData(search) {
    items.forEach((item) => {
        if (item.innerText.toLowerCase().includes(search.toLowerCase())) {
            item.classList.remove("d-none");
        } else {
            item.classList.add("d-none");
        }

    })
}
