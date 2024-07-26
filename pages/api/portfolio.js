const portfolio = [
    {
        id: 0,
        projectName: "BDA ERP",
        url: "https://www.dig-in.ca",
        image: "projects/bda.png",
        projectDetail: "Restructure your business with JMM ERP’s all-in-one cloud-based ERP. JMM ERP provides a robust, cost-effective online solution with state-of-the-art software to increase business value and enhance customer impact.",
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
        id: 1,
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
        id: 2,
        projectName: "CSDC ",
        url: "https://csdcconsulting.com/",
        image: "projects/csdc.png",
        projectDetail: "CSDC Consulting a customer-focused software and tax consultancy agency that provides tailor made, cutting edge software solutions, which enable organizations transform the way they work and provide value to their customers.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: ".net"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 3,
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
        id: 4,
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
    {
        id: 5,
        projectName: "Travel Camp",
        url: "https://travel-camp-henna.vercel.app/",
        image: "projects/travelcamp.png",
        projectDetail: "Travel camp ",
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
        id: 1,
        projectName: "Otawix",
        url: "https://b2c.otawix.com/",
        image: "projects/otawix.png",
        projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
        technologiesUsed: [
            {
                tech: "NextJS"
            },
            {
                tech: "NodeJS"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "MUI"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 2,
        projectName: "Spatay",
        url: "https://spatay.com/",
        image: "projects/spatay.png",
        projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "NodeJS"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    // {
    //     id: 2,
    //     projectName: "Culyte",
    //     url: "https://culyte.com",
    //     image: "projects/culyte.png",
    //     projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
    //     technologiesUsed: [
    //         {
    //             tech: "ReactJS"
    //         },
    //         {
    //             tech: "NodeJS"
    //         },
    //         {
    //             tech: "Ant Design"
    //         },
    //         {
    //             tech: "TailwindCSS"
    //         },
    //     ]
    // },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
