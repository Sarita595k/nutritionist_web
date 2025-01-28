// let meetColNumbers = document.querySelectorAll('.meet-col')
// console.log(meetColNumbers)
// let numberIs = document.createElement('h1')
// console.log(numberIs.style.textContent = 370)
// numberIs.append(meetColNumbers)

// project page posts script begins here

const projectArray = [{
    id: 1,
    imageSrc: 'https://organic-food.bold-themes.com/main-demo/wp-content/uploads/sites/3/2016/07/portfolio_09-640x480.jpg',
    projectHeading: 'day in london',
    projectLink: "#",
    projectParagraph: "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon...",
}, {
    id: 2,
    imageSrc: 'https://organic-food.bold-themes.com/main-demo/wp-content/uploads/sites/3/2016/07/portfolio_05-640x480.jpg',
    projectHeading: 'capetown showcase',
    projectLink: "#",
    projectParagraph: "Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram...",
}, {
    id: 3,
    imageSrc: 'https://organic-food.bold-themes.com/main-demo/wp-content/uploads/sites/3/2016/07/portfolio_01-640x480.jpg',
    projectHeading: 'paris example',
    projectLink: "#",
    projectParagraph: "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya...",
}, {
    id: 4,
    imageSrc: 'https://organic-food.bold-themes.com/main-demo/wp-content/uploads/sites/3/2016/07/portfolio_04-640x480.jpg',
    projectHeading: 'praque gallery',
    projectLink: "#",
    projectParagraph: "Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer...",
}, {
    id: 5,
    imageSrc: 'https://i.vimeocdn.com/video/552296237-896a27e84d6e9d019237a455ce114f74bb3a23280ba9885422695a44056e9bea-d?mw=400&mh=225&q=70',
    projectHeading: 'munich video showacse',
    projectLink: "#",
    projectParagraph: "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely...",
}, {
    id: 6,
    imageSrc: 'https://organic-food.bold-themes.com/main-demo/wp-content/uploads/sites/3/2016/07/portfolio_03-640x480.jpg',
    projectHeading: 'moscow life',
    projectLink: "#",
    projectParagraph: "Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.",
},
{
    id: 7,
    imageSrc: 'https://organic-food.bold-themes.com/main-demo/wp-content/uploads/sites/3/2016/07/portfolio_07-640x480.jpg',
    projectHeading: 'bejing style',
    projectLink: "#",
    projectParagraph: "Committed to delivering high quality projects and innovate business solutions.",
}, {
    id: 8,
    imageSrc: 'https://organic-food.bold-themes.com/main-demo/wp-content/uploads/sites/3/2016/07/portfolio_08-640x480.jpg',
    projectHeading: 'capturing manila',
    projectLink: "#",
    projectParagraph: "Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer...",
}, {
    id: 9,
    imageSrc: 'https://organic-food.bold-themes.com/main-demo/wp-content/uploads/sites/3/2016/07/portfolio_02-640x480.jpg',
    projectHeading: 'sounds of new york',
    projectLink: "#",
    projectParagraph: "Gumbo kakadu plum komatsuna black-eyed pea green bean zucchini gourd winter purslane...",
}, {
    id: 10,
    imageSrc: 'https://organic-food.bold-themes.com/main-demo/wp-content/uploads/sites/3/2016/07/portfolio_10-640x480.jpg',
    projectHeading: 'stockholm snapshots',
    projectLink: "#",
    projectParagraph: "Catsear cauliflower garbanzo yarrow salsify chicory garlic bell pepper napa cabbage lettuce...",
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

// project page script ends here 

