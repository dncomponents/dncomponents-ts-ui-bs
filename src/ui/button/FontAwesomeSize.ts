 import {initClassMap} from 'dncomponents/lib/views/ComponentsViews';
 import {BaseTypeHasStyle} from 'dncomponents/lib/corecls/corecls';

export class FontAwesomeSize extends BaseTypeHasStyle {
    public static readonly EXTRA_SMALL: FontAwesomeSize = new FontAwesomeSize(() => 'xs');
    public static readonly SMALL: FontAwesomeSize = new FontAwesomeSize(() => 'sm');
    public static readonly LARGE: FontAwesomeSize = new FontAwesomeSize(() => 'lg');
    public static readonly TWO_TIMES: FontAwesomeSize = new FontAwesomeSize(() => 'sm');
    public static readonly THREE_TIMES: FontAwesomeSize = new FontAwesomeSize(() => '2x');
    public static readonly FIVE_TIMES: FontAwesomeSize = new FontAwesomeSize(() => '3x');
    public static readonly SEVENT_TIMES: FontAwesomeSize = new FontAwesomeSize(() => '6x');

    private static fontAwesomeSizeMap: Map<string, FontAwesomeSize>;

    public static get(key: string): FontAwesomeSize {
        if (this.fontAwesomeSizeMap == null) {
            this.fontAwesomeSizeMap = new Map<string, FontAwesomeSize>();
            initClassMap(this, this.fontAwesomeSizeMap);
        }
        return this.fontAwesomeSizeMap.get(key);
    }

}