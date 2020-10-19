function openfun()
{
	document.getElementById('menu').style.width = "30rem";
}

function closefun()
{
	document.getElementById('menu').style.width = "0rem";
}

const sr = ScrollReveal({
	origin: 'top',
	distance: '8rem',
	duration: '3000',
	reset: 'true'
})

/*  scroll for home */
sr.reveal('.content',{})
sr.reveal('.btn',{delay:200})

/*  scroll for features*/
sr.reveal('.title-text',{delay:250})
sr.reveal('.one',{interval:300})
sr.reveal('.img-fluid',{delay:400})


sr.reveal('.social',{interval:300})
sr.reveal('.opening',{delay:150})
sr.reveal('.touch',{delay:200})