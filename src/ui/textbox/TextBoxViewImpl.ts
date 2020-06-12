import {TextBoxView} from 'dncomponents/lib/textbox/TextBoxView';
import {FocusComponentViewBase} from 'dncomponents/lib/views/FocusComponentView';
import {KeyUpHandler, OnBlurHandler} from 'dncomponents/lib/corecls/handlers';
import {TemplateParser, UiField} from 'dncomponents/lib/TemplateParser';

export class TextBoxViewImpl extends FocusComponentViewBase implements TextBoxView {

    static readonly VIEW_ID: string = 'default';
    @UiField
    root: HTMLInputElement;

    constructor();
    constructor(template?: HTMLTemplateElement);
    constructor(template?: HTMLTemplateElement) {
        super();
        TemplateParser.create(template, this, true).bind();
    };

    addOnBlurHandler(handler: OnBlurHandler): void {
        handler.addTo(this.asElement());
    }

    addOnInputChangeHandler(listener: EventListener): void {
    }

    addOnKeyUpHandler(handler: KeyUpHandler): void {
        handler.addTo(this.asElement());
    }

    asElement(): HTMLInputElement {
        return this.root;
    }

    getValue(): string {
        return this.asElement().value;
    }

    setError(b: boolean): void {
    }

    setErrorMessage(errorMessage: string): void {
    }

    setPlaceHolder(placeHolder: string): void {
        this.root.setAttribute('placeholder', placeHolder);
    }

    setValue(value: string): void {
        this.asElement().value = value;
    }

}