const template = document.createElement('template');
template.innerHTML = `
<style>
.methodWrapper {
    display: flex;
    padding: 1.5rem;
    flex-direction: column;
    justify-content: start;
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
    justify-content: start;
    align-items: center;
}

.methodIcon a, .methodIcon button {
    font-size: 3rem;
    padding: 1rem;
    color: var(--highlight);
    transition: all 0.2s ease;
}

.methodIcon a:hover, .methodIcon button:hover {
    cursor: pointer;
    transform: scale(1.2);
    filter: grayscale(0.5);
}
</style>
<div class="methodWrapper">
    <div class="methodIcon">
        <slot name="icon" />
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
