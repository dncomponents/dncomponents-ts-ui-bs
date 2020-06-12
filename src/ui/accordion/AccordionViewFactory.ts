/**
 * @author nikolasavic
 */
import {ViewFactory} from 'dncomponents/lib/views/ComponentsViews';
import {AccordionUi} from 'dncomponents/lib/accordion/accrodion_views';
import {BootstrapUi} from '../BootstrapUi';
import {AccordionUiImpl} from './AccordionUiImpl';

export namespace AccordionViewFactory {

    export class DefaultAccordionViewFactory implements ViewFactory<AccordionUi> {

        private static instance: DefaultAccordionViewFactory;

        private constructor() {
        }

        public static getInstance(): DefaultAccordionViewFactory {
            if (this.instance == null)
                this.instance = new DefaultAccordionViewFactory();
            return this.instance;
        }

        public getView(attributes: Map<String, String>, templateElement: HTMLTemplateElement): AccordionUi {
            if (templateElement == null)
                templateElement = (BootstrapUi.getUi()).accordionUi;
            return new AccordionUiImpl(templateElement);
        }

        public getId(): string {
            return AccordionUiImpl.VIEW_ID;
        }

        public getClazz(): string {
            return 'AccordionUiImpl';
        }
    }

}