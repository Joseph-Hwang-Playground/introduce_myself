import { objects } from "@src/values/objects";

const template = `
<i v-bind:class="['statusIcon', 'fas', icon]"></i>
<span class="statusDescription">{{ value }}</span>
`

export interface StatusItemProps {
    icon: string;
    value: string;
}

export const StatusItem = (key: string) => {
    const { icon, value }: StatusItemProps = objects.statusItem[key];
    return {
        $template: template,
        icon,
        value,
    };
}
