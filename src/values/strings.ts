
const processArrayText = (textArray: string[]) => textArray
    .join('\n')
    .replaceAll('\n', '<br />')
    .replaceAll('/**', '</strong>')
    .replaceAll('**', '<strong>')

const introduction = [
    "I want to be a full stack developer and entrepreneur.",
    "",
    "In my spare time, I deeply think about ideas, specifically, whether is there any problem I can solve for the people.",
    "",
    "And I learn how to code to materialize my ideas.",
    "",
    "Currently, I\'m working on some startup teams in some colleges",
    "",
    "I love music and photography, especially R&B like from lauv, honne, lany.",
    "I deeply inspired from them, and currently I'm learning producing with logic x pro.",
    "",
    "Also I love photography, specifically landscape and more specifically nightscape photos.",
    "I hope one day I can travel all over the world and take photos of those places.",
]

const ideas = [
    "**## Notion + Heroku/**",
    "It's the Notion alternative for developer teams.",
    "It is basically a static site generator powered by markdown which developers are friendly with.",
    "This will have a CLI tool which can initialize markdown project like CRA, upload it to server like heroku, ",
    "and some utilities like django-admin, all each with just one command line. ",
    "And also it can be integrated with github like circleci.",
    "",
    "**## AI sound finder/**",
    "This is for the music people.",
    "It picks a sound that producer want based on one's input data ",
    "which will be collected with kind of survey like the Akinator.",
    "",
    "**## Ideation platform/**",
    "I want to build some sort of ideation platform.",
    "which can inspire users that can be helpful for their ideas, or even can directly give some ideas to them.",
    "The problem of this idea is that ideas cannot be protected. ",
    "I thought about NFT to make the idea really unique, and firms, startups, or individual can buy it.",
    "But this does not really protects it, and it needs some protection with law. ",
    "",
    "**## And more...!/**",
    "I\'ve done every project alone, so I easily exausted and eventually stopped progressing materializing my ideas.",
    "Stopped personal projects are on projects section, so check it out.",
    'And if you\'re interested, feel free to contact me😀',
]

const projectFg = [
    'This web app is my first personal project. ',
    'It is basically a todo list, which is very suitable for web dev beginner to start.',
    '',
    'After practicing some django and react stuff, I started to come up with an any idea',
    'of what can be useful that I can build with my ability.',
    '',
    'And I came up with the idea of project manager, but some facebook stuff is added.',
    'Friends function was there and projects made by users can be seen at the board like facebook.',
    'By the way, what I meant by project manager is basically just nested todo list generator.',
    '',
    'I\'ve also added some fancy stuff like drag and drop, PWA, landing page and so on.',
    '',
    'This project was, in result, quite not successful since there were merely no users who\'s using it.',
    'And I think the reason is that that was the thing which nobody wants.',
    'Even I myself did not use it.',
    '',
    'But it was very good lesson for me in various perspective.',
    'In business perspective, I\'ve realized that I need to make something people actually want.',
    'In dev perspective, I\'ve realized very first product should be very light that I can make it alone in at least 2 weeks',
    '',
    'Currently this is not on public since there was no user and 10$ was billed from aws monthly.',
    'But the repo is in public, and the link is down below,',
    '',
    '<a href="https://github.com/01Joseph-Hwang10/To-Do_Glass" >https://github.com/01Joseph-Hwang10/To-Do_Glass</a>',
    '',
    'Stacks: React, Redux, TailwindCSS, Django, Django Rest Framework, Nginx, EC2, Docker',
    '',
    '(BTW, I\'ve changed its name from To Do Glass to FLGlance)',
];

const projectMypy = [
    'This is my personal project too',
    'This web app is basically something like heroku and vercel, but it\'s for python, and facebook and static site generator like HUGO added.',
    'That is, you can make a python program with no UI (like command line program) its own UI based on program\'s input and output structure.',
    'And you can see the other\'s apps, and can follow them.',
    '',
    'I thought that this idea is quite great, but I\'m exausted since I did it all alone😂.',
    'So hope you to contact me if you\'re intersted in this app.',
    '',
    'Source code is down below, but that code really needs some enhancement (e.g. code cleaning, js to ts, python type hint, etc...)',
    '',
    '<a href="https://github.com/01Joseph-Hwang10/mypy" >https://github.com/01Joseph-Hwang10/mypy</a>',
    '',
    'Stacks: React, Redux, SCSS, Flask, Django, Django Rest Framework',
];

const projectCTB = [
    'This was just for fun',
    'For those who don\'t speak korean, 커플 되는 부적 means "A tailsman that makes you a lover"',
    'Link down below is a link for the website',
    '',
    '<a href="https://01joseph-hwang10.github.io/couple_duaneun_bujuck/" >https://01joseph-hwang10.github.io/couple_duaneun_bujuck/</a>',,
    '',
    'Stacks: HTML/CSS/JS',
]

const projectErin = [
    'I once wrote a letter to my gf with html, with some js on it for some interactions on the letter.',
    'And my gf\'s reation was quite good, and I started this.',
    '',
    'This app is basically a drag and drop html editor on mobile phone focused on a function of "letter"',
    'So the editor seems like instagram\'s story making tools.',
    '',
    'This project is currently not progressing since I\'m busy with my school works.',
    'If you\'re interested in, please let me know!',
    '',
    '<a href="https://github.com/01Joseph-Hwang10/erin_app" >https://github.com/01Joseph-Hwang10/erin_app</a>',
    '',
    'Stacks: React Native, Redux, Typescript',
]

const timer = [
    'I once installed a timer app from app store. (btw, I\'m a mac user)',
    'And at first, I didn\'t realized that there\'s a limit for resetting the timer.',
    'And to unlock the limit, I needed to buy the membership.',
    '',
    'It was quite annoying, since that function seems that it is super easy to build',
    'So I build it',
    '',
    'If you want a deployed version of this, please let me know!',
    '',
    '<a href="https://github.com/01Joseph-Hwang10/electron_practice/tree/master/simple-timer-app-svelte">https://github.com/01Joseph-Hwang10/electron_practice/tree/master/simple-timer-app-svelte</a>',
    '',
    'Stacks: Svelte, Electron, SCSS, TailwindCSS, Typescript'
]

const buxHexa = [
    'This project is held on HeXA, the only CS club in UNIST.',
    '',
    'The website below simply shows the bus timetable of UNIST',
    '',
    '<a href="http://t.hexa.pro:8014/busno/">http://t.hexa.pro:8014/busno/</a>',
    '',
    'Stacks: Vue(Petite-Vue), Web Components, Django, Typescript'
]

const tripbuilder = [
    'STTI survey web(Mobile Optimized)',
    '<a href="https://stti.tripbuilder.co.kr/">https://stti.tripbuilder.co.kr/</a>',
    'Stacks: Next.js, TailwindCSS, Redux, Typescript',
    '',
    'Tripbuilder APP',
    'Source code is private',
    'Stacks: Flutter',
]

const labis = [
    'Drone Block Coding App',
    'Source code is private',
    'Stacks: React Native, Typescript',
]

const goldenFriends = [
    '오늘의 티끌',
    'Frontend(App)',
    '<a href="https://github.com/Golden-Friends/todo_app">https://github.com/Golden-Friends/todo_app</a>',
    'Stacks: React Native, Apollo, Typescript',
    '',
    'Backend',
    '<a href="https://github.com/Golden-Friends/todo_server">https://github.com/Golden-Friends/todo_server</a>',
    'Stacks: Nest.js, Typescript, PostgreSQL, Graphql',
    '',
    'Dev only Storage Server',
    '<a href="https://github.com/Golden-Friends/storage_server_v2">https://github.com/Golden-Friends/storage_server_v2</a>',
    'Stacks: Django, Django Rest Framework'
]


export const strings: Record<string, string> = {
    introduction: processArrayText(introduction),
    ideas: processArrayText(ideas),
    projectFg: processArrayText(projectFg),
    projectMypy: processArrayText(projectMypy),
    projectCTB: processArrayText(projectCTB),
    projectErin: processArrayText(projectErin),
    projectTimer: processArrayText(timer),
    projectBuxHexa: processArrayText(buxHexa),
    tripbuilder: processArrayText(tripbuilder),
    labis: processArrayText(labis),
    goldenFriends: processArrayText(goldenFriends),
}
