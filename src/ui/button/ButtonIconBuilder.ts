import {BootstrapUi} from '../BootstrapUi';
import {ButtonSize} from './ButtonSize';
import {ButtonOutlineColorType} from './ButtonOutlineColorType';
import {ButtonColorType} from './ButtonColorType';
import {ButtonBuilderConst} from './ButtonBuilderConst';
import {HasStyle} from 'dncomponents/lib/corecls/HasStyle';
import {FontAwesome} from './FontAwesome';
import {FontAwesomeSize} from './FontAwesomeSize';
import {ButtonIconViewImpl} from './ButtonIconViewImpl';
import {StyleCmd} from 'dncomponents/lib/corecls/corecls';

export class ButtonIconBuilder {

    public static BASE_STYLE: StyleCmd =
        () => ButtonBuilderConst.getInstance().baseStyle;
    private __iconType: FontAwesome;
    private __iconSize: FontAwesomeSize;
    private colorType: ButtonColorType;
    private outlineColorType: ButtonOutlineColorType;
    private __size: ButtonSize;
    private templateElement: HTMLTemplateElement;
    static colorTypeId: string = 'color';
    static outlineColorTypeId: string = 'coloroutline';
    static sizeId: string = 'size';
    static iconTypeId: string = 'icontype';
    static iconSizeId: string = 'iconsize';

    public constructor() {
        if (this.__iconType === undefined) this.__iconType = null;
        if (this.__iconSize === undefined) this.__iconSize = null;
        if (this.colorType === undefined) this.colorType = null;
        if (this.outlineColorType === undefined) this.outlineColorType = null;
        if (this.__size === undefined) this.__size = null;
        if (this.templateElement === undefined) this.templateElement = null;
    }

    public iconSize(iconSize: FontAwesomeSize): ButtonIconBuilder {
        this.__iconSize = iconSize;
        return this;
    }

    public color(buttonColorType: ButtonColorType): ButtonIconBuilder {
        this.colorType = buttonColorType;
        return this;
    }

    public outlineColor(outlineColorType: ButtonOutlineColorType): ButtonIconBuilder {
        this.outlineColorType = outlineColorType;
        return this;
    }

    public size(buttonSize: ButtonSize): ButtonIconBuilder {
        this.__size = buttonSize;
        return this;
    }

    public iconType(iconType: FontAwesome): ButtonIconBuilder {
        this.__iconType = iconType;
        return this;
    }

    public template(templateElement: HTMLTemplateElement): ButtonIconBuilder {
        this.templateElement = templateElement;
        return this;
    }

    public static get(): ButtonIconBuilder {
        return new ButtonIconBuilder();
    }

    public build(): ButtonIconViewImpl {
        if (this.templateElement == null)
            this.templateElement = BootstrapUi.getUi().buttonIcon;
        let iconBootstrapView: ButtonIconViewImpl = new ButtonIconViewImpl(this.templateElement);
        iconBootstrapView.root.className = ButtonIconBuilder.BASE_STYLE() + HasStyle.appendString(this.colorType) + HasStyle.appendString(this.outlineColorType)
            + HasStyle.appendString(this.__size);
        iconBootstrapView.iconPanel.className = HasStyle.appendString(this.__iconType) + HasStyle.appendString(this.__iconSize);
        return iconBootstrapView;
    }
}
