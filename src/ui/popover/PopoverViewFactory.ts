import {ViewFactory} from 'dncomponents/lib/views/ComponentsViews';
import {BootstrapUi} from '../BootstrapUi';
import {PopoverView} from 'dncomponents/lib/popover/view/PopoverView';
import {PopoverViewImpl} from './PopoverViewImpl';

export namespace PopoverViewFactory {

    export class DefaultPopoverViewFactory implements ViewFactory<PopoverView> {

        private static instance: DefaultPopoverViewFactory;

        private constructor() {
        }

        public static getInstance(): DefaultPopoverViewFactory {
            if (this.instance == null)
                this.instance = new DefaultPopoverViewFactory();
            return this.instance;
        }

        public getView(attributes: Map<string, string>, templateElement: HTMLTemplateElement): PopoverView {
            if (templateElement == null)
                templateElement = (BootstrapUi.getUi()).modalDialog;
            return new PopoverViewImpl(templateElement);
        }

        public getId(): string {
            return PopoverViewImpl.VIEW_ID;
        }

        public getClazz(): string {
            return 'PopoverViewImpl';
        }
    }
}