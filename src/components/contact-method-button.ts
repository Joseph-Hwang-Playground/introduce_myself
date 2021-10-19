const template = document.createElement('template');
template.innerHTML = `
<style>
.methodWrapper {
    display: flex;
    padding: 1.5rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: 2px solid var(--line);
    border-radius: 1.5rem;
}

.methodWrapper .methodIcon {
    display: flex;
    justify-content: center;
    align-items: center;
}

.methodWrapper .methodDescription {
    text-align: center;
}

.methodDescription {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
</style>

<div class="methodWrapper">
    <div class="methodIcon">
        <slot></slot>
    </div>
    <div class="methodDescription">
        <span></span>
    </div>
</div>
`

export class ContactMethodButton extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('span').innerText = this.getAttribute('description');
    }
}
