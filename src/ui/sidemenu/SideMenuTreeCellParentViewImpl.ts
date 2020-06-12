/**
 * @author nikolasavic
 */
import {TreeCellParentViewImpl} from '../tree/TreeUiImpl';
import {TemplateParser, UiField} from 'dncomponents/lib/TemplateParser';
import {EventHandler} from 'dncomponents/lib/corecls/events';

export class SideMenuTreeCellParentViewImpl extends TreeCellParentViewImpl {

    @UiField
    valuePanelParent: HTMLElement;

    constructor(template?: HTMLTemplateElement) {
        super();
        TemplateParser.create(template, this, true).bind();
    }

    public addOpenCloseHandler(handler: EventHandler<any>): void {
        handler.addTo(this.root);
    }

    public setOpened(b: boolean): void {
        if (!b)
            this.valuePanelParent.classList.add(this.closeStyle);
        else
            this.valuePanelParent.classList.remove(this.closeStyle);
    }

}
