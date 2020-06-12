import {ButtonBuilderConst} from './ButtonBuilderConst';
import {EnumLookUp} from 'dncomponents/lib/views/ComponentsViews';
import {BaseTypeHasStyle} from 'dncomponents/lib/corecls/corecls';

export class ButtonSize extends BaseTypeHasStyle {
    public static readonly LARGE: ButtonSize = new ButtonSize(() => ButtonBuilderConst.getInstance().large);
    public static readonly SMALL: ButtonSize = new ButtonSize(() => ButtonBuilderConst.getInstance().small);
    public static readonly BLOCK: ButtonSize = new ButtonSize(() => ButtonBuilderConst.getInstance().block);

    public static lookUp: EnumLookUp<ButtonSize> = new EnumLookUp<ButtonSize>();
}

ButtonSize.lookUp.init(ButtonSize);