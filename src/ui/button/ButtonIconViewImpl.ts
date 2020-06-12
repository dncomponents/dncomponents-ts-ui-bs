import {TemplateParser, UiField, UiStyle} from 'dncomponents/lib/TemplateParser';
import {MainViewSlots, MainViewSlotsImpl} from 'dncomponents/lib/BaseComponent';
import {ButtonView} from 'dncomponents/lib/button/view/ButtonView';

export class ButtonIconViewImpl implements ButtonView {
    @UiField
    root: HTMLElement;
    @UiField
    textPanel: HTMLElement;
    @UiField
    iconPanel: HTMLElement;
    @UiStyle
    disabledStyle: string;


    constructor();
    constructor(template?: HTMLTemplateElement);
    constructor(template?: HTMLTemplateElement) {
        TemplateParser.create(template, this, true).bind();
    };

    public getText(): string {
        return this.textPanel.textContent;
    }

    public setEnabled(enabled: boolean) {
        if (enabled) this.root.classList.remove(this.disabledStyle); else this.root.classList.add(this.disabledStyle);
    }

    public setText(text: string) {
        this.textPanel.textContent = text;
    }

    public getHTML(): string {
        return this.textPanel.innerHTML;
    }

    public setHTML(html: string) {
        this.textPanel.innerHTML = html;
    }

    public asElement(): HTMLElement {
        return this.root;
    }

    viewSlots: MainViewSlots = new MainViewSlotsImpl(this.asElement());

    public getViewSlots(): MainViewSlots {
        return this.viewSlots;
    }

    static VIEW_ID: string = 'ICON';
}
