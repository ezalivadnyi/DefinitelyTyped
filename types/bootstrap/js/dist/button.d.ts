import BaseComponent, { GetInstanceFactory } from './base-component';

declare class Button extends BaseComponent {
    /**
     * Toggles push state. Gives the button the appearance that it has been activated.
     */
    toggle(): void;

    static getInstance: GetInstanceFactory<Button>;
    static jQueryInterface: Button.jQueryInterface;
}

declare namespace Button {
    type jQueryInterface = (config?: 'toggle' | 'dispose') => void;
}

export default Button;
