import { strings } from '@src/values/strings';

const template = document.createElement('template');
template.innerHTML = `
<style>
p {
    font-family: 'Nanum Gothic', sans-serif;
    display: block;
    font-size: medium;
    line-height: 1.1rem;
    color: var(--black-edge);
    font-weight: bold;
    color: darkslategray;
}
strong {
    font-family: 'Nanum Gothic', sans-serif;
    display: block;
    font-size: large;
    line-height: 1.1rem;
    color: var(--black-edge);
    font-weight: bolder;
}
</style>
<p></p>
`;

export class Paragraph extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('p').innerHTML = strings[this.getAttribute('key')];
    }
}
