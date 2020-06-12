import {ProgressView} from 'dncomponents/lib/progress/view/ProgressView';
import {TemplateParser, UiField} from 'dncomponents/lib/TemplateParser';
import {ViewFactory} from 'dncomponents/lib/views/ComponentsViews';
import {ProgressBarTypes} from './ProgressBarTypes';
import {java} from 'j4ts';
import {ProgressBarColorTypes} from './ProgressBarColorTypes';
import {Ui} from 'dncomponents/lib/views/Ui';
import {HasStyle} from 'dncomponents/lib/corecls/HasStyle';
import List = java.util.List;
import ArrayList = java.util.ArrayList;
import Collectors = java.util.stream.Collectors;

export class ProgressViewImpl implements ProgressView {
    public static VIEW_ID: string = 'default';

    @UiField
    public root: HTMLElement;
    @UiField
    public progressBar: HTMLElement;


    constructor(template: HTMLTemplateElement) {
        TemplateParser.create(template, this, true).bind();
    }


    public setBarWidth(percent: number) {
        this.progressBar.style.width = (percent + '%');
    }

    public setBarText(text: string) {
        this.progressBar.textContent = text;
    }

    public setMinimumWidth(minimumWidth: number) {
        this.progressBar.style.minWidth = (minimumWidth + 'em');
    }

    public asElement(): HTMLElement {
        return this.root;
    }
}

export namespace ProgressViewImpl {
    export class Builder {
        private static BASE_STYLE = 'progress-bar';
        private types: List<ProgressBarTypes> = new ArrayList<ProgressBarTypes>();
        private colorType: ProgressBarColorTypes;
        private templateElement: HTMLTemplateElement;


        public static typeId = 'type';
        public static colorTypeId = 'color';

        private Builder() {
        }

        public color(colorType: ProgressBarColorTypes): Builder {
            this.colorType = colorType;
            return this;
        }

        public static get(): Builder {
            return new Builder();
        }

        public type(type: ProgressBarTypes): Builder {
            this.types.add(type);
            return this;
        }

        public typeList(types: List<ProgressBarTypes>): Builder {
            this.types.addAll(types);
            return this;
        }


        public template(templateElement: HTMLTemplateElement): Builder {
            this.templateElement = templateElement;
            return this;
        }


        public build(): ProgressViewImpl {
            let progressView = null;
            if (this.templateElement == null)
                progressView = <ProgressViewImpl>Ui.get().getProgressView();
            else
                progressView = new ProgressViewImpl(this.templateElement);
            progressView.progressBar.className = Builder.BASE_STYLE + ' '
                + this.types.stream().map(e => HasStyle.appendString(e)).collect(Collectors.joining(' ')) + ' '
                + HasStyle.appendString(this.colorType);
            return progressView;
        }
    }

}

export class ProgressViewFactory implements ViewFactory<ProgressView> {

    private static instance: ProgressViewFactory;

    private constructor() {
    }

    public static getInstance(): ProgressViewFactory {
        if (this.instance == null)
            return this.instance = new ProgressViewFactory();
        return this.instance;
    }

    public getView(attributes: Map<string, string>, templateElement: HTMLTemplateElement): ProgressView {
        let typesStringList = attributes.get(ProgressViewImpl.Builder.typeId);
        let types: List<ProgressBarTypes> = new ArrayList<ProgressBarTypes>();
        if (typesStringList != null) {
            let res: string[] = typesStringList.split(' ');
            for (let re of res) {
                types.add(ProgressBarTypes.lookUp.getValue(re));
            }
        }
        let color = ProgressBarColorTypes.lookUp.getValue(attributes.get(ProgressViewImpl.Builder.colorTypeId));
        let progressView = ProgressViewImpl.Builder.get().typeList(types).color(color).build();
        return progressView;
    }

    public getId(): string {
        return ProgressViewImpl.VIEW_ID;
    }

    public getClazz(): string {
        return 'ProgressViewImpl';
    }
}
