import { ContactMethodButton } from './components/contact-method-button';
import { Paragraph } from './components/paragraph';
import navBarEventHandler from './partials/navBarEventHandler';
import { LevelLegend } from './vue/level-legend';
import { ProjectCard } from './vue/project-card';
import { StackIcon } from './vue/stack-icon';
import { StatusItem } from './vue/status-item';

// Loading partials
document.addEventListener('scroll', navBarEventHandler);

// Defining components
window.customElements.define('formatted-p', Paragraph);
window.customElements.define('contact-button', ContactMethodButton);

// Petite Vue components
PetiteVue.createApp({
  StackIcon,
  LevelLegend,
  StatusItem,
  ProjectCard,
}).mount();
