import { objects } from "@src/values/objects";

const template = `
<progress max="100" v-bind:value="value"></progress>
<span>{{ description }}</span>
`;


export interface LevelLegendProps {
    value: number;
    description: string;
}

export const LevelLegend = (key: string) => {
    const { value, description }: LevelLegendProps = objects.levelLegend[key];
    return {
        $template: template,
        value,
        description,
    };
}
