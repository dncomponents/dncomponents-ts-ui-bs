import {DialogView} from 'dncomponents/lib/modal/view/DialogView';
import {HandlerRegistration} from 'dncomponents/lib/corecls/events';
import {IsElement} from 'dncomponents/lib/corecls/IsElement';
import {ClickHandler, KeyDownHandler, MouseDownHandler, MouseMoveHandler, MouseUpHandler} from 'dncomponents/lib/corecls/handlers';
import {Util} from 'dncomponents/lib/corecls/Util';
import {javaemul} from 'j4ts';
import {DialogViewSlots} from 'dncomponents/lib/modal/view/DialogViewSlots';
import {TemplateParser, UiField} from 'dncomponents/lib/TemplateParser';

export class DialogViewImpl implements DialogView {

    static readonly VIEW_ID: string = 'default';
    @UiField
    public root: HTMLElement;
    @UiField
    public modalDialogPanel: HTMLElement;
    @UiField
    public header: HTMLElement;
    @UiField
    public body: HTMLElement;
    @UiField
    public footer: HTMLElement;
    @UiField
    public closeButton: HTMLElement;
    @UiField
    public closeHeader: HTMLElement;
    @UiField
    public titleHeader: HTMLElement;

    @UiField
    backDropDiv: HTMLDivElement;
    private backdrop: boolean;
    private closeOnEscape: boolean;
    private draggable: boolean;
    private backDrophandlerRegistration: HandlerRegistration;
    private escapeHandlerRegistration: HandlerRegistration;
    private mouseDownHandlerRegistration: HandlerRegistration;
    pos1: number = 0;
    pos2: number = 0;
    pos3: number = 0;
    pos4: number = 0;
    p: number;

    constructor(template: HTMLTemplateElement) {
        TemplateParser.create(template, this, true).bind();
        this.init();
    }

    private init() {
        this.backDropDiv.remove();
        this.modalDialogPanel.style.marginRight = '0';
        this.modalDialogPanel.style.marginLeft = '0';
        this.asElement().style.overflow = 'hidden';
    }


    public setHeader(element: IsElement<any>) {
        this.header.innerHTML = '';
        this.header.appendChild(element.asElement());
    }

    public setContent(element: HTMLElement) {
        this.body.innerHTML = '';
        this.body.appendChild(element);
    }


    public setTitle(title: string) {
        this.titleHeader.innerHTML = title;
    }

    public setFooter(el: IsElement<any>) {
        this.footer.innerHTML = '';
        this.footer.appendChild(el.asElement());
    }

    public addCloseHandler(onCloseCmd: () => void) {
        let clkHandler: ClickHandler = ClickHandler.onClick(evt => {
            evt.stopPropagation();
            evt.stopImmediatePropagation();
            onCloseCmd();
        });
        Util.addHandler(this.closeHeader, clkHandler);
        Util.addHandler(this.closeButton, clkHandler);
    }

    public show() {
        this.asElement().style.display = 'block';
        this.asElement().classList.add('show');
        this.modalDialogPanel.style.top = (((window.innerHeight / 2 | 0)) - ((this.modalDialogPanel.offsetHeight / 2 | 0))) + 'px';
        this.modalDialogPanel.style.left = (((window.innerWidth / 2 | 0)) - ((this.modalDialogPanel.offsetWidth / 2 | 0))) + 'px';
        if (this.backdrop) {
            Util.addToBody(this.backDropDiv);
        }
        if (this.closeOnEscape)
            this.root.focus();
    }


    public hide() {
        this.asElement().classList.remove('show');
        this.asElement().style.display = 'none';
        if (this.backdrop)
            document.body.removeChild(this.backDropDiv);
    }

    public addFooterElement(element: HTMLElement) {
        this.footer.appendChild(element);
    }

    public clearFooter() {
        this.footer.innerHTML = '';
    }

    public setWidth(width: string) {
        Util.setMinWidth(this.modalDialogPanel, width);
    }

    public setHeight(height: string) {
        Util.setMinHeight(this.modalDialogPanel, height);
    }

    public setBackDrop(backdrop: boolean) {
        this.backdrop = backdrop;
        if (this.backDrophandlerRegistration)
            this.remove(this.backDrophandlerRegistration);
        if (backdrop) {
            this.backDrophandlerRegistration = ClickHandler.onClick(() => {
                this.hide();
            }).addTo(this.backDropDiv);
        }
    }

    public setCloseOnEscape(closeOnEscape: boolean) {
        this.closeOnEscape = closeOnEscape;
        if (closeOnEscape) {
            this.root.setAttribute('tabindex', '-1');
            this.remove(this.escapeHandlerRegistration);
            this.escapeHandlerRegistration = KeyDownHandler.onKeyDown(evt => {
                if (evt.code === ('Escape')) {
                    this.hide();
                }
            }).addTo(this.root);
        } else {
            this.remove(this.escapeHandlerRegistration);
            this.root.removeAttribute('tabindex');
        }
    }

    public setDraggable(draggable: boolean) {
        this.remove(this.mouseDownHandlerRegistration);
        this.draggable = draggable;
        if (this.draggable) {
            this.mouseDownHandlerRegistration = MouseDownHandler.onMouseDown(e => {
                e.preventDefault();
                this.pos3 = e.clientX;
                this.pos4 = e.clientY;
                this.p = (this.pos4 - this.modalDialogPanel.offsetTop);
                let mouseMoveRegistration = MouseMoveHandler.onMouseDown(mm => {
                    mm.preventDefault();
                    // calculate the new cursor position:
                    this.pos1 = this.pos3 - mm.clientX;
                    this.pos2 = this.pos4 - mm.clientY;
                    this.pos3 = mm.clientX;
                    this.pos4 = mm.clientY;
                    // set the element's new position:
                    this.modalDialogPanel.style.top = (this.pos4 - this.p) - 25 + 'px';
                    this.modalDialogPanel.style.left = (this.modalDialogPanel.offsetLeft - this.pos1) + 'px';

                }).addTo(this.asElement());
                let mouseUpRegistration = MouseUpHandler.onMouseUp(evt => {
                    this.remove(mouseMoveRegistration);
                }).addTo(document);
            }).addTo(this.header);
        }
    }

    public setPosition(top: number, left: number) {
        this.modalDialogPanel.style.top = top + 'px';
        this.modalDialogPanel.style.left = left + 'px';
    }

    public getTopPosition(): number {
        let top: string = this.modalDialogPanel.style.top;
        return javaemul.internal.IntegerHelper.parseInt(top.substring(0, top.length - 2));
    }

    public getLeftPosition(): number {
        let left: string = this.modalDialogPanel.style.left;
        return javaemul.internal.IntegerHelper.parseInt(left.substring(0, left.length - 2));
    }

    private remove(registration: HandlerRegistration) {
        if (registration != null) registration.removeHandler();
    }

    public asElement(): HTMLElement {
        return this.root;
    }

    viewSlots: Slots = new Slots(this);

    public getViewSlots(): DialogViewSlots {
        return this.viewSlots;
    }

}

class Slots implements DialogViewSlots {
    view: DialogViewImpl;

    constructor(view: DialogViewImpl) {
        this.view = view;
    }

    getContentPanel(): HTMLElement {
        return this.view.body;
    }

    getFooterPanel(): HTMLElement {
        return this.view.footer;
    }

    getHeaderPanel(): HTMLElement {
        return this.view.header;
    }

}