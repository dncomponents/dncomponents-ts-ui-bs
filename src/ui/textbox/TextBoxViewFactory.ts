import {ViewFactory} from 'dncomponents/lib/views/ComponentsViews';
import {BootstrapUi} from '../BootstrapUi';
import {TextBoxView} from 'dncomponents/lib/textbox/TextBoxView';
import {TextBoxViewImpl} from './TextBoxViewImpl';

export namespace TextBoxViewFactory {

    export class DefaultTextBoxViewFactory implements ViewFactory<TextBoxView> {

        private static instance: DefaultTextBoxViewFactory;

        private constructor() {
        }

        public static getInstance(): DefaultTextBoxViewFactory {
            if (this.instance == null)
                this.instance = new DefaultTextBoxViewFactory();
            return this.instance;
        }


        public getView(attributes: Map<string, string>, templateElement: HTMLTemplateElement): TextBoxView {
            if (templateElement == null)
                templateElement = (BootstrapUi.getUi()).textbox;
            return new TextBoxViewImpl(templateElement);
        }

        public getId(): string {
            return TextBoxViewImpl.VIEW_ID;
        }

        public getClazz(): string {
            return 'TextBoxViewImpl';
        }
    }

}