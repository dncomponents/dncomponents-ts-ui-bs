import {TemplateParser, UiField} from 'dncomponents/lib/TemplateParser';
import {TextBoxView} from 'dncomponents/lib/textbox/TextBoxView';
import {KeyUpHandler, OnBlurHandler} from 'dncomponents/lib/corecls/handlers';
import {FocusComponentViewBase} from 'dncomponents/lib/views/FocusComponentView';

export class TextAreaViewImpl extends FocusComponentViewBase implements TextBoxView {

    static readonly VIEW_ID: string = 'default';
    @UiField
    root: HTMLTextAreaElement;

    public constructor(templateElement: HTMLTemplateElement) {
        super();
        TemplateParser.create(templateElement, this, true).bind();
    }

    public getValue(): string {
        return this.asElement().value;
    }

    public setValue(value: string) {
        this.asElement().value = value;
    }

    public addOnInputChangeHandler(listener: EventListener) {
    }

    public setError(b: boolean) {
        if (b)
            this.root.classList.add('invalid');
        else
            this.root.classList.remove('invalid');
    }

    public setErrorMessage(errorMessage: string) {
    }

    public setPlaceHolder(placeHolder: string) {
        this.root.setAttribute('placeholder', placeHolder);
    }

    public addOnBlurHandler(handler: OnBlurHandler) {
        handler.addTo(this.asElement());
    }


    public addOnKeyUpHandler(handler: KeyUpHandler) {
        handler.addTo(this.asElement());
    }

    public asElement(): HTMLTextAreaElement {
        return this.root;
    }
}
