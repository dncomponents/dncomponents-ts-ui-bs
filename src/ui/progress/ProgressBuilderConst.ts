import {TemplateParser, UiStyle} from 'dncomponents/lib/TemplateParser';
import {BootstrapUi} from '../BootstrapUi';

export class ProgressBuilderConst {
    @UiStyle
    striped: string;
    @UiStyle
    animated: string;
    @UiStyle
    success: string;
    @UiStyle
    info: string;
    @UiStyle
    warning: string;
    @UiStyle
    danger: string;

    static instance: ProgressBuilderConst = null;

    public static getInstance(): ProgressBuilderConst {
        if (ProgressBuilderConst.instance == null)
            ProgressBuilderConst.instance = new ProgressBuilderConst();
        return ProgressBuilderConst.instance;
    }

    private constructor() {
        TemplateParser.create(BootstrapUi.getUi().progressBuilder, this, true).bind();
    }
}


