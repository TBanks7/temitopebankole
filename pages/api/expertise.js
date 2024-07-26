const expertise = [
    {
        id: 0,
        title: 'Full Stack Development',
        desc: 'I am a skilled Full Stack Developer with experience in frontend and backend technologies. I Primarily use PERN stack but I am proficient in HTML, CSS, JavaScript, React JS, NextJS for frontend and NodeJS, Express for backend and Various SQL and NoSQL tools for database. I have developed and maintained web applications with serverside rendering, optimized database queries, and integrated third-party APIs.',
    },
    {
        id: 1,
        title: 'Java Development',
        desc: 'I am proficient in Java development and have extensive experience using the Spring and Spring Boot frameworks. Through my previous jobs, I have gained practical experience in building RESTful APIs, integrating third-party services, and optimizing database queries. My passion for backend development drives me to stay updated with the latest advancements in Java and Spring technologies, allowing me to develop efficient and scalable software solutions.',
    },
    {
        id: 2,
        title: 'Data Analytics',
        desc: "I am proficient in data science and analysis, with experience using Python, R, and SQL for data manipulation and analysis. Through my academic and professional projects, I have developed skills in statistical analysis, machine learning, and data visualization. My passion for uncovering insights from data drives me to stay updated with the latest tools and techniques in the field, enabling me to make data-driven decisions and provide actionable insights.",
    },
    {
        id: 3,
        title: 'Github',
        desc: "I am proficient in version control using Git and GitHub. I have experience with branching, merging, and pull requests, and I am skilled in managing repositories and collaborating on code with teams. My familiarity with Git workflows ensures efficient version management and smooth integration of code changes. GitHub is vital to my success as a developer.",
    },
    {
        id: 4,
        title: 'Cloud Computing',
        desc: "I am experienced with AWS, including services like EC2, S3, RDS, and Lambda. I have utilized AWS for deploying, managing, and scaling applications, ensuring high availability and performance. My passion for cloud technology drives me to stay updated with AWS best practices and continually enhance my skills in cloud infrastructure and solutions.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
