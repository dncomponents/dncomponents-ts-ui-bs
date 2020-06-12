import {ViewFactory} from 'dncomponents/lib/views/ComponentsViews';
import {CheckBoxViewImpl} from './CheckBoxViewImpl';
import {BootstrapUi} from '../BootstrapUi';
import {CheckBoxView} from 'dncomponents/lib/checkbox/CheckBoxView';
import {CheckBoxViewImplSimple} from './CheckBoxViewImplSimple';

export class CheckBoxViewFactory {
}


export namespace CheckBoxViewFactory {

    export class DefaultCheckBoxViewFactory implements ViewFactory<CheckBoxViewImpl> {
        static instance: CheckBoxViewFactory.DefaultCheckBoxViewFactory = null;

        private constructor() {
        }

        public static getInstance(): CheckBoxViewFactory.DefaultCheckBoxViewFactory {
            if (DefaultCheckBoxViewFactory.instance == null)
                DefaultCheckBoxViewFactory.instance = new CheckBoxViewFactory.DefaultCheckBoxViewFactory();
            return DefaultCheckBoxViewFactory.instance;
        }


        public getView(attributes: Map<string, string>, templateElement: HTMLTemplateElement): CheckBoxViewImpl {
            if (templateElement == null)
                templateElement = BootstrapUi.getUi<any>().checkbox;
            return new CheckBoxViewImpl(templateElement);
        }


        public getId(): string {
            return CheckBoxViewImpl.VIEW_ID;
        }


        public getClazz(): string {
            return 'CheckBoxViewImpl';
        }
    }


    export class DefaultSimpleCheckBoxViewFactory implements ViewFactory<CheckBoxView> {
        static instance: CheckBoxViewFactory.DefaultSimpleCheckBoxViewFactory = null;

        private constructor() {
         }

        public static getInstance(): CheckBoxViewFactory.DefaultSimpleCheckBoxViewFactory {
            if (DefaultSimpleCheckBoxViewFactory.instance == null)
                DefaultSimpleCheckBoxViewFactory.instance = new CheckBoxViewFactory.DefaultSimpleCheckBoxViewFactory();
            return DefaultSimpleCheckBoxViewFactory.instance;
        }


        public getView(attributes: Map<string, string>, templateElement: HTMLTemplateElement): CheckBoxView {
            if (templateElement == null)
                templateElement = BootstrapUi.getUi().simplecheckbox;
            return new CheckBoxViewImplSimple(templateElement);
        }

        public getId(): string {
            return CheckBoxViewImplSimple.VIEW_ID;
        }

        public getClazz(): string {
            return 'CheckBoxViewImplSimple';
        }
    }
}