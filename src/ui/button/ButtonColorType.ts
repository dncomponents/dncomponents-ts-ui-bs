import {ButtonBuilderConst} from './ButtonBuilderConst';
import {EnumLookUp} from 'dncomponents/lib/views/ComponentsViews';
import {BaseTypeHasStyle} from 'dncomponents/lib/corecls/corecls';


export class ButtonColorType extends BaseTypeHasStyle {
    public static readonly DANGER: ButtonColorType = new ButtonColorType(() => ButtonBuilderConst.getInstance().btnDanger);
    public static readonly DARK: ButtonColorType = new ButtonColorType(() => ButtonBuilderConst.getInstance().btnDark);
    public static readonly INFO: ButtonColorType = new ButtonColorType(() => ButtonBuilderConst.getInstance().btnInfo);
    public static readonly LIGHT: ButtonColorType = new ButtonColorType(() => ButtonBuilderConst.getInstance().btnLight);
    public static readonly LINK: ButtonColorType = new ButtonColorType(() => ButtonBuilderConst.getInstance().btnLink);
    public static readonly PRIMARY: ButtonColorType = new ButtonColorType(() => ButtonBuilderConst.getInstance().btnPrimary);
    public static readonly SECONDARY: ButtonColorType = new ButtonColorType(() => ButtonBuilderConst.getInstance().btnSecondary);
    public static readonly SUCCESS: ButtonColorType = new ButtonColorType(() => ButtonBuilderConst.getInstance().btnSuccess);
    public static readonly WARNING: ButtonColorType = new ButtonColorType(() => ButtonBuilderConst.getInstance().btnWarning);

    public static lookUp: EnumLookUp<ButtonColorType> = new EnumLookUp<ButtonColorType>();

}

ButtonColorType.lookUp.init(ButtonColorType);