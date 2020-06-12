import {FilterPanelViewImpl} from './TableUiBs';
import {FilterPanelListView} from 'dncomponents/lib/table/views/FilterPanelListView';
import {UiField} from 'dncomponents/lib/TemplateParser';
import {AutocompleteView} from 'dncomponents/lib/autocomplete/views/AutocompleteView';
import {AutocompleteViewImpl} from '../autocomplete/AutocompleteViewImpl';
import {AutocompleteMultiSelectView} from 'dncomponents/lib/autocomplete/views/AutocompleteMultiSelectView';
import {AutocompleteListOrTreeMultiSelectViewImpl} from '../autocomplete/AutocompleteListOrTreeMultiSelectViewImpl';
import {Util} from 'dncomponents/lib/corecls/Util';

export class FilterPanelViewImplList<T> extends FilterPanelViewImpl<T> implements FilterPanelListView<T> {

    private autocompleteMultiSelectUi: AutocompleteMultiSelectView<any>;

    @UiField
    public accTemplate: HTMLTemplateElement;
    @UiField
    public autocompleteMs: HTMLTemplateElement;


    public constructor(templateElement: HTMLTemplateElement) {
        super(templateElement);
        this.init();
    }

    private init(): void {
        Util.setVisible(this.clear, false);
    }

    public getAutocompleteView(): AutocompleteView<any> {
        return new AutocompleteViewImpl(this.accTemplate);
    }

    public getAutocompleteMultiSelectUi(): AutocompleteMultiSelectView<any> {
        if (this.autocompleteMultiSelectUi == null)
            this.autocompleteMultiSelectUi = AutocompleteListOrTreeMultiSelectViewImpl.getInstance(this.autocompleteMs, false);
        return this.autocompleteMultiSelectUi;
    }
}