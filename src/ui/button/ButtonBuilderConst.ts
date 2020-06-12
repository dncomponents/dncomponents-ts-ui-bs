import {TemplateParser, UiStyle} from 'dncomponents/lib/TemplateParser';
import {BootstrapUi} from '../BootstrapUi';

export class ButtonBuilderConst {

    @UiStyle
    baseStyle: string;
    @UiStyle
    btnDanger: string;
    @UiStyle
    btnSuccess: string;
    @UiStyle
    btnWarning: string;
    @UiStyle
    btnPrimary: string;
    @UiStyle
    btnSecondary: string;
    @UiStyle
    btnLight: string;
    @UiStyle
    btnDark: string;
    @UiStyle
    btnInfo: string;
    @UiStyle
    btnLink: string;
    @UiStyle
    btnOutlineSuccess: string;
    @UiStyle
    btnOutlineInfo: string;
    @UiStyle
    btnOutlineWarning: string;
    @UiStyle
    btnOutlineDanger: string;
    @UiStyle
    btnOutlinePrimary: string;
    @UiStyle
    btnOutlineSecondary: string;
    @UiStyle
    btnOutlineLight: string;
    @UiStyle
    btnOutlineDark: string;
    @UiStyle
    btnOutlineLink: string;
    @UiStyle
    small: string;
    @UiStyle
    large: string;
    @UiStyle
    block: string;

    private static instance: ButtonBuilderConst = null;

    public static getInstance(): ButtonBuilderConst {
        if (ButtonBuilderConst.instance == null)
            ButtonBuilderConst.instance = new ButtonBuilderConst();
        return ButtonBuilderConst.instance;
    }

    private constructor() {
        TemplateParser.create(BootstrapUi.getUi().buttonBuilder, this, true).bind();
    }

}
