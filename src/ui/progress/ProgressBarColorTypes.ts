import {ProgressBuilderConst} from './ProgressBuilderConst';
import {EnumLookUp} from 'dncomponents/lib/views/ComponentsViews';
import {BaseTypeHasStyle} from 'dncomponents/lib/corecls/corecls';

export class ProgressBarColorTypes extends BaseTypeHasStyle {
    public static readonly SUCCESS: ProgressBarColorTypes = new ProgressBarColorTypes(() => ProgressBuilderConst.getInstance().success);
    public static readonly INFO: ProgressBarColorTypes = new ProgressBarColorTypes(() => ProgressBuilderConst.getInstance().info);
    public static readonly WARNING: ProgressBarColorTypes = new ProgressBarColorTypes(() => ProgressBuilderConst.getInstance().warning);
    public static readonly DANGER: ProgressBarColorTypes = new ProgressBarColorTypes(() => ProgressBuilderConst.getInstance().danger);
    public static lookUp: EnumLookUp<ProgressBarColorTypes> = new EnumLookUp<ProgressBarColorTypes>();
}

ProgressBarColorTypes.lookUp.init(ProgressBarColorTypes);