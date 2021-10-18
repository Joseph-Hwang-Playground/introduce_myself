const statusItemTemplate = document.createElement('template');
statusItemTemplate.innerHTML = `
<template id="status-item-template">
    <div class="statusItem">
        <i class="statusIcon fas {{ icon }}"></i>
        <span class="statusDescription">{{ value }}</span>
    </div>
</template>
`;

document.querySelector('#root').appendChild(statusItemTemplate);

export const StatusItem = ({
    icon,
    value,
}) => ({
    $template: "#status-item-template",
    icon,
    value,
});

// createApp({
//     StatusItem
// }).mount('#introduction')

const user = {
    icon: 'fa-user',
    value: 'Born at 2002',
}

const university = {
    icon: 'fa-university',
    value: 'Undergraduate program at UNIST',
}

const info = {
    icon: 'fa-info-circle',
    value: 'Born at 2002',
}

const statusBar = document.querySelector('.statusBar');

[user, university, info].forEach((v) => {
    const div = document.createElement('div');
    div.setAttribute('v-scope', `StatusItem(${JSON.stringify(v)})`);
    statusBar.appendChild(div);
});
