import {DirectiveBinding} from 'vue';

type HTMLElementWithOutsideMethod = HTMLElement & {_outsideMethod: (event: MouseEvent) => void }

/**
 * Деректира предназначена для выполения действия при клике вне элемента
 */
const clickOutsideDirective = {
    beforeMount(element: HTMLElementWithOutsideMethod, binding: DirectiveBinding) {
        element._outsideMethod = (event: MouseEvent) => {
            const target = event.target as HTMLElement

            if (!(element.contains(target) || element == event.target)) {
                binding.value()
            }
        }

        document.addEventListener('click', element._outsideMethod)
    },
    beforeUnmount(element: HTMLElementWithOutsideMethod) {
        document.removeEventListener('click', element._outsideMethod)
    }
}

export default clickOutsideDirective