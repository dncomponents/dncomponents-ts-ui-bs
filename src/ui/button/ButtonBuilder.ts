import {ButtonBuilderConst} from './ButtonBuilderConst';
import {BootstrapUi} from '../BootstrapUi';
import {ButtonViewImpl} from './ButtonViewImpl';
import {HasStyle} from 'dncomponents/lib/corecls/HasStyle';
import {ButtonColorType} from './ButtonColorType';
import {ButtonOutlineColorType} from './ButtonOutlineColorType';
import {ButtonSize} from './ButtonSize';
import {StyleCmd} from 'dncomponents/lib/corecls/corecls';

export class ButtonBuilder {

    public static BASE_STYLE: StyleCmd = () => ButtonBuilderConst.getInstance().baseStyle;
    private colorType: ButtonColorType;
    private outlineColorType: ButtonOutlineColorType;
    private __size: ButtonSize;
    private templateElement: HTMLTemplateElement;
    static colorTypeId: string = 'color';
    static outlineColorTypeId: string = 'coloroutline';
    static sizeId: string = 'size';

    constructor() {
        if (this.colorType === undefined) this.colorType = null;
        if (this.outlineColorType === undefined) this.outlineColorType = null;
        if (this.__size === undefined) this.__size = null;
        if (this.templateElement === undefined) this.templateElement = null;
    }

    public static get(): ButtonBuilder {
        return new ButtonBuilder();
    }

    public color(buttonSize: ButtonColorType): ButtonBuilder {
        this.colorType = buttonSize;
        return this;
    }

    public outlineColor(outlineColorType: ButtonOutlineColorType): ButtonBuilder {
        this.outlineColorType = outlineColorType;
        return this;
    }

    public size(buttonSize: ButtonSize): ButtonBuilder {
        this.__size = buttonSize;
        return this;
    }

    public template(templateElement: HTMLTemplateElement): ButtonBuilder {
        this.templateElement = templateElement;
        return this;
    }

    public build(): ButtonViewImpl {
        if (this.templateElement == null)
            this.templateElement = BootstrapUi.getUi().button;
        let buttonBootstrapView: ButtonViewImpl = new ButtonViewImpl(this.templateElement);
        if (this.colorType == null && this.outlineColorType == null)
            this.colorType = ButtonColorType.PRIMARY;
        let style: string = ButtonBuilder.BASE_STYLE() + HasStyle.appendString(this.colorType)
            + HasStyle.appendString(this.outlineColorType) + HasStyle.appendString(this.__size);
        buttonBootstrapView.root.className = style;
        return buttonBootstrapView;
    }
}
