import {TemplateParser, UiField, UiStyle} from 'dncomponents/lib/TemplateParser';
import {Command} from 'dncomponents/lib/BaseComponent';
import {TabItemViewSlots} from 'dncomponents/lib/tab/view/TabItemViewSlots';
import {TabItemView} from 'dncomponents/lib/tab/view/TabItemView';

export class TabItemViewImpl implements TabItemView {

    @UiField
    tabItemNav: HTMLElement;
    @UiField
    tabItemPanel: HTMLElement;
    @UiField
    tabItemContent: HTMLElement;
    @UiStyle
    showTabContentStyle: string;
    @UiStyle
    active: string;


    public constructor(templateElement: HTMLTemplateElement) {
        TemplateParser.create(templateElement, this, true).bind();
    }

    public addItemSelectedHandler(handler: EventListener) {
        this.tabItemPanel.addEventListener('click', handler);
    }

    public select(b: boolean) {
        let ll: string[] = this.showTabContentStyle.split(' ');
        if (b) {
            this.tabItemPanel.classList.add(this.active);
            for (let str of ll) {
                this.tabItemContent.classList.add(str);
            }
        } else {
            this.tabItemPanel.classList.remove(this.active);
            for (let str of ll) {
                this.tabItemContent.classList.remove(str);
            }
        }
    }

    public setItemTitle(html: string) {
        this.tabItemPanel.textContent = html;
    }

    public setItemTitleHtml(html: string) {
        this.tabItemPanel.innerHTML = html;
    }


    public setItemContent(html: string) {
        this.tabItemContent.textContent = html;
    }


    public setImmediate(command: Command) {
    }


    public getTabItemNav(): HTMLElement {
        return this.tabItemNav;
    }

    public getTabItemContent(): HTMLElement {
        return this.tabItemContent;
    }

    tabItemViewSlots: TabItemViewSlots = new TabItemViewSlotsImpl(this);


    public getViewSlots(): TabItemViewSlots {
        return this.tabItemViewSlots;
    }


    public asElement(): HTMLElement {
        return this.tabItemPanel;
    }
}

export class TabItemViewSlotsImpl implements TabItemViewSlots {
    view: TabItemViewImpl;

    constructor(view: TabItemViewImpl) {
        this.view = view;
    }

    getContent(): HTMLElement {
        return this.view.tabItemContent;
    }

    getIcon(): HTMLElement {
        return null;
    }

    getTitle(): HTMLElement {
        return this.view.tabItemPanel;
    }

}