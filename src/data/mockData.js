import university_1 from "../assets/topspeed.jpg"
import university_2 from "../assets/topspeed1.jpg"
import university_3 from "../assets/topspeed2.jpg"


import community_1 from "../assets/calendar.png"
import community_2 from "../assets/search.png"
import community_3 from "../assets/home.png"


const Universities = [
    {
        id:1,
        image:university_1,
        title:'Stanford University',
        link:'/'
    },
    {
        id:2,
        image:university_2,
        title:'Stallion University',
        link:'/'
    },
    {
        id:3,
        image:university_3,
        title:'Covenant University',
        link:'/'
    }
]

const Courses = []


const CommunityData = [
    {
        id:1,
        title:"Find a course",
        description:"Search by subject, course or region to find the right course for you.",
        image:community_1
    },
    {
        id:2,
        title:"Find a university",
        description:"Search for universities to find out about courses and more. ",
        image:community_2
    },
    {
        id:3,
        title:"Find an open day",
        description:"Search and book open days to help you make the right choice.",
        image:community_3
    },
]

export {Universities,Courses, CommunityData}