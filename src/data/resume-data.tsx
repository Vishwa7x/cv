import {
AmbitLogo,
BarepapersLogo,
BimLogo,
CDGOLogo,
ClevertechLogo,
ConsultlyLogo,
EvercastLogo,
Howdy,
JarockiMeLogo,
JojoMobileLogo,
Minimal,
MobileVikingsLogo,
MonitoLogo,
NSNLogo,
ParabolLogo,
TastyCloudLogo,
YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
name: "Viswajith K S",
initials: "V",
location: "Palakkad, Kerala, India",
locationLink: "https://maps.app.goo.gl/nk2eMBafALnRmTcy6",
about:
"Im a fourth year engineering student who has a passion for building things which I think is interesting ",
summary:
"I have built few things on my semester exam holidays because thats when the ideas pops up on my head. Im very much open in asking for help and I do them with open heart because I don't want feel the regret of not doing it.",
avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
personalWebsiteUrl: "https://vichu.me",
contact: {
email: "vixhu@proton.com",
tel: "+919188070526",
social: [
{
name: "GitHub",
url: "#",
icon: GitHubIcon,
},
{
name: "LinkedIn",
url: "#",
icon: LinkedInIcon,
},
{
name: "X",
url: "https://x.com/v1swaj1th",
icon: XIcon,
},
],
},
education: [
{
school: "Institute of Engineering and Technology, Calicut University",
degree: "Bachelor's Degree in Information Technology ",
start: "2019",
end: "2024",
},
],
work: [
{
company: "TinkerHub",
link: "#",
title: "Campus Lead ",
logo: ParabolLogo,
start: "2022",
end: "2023",
description:
"Was the campus lead of TinkerHub IETCU. I helped organise and manage the events conducted by TinkerHub IETCU and the TinkerHub Learning Station during Diksha 2022.",
},]
awards: [
{
company: "Hackathon 2021",
link: "#",
badges: ["24 Hours"],
title: "First Position",
logo: ClevertechLogo,
description:
"Worked on a health tracker website and secured first place in the 24 hour hackathon conducted on December 2021. Technologies: Python, HTML, CSS, NumPy, Matplotlib, Seaborne",
},
{
company: "Hackathon 2022",
link: "#",
badges: [],
title: "First Position ",
logo: JojoMobileLogo,
description:
"We secured second place at the 24 hour hackathon conducted on December 2022. Technologies: HTML, CSS, Javascript",
},
],
skills: [
"Python(5YOE)",
"Canva(4YOE)",
"HTML/CSS(6YOE)",
"MySQL(2YOE)",
"PHP(2YOE)",
"Data Analysis(1YOE)",
],
projects: [
{
title: "Notifs",
techStack: [
"Hobby Project",
"Javascript",
"PHP",
"MySQL",
"Bootstrap",
"HTML/CSS",
],
description: "A platform to post upcoming events of your college. According to the students department, the events will be shown to them if its a department specific event and general events will be shown to everyone in the college.",
logo: ConsultlyLogo,
link: {
label: "#",
href: "#",
},
},
{
title: "Crushd",
techStack: ["Hobby Project", "HTML", "CSS", "Webflow", "Memberstack"],
description:
"A website to see how many people at college have a crush on you. There was a leaderboard to show the most crushd person at college. More than 300 people signed up in the first 4 hours of the website laugh to play the game.",
logo: MonitoLogo,
link: {
label: "#",
href: "#",
},
},
{
title: "Veg-Non Veg Analysis",
techStack: ["Course Project", "Python", "Numpy", "Matplotlib", "Seaborne","Jupyter", "Pytorch"],
description:
"It was a explanatory analysis showing graphical representation of how many animals were killed in the year 2020 and gained a lot of data from the dataset including the method of killing, consumption, and the type of animals and more.",
logo: JarockiMeLogo,
link: {
label: "#",
href: "#",
},
},
  ],
} as const;
  

