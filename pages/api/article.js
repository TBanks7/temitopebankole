const article = [
    {
        id: 0,
        title: 'Primitive Data Type and Type Conversions Java',
        link: 'https://medium.com/@tbanks200110/type-conversions-java-aca741c308c4',
        summary: "Java is a high level programming language used by programmers to build applications and solve problems. Java is also strictly typed. This means that every variable and expression has a specific data type known at compile time, and the compiler enforces these types",
        date: 'Jul 9, 2024',
        tags: ['Java', 'Data Types', 'Programming','Type Conversion']
    },
    {
        id: 1,
        title: 'Primitive Data Type and Type Conversions Java',
        link: 'https://medium.com/@tbanks200110/type-conversions-java-aca741c308c4',
        summary: "Java is a high level programming language used by programmers to build applications and solve problems. Java is also strictly typed. This means that every variable and expression has a specific data type known at compile time, and the compiler enforces these types",
        date: 'Jul 9, 2024',
        tags: ['Java', 'Data Types', 'Programming','Type Conversion']
    },
    
]



export default function handler(req, res) {
    res.status(200).json(article)
}
