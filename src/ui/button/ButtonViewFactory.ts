import {ViewFactory} from 'dncomponents/lib/views/ComponentsViews';
import {ButtonViewImpl} from './ButtonViewImpl';
import {ButtonBuilder} from './ButtonBuilder';
import {ButtonColorType} from './ButtonColorType';
import {ButtonOutlineColorType} from './ButtonOutlineColorType';
import {ButtonSize} from './ButtonSize';
import {ButtonIconViewImpl} from './ButtonIconViewImpl';
import {ButtonIconBuilder} from './ButtonIconBuilder';
import {FontAwesome} from './FontAwesome';
import {FontAwesomeSize} from './FontAwesomeSize';

export class ButtonViewFactory {
}

export namespace ButtonViewFactory {

    export class DefaultButtonViewFactory implements ViewFactory<ButtonViewImpl> {
        static instance: ButtonViewFactory.DefaultButtonViewFactory = null;

        private constructor() {
        }

        public static getInstance(): ButtonViewFactory.DefaultButtonViewFactory {
            if (DefaultButtonViewFactory.instance == null)
                DefaultButtonViewFactory.instance = new ButtonViewFactory.DefaultButtonViewFactory();
            return DefaultButtonViewFactory.instance;
        }

        public getView(attributes: Map<string, string>, templateElement: HTMLTemplateElement): ButtonViewImpl {
            let buttonColorType = ButtonColorType.lookUp.getValue(attributes.get(ButtonBuilder.colorTypeId));
            let outlineColorType = ButtonOutlineColorType.lookUp.getValue(attributes.get(ButtonBuilder.outlineColorTypeId));
            let buttonSize = ButtonSize.lookUp.getValue(attributes.get(ButtonBuilder.sizeId));
            return ButtonBuilder.get()
                .color(buttonColorType)
                .outlineColor(outlineColorType)
                .size(buttonSize)
                .build();
        }

        public getId(): string {
            return ButtonViewImpl.VIEW_ID;
        }

        public getClazz(): string {
            return 'ButtonViewImpl';
        }
    }

    export class DefaultButtonIconViewFactory implements ViewFactory<ButtonIconViewImpl> {

        static instance: ButtonViewFactory.DefaultButtonIconViewFactory = null;

        private constructor() {
        }

        public static getInstance(): ButtonViewFactory.DefaultButtonIconViewFactory {
            if (DefaultButtonIconViewFactory.instance == null)
                DefaultButtonIconViewFactory.instance = new ButtonViewFactory.DefaultButtonIconViewFactory();
            return DefaultButtonIconViewFactory.instance;
        }

        public getView(attributes: Map<string, string>, templateElement: HTMLTemplateElement): ButtonIconViewImpl {
            let iconType = FontAwesome.get(attributes.get(ButtonIconBuilder.iconTypeId));
            let iconSize = FontAwesomeSize.get(attributes.get(ButtonIconBuilder.iconSizeId));
            let buttonColorType = ButtonColorType.lookUp.getValue(attributes.get(ButtonIconBuilder.colorTypeId));
            let outlineColorType = ButtonOutlineColorType.lookUp.getValue(attributes.get(ButtonIconBuilder.outlineColorTypeId));
            let buttonSize = ButtonSize.lookUp.getValue(attributes.get(ButtonIconBuilder.sizeId));
            return ButtonIconBuilder.get()
                .template(templateElement)
                .iconType(<FontAwesome>iconType)
                .color(buttonColorType)
                .outlineColor(outlineColorType)
                .iconSize(iconSize).build();
        }

        public getId(): string {
            return ButtonIconViewImpl.VIEW_ID;
        }

        public getClazz(): string {
            return 'ButtonIconViewImpl';
        }
    }
}