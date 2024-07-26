const portfolio = [
    {
        id: 0,
        projectName: "CSDC ",
        url: "https://csdcconsulting.com/",
        image: "projects/csdc.png",
        projectDetail: "CSDC Consulting a customer-focused software and tax consultancy agency that provides tailor made, cutting edge software solutions, which enable organizations transform the way they work and provide value to their customers.",
        technologiesUsed: [
            {
                tech: "HTML"
            },
            {
                tech: "CSS"
            },
            {
                tech: "JavaScript"
            },
        ]
    },
    {
        id: 1,
        projectName: "TeeKayBanks",
        url: "https://tbanks7.github.io/TeeKayBankyz/",
        image: "projects/teekaybanks.png",
        projectDetail: "TeeKayBanks is an eco-friendly focused Bottling company, intent on recycling and keeping the enviroment green. We provide custom label water bottles as well as water distribution services for events of all sizes, from small gatherings to large festivals.",
        technologiesUsed: [
            {
                tech: "HTML"
            },
            {
                tech: "CSS"
            },
            {
                tech: "JavaScript"
            },
        ]
    },
    {
        id: 2,
        projectName: "Travel Camp",
        url: "https://travel-camp-henna.vercel.app/",
        image: "projects/travelcamp.png",
        projectDetail: "Travel camp helps tourist and hikers journey and seek the satisfaction of seeing the incorruptible beauty of nature. They can help you on an adventure around the world in just one app.",
        technologiesUsed: [
            {
                tech: "Nextjs"
            },
            {
                tech: "Typescript"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 3,
        projectName: "BDA ERP",
        url: "https://www.dig-in.ca",
        image: "projects/bda.png",
        projectDetail: "BDA Survey ERP client surveys, project tracking, a report feature, and event scheduling for efficient project management and Client-Admin business processes. It provides a robust, cost-effective online solution with state-of-the-art software to increase business value and enhance customer impact.",
        technologiesUsed: [
            {
                tech: "NextJS"
            },
            {
                tech: "NodeJs"
            },
            {
                tech: "PostgreSQL"
            },
            {
                tech: "JavaScript"
            },
            {
                tech: "MaterialUI"
            },
        ]
    },
    {
        id: 4,
        projectName: "Footy Stats",
        url: "https://tbanks7.shinyapps.io/FootyStats/",
        image: "projects/footystats.png",
        projectDetail: "Veiw all Players stats from the 2023/2024 season in the top 5 leagues",
        technologiesUsed: [
            {
                tech: "R"
            },
            {
                tech: "RStudio"
            },
            {
                tech: "RShiny"
            },
        ]
    },
    {
        id: 5,
        projectName: "Possession Timer",
        url: "https://possession-timer.vercel.app/possession",
        image: "projects/possessiontimer.png",
        projectDetail: "Small application to keep track of both football teams possession stats in real time.",
        technologiesUsed: [
            {
                tech: "NextJS"
            },
            {
                tech: "JavaScript"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
