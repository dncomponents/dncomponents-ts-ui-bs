import {ViewFactory} from 'dncomponents/lib/views/ComponentsViews';
import {BootstrapUi} from '../BootstrapUi';
import {TextBoxView} from 'dncomponents/lib/textbox/TextBoxView';
import {TextBoxViewImpl} from '../textbox/TextBoxViewImpl';
import {TextAreaViewImpl} from './TextAreaViewImpl';

export namespace TextAreaViewFactory {

    export class DefaultTextAreaViewFactory implements ViewFactory<TextBoxView> {

        private static instance: DefaultTextAreaViewFactory;

        private constructor() {
        }

        public static getInstance(): DefaultTextAreaViewFactory {
            if (this.instance == null)
                this.instance = new DefaultTextAreaViewFactory();
            return this.instance;
        }


        public getView(attributes: Map<string, string>, templateElement: HTMLTemplateElement): TextBoxView {
            if (templateElement == null)
                templateElement = (BootstrapUi.getUi()).textarea;
            return new TextAreaViewImpl(templateElement);
        }

        public getId(): string {
            return TextAreaViewImpl.VIEW_ID;
        }

        public getClazz(): string {
            return 'TextAreaViewImpl';
        }
    }

}