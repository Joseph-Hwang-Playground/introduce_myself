import { objects } from "@src/values/objects";

const template = `
<button v-bind:id="logoId" class="logo"></button>
<span class="logoName">{{ name }}</span>
<div class="stackStatus">
    <span>Confidence</span>
    <progress max="100" v-bind:value="confidence"></progress>
</div>
`

export interface StackIconProps {
    logoId: string;
    name: string;
    confidence: number;
}

export const StackIcon = (key: string) => {
    const {
        logoId,
        name,
        confidence
    }: StackIconProps = objects.stackIcon[key];
    return {
        $template: template,
        logoId: `logo_${logoId}`,
        name,
        confidence,
    };
}
