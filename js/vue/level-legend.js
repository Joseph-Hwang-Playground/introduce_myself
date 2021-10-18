const levelLegendTemplate = document.createElement('template')
levelLegendTemplate.innerHTML = `
<template id="level-legend-template">
    <div class="stacksHeader__info__level">
        <progress max="100" value="{{ value }}"></progress>
        <span>{{ description }}</span>
    </div>
</template>
`

document.querySelector('#root').appendChild(levelLegendTemplate);

export const LevelLegend = ({
    value,
    description,
}) => ({
    $template: '#level-legend-template',
    value,
    description,
});

// createApp({
//     LevelLegend,
// }).mount("#level-legend")

const l1 = { value: 0, description: 'No Nothing' };
const l2 = { value: 10, description: 'Learning' };
const l3 = { value: 50, description: 'Can apply to my project' };
const l4 = { value: 75, description: 'Can cooperate' };
const l5 = { value: 100, description: 'Quite confident' };

const levelLegend = document.querySelector('#level-legend');

[l1, l2, l3, l4, l5].forEach(v => {
    const div = document.createElement('div')
    div.setAttribute('v-scope', `LevelLegend(${JSON.stringify(v)})`)
    levelLegend.appendChild(div)
});
