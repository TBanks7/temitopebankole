// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Kehinde Omotosh',
    image: "images/kehinde.jpeg",
    designation: 'Technical Team Lead at PayAza',
    view: "Hey everyone! I wanted to take a moment to recommend Temitope for any Java opportunities. I had the pleasure of mentoring him on multiple projects where he showcased a strong understanding of Java and Spring concepts and delivered high-quality code. He consistently demonstrated a willingness to learn and grow, and his enthusiasm for tackling new challenges was contagious. Temitope is a reliable and dedicated team member who would be a great asset to any development team. Highly recommended! 👍! 🌟",
    linkednURL: "https://www.linkedin.com/in/kehinde-omotoso-6b2a50188/"
  },
  {
    id: 1,
    name: 'Mayowa Falade',
    image: "images/placeholder.png",
    designation: 'Senior Software Engineer at Wave',
    view: "I had the privilege of working alongside Temitope on multiple projects, and I must say, his talent and work ethic truly stood out. Recently, we were both part of the dynamic team working on BDA Survey application, where Temitope's professionalism and attention to detail shone brightly. I wholeheartedly endorse Temitope for any opportunity that calls for a highly skilled and dedicated individual.",
    linkednURL: "https://www.linkedin.com/in/mfalade",
  },
  {
    id: 2,
    name: 'Olajide Ojo',
    image: "images/jide.jpeg",
    designation: 'Java | Python | Javascript | PHP | SQL | Javascript | R',
    view: "I wholeheartedly recommend Temitope as a talented React frontend developer. His proficiency in Node.js further enhances his capabilities, allowing him to build robust and scalable applications. Temitope's attention to detail, problem-solving skills, and dedication to delivering exceptional results make him a valuable addition to any development team.",
    linkednURL: "https://www.linkedin.com/in/olajide-ojo-80024a109//"
  },
  {
    id: 3,
    name: 'Olayinka Tony Akinfe ',
    image: "images/tony.jpeg",
    designation: 'Database Engineer at CSDC Enterprise Solution',
    view: "I highly recommend Temitope Bankole for web frontend development positions. His expertise in ReactJS and Next.js, combined with their professionalism and dedication, make them an invaluable asset to any team.",
    linkednURL: "https://www.linkedin.com/in/olayinka-akinfe-639aba26/"
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
