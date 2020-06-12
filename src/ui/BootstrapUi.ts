import {Ui} from 'dncomponents/lib/views/Ui';
import {ComponentsViews, IconRenderer, TemplateMap, ViewFactory} from 'dncomponents/lib/views/ComponentsViews';
import {ButtonView} from 'dncomponents/lib/button/view/ButtonView';
import {ButtonViewImpl} from './button/ButtonViewImpl';
import {TextBoxView} from 'dncomponents/lib/textbox/TextBoxView';
import {TextBoxViewImpl} from './textbox/TextBoxViewImpl';
import {TemplateParser, UiField} from 'dncomponents/lib/TemplateParser';
import {CheckBoxView} from 'dncomponents/lib/checkbox/CheckBoxView';
import {CheckBoxViewImpl} from './checkbox/CheckBoxViewImpl';
import {SetMultimap} from '@teppeis/multimaps';
import {RadioView} from 'dncomponents/lib/checkbox/RadioView';
import {RadioViewImpl} from './radio/RadioViewImpl';
import {AccordionUi} from 'dncomponents/lib/accordion/accrodion_views';
import {AccordionUiImpl} from './accordion/AccordionUiImpl';
import {ListUi} from 'dncomponents/lib/list/ListUi';
import {ListUiImpl} from './list/ListUiImpl';
import {AutocompleteMultiSelectView} from 'dncomponents/lib/autocomplete/views/AutocompleteMultiSelectView';
import {AutocompleteListOrTreeMultiSelectViewImpl} from './autocomplete/AutocompleteListOrTreeMultiSelectViewImpl';
import {AutocompleteView} from 'dncomponents/lib/autocomplete/views/AutocompleteView';
import {AutocompleteViewImpl} from './autocomplete/AutocompleteViewImpl';
import {DropDownUi} from 'dncomponents/lib/dropdown/DropDownUi';
import {DropDownUiImpl} from './dropdown/DropDownUiImpl';
import {TooltipView} from 'dncomponents/lib/tooltip/view/TooltipView';
import {TooltipViewImpl} from './tooltip/TooltipViewImpl';
import {PopoverView} from 'dncomponents/lib/popover/view/PopoverView';
import {PopoverViewImpl} from './popover/PopoverViewImpl';
import {FilterPanelView, PagerUi, TableUi, TableView} from 'dncomponents/lib/table/views/TableUi';
import {TableUiImpl} from './table/TableUiBs';
import {TreeUi} from 'dncomponents/lib/tree/view/TreeUi';
import {TreeUiImpl} from './tree/TreeUiImpl';
import {SideMenuView} from 'dncomponents/lib/sidemenu/view/SideMenuView';
import {SideMenuViewImpl} from './sidemenu/SideMenuViewImpl';
import {TextAreaViewImpl} from './textarea/TextAreaViewImpl';
import {AutocompleteTreeView} from 'dncomponents/lib/autocomplete/views/AutocompleteTreeView';
import {AutocompleteTreeViewImpl} from './autocomplete/AutocompleteTreeViewImpl';
import {ButtonViewFactory} from './button/ButtonViewFactory';
import {DropDownMultiLevelUi} from 'dncomponents/lib/multi/view/DropDownMultiLevelUi';
import {DropDownMultiLevelUiImpl} from './multilevel/DropDownMultiLevelUiImpl';
import {DialogView} from 'dncomponents/lib/modal/view/DialogView';
import {DialogViewImpl} from './dialog/DialogViewImpl';
import {ProgressView} from 'dncomponents/lib/progress/view/ProgressView';
import {ProgressViewFactory, ProgressViewImpl} from './progress/ProgressViewImpl';
import {TabUiFactory} from './tab/TabUiFactory';
import {TabUi} from 'dncomponents/lib/tab/view/TabUi';
import {TabUiImpl} from './tab/TabUiImpl';
import {PagerUiImpl} from './table/pager/PagerUiImpl';
import {MainViewSlots} from 'dncomponents/lib/BaseComponent';
import {TableTreeUi} from 'dncomponents/lib/table/TableTreeUi';
import {TableTreeUiImpl} from './table/TableTreeUiImpl';
import {CheckBoxViewFactory} from './checkbox/CheckBoxViewFactory';
import {AccordionViewFactory} from './accordion/AccordionViewFactory';
import {SideMenuViewFactory} from './sidemenu/SideMenuViewFactory';
import {AutocompleteViewFactory} from './autocomplete/AutocompleteViewFactory';
import {TreeViewFactory} from './tree/TreeViewFactory';
import {RadioViewFactory} from './radio/RadioViewFactory';
import {DropDownViewFactory} from './dropdown/DropDownViewFactory';
import {ListDataViewFactory} from './list/ListDataViewFactory';
import {DialogViewFactory} from './dialog/DialogViewFactory';
import {DropDownMultiLevelViewFactory} from './multilevel/DropDownMultiLevelViewFactory';
import {PopoverViewFactory} from './popover/PopoverViewFactory';
import {TableViewFactory} from './table/TableViewFactory';
import {TextAreaViewFactory} from './textarea/TextAreaViewFactory';
import {TextBoxViewFactory} from './textbox/TextBoxViewFactory';
import {TooltipViewFactory} from './tooltip/TooltipViewFactory';
import {Util} from "dncomponents/lib/corecls/Util";
import {uiBs} from "./BootstrapUiHtml";
import {FilterPanelViewImplList} from './table/FilterPanelViewImplList';
import DefaultButtonIconViewFactory = ButtonViewFactory.DefaultButtonIconViewFactory;
import DefaultButtonViewFactory = ButtonViewFactory.DefaultButtonViewFactory;

export class BootstrapUi implements ComponentsViews {
    @UiField
    button: HTMLTemplateElement;
    @UiField
    textbox: HTMLTemplateElement;
    @UiField
    checkbox: HTMLTemplateElement;
    @UiField
    radio: HTMLTemplateElement;
    @UiField
    accordionUi: HTMLTemplateElement;
    @UiField
    list: HTMLTemplateElement;
    @UiField
    autocomplete: HTMLTemplateElement;
    @UiField
    autocompleteMultiSelect: HTMLTemplateElement;
    @UiField
    dropDownUi: HTMLTemplateElement;
    @UiField
    dropDownMultiLevelUi: HTMLTemplateElement;
    @UiField
    popover: HTMLTemplateElement;
    @UiField
    tooltip: HTMLTemplateElement;
    @UiField
    tableUi: HTMLTemplateElement;
    @UiField
    tree: HTMLTemplateElement;
    @UiField
    sidemenu: HTMLTemplateElement;
    @UiField
    textarea: HTMLTemplateElement;
    @UiField
    autocompleteTree: HTMLTemplateElement;
    @UiField
    buttonBuilder: HTMLTemplateElement;
    @UiField
    buttonIcon: HTMLTemplateElement;
    @UiField
    modalDialog: HTMLTemplateElement;
    @UiField
    progress: HTMLTemplateElement;
    @UiField
    progressBuilder: HTMLTemplateElement;
    @UiField
    tabUi: HTMLTemplateElement;
    @UiField
    pagerUi: HTMLTemplateElement;
    @UiField
    simplecheckbox: HTMLTemplateElement;
    @UiField
    filterPanelList: HTMLTemplateElement;

    public static getUi<S extends BootstrapUi>(): S {
        return <S>Ui.get();
    }

    constructor() {
        let template = Util.createTemplate();
        template.innerHTML = uiBs;
        TemplateParser.create(template, this, true).bind();

        this.registeredViewFactoriesList.put('Accordion', AccordionViewFactory.DefaultAccordionViewFactory.getInstance());
        this.registeredViewFactoriesList.put('Autocomplete', AutocompleteViewFactory.DefaultAutocompleteViewFactory.getInstance());
        this.registeredViewFactoriesList.put('Button', DefaultButtonIconViewFactory.getInstance());
        this.registeredViewFactoriesList.put('Button', DefaultButtonViewFactory.getInstance());
        this.registeredViewFactoriesList.put('CheckBox', CheckBoxViewFactory.DefaultCheckBoxViewFactory.getInstance());
        this.registeredViewFactoriesList.put('CheckBox', CheckBoxViewFactory.DefaultSimpleCheckBoxViewFactory.getInstance());
        this.registeredViewFactoriesList.put('Dialog', DialogViewFactory.DefaultDialogViewFactory.getInstance());
        this.registeredViewFactoriesList.put('DropDown', DropDownViewFactory.DefaultDropDownViewFactory.getInstance());
        this.registeredViewFactoriesList.put('DropDownMultiLevel', DropDownMultiLevelViewFactory.DefaultDropDownMultiLevelViewFactory.getInstance());
        this.registeredViewFactoriesList.put('ListData', ListDataViewFactory.DefaultListDataViewFactory.getInstance());
        this.registeredViewFactoriesList.put('Popover', PopoverViewFactory.DefaultPopoverViewFactory.getInstance());
        this.registeredViewFactoriesList.put('Progress', ProgressViewFactory.getInstance());
        this.registeredViewFactoriesList.put('Radio', RadioViewFactory.DefaultRadioViewFactory.getInstance());
        this.registeredViewFactoriesList.put('SideMenu', SideMenuViewFactory.DefaultSideMenuViewFactory.getInstance());
        this.registeredViewFactoriesList.put('Tab', TabUiFactory.DefaultTabUiFactory.getInstance());
        this.registeredViewFactoriesList.put('Table', TableViewFactory.DefaultTableViewFactory.getInstance());
        this.registeredViewFactoriesList.put('TextArea', TextAreaViewFactory.DefaultTextAreaViewFactory.getInstance());
        this.registeredViewFactoriesList.put('TextBox', TextBoxViewFactory.DefaultTextBoxViewFactory.getInstance());
        this.registeredViewFactoriesList.put('Tooltip', TooltipViewFactory.DefaultTooltipViewFactory.getInstance());
        this.registeredViewFactoriesList.put('Tree', TreeViewFactory.DefaultTreeViewFactory.getInstance());
    }

    registeredViewFactoriesList = new SetMultimap<string, ViewFactory<any>>();
    registeredTemplateList = new SetMultimap<string, TemplateMap>();

    getButtonView(): ButtonView {
        return new ButtonViewImpl(this.button);
    }

    getTextBoxView(): TextBoxView {
        return new TextBoxViewImpl(this.textbox);
    }

    getCheckBoxView(): CheckBoxView {
        return new CheckBoxViewImpl(this.checkbox);
    }

    getRegisteredViewFactoriesList(): SetMultimap<string, ViewFactory<any>> {
        return this.registeredViewFactoriesList;
    }

    getRegisteredTemplateList(): SetMultimap<string, TemplateMap> {
        return this.registeredTemplateList;
    }

    getRadioView(): RadioView {
        return new RadioViewImpl(this.radio);
    }

    getAccordionUi(): AccordionUi {
        return new AccordionUiImpl(this.accordionUi);
    }

    getListUi(): ListUi {
        return new ListUiImpl(this.list);
    }

    getAutocompleteView(): AutocompleteView<any> {
        return new AutocompleteViewImpl(this.autocomplete);
    }

    getAutocompleteMultiSelectView<T>(tree: boolean): AutocompleteMultiSelectView<T> {
        return AutocompleteListOrTreeMultiSelectViewImpl.getInstance(this.autocompleteMultiSelect, tree);
    }

    getDropDownUi(): DropDownUi {
        return new DropDownUiImpl(this.dropDownUi);
    }

    getTooltipView(): TooltipView<MainViewSlots> {
        return new TooltipViewImpl(this.tooltip);
    }

    getPopoverView(): PopoverView {
        return new PopoverViewImpl(this.popover);
    }

    getTableUi(): TableUi {
        return new TableUiImpl(this.tableUi);
    }

    getTreeUi(): TreeUi {
        return new TreeUiImpl(this.tree);
    }

    getSideMenuView(): SideMenuView {
        return new SideMenuViewImpl(this.sidemenu);
    }

    getTextAreaView(): TextBoxView {
        return new TextAreaViewImpl(this.textarea);
    }

    getAutocompleteTreeView(): AutocompleteTreeView<any> {
        return new AutocompleteTreeViewImpl(this.autocompleteTree);
    }

    getDropDownMultiLevelUi(): DropDownMultiLevelUi {
        return new DropDownMultiLevelUiImpl(this.dropDownMultiLevelUi);
    }

    getModalDialogView(): DialogView {
        return new DialogViewImpl(this.modalDialog);
    }

    getProgressView(): ProgressView {
        return new ProgressViewImpl(this.progress);
    }

    getTabUi(): TabUi {
        return new TabUiImpl(this.tabUi);
    }

    getIconRenderer(): IconRenderer {
        return new FontAwesomeIconRenderer();
    }

    getPagerUi(): PagerUi<any> {
        return new PagerUiImpl(this.pagerUi);
    }

    getTableTreeUi(): TableTreeUi {
        return new TableTreeUiImpl();
    }

    getTreeGroupBy(rootView: TableView): TableTreeUi {
        return new TableTreeUiImplGroup(rootView);
    }

    getFilterPanelListView(): FilterPanelView<any> {
        return new FilterPanelViewImplList(this.filterPanelList);
    }

}

class TableTreeUiImplGroup extends TableTreeUiImpl {

    rootView: TableView;

    constructor(root: TableView) {
        super();
        this.rootView = root;
    }

    getRootView(): TableView {
        return this.rootView;
    }
}

class FontAwesomeIconRenderer implements IconRenderer {
    render(element: HTMLElement, icon: string): void {
        if (element != null)
            element.className = icon;
    }
}