const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Trent University',
                degree: 'MSc, Applied Modelling - Big Data Analytics',
                detail: "Currently on a 90% GPA",
                year: '2024-Present'
            },
            {
                id: 1,
                title: 'Covenant University, Nigeria',
                degree: 'Bachelor of Computer Science',
                detail: "Completed my BSc. with a Second Class Upper grade",
                year: '2017-2021'
            },
            {
                id: 2,
                title: 'Preston International School',
                degree: 'WAEC, Science Subjects',
                detail: "",
                year: '2011-2017'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Migranium platforms inc',
                role: 'Frontend Developer',
                url: 'https://migranium.com',
                desc: 'As a frontend developer, I use React, Next & JavaScript to build user interfaces for web applications.',
                year: 'Jan 2024 - Present',
                location: 'Toronto, Canada'
            },
            {
                id: 2,
                title: 'CSDC Consulting Limited',
                role: 'Full Stack Developer',
                url: 'https://csdcconsulting.com',
                desc: 'I worked as Frontend developer for a while before adding Java to my stack and taking up a fullstack developer role.',
                year: 'Dec 2021 - Nov 2023',
                location: 'Lagos, Nigeria'
            },
            {
                id: 3,
                title: 'Cloud Interactive Associates',
                role: 'Flutter Developer Intern',
                url: 'https://cloudinteractive.com.ng',
                desc: "As a flutter developer Intern, there I learned how to use flutter to build User Interfaces, also I worked on Firebase",
                year: 'Mar 2020 - Aug 2020',
                location: 'Lagos, Nigeria'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
