// let meetColNumbers = document.querySelectorAll('.meet-col')
// console.log(meetColNumbers)
// let numberIs = document.createElement('h1')
// console.log(numberIs.style.textContent = 370)
// numberIs.append(meetColNumbers)
const projectArray = [{
    id: 1,
    imageSrc: 'https://organic-food.bold-themes.com/main-demo/wp-content/uploads/sites/3/2016/07/portfolio_01-640x480.jpg',
    projectHeading: 'day in london',
    projectLink: "#",
    projectParagraph: "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon",
}, {
    id: 2,
    imageSrc: 'https://organic-food.bold-themes.com/main-demo/wp-content/uploads/sites/3/2016/07/portfolio_01-640x480.jpg',
    projectHeading: 'day in london',
    projectLink: "#",
    projectParagraph: "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon",
}, {
    id: 3,
    imageSrc: 'https://organic-food.bold-themes.com/main-demo/wp-content/uploads/sites/3/2016/07/portfolio_01-640x480.jpg',
    projectHeading: 'day in london',
    projectLink: "#",
    projectParagraph: "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon",
}, {
    id: 4,
    imageSrc: 'https://organic-food.bold-themes.com/main-demo/wp-content/uploads/sites/3/2016/07/portfolio_01-640x480.jpg',
    projectHeading: 'day in london',
    projectLink: "#",
    projectParagraph: "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon",
}, {
    id: 5,
    imageSrc: 'https://organic-food.bold-themes.com/main-demo/wp-content/uploads/sites/3/2016/07/portfolio_01-640x480.jpg',
    projectHeading: 'day in london',
    projectLink: "#",
    projectParagraph: "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon",
}, {
    id: 6,
    imageSrc: 'https://organic-food.bold-themes.com/main-demo/wp-content/uploads/sites/3/2016/07/portfolio_01-640x480.jpg',
    projectHeading: 'day in london',
    projectLink: "#",
    projectParagraph: "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon",
},
{
    id: 7,
    imageSrc: 'https://organic-food.bold-themes.com/main-demo/wp-content/uploads/sites/3/2016/07/portfolio_01-640x480.jpg',
    projectHeading: 'day in london',
    projectLink: "#",
    projectParagraph: "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon",
}, {
    id: 8,
    imageSrc: 'https://organic-food.bold-themes.com/main-demo/wp-content/uploads/sites/3/2016/07/portfolio_01-640x480.jpg',
    projectHeading: 'day in london',
    projectLink: "#",
    projectParagraph: "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon",
}, {
    id: 9,
    imageSrc: 'https://organic-food.bold-themes.com/main-demo/wp-content/uploads/sites/3/2016/07/portfolio_01-640x480.jpg',
    projectHeading: 'day in london',
    projectLink: "#",
    projectParagraph: "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon",
}, {
    id: 10,
    imageSrc: 'https://organic-food.bold-themes.com/main-demo/wp-content/uploads/sites/3/2016/07/portfolio_01-640x480.jpg',
    projectHeading: 'day in london',
    projectLink: "#",
    projectParagraph: "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon",
}]

const socialMediaDetails = [
    { href: '#', class: 'fa-brands fa-facebook-f' },
    { href: '#', class: 'fa-brands fa-twitter' },
    { href: '#', class: 'fa-brands fa-linkedin-in' },
]
let projectGrids = document.getElementById('project-grids')

let projectGridAre = projectArray.forEach(project => {
    let projectGridDetails = document.createElement('div')
    projectGridDetails.classList.add('project-grid')

    let projectImage = document.createElement('img')
    projectImage.classList.add('project-grid-image')
    projectImage.src = project.imageSrc

    let projectHeading = document.createElement('h1')
    let headinglink = document.createElement('a')
    headinglink.href = project.projectLink
    headinglink.textContent = project.projectHeading
    projectHeading.append(headinglink)

    let projectParagraph = document.createElement('p')
    projectParagraph.classList.add('project-paragraph')
    projectParagraph.textContent = project.projectParagraph
    console.log(project)

    let socialIconClass = document.createElement('div')
    socialIconClass.classList.add('project-social-icons')

    const socialMedia = socialMediaDetails.forEach(socialMedia => {
        let socialLink = document.createElement('a')
        socialLink.href = socialMedia.href
        let socialIcon = document.createElement('i')
        socialIcon.className = socialMedia.class
        console.log(socialMedia)

        socialLink.append(socialIcon)
        socialIconClass.append(socialLink)
    })

    projectGridDetails.append(projectImage, projectHeading, projectParagraph, socialIconClass)
    projectGrids.append(projectGridDetails)
})

