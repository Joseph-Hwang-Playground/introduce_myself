import { objects } from "@src/values/objects";

const generateTemplate = (descriptionKey: string) => `
<div class="projectItem__header">
    <div class="projectItem__icon mypy">
        <div class="icon_canvas">{{ name }}</div>
    </div>
    <div class="projectItem__subject">
        <div>
            <h1>{{ title }}</h1>
            <h2 v-for="subtitle in subtitles">{{ subtitle }}</h2>
        </div>
    </div>
</div>
<div class="projectItem__description">
    <h2 v-if="summary">"{{ summary }}"</h2>
    <formatted-p v-if="descriptionKey" key="${descriptionKey}"></formatted-p>
</div>
`;

export interface ProjectCardProps {
    name: string;
    title: string;
    subtitles: string[];
    summary: string | null;
    descriptionKey: string | null;
}

export const ProjectCard = (key: string) => {
    const {
        name,
        title,
        subtitles,
        summary,
        descriptionKey,
    }: ProjectCardProps = objects.projectCard[key];
    return {
        $template: generateTemplate(descriptionKey),
        name,
        title,
        subtitles,
        summary,
        descriptionKey,
    }
}
