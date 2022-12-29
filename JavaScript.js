let navbarDiv = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        navbarDiv.classList.add('navbar-cng');
    } else {
        navbarDiv.classList.remove('navbar-cng');
    }
});


const navbarCollapseDiv = document.getElementById('navbar-collapse');
const navbarShowBtn = document.getElementById('navbar-show-btn');
const navbarCloseBtn = document.getElementById('navbar-close-btn');
// show navbar
navbarShowBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.add('navbar-collapse-rmw');
});

// hide side bar
navbarCloseBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
});

document.addEventListener('click', (e) => {
    if (e.target.id != "navbar-collapse" && e.target.id != "navbar-show-btn" && e.target.parentElement.id != "navbar-show-btn") {
        navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
    }
});

// stop transition and animatino during window resizing
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});
//replace text every 3 second 
(function () {
    var words = [
        "Leave Your Footprints",
        "Camping Enjoy",
        "Adventurs Off Road",
        "Road Trip Together",
        "Feel Nature Relax",
        "Wonderful Island"],
        i = 0;
    setInterval(function () {
        $('#words').fadeOut(function () {
            $(this).html(words[i = (i + 1) % words.length]).fadeIn();
        });
    }, 3000);
})();
(function () {
    var word = [
        "“Life is either a daring adventure or nothing at all” ~ Helen Keller",
        "The journey of a thousand miles begins with a single step.",
        "Live life with no excuses, travel with no regret.",
        "Travel. Your money will return. Your time won’t.",
        "Once the Travel bug bites there is no known antidote, and I know that I shall be happily infected until the end of my life.",
        "FWork, Travel, Save, Repeat.",
        "Leave nothing but footprints, take nothing but photos, kill nothing but time."],
        i = 0;
    setInterval(function () {
        $('#word').fadeOut(function () {
            $(this).html(word[i = (i + 1) % word.length]).fadeIn();
        });
    }, 3000);
})();

