
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
]

const projectFg = [
    '',
];

const projectMypy = [
    '',
];

export const strings: Record<string, string> = {
    introduction: processArrayText(introduction),
    ideas: processArrayText(ideas),
    projectFg: processArrayText(projectFg),
    projectMypy: processArrayText(projectMypy),
}
