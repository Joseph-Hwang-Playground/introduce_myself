const stackIconTemplate = document.createElement('template')
stackIconTemplate.innerHTML = `
<template id="stack-icon-template">
    <div class="logoWrapper">
        <button id="logo_{{ logoId }}" class="logo"></button>
        <span class="logoName">{{ name }}</span>
        <div class="stackStatus">
            <span>Confidence</span>
            <progress max="100" value="{{ confidence }}"></progress>
        </div>
    </div>
</template>
`

document.querySelector('#root').appendChild(stackIconTemplate);

export const StackIcon = ({
    logoId,
    name,
    confidence
}) => ({
    $template: "#stack-icon-template",
    logoId,
    name,
    confidence,
})

// createApp({
//     StackIcon
// }).mount("#stacksList")

const html = {
    logoId: "html",
    name: "HTML",
    confidence: 100,
}

const css = {
    logoId: "css",
    name: "CSS",
    confidence: 100,
}

const scss = {
    logoId: "scss",
    name: "SCSS",
    confidence: 95,
}

const tailwind = {
    logoId: "tailwind",
    name: "Tailwind CSS",
    confidence: 95,
}

const javascript = {
    logoId: "js",
    name: "Javascript",
    confidence: 90,
}

const typescript = {
    logoId: "ts",
    name: "Typescript",
    confidence: 100,
}

const python = {
    logoId: "python",
    name: "Python",
    confidence: 90,
}

const django = {
    logoId: "django",
    name: "Django",
    confidence: 95
}

const drf = {
    logoId: "DRF",
    name: "Django Rest Framework",
    confidence: 90,
}

const graphene = {
    logoId: "graphene",
    name: "Graphene",
    confidence: 45,
}

const flask = {
    logoId: "flask",
    name: "Flask",
    confidence: 80,
}

const apollo = {
    logoId: "apollo",
    name: "Apollo",
    confidence: 75,
}

const graphql = {
    logoId: "graphql",
    name: "Graphql",
    confidence: 75,
}

const react = {
    logoId: "react",
    name: "React",
    confidence: 100,
}

const reactNative = {
    logoId: "react",
    name: "React Native",
    confidence: 95,
}

const redux = {
    logoId: "redux",
    name: "Redux",
    confidence: 85,
}

const next = {
    logoId: "next",
    name: "Next",
    confidence: 85,
}

const nest = {
    logoId: "nest",
    name: "Nest",
    confidence: 80,
}

const docker = {
    logoId: "docker",
    name: "Docker",
    confidence: 65,
}

const nginx = {
    logoId: "nginx",
    name: "Nginx",
    confidence: 55,
}

const ubuntu = {
    logoId: "ubuntu",
    name: "Ubuntu",
    confidence: 80,
}

const flutter = {
    logoId: "flutter",
    name: "Flutter",
    confidence: 85,
}

const postgresql = {
    logoId: "postgresql",
    name: "Postgresql",
    confidence: 65,
}

const stacksList = document.querySelector('#stacksList');

[
    html,
    css,
    scss,
    tailwind,
    javascript,
    typescript,
    python,
    django,
    drf,
    graphene,
    flask,
    apollo,
    graphql,
    react,
    reactNative,
    redux,
    next,
    nest,
    docker,
    nginx,
    ubuntu,
    flutter,
    postgresql
].forEach(v => {
    const div = document.createElement('div')
    div.setAttribute('v-scope', `StackIcon(${JSON.stringify(v)})`)
    stacksList.appendChild(div)
});
