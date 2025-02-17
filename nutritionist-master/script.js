// let meetColNumbers = document.querySelectorAll('.meet-col')
// console.log(meetColNumbers)
// let numberIs = document.createElement('h1')
// console.log(numberIs.style.textContent = 370)
// numberIs.append(meetColNumbers)


// sidebar for responsive webpage
let selectSidebarBtn = document.getElementById('sidebarBtn')
let crossSymbol = document.getElementById('cross-symbol')
let selectSidebar = document.getElementById('sidebarContainer')
selectSidebarBtn.addEventListener('click', () => {
    selectSidebar.classList.toggle('active')


    crossSymbol.addEventListener("click", () => {
        selectSidebar.classList.remove('active')
    })
})

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

document.addEventListener("DOMContentLoaded", function () {
    let projectGrids = document.getElementById('project-grids');
    if (!projectGrids) {
        console.error("Error: #project-grids not found in the DOM.");
        return;
    }
    // let projectGrids = document.getElementById('project-grids')

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

        let socialIconClass = document.createElement('div')
        socialIconClass.classList.add('project-social-icons')

        const socialMedia = socialMediaDetails.forEach(socialMedia => {
            let socialLink = document.createElement('a')
            socialLink.href = socialMedia.href
            let socialIcon = document.createElement('i')
            socialIcon.className = socialMedia.class

            socialLink.append(socialIcon)
            socialIconClass.append(socialLink)
        })

        projectGridDetails.append(projectImage, projectHeading, projectParagraph, socialIconClass)
        projectGrids.append(projectGridDetails)
    })
})

// project page script ends here 

let expertizeList = [{
    class: "fa-solid fa-chart-pie",
    heading: 'vision of plan',
    paragraph: 'Completely synergize resource taxing relationships via premier niche markets. Visualize customer directed convergence without ROI.'
},
{
    class: "fa-solid fa-shop",
    heading: 'plan to coaching',
    paragraph: 'Podcasting operational change management inside of workflows to establish a framework. Taking key indicators offline to maximise the tail.'
},
{
    class: 'fa-brands fa-codiepie',
    heading: 'coaching to health',
    paragraph: 'Credibly innovate granular internal or “organic“ sources whereas high standards in web-readiness. Energistically scale core competencies.'
}, {
    class: 'fa-solid fa-signal',
    heading: 'heath to happiness',
    paragraph: 'Dramatically visualize customer directed convergence without revolutionary ROI. Completely synergize premier niche markets.'
}, {
    class: 'fa-brands fa-galactic-senate',
    heading: 'happiness to health',
    paragraph: 'Seamlessly visualize quality intellectual capital without collaboration and idea-sharing. Holistically pontificate installed base after products.'
}, {
    class: 'fa-solid fa-bullseye',
    heading: 'balance to life',
    paragraph: 'Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate for state of the art customer service.'
}]

document.addEventListener("DOMContentLoaded", function () {
    let expertizeColumn = document.getElementById('expertize-columns-container');

    if (!expertizeColumn) {
        console.error("Error: #expertize-columns-container not found in the DOM.");
        return;
    }

    // let expertizeColumn = document.getElementById('expertize-columns-container')
    expertizeList.forEach(expert => {
        console.log('scriptFile')
        let expertize = document.createElement('div')
        expertize.classList.add('expertize')

        let expertIcon = document.createElement('i')
        expertIcon.className = expert.class

        let expertHeading = document.createElement('h1')
        expertHeading.classList.add('expertHeading')
        expertHeading.textContent = expert.heading

        let expertParagraph = document.createElement('p')
        expertParagraph.classList.add('expertParagraph')
        expertParagraph.textContent = expert.paragraph

        expertize.append(expertIcon, expertHeading, expertParagraph)
        expertizeColumn.append(expertize)
    })
})



// service page offers listing 
const packages = [{
    packageName: 'bronze',
    packagePrice: '99.99',
    packageType: 'basic package',
    packageIncluded: ['2 nutrition stratergies', 'beginners kit', '-', '-']
},
{
    packageName: 'gold',
    packagePrice: '199.99',
    packageType: 'advanced package',
    packageIncluded: ['2 nutrition stratergies', 'beginners kit', '5 video calls', '-']
}, {
    packageName: 'silver',
    packagePrice: '249.99',
    packageType: 'standard package',
    packageIncluded: ['2 nutrition stratergies', 'beginners kit', '5 video calls', '2 consulting meetings']
}]
let servicePackageContainer = document.getElementById('servicePackageContainer')
packages.forEach(package => {
    let servicePackage = document.createElement('div')
    servicePackage.id = 'servicePackage'

    let servicePackageListHeading = document.createElement('div')
    servicePackageListHeading.classList.add('servicePackageListHeading')

    let serviceHeading = document.createElement('h2')
    serviceHeading.textContent = package.packageName


    let serviceHeadingSpan = document.createElement('span')
    serviceHeadingSpan.textContent = '$'
    let servicePriceHeading = document.createElement('h1')
    servicePriceHeading.textContent = package.packagePrice

    let servicePackageType = document.createElement('h4')
    servicePackageType.textContent = package.packageType

    // list created 
    const servicePackageList = document.createElement('div')
    servicePackageList.classList.add('servicePackageList')

    const serviceList = document.createElement('ul')
    package.packageIncluded.forEach(packageList => {
        let lists = document.createElement('li')
        lists.textContent = packageList

        serviceList.append(lists)
    })

    servicePackageList.append(serviceList)
    // button created 
    const getStarted = document.createElement('div')
    getStarted.classList.add('getStarted')

    const getStartedBtn = document.createElement('button')
    getStartedBtn.classList.add('getStartedBtn')
    getStartedBtn.textContent = 'get started'


    servicePriceHeading.append(serviceHeadingSpan)
    servicePackageListHeading.append(serviceHeading, servicePriceHeading, servicePackageType)
    getStarted.append(getStartedBtn)
    servicePackage.append(servicePackageListHeading, servicePackageList, getStarted)
    servicePackageContainer.append(servicePackage)
})
