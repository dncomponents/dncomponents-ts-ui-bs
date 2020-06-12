 import {ButtonBuilderConst} from './ButtonBuilderConst';
import {EnumLookUp} from 'dncomponents/lib/views/ComponentsViews';
 import {BaseTypeHasStyle} from 'dncomponents/lib/corecls/corecls';

export class ButtonOutlineColorType extends BaseTypeHasStyle {
    public static readonly DANGER: ButtonOutlineColorType = new ButtonOutlineColorType(() => ButtonBuilderConst.getInstance().btnOutlineDanger);
    public static readonly DARK: ButtonOutlineColorType = new ButtonOutlineColorType(() => ButtonBuilderConst.getInstance().btnDark);
    public static readonly INFO: ButtonOutlineColorType = new ButtonOutlineColorType(() => ButtonBuilderConst.getInstance().btnOutlineInfo);
    public static readonly LIGHT: ButtonOutlineColorType = new ButtonOutlineColorType(() => ButtonBuilderConst.getInstance().btnOutlineLight);
    public static readonly LINK: ButtonOutlineColorType = new ButtonOutlineColorType(() => ButtonBuilderConst.getInstance().btnOutlineLink);
    public static readonly PRIMARY: ButtonOutlineColorType = new ButtonOutlineColorType(() => ButtonBuilderConst.getInstance().btnOutlinePrimary);
    public static readonly SECONDARY: ButtonOutlineColorType = new ButtonOutlineColorType(() => ButtonBuilderConst.getInstance().btnOutlineSecondary);
    public static readonly SUCCESS: ButtonOutlineColorType = new ButtonOutlineColorType(() => ButtonBuilderConst.getInstance().btnOutlineSuccess);
    public static readonly WARNING: ButtonOutlineColorType = new ButtonOutlineColorType(() => ButtonBuilderConst.getInstance().btnOutlineWarning);

    public static lookUp: EnumLookUp<ButtonOutlineColorType> = new EnumLookUp<ButtonOutlineColorType>();
}

ButtonOutlineColorType.lookUp.init(ButtonOutlineColorType);