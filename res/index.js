/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/components/contact-method-button.js":
/*!**************************************************!*\
  !*** ./dist/components/contact-method-button.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ContactMethodButton\": () => (/* binding */ ContactMethodButton)\n/* harmony export */ });\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar template = document.createElement('template');\ntemplate.innerHTML = \"\\n<style>\\n.methodWrapper {\\n    display: flex;\\n    padding: 1.5rem;\\n    flex-direction: column;\\n    justify-content: start;\\n    align-items: center;\\n    border: 2px solid var(--line);\\n    border-radius: 1.5rem;\\n}\\n\\n.methodWrapper .methodIcon {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.methodWrapper .methodDescription {\\n    text-align: center;\\n}\\n\\n.methodDescription {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: start;\\n    align-items: center;\\n}\\n\\n.methodIcon a, .methodIcon button {\\n    font-size: 3rem;\\n    padding: 1rem;\\n    color: var(--highlight);\\n    transition: all 0.2s ease;\\n}\\n\\n.methodIcon a:hover, .methodIcon button:hover {\\n    cursor: pointer;\\n    transform: scale(1.2);\\n    filter: grayscale(0.5);\\n}\\n</style>\\n<div class=\\\"methodWrapper\\\">\\n    <div class=\\\"methodIcon\\\">\\n        <slot name=\\\"icon\\\" />\\n    </div>\\n    <div class=\\\"methodDescription\\\">\\n        <span></span>\\n    </div>\\n</div>\\n\";\nvar ContactMethodButton = (function (_super) {\n    __extends(ContactMethodButton, _super);\n    function ContactMethodButton() {\n        var _this = _super.call(this) || this;\n        _this.attachShadow({ mode: 'open' });\n        _this.shadowRoot.appendChild(template.content.cloneNode(true));\n        _this.shadowRoot.querySelector('span').innerText = _this.getAttribute('description');\n        return _this;\n    }\n    return ContactMethodButton;\n}(HTMLElement));\n\n//# sourceMappingURL=contact-method-button.js.map\n\n//# sourceURL=webpack://introduce_myself/./dist/components/contact-method-button.js?");

/***/ }),

/***/ "./dist/components/paragraph.js":
/*!**************************************!*\
  !*** ./dist/components/paragraph.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Paragraph\": () => (/* binding */ Paragraph)\n/* harmony export */ });\n/* harmony import */ var _src_values_strings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/values/strings */ \"./dist/values/strings.js\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar template = document.createElement('template');\ntemplate.innerHTML = \"\\n<style>\\np {\\n    font-family: 'Nanum Gothic', sans-serif;\\n    display: block;\\n    font-size: medium;\\n    line-height: 1.1rem;\\n    color: var(--black-edge);\\n    font-weight: bold;\\n    color: darkslategray;\\n}\\nstrong {\\n    font-family: 'Nanum Gothic', sans-serif;\\n    display: block;\\n    font-size: large;\\n    line-height: 1.1rem;\\n    color: var(--black-edge);\\n    font-weight: bolder;\\n}\\n</style>\\n<p></p>\\n\";\nvar Paragraph = (function (_super) {\n    __extends(Paragraph, _super);\n    function Paragraph() {\n        var _this = _super.call(this) || this;\n        _this.attachShadow({ mode: 'open' });\n        _this.shadowRoot.appendChild(template.content.cloneNode(true));\n        _this.shadowRoot.querySelector('p').innerHTML = _src_values_strings__WEBPACK_IMPORTED_MODULE_0__.strings[_this.getAttribute('key')];\n        return _this;\n    }\n    return Paragraph;\n}(HTMLElement));\n\n//# sourceMappingURL=paragraph.js.map\n\n//# sourceURL=webpack://introduce_myself/./dist/components/paragraph.js?");

/***/ }),

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_contact_method_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/contact-method-button */ \"./dist/components/contact-method-button.js\");\n/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/paragraph */ \"./dist/components/paragraph.js\");\n/* harmony import */ var _partials_navBarEventHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partials/navBarEventHandler */ \"./dist/partials/navBarEventHandler.js\");\n/* harmony import */ var _vue_level_legend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vue/level-legend */ \"./dist/vue/level-legend.js\");\n/* harmony import */ var _vue_project_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vue/project-card */ \"./dist/vue/project-card.js\");\n/* harmony import */ var _vue_stack_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vue/stack-icon */ \"./dist/vue/stack-icon.js\");\n/* harmony import */ var _vue_status_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vue/status-item */ \"./dist/vue/status-item.js\");\n\n\n\n\n\n\n\ndocument.addEventListener('scroll', _partials_navBarEventHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nwindow.customElements.define('formatted-p', _components_paragraph__WEBPACK_IMPORTED_MODULE_1__.Paragraph);\nwindow.customElements.define('contact-button', _components_contact_method_button__WEBPACK_IMPORTED_MODULE_0__.ContactMethodButton);\nPetiteVue.createApp({\n    StackIcon: _vue_stack_icon__WEBPACK_IMPORTED_MODULE_5__.StackIcon,\n    LevelLegend: _vue_level_legend__WEBPACK_IMPORTED_MODULE_3__.LevelLegend,\n    StatusItem: _vue_status_item__WEBPACK_IMPORTED_MODULE_6__.StatusItem,\n    ProjectCard: _vue_project_card__WEBPACK_IMPORTED_MODULE_4__.ProjectCard\n}).mount();\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://introduce_myself/./dist/index.js?");

/***/ }),

/***/ "./dist/partials/navBarEventHandler.js":
/*!*********************************************!*\
  !*** ./dist/partials/navBarEventHandler.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar HIGHLIGHT = '#ee6f57';\nvar rem = parseInt(getComputedStyle(document.documentElement).fontSize);\nvar navBarEventHandler = function () {\n    var navigation = document.querySelector('#navDesktop');\n    var navTopPos = window.scrollY;\n    var introduction = navigation.querySelector('.introduction');\n    var vision = navigation.querySelector('.vision');\n    var stacks = navigation.querySelector('.stacks');\n    var projects = navigation.querySelector('.projects');\n    var contact = navigation.querySelector('.contact');\n    var introductionElement = document.querySelector('#introduction');\n    var visionElement = document.querySelector('#vision');\n    var stacksElement = document.querySelector('#stacks');\n    var projectsElement = document.querySelector('#projects');\n    var contactElement = document.querySelector('#contact');\n    var introductionTopPos = introductionElement.offsetTop - (9 * rem);\n    var visionTopPos = visionElement.offsetTop - (9 * rem);\n    var stacksTopPos = stacksElement.offsetTop - (9 * rem);\n    var projectsTopPos = projectsElement.offsetTop - (10 * rem);\n    var contactTopPos = contactElement.offsetTop - (9 * rem);\n    if (navTopPos >= introductionTopPos && navTopPos < visionTopPos) {\n        introduction.style.borderBottom = \"3px solid \" + HIGHLIGHT;\n        vision.removeAttribute('style');\n        stacks.removeAttribute('style');\n        projects.removeAttribute('style');\n        contact.removeAttribute('style');\n    }\n    else if (navTopPos >= visionTopPos && navTopPos < stacksTopPos) {\n        introduction.removeAttribute('style');\n        vision.style.borderBottom = \"3px solid \" + HIGHLIGHT;\n        stacks.removeAttribute('style');\n        projects.removeAttribute('style');\n        contact.removeAttribute('style');\n    }\n    else if (navTopPos >= stacksTopPos && navTopPos < projectsTopPos) {\n        introduction.removeAttribute('style');\n        vision.removeAttribute('style');\n        stacks.style.borderBottom = \"3px solid \" + HIGHLIGHT;\n        projects.removeAttribute('style');\n        contact.removeAttribute('style');\n    }\n    else if (navTopPos >= projectsTopPos && navTopPos < contactTopPos) {\n        introduction.removeAttribute('style');\n        vision.removeAttribute('style');\n        stacks.removeAttribute('style');\n        projects.style.borderBottom = \"3px solid \" + HIGHLIGHT;\n        contact.removeAttribute('style');\n    }\n    else if (navTopPos >= contactTopPos) {\n        introduction.removeAttribute('style');\n        vision.removeAttribute('style');\n        stacks.removeAttribute('style');\n        projects.removeAttribute('style');\n        contact.style.borderBottom = \"3px solid \" + HIGHLIGHT;\n    }\n    else {\n        introduction.removeAttribute('style');\n        vision.removeAttribute('style');\n        stacks.removeAttribute('style');\n        projects.removeAttribute('style');\n        contact.removeAttribute('style');\n    }\n    if (navTopPos >= introductionTopPos) {\n        navigation.style.backgroundColor = 'white';\n        navigation.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';\n        introduction.style.color = 'black';\n        vision.style.color = 'black';\n        stacks.style.color = 'black';\n        projects.style.color = 'black';\n        contact.style.color = 'black';\n    }\n    else {\n        navigation.removeAttribute('style');\n        introduction.style.color = 'white';\n        vision.style.color = 'white';\n        stacks.style.color = 'white';\n        projects.style.color = 'white';\n        contact.style.color = 'white';\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navBarEventHandler);\n//# sourceMappingURL=navBarEventHandler.js.map\n\n//# sourceURL=webpack://introduce_myself/./dist/partials/navBarEventHandler.js?");

/***/ }),

/***/ "./dist/values/objects.js":
/*!********************************!*\
  !*** ./dist/values/objects.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"objects\": () => (/* binding */ objects)\n/* harmony export */ });\nvar objects = {\n    projectCard: {\n        fg: {\n            name: \"Fg\",\n            title: 'Start the project, Share the workflow',\n            subtitles: [\n                'Plan, Organize, Manage the project',\n                'Share your workflow, and inspired by the others',\n            ],\n            summary: \"My very first dev project\",\n            descriptionKey: 'projectFg'\n        },\n        mypy: {\n            name: \"Mypy\",\n            title: \"MYPY: Python app everywhere!\",\n            subtitles: ['MYPY serves your python app online!'],\n            summary: \"I thought this idea is quite awesome...\",\n            descriptionKey: 'projectMypy'\n        }\n    },\n    statusItem: {\n        user: {\n            icon: 'fa-user',\n            value: 'Born at 2002'\n        },\n        university: {\n            icon: 'fa-university',\n            value: 'Undergraduate program at UNIST'\n        },\n        info: {\n            icon: 'fa-info-circle',\n            value: 'Born at 2002'\n        }\n    },\n    levelLegend: {\n        l1: { value: 0, description: 'No Nothing' },\n        l2: { value: 10, description: 'Learning' },\n        l3: { value: 50, description: 'Can apply to my project' },\n        l4: { value: 75, description: 'Can cooperate' },\n        l5: { value: 100, description: 'Quite confident' }\n    },\n    stackIcon: {\n        html: {\n            logoId: \"html\",\n            name: \"HTML\",\n            confidence: 100\n        },\n        css: {\n            logoId: \"css\",\n            name: \"CSS\",\n            confidence: 100\n        },\n        scss: {\n            logoId: \"scss\",\n            name: \"SCSS\",\n            confidence: 95\n        },\n        tailwind: {\n            logoId: \"tailwind\",\n            name: \"Tailwind CSS\",\n            confidence: 95\n        },\n        javascript: {\n            logoId: \"js\",\n            name: \"Javascript\",\n            confidence: 90\n        },\n        typescript: {\n            logoId: \"ts\",\n            name: \"Typescript\",\n            confidence: 100\n        },\n        python: {\n            logoId: \"python\",\n            name: \"Python\",\n            confidence: 90\n        },\n        django: {\n            logoId: \"django\",\n            name: \"Django\",\n            confidence: 95\n        },\n        drf: {\n            logoId: \"DRF\",\n            name: \"Django Rest Framework\",\n            confidence: 90\n        },\n        graphene: {\n            logoId: \"graphene\",\n            name: \"Graphene\",\n            confidence: 45\n        },\n        flask: {\n            logoId: \"flask\",\n            name: \"Flask\",\n            confidence: 80\n        },\n        apollo: {\n            logoId: \"apollo\",\n            name: \"Apollo\",\n            confidence: 75\n        },\n        graphql: {\n            logoId: \"graphql\",\n            name: \"Graphql\",\n            confidence: 75\n        },\n        react: {\n            logoId: \"react\",\n            name: \"React\",\n            confidence: 100\n        },\n        reactNative: {\n            logoId: \"react\",\n            name: \"React Native\",\n            confidence: 95\n        },\n        redux: {\n            logoId: \"redux\",\n            name: \"Redux\",\n            confidence: 85\n        },\n        next: {\n            logoId: \"next\",\n            name: \"Next\",\n            confidence: 85\n        },\n        nest: {\n            logoId: \"nest\",\n            name: \"Nest\",\n            confidence: 80\n        },\n        docker: {\n            logoId: \"docker\",\n            name: \"Docker\",\n            confidence: 65\n        },\n        nginx: {\n            logoId: \"nginx\",\n            name: \"Nginx\",\n            confidence: 55\n        },\n        ubuntu: {\n            logoId: \"ubuntu\",\n            name: \"Ubuntu\",\n            confidence: 80\n        },\n        flutter: {\n            logoId: \"flutter\",\n            name: \"Flutter\",\n            confidence: 85\n        },\n        postgresql: {\n            logoId: \"postgresql\",\n            name: \"Postgresql\",\n            confidence: 45\n        },\n        vue: {\n            logoId: \"vue\",\n            name: \"Vue\",\n            confidence: 55\n        },\n        svelte: {\n            logoId: \"svelte\",\n            name: \"Svelte\",\n            confidence: 55\n        },\n        electron: {\n            logoId: \"electron\",\n            name: \"Electron\",\n            confidence: 55\n        },\n        express: {\n            logoId: \"express\",\n            name: \"Express\",\n            confidence: 45\n        },\n        webcomponents: {\n            logoId: \"webcomponents\",\n            name: \"Web Components\",\n            confidence: 65\n        },\n        go: {\n            logoId: 'go',\n            name: \"Go\",\n            confidence: 60\n        },\n        aws: {\n            logoId: \"aws\",\n            name: \"Amazon Web Services\",\n            confidence: 50\n        }\n    }\n};\n//# sourceMappingURL=objects.js.map\n\n//# sourceURL=webpack://introduce_myself/./dist/values/objects.js?");

/***/ }),

/***/ "./dist/values/strings.js":
/*!********************************!*\
  !*** ./dist/values/strings.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"strings\": () => (/* binding */ strings)\n/* harmony export */ });\nvar processArrayText = function (textArray) { return textArray\n    .join('\\n')\n    .replaceAll('\\n', '<br />')\n    .replaceAll('/**', '</strong>')\n    .replaceAll('**', '<strong>'); };\nvar introduction = [\n    \"I want to be a full stack developer and entrepreneur.\",\n    \"\",\n    \"In my spare time, I deeply think about ideas, specifically, whether is there any problem I can solve for the people.\",\n    \"\",\n    \"And I learn how to code to materialize my ideas.\",\n    \"\",\n    \"I love music and photography, especially R&B like from lauv, honne, lany.\",\n    \"I deeply inspired from them, and currently I'm learning producing with logic x pro.\",\n    \"\",\n    \"Also I love photography, specifically landscape and more specifically nightscape photos.\",\n    \"I hope one day I can travel all over the world and take photos of those places.\",\n];\nvar ideas = [\n    \"**## Notion + Heroku/**\",\n    \"It's the Notion alternative for developer teams.\",\n    \"It is basically a static site generator powered by markdown which developers are friendly with.\",\n    \"This will have a CLI tool which can initialize markdown project like CRA, upload it to server like heroku, \",\n    \"and some utilities like django-admin, all each with just one command line. \",\n    \"And also it can be integrated with github like circleci.\",\n    \"\",\n    \"**## AI sound finder/**\",\n    \"This is for the music people.\",\n    \"It picks a sound that producer want based on one's input data \",\n    \"which will be collected with kind of survey like the Akinator.\",\n    \"\",\n    \"**## Ideation platform/**\",\n    \"I want to build some sort of ideation platform.\",\n    \"which can inspire users that can be helpful for their ideas, or even can directly give some ideas to them.\",\n    \"The problem of this idea is that ideas cannot be protected. \",\n    \"I thought about NFT to make the idea really unique, and firms, startups, or individual can buy it.\",\n    \"But this does not really protects it, and it needs some protection with law. \",\n];\nvar projectFg = [\n    '',\n];\nvar projectMypy = [\n    '',\n];\nvar strings = {\n    introduction: processArrayText(introduction),\n    ideas: processArrayText(ideas),\n    projectFg: processArrayText(projectFg),\n    projectMypy: processArrayText(projectMypy)\n};\n//# sourceMappingURL=strings.js.map\n\n//# sourceURL=webpack://introduce_myself/./dist/values/strings.js?");

/***/ }),

/***/ "./dist/vue/level-legend.js":
/*!**********************************!*\
  !*** ./dist/vue/level-legend.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LevelLegend\": () => (/* binding */ LevelLegend)\n/* harmony export */ });\n/* harmony import */ var _src_values_objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/values/objects */ \"./dist/values/objects.js\");\n\nvar template = \"\\n<progress max=\\\"100\\\" v-bind:value=\\\"value\\\"></progress>\\n<span>{{ description }}</span>\\n\";\nvar LevelLegend = function (key) {\n    var _a = _src_values_objects__WEBPACK_IMPORTED_MODULE_0__.objects.levelLegend[key], value = _a.value, description = _a.description;\n    return {\n        $template: template,\n        value: value,\n        description: description\n    };\n};\n//# sourceMappingURL=level-legend.js.map\n\n//# sourceURL=webpack://introduce_myself/./dist/vue/level-legend.js?");

/***/ }),

/***/ "./dist/vue/project-card.js":
/*!**********************************!*\
  !*** ./dist/vue/project-card.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectCard\": () => (/* binding */ ProjectCard)\n/* harmony export */ });\n/* harmony import */ var _src_values_objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/values/objects */ \"./dist/values/objects.js\");\n\nvar template = \"\\n<div class=\\\"projectItem__header\\\">\\n    <div class=\\\"projectItem__icon mypy\\\">\\n        <div class=\\\"icon_canvas\\\">{{ name }}</div>\\n    </div>\\n    <div class=\\\"projectItem__subject\\\">\\n        <div>\\n            <h1>{{ title }}</h1>\\n            <h2 v-for=\\\"subtitle in subtitles\\\">{{ subtitle }}</h2>\\n        </div>\\n    </div>\\n</div>\\n<div class=\\\"projectItem__description\\\">\\n    <h2>\\\"{{ summary }}\\\"</h2>\\n    <formatted-p v-bind:key=\\\"descriptionKey\\\"></formatted-p>\\n</div>\\n\";\nvar ProjectCard = function (key) {\n    var _a = _src_values_objects__WEBPACK_IMPORTED_MODULE_0__.objects.projectCard[key], name = _a.name, title = _a.title, subtitles = _a.subtitles, summary = _a.summary, descriptionKey = _a.descriptionKey;\n    return {\n        $template: template,\n        name: name,\n        title: title,\n        subtitles: subtitles,\n        summary: summary,\n        descriptionKey: descriptionKey\n    };\n};\n//# sourceMappingURL=project-card.js.map\n\n//# sourceURL=webpack://introduce_myself/./dist/vue/project-card.js?");

/***/ }),

/***/ "./dist/vue/stack-icon.js":
/*!********************************!*\
  !*** ./dist/vue/stack-icon.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StackIcon\": () => (/* binding */ StackIcon)\n/* harmony export */ });\n/* harmony import */ var _src_values_objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/values/objects */ \"./dist/values/objects.js\");\n\nvar template = \"\\n<button v-bind:id=\\\"logoId\\\" class=\\\"logo\\\"></button>\\n<span class=\\\"logoName\\\">{{ name }}</span>\\n<div class=\\\"stackStatus\\\">\\n    <span>Confidence</span>\\n    <progress max=\\\"100\\\" v-bind:value=\\\"confidence\\\"></progress>\\n</div>\\n\";\nvar StackIcon = function (key) {\n    var _a = _src_values_objects__WEBPACK_IMPORTED_MODULE_0__.objects.stackIcon[key], logoId = _a.logoId, name = _a.name, confidence = _a.confidence;\n    return {\n        $template: template,\n        logoId: \"logo_\" + logoId,\n        name: name,\n        confidence: confidence\n    };\n};\n//# sourceMappingURL=stack-icon.js.map\n\n//# sourceURL=webpack://introduce_myself/./dist/vue/stack-icon.js?");

/***/ }),

/***/ "./dist/vue/status-item.js":
/*!*********************************!*\
  !*** ./dist/vue/status-item.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StatusItem\": () => (/* binding */ StatusItem)\n/* harmony export */ });\n/* harmony import */ var _src_values_objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/values/objects */ \"./dist/values/objects.js\");\n\nvar template = \"\\n<i v-bind:class=\\\"['statusIcon', 'fas', icon]\\\"></i>\\n<span class=\\\"statusDescription\\\">{{ value }}</span>\\n\";\nvar StatusItem = function (key) {\n    var _a = _src_values_objects__WEBPACK_IMPORTED_MODULE_0__.objects.statusItem[key], icon = _a.icon, value = _a.value;\n    return {\n        $template: template,\n        icon: icon,\n        value: value\n    };\n};\n//# sourceMappingURL=status-item.js.map\n\n//# sourceURL=webpack://introduce_myself/./dist/vue/status-item.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./dist/index.js");
/******/ 	
/******/ })()
;