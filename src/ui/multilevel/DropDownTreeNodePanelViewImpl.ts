import {DropDownTreeNodePanelView} from 'dncomponents/lib/multi/view/DropDownMultiLevelUi';
import {MouseEnterHandler, MouseLeaveHandler} from 'dncomponents/lib/corecls/handlers';
import {IsElement} from 'dncomponents/lib/corecls/IsElement';
import {TemplateParser, UiField} from 'dncomponents/lib/TemplateParser';
import {createPopper, Instance} from '@popperjs/core';
import {Placement} from '@popperjs/core/lib/enums';

export class DropDownTreeNodePanelViewImpl implements DropDownTreeNodePanelView {

    @UiField
    public root: HTMLElement;

    popper: Instance;

    public constructor(template: HTMLTemplateElement) {
        TemplateParser.create(template, this, true).bind();
        setTimeout(p => {
            this.root.style.left = '-30px !important';
        }, 200);
    }

    public asElement(): HTMLElement {
        return this.root;
    }

    public add(item: IsElement<any>) {
        this.root.appendChild(item.asElement());
    }

    public clear() {
        this.root.innerHTML = '';
    }

    public show(relativeTo: IsElement<any>, b: boolean, orientation: string) {
        if (b)
            this.root.classList.add('show');
        else
            this.root.classList.remove('show');
        if (this.popper == null) {
            this.popper = createPopper(relativeTo.asElement(), this.asElement(), {
                placement: <Placement>(orientation + '').toLowerCase(),
            });
        }
    }

    public addMouseEnterHandler(mouseEnterHandler: MouseEnterHandler) {
        mouseEnterHandler.addTo(this.asElement());
    }

    public addMouseLeaveHandler(mouseLeaveHandler: MouseLeaveHandler) {
        mouseLeaveHandler.addTo(this.asElement());
    }
}
