import {ButtonView} from 'dncomponents/lib/button/view/ButtonView';
import {TemplateParser, UiField} from 'dncomponents/lib/TemplateParser';
import {MainViewSlots, MainViewSlotsImpl} from 'dncomponents/lib/BaseComponent';

export class ButtonViewImpl implements ButtonView {
    static readonly VIEW_ID = 'DEFAULT';
    @UiField
    root: HTMLButtonElement;

    constructor();
    constructor(template?: HTMLTemplateElement);
    constructor(template?: HTMLTemplateElement) {
        TemplateParser.create(template, this, true).bind();
    };

    asElement(): HTMLElement {
        return this.root;
    }

    getHTML(): string {
        return this.root.innerHTML;
    }

    getText(): string {
        return this.root.textContent;
    }

    setEnabled(enabled: boolean): void {
        if (enabled)
            this.root.removeAttribute('disabled');
        else
            this.root.setAttribute('disabled', '');
    }

    setHTML(html: string): void {
        this.root.innerHTML = html;
    }

    setText(text: string): void {
        this.root.innerHTML = text;
    }

    getViewSlots(): MainViewSlots {
        return new MainViewSlotsImpl(this.asElement());
    }

}