import {UiField} from 'dncomponents/lib/TemplateParser';
import {BaseAutocompleteView} from 'dncomponents/lib/autocomplete/views/BaseAutocompleteView';
import {TextBox} from 'dncomponents/lib/textbox/TextBox';
import {Button} from 'dncomponents/lib/button/Button';
import {ClickHandler, KeyUpHandler, SelectionHandler} from 'dncomponents/lib/corecls/handlers';
import {Command} from 'dncomponents/lib/BaseComponent';
import {HandlerRegistration} from 'dncomponents/lib/corecls/events';
import {java} from 'j4ts';
import {HasRowsData} from 'dncomponents/lib/AbstractCellComponent';
import {CellConfig} from 'dncomponents/lib/CellConfig';
import {DefaultMultiSelectionModel} from 'dncomponents/lib/corecls/selectionmodel/selectionImpl';
import {Filter} from 'dncomponents/lib/corecls/Filter';
import {FocusLogic} from 'dncomponents/lib/views/FocusComponentView';

export abstract class BaseAutocompleteViewImpl<T> implements BaseAutocompleteView<T> {

    @UiField
    root: HTMLElement;
    @UiField
    protected textBox: TextBox;
    @UiField
    listPanel: HTMLElement;
    @UiField
    button: Button<any>;
    @UiField
    buttonText: HTMLElement;
    private focusLogic: FocusLogic = new FocusLogic(this);

    public addKeyUpHandler(keyUpHandler: KeyUpHandler) {
        this.textBox.addHandler(keyUpHandler);
    }

    public addButtonClickHandler(clickHandler: ClickHandler) {
        this.button.addClickHandler(clickHandler);
    }

    public setStringValue(value: string) {
        if (this.buttonText != null) {
            if (value == null)
                value = 'Choose...';
            this.buttonText.innerHTML = value;
        }
    }

    public showListPanel(b: boolean, done: Command) {
        if (b)
            this.listPanel.style.display = 'block';
        else {
            this.listPanel.style.display = 'none';
        }
        if (done != null)
            done.execute();
    }

    public setTextBoxFocused(b: boolean) {
        if (b)
            this.textBox.asElement().focus();
        else
            this.textBox.asElement().blur();
    }

    public getTextBoxCurrentValue(): string {
        return this.textBox.getValueFromView();
    }

    public setTextBoxCurrentValue(value: string) {
        this.textBox.setValue(null, true);
    }

    public asElement(): HTMLElement {
        return this.root;
    }

    public fireEvent(event: CustomEvent) {
        this.asElement().dispatchEvent(event);
    }

    abstract addSelectionHandler(handler: SelectionHandler<java.util.List<T>>): HandlerRegistration;

    abstract focusList(): void;

    abstract getHasRowsData(): HasRowsData<T>;

    abstract getRowCellConfig(): CellConfig<T, any>;

    abstract getSelectionModel(): DefaultMultiSelectionModel<T>;


    abstract setFieldGetter(fieldGetter: (p1: T) => string): void;

    abstract setFilter(filter: Filter<T>): void;

    getFocusElement(): HTMLElement {
        return this.focusLogic.getFocusElement();
    }

    isDisabled(): boolean {
        return this.focusLogic.isDisabled();
    }

    setEnabled(enabled: boolean): void {
        this.focusLogic.setEnabled(enabled);
    }

}