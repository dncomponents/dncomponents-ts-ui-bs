 import {ProgressBuilderConst} from './ProgressBuilderConst';
import {EnumLookUp} from 'dncomponents/lib/views/ComponentsViews';
 import {BaseTypeHasStyle} from 'dncomponents/lib/corecls/corecls';

export class ProgressBarTypes extends BaseTypeHasStyle {
    public static readonly STRIPED: ProgressBarTypes = new ProgressBarTypes(() => ProgressBuilderConst.getInstance().striped);
    public static readonly ANIMATED: ProgressBarTypes = new ProgressBarTypes(() => ProgressBuilderConst.getInstance().animated);
    public static lookUp: EnumLookUp<ProgressBarTypes> = new EnumLookUp<ProgressBarTypes>();

}

ProgressBarTypes.lookUp.init(ProgressBarTypes);