
/**
 * @description This typedef is not a real one.
 *              See the link below to see the real typedef of it
 *              <https://github.com/vuejs/petite-vue/blob/main/src/directives/index.ts>
 */
type Directive = any;

declare global {
    namespace PetiteVue {
        function createApp(initialData?: any): {
            directive: (name: string, def?: Directive) => any,
            mount: (el?: string | Element | null) => any,
        }
    }
}

export {}
