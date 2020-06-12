import {ViewFactory} from 'dncomponents/lib/views/ComponentsViews';
import {AutocompleteView} from 'dncomponents/lib/autocomplete/views/AutocompleteView';
import {BootstrapUi} from '../BootstrapUi';
import {AutocompleteViewImpl} from './AutocompleteViewImpl';

export namespace AutocompleteViewFactory {
    export class DefaultAutocompleteViewFactory implements ViewFactory<AutocompleteView<any>> {
        static instance: DefaultAutocompleteViewFactory = null;

        private constructor() {
        }

        public static getInstance(): DefaultAutocompleteViewFactory {
            if (DefaultAutocompleteViewFactory.instance == null)
                DefaultAutocompleteViewFactory.instance = new DefaultAutocompleteViewFactory();
            return DefaultAutocompleteViewFactory.instance;
        }


        public getView(attributes: Map<string, string>, templateElement: HTMLTemplateElement): AutocompleteView<any> {
            if (templateElement == null)
                templateElement = BootstrapUi.getUi().autocomplete;
            return new AutocompleteViewImpl(templateElement);
        }


        public getId(): string {
            return 'default';
        }


        public getClazz(): string {
            return 'AutocompleteViewImpl';
        }
    }
}