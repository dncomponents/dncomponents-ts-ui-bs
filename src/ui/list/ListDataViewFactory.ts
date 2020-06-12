import {ViewFactory} from 'dncomponents/lib/views/ComponentsViews';
import {BootstrapUi} from '../BootstrapUi';
import {ListUi} from 'dncomponents/lib/list/ListUi';
import {ListUiImpl} from './ListUiImpl';

export namespace ListDataViewFactory {

    export class DefaultListDataViewFactory implements ViewFactory<ListUi> {

        private static instance: DefaultListDataViewFactory;

        private constructor() {
        }

        public static getInstance(): DefaultListDataViewFactory {
            if (this.instance == null)
                this.instance = new DefaultListDataViewFactory();
            return this.instance;
        }

        public getView(attributes: Map<string, string>, templateElement: HTMLTemplateElement): ListUi {
            if (templateElement == null)
                templateElement = (BootstrapUi.getUi()).list;
            return new ListUiImpl(templateElement);
        }

        public getId(): string {
            return ListUiImpl.VIEW_ID;
        }

        public getClazz(): string {
            return 'ListUiImpl';
        }
    }
}