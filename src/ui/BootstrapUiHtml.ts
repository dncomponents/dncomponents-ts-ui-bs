export const uiBs="<template ui-field=\"checkBoxFactory\">\n" +
    "    <template ui-field=\"checkBoxDefault\">\n" +
    "        <div ui-field=\"root\" class=\"form-check\">\n" +
    "            <label class=\"form-check-label\">\n" +
    "                <input ui-field=\"checkBoxInput\" class=\"form-check-input\" type=\"checkbox\" value=\"\">\n" +
    "                <span ui-field=\"labelText\"></span>\n" +
    "            </label>\n" +
    "        </div>\n" +
    "    </template>\n" +
    "    <template ui-field=\"checkBoxSimple\">\n" +
    "        <input ui-field=\"checkBoxInput\" class=\"form-check-input\" type=\"checkbox\" value=\"\">\n" +
    "    </template>\n" +
    "</template>\n" +
    "<!--  TEXTBOX  -->\n" +
    "<template ui-field=\"textbox\">\n" +
    "    <input ui-field=\"root\" class=\"form-control\" type=\"text\">\n" +
    "</template>\n" +
    "<!--  TEXTAREA  -->\n" +
    "<template ui-field=\"textarea\">\n" +
    "    <textarea ui-field=\"root\" rows=\"5\" class=\"form-control\"></textarea>\n" +
    "</template>\n" +
    "<!--  RADIO  -->\n" +
    "<template ui-field=\"radio\">\n" +
    "    <div ui-field=\"root\" class=\"form-check\">\n" +
    "        <label class=\"form-check-label\">\n" +
    "            <input ui-field=\"checkBoxInput\" class=\"form-check-input\" type=\"radio\" value=\"\">\n" +
    "            <label ui-field=\"labelText\" class=\"form-check-label\">\n" +
    "\n" +
    "            </label>\n" +
    "        </label>\n" +
    "    </div>\n" +
    "</template>\n" +
    "<!--  CHECKBOX  -->\n" +
    "<template ui-field=\"checkbox\">\n" +
    "    <div ui-field=\"root\" class=\"form-check\">\n" +
    "        <input ui-field=\"checkBoxInput\" class=\"form-check-input\" type=\"checkbox\" value=\"\">\n" +
    "        <label ui-field=\"labelText\" class=\"form-check-label\">\n" +
    "\n" +
    "        </label>\n" +
    "    </div>\n" +
    "</template>\n" +
    "<!--SIMPLE CHECKBOX-->\n" +
    "<template ui-field=\"simplecheckbox\">\n" +
    "    <input ui-field=\"root\" class=\"form-check-input\" type=\"checkbox\" value=\"\">\n" +
    "</template>\n" +
    "<!--  BUTTON  -->\n" +
    "<template ui-field=\"button\">\n" +
    "    <button ui-field=\"root\" class=\"btn btn-primary\"></button>\n" +
    "    <style-item ui-field=\"disabledStyle\" class=\"disabled\"/>\n" +
    "</template>\n" +
    "<!--  BUTTON  ICON-->\n" +
    "<template ui-field=\"buttonIcon\">\n" +
    "    <button ui-field='root' class=\"btn\">\n" +
    "        <i ui-field=\"iconPanel\"></i>\n" +
    "        <span ui-field=\"textPanel\"></span>\n" +
    "    </button>\n" +
    "    <style-item ui-field=\"disabledStyle\" class=\"disabled\"/>\n" +
    "</template>\n" +
    "<template ui-field=\"buttonBuilder\">\n" +
    "\n" +
    "    <style-item ui-field=\"baseStyle\" class=\"btn\"></style-item>\n" +
    "    <!--color-->\n" +
    "    <style-item ui-field=\"btnSuccess\" class=\"btn-success\"></style-item>\n" +
    "    <style-item ui-field=\"btnDanger\" class=\"btn-danger\"></style-item>\n" +
    "    <style-item ui-field=\"btnInfo\" class=\"btn-info\"></style-item>\n" +
    "    <style-item ui-field=\"btnWarning\" class=\"btn-warning\"></style-item>\n" +
    "    <style-item ui-field=\"btnPrimary\" class=\"btn-primary\"></style-item>\n" +
    "    <style-item ui-field=\"btnSecondary\" class=\"btn-secondary\"></style-item>\n" +
    "    <style-item ui-field=\"btnLight\" class=\"btn-light\"></style-item>\n" +
    "    <style-item ui-field=\"btnDark\" class=\"btn-dark\"></style-item>\n" +
    "    <style-item ui-field=\"btnLink\" class=\"btn-link\"></style-item>\n" +
    "    <!--outline color-->\n" +
    "    <style-item ui-field=\"btnOutlineSuccess\" class=\"btn-outline-success\"></style-item>\n" +
    "    <style-item ui-field=\"btnOutlineInfo\" class=\"btn-outline-info\"></style-item>\n" +
    "    <style-item ui-field=\"btnOutlineWarning\" class=\"btn-outline-warning\"></style-item>\n" +
    "    <style-item ui-field=\"btnOutlineDanger\" class=\"btn-outline-danger\"></style-item>\n" +
    "    <style-item ui-field=\"btnOutlinePrimary\" class=\"btn-outline-primary\"></style-item>\n" +
    "    <style-item ui-field=\"btnOutlineSecondary\" class=\"btn-outline-secondary\"></style-item>\n" +
    "    <style-item ui-field=\"btnOutlineLight\" class=\"btn-outline-light\"></style-item>\n" +
    "    <style-item ui-field=\"btnOutlineDark\" class=\"btn-outline-dark\"></style-item>\n" +
    "    <style-item ui-field=\"btnOutlineLink\" class=\"btn-outline-link\"></style-item>\n" +
    "    <!--size-->\n" +
    "    <style-item ui-field=\"small\" class=\"btn-sm\"></style-item>\n" +
    "    <style-item ui-field=\"large\" class=\"btn-lg\"></style-item>\n" +
    "    <style-item ui-field=\"block\" class=\"btn-block\"></style-item>\n" +
    "</template>\n" +
    "<!--  TAB  -->\n" +
    "<template ui-field=\"tabUi\">\n" +
    "    <template ui-field=\"tab\">\n" +
    "        <div ui-field=\"root\" style=\"width:100%;\">\n" +
    "            <ul ui-field=\"tabPanel\" class=\"nav nav-tabs\" style=\"margin-bottom: 1rem\">\n" +
    "\n" +
    "            </ul>\n" +
    "            <div ui-field=\"tabContentPanel\" class=\"tab-content\">\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </template>\n" +
    "    <template ui-field=\"tabVertical\">\n" +
    "        <div ui-field=\"root\" class=\"row\">\n" +
    "            <div class=\"col-3\">\n" +
    "                <ul ui-field=\"tabPanel\" class=\"nav nav-tabs\">\n" +
    "\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "            <div class=\"col-9\">\n" +
    "                <div ui-field=\"tabContentPanel\" class=\"tab-content\">\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </template>\n" +
    "    <template ui-field=\"tabItem\">\n" +
    "        <li ui-field=\"tabItemNav\" class=\"nav-item\">\n" +
    "            <a ui-field=\"tabItemPanel\" class=\"nav-link\" data-toggle=\"tab\" href=\"javascript:void(0)\"\n" +
    "               role=\"tab\">\n" +
    "\n" +
    "            </a>\n" +
    "        </li>\n" +
    "        <div ui-field=\"tabItemContent\" class=\"tab-pane fade\" role=\"tabpanel\">\n" +
    "\n" +
    "        </div>\n" +
    "        <style-item ui-field=\"showTabContentStyle\" class=\"show active\"/>\n" +
    "        <style-item ui-field=\"active\" class=\"active\"/>\n" +
    "    </template>\n" +
    "</template>\n" +
    "<!--  ACCORDION  -->\n" +
    "<template ui-field=\"accordionUi\">\n" +
    "    <template ui-field=\"accordion\">\n" +
    "        <div ui-field=\"root\">\n" +
    "\n" +
    "        </div>\n" +
    "    </template>\n" +
    "    <template ui-field=\"accordionItem\">\n" +
    "        <div ui-field=\"root\" class=\"card\">\n" +
    "            <div ui-field=\"accordionItemTitlePanel\" class=\"card-header\">\n" +
    "                <h5 class=\"mb-0\">\n" +
    "                    <a href=\"javascript:void(0)\" ui-field=\"accordionItemTitle\">\n" +
    "                    </a>\n" +
    "                </h5>\n" +
    "            </div>\n" +
    "            <div ui-field=\"contentPanelParent\" class=\"collapse\" role=\"tabpanel\"\n" +
    "                 aria-labelledby=\"headingOne\">\n" +
    "                <div ui-field=\"contentPanel\" class=\"card-body\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <style-item ui-field=\"showContentStyle\" class=\"show\"/>\n" +
    "    </template>\n" +
    "</template>\n" +
    "<!--DROPDOWN-->\n" +
    "<template ui-field=\"dropDownUi\">\n" +
    "    <template ui-field=\"dropdown\">\n" +
    "        <div class=\"dropdown\" ui-field=\"root\">\n" +
    "            <button ui-field=\"button\" class=\"btn btn-secondary dropdown-toggle\">\n" +
    "\n" +
    "            </button>\n" +
    "            <div ui-field=\"dropDownMenu\" class=\"dropdown-menu\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <style-item ui-field=\"dropDownMenuShowStyle\" class=\"show\"></style-item>\n" +
    "    </template>\n" +
    "    <template ui-field=\"dropDownItem\">\n" +
    "        <a ui-field=\"root\" class=\"dropdown-item\" href=\"javascript:void(0)\"></a>\n" +
    "    </template>\n" +
    "</template>\n" +
    "<!--POPOVER-->\n" +
    "<template ui-field=\"popover\">\n" +
    "    <div ui-field=\"root\" class=\"popover\" role=\"tooltip\">\n" +
    "        <div ui-field=\"arrowPanel\" class=\"arrow\" data-popper-arrow></div>\n" +
    "        <h3 ui-field=\"popoverTitle\" class=\"popover-header\"></h3>\n" +
    "        <div ui-field=\"contentPanel\" class=\"popover-body\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <style-item ui-field=\"topStyle\" class=\"bs-popover-top\"></style-item>\n" +
    "    <style-item ui-field=\"bottomStyle\" class=\"bs-popover-bottom\"></style-item>\n" +
    "    <style-item ui-field=\"leftStyle\" class=\"bs-popover-left\"></style-item>\n" +
    "    <style-item ui-field=\"rightStyle\" class=\"bs-popover-right\"></style-item>\n" +
    "    <style-item ui-field=\"baseStyle\" class=\"popover\"></style-item>\n" +
    "    <style-item ui-field=\"fadeStyle\" class=\"fade\"></style-item>\n" +
    "    <style-item ui-field=\"showStyle\" class=\"show\"></style-item>\n" +
    "</template>\n" +
    "<!--TOOLTIP-->\n" +
    "<template ui-field=\"tooltip\">\n" +
    "    <div ui-field=\"root\" class=\"tooltip bs-tooltip-top\" role=\"tooltip\">\n" +
    "        <div ui-field=\"arrowPanel\" class=\"arrow\" data-popper-arrow></div>\n" +
    "        <div ui-field=\"contentPanel\" class=\"tooltip-inner\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <style-item ui-field=\"topStyle\" class=\"bs-tooltip-top\"></style-item>\n" +
    "    <style-item ui-field=\"bottomStyle\" class=\"bs-tooltip-bottom\"></style-item>\n" +
    "    <style-item ui-field=\"leftStyle\" class=\"bs-tooltip-left\"></style-item>\n" +
    "    <style-item ui-field=\"rightStyle\" class=\"bs-tooltip-right\"></style-item>\n" +
    "    <style-item ui-field=\"baseStyle\" class=\"tooltip show\"></style-item>\n" +
    "    <style-item ui-field=\"fadeStyle\" class=\"fade\"></style-item>\n" +
    "    <style-item ui-field=\"showStyle\" class=\"show\"></style-item>\n" +
    "</template>\n" +
    "<!--DIALOG-->\n" +
    "<template ui-field=\"modalDialog\">\n" +
    "    <div ui-field=\"root\" class=\"modal fade\">\n" +
    "        <div ui-field=\"modalDialogPanel\" class=\"modal-dialog\">\n" +
    "            <div class=\"modal-content\">\n" +
    "                <div ui-field=\"header\" class=\"modal-header\">\n" +
    "                    <h5 ui-field=\"titleHeader\" class=\"modal-title\">\n" +
    "\n" +
    "                    </h5>\n" +
    "                    <button ui-field=\"closeHeader\" type=\"button\" class=\"close\" data-dismiss=\"modal\"\n" +
    "                            aria-label=\"Close\">\n" +
    "                        <span aria-hidden=\"true\">&times;</span>\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "                <div ui-field=\"body\" class=\"modal-body\">\n" +
    "\n" +
    "                </div>\n" +
    "                <div ui-field=\"footer\" class=\"modal-footer\">\n" +
    "                    <button ui-field=\"closeButton\" type=\"button\" class=\"btn btn-secondary\"\n" +
    "                            data-dismiss=\"modal\">\n" +
    "                        Close\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ui-field=\"backDropDiv\" class=\"modal-backdrop fade show\"></div>\n" +
    "</template>\n" +
    "<!--PROGRESS-->\n" +
    "<template ui-field=\"progress\">\n" +
    "    <div ui-field=\"root\" class=\"progress\">\n" +
    "        <div ui-field=\"progressBar\" class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\">\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</template>\n" +
    "<template ui-field=\"progressBuilder\">\n" +
    "    <style-item ui-field=\"success\" class=\"bg-success\"/>\n" +
    "    <style-item ui-field=\"info\" class=\"bg-info\"/>\n" +
    "    <style-item ui-field=\"warning\" class=\"bg-warning\"/>\n" +
    "    <style-item ui-field=\"danger\" class=\"bg-danger\"/>\n" +
    "    <style-item ui-field=\"striped\" class=\"progress-bar-striped\"/>\n" +
    "    <style-item ui-field=\"animated\" class=\"progress-bar-animated active\"/>\n" +
    "</template>\n" +
    "\n" +
    "<!--CELL COMPONENTS-->\n" +
    "<!--  LIST  -->\n" +
    "<template ui-field=\"list\">\n" +
    "    <template ui-field=\"listMain\">\n" +
    "        <ul ui-field=\"root\" class=\"list-group scroll-style\"></ul>\n" +
    "        <style-item ui-field='scrollableStyle' class='scroll-style'></style-item>\n" +
    "        <style-item ui-field=\"rowHeight\" class=\"49\"></style-item>\n" +
    "    </template>\n" +
    "\n" +
    "    <template ui-field=\"listItem\">\n" +
    "        <li ui-field=\"root\" class=\"list-group-item\"></li>\n" +
    "        <style-item ui-field=\"modelSelected\" class=\"active\"></style-item>\n" +
    "    </template>\n" +
    "\n" +
    "    <template ui-field=\"listItemCheckbox\">\n" +
    "        <li ui-field=\"root\" class=\"list-group-item\" style=\"padding-left:  30px;\">\n" +
    "            <dn-checkbox ui-field=\"checkBox\" view=\"SIMPLE\"></dn-checkbox>\n" +
    "            <span ui-field=\"valuePanel\"></span>\n" +
    "        </li>\n" +
    "        <style-item ui-field=\"modelSelected\" class=\"active\"></style-item>\n" +
    "    </template>\n" +
    "</template>\n" +
    "<!--   TREE  -->\n" +
    "<template ui-field=\"tree\">\n" +
    "    <template ui-field=\"treeMain\">\n" +
    "        <ul ui-field=\"root\" class=\"list-group scroll-style tree\" style=\"border: 1px solid lightgrey;\"></ul>\n" +
    "        <style-item ui-field=\"rowHeight\" class=\"49\"></style-item>\n" +
    "    </template>\n" +
    "    <template ui-field=\"treeItemSimple\">\n" +
    "        <li ui-field=\"root\" class=\"list-group-item\">\n" +
    "                <span style=\"margin-left:48px;\">\n" +
    "                  <span ui-field=\"valuePanel\"></span>\n" +
    "                </span>\n" +
    "        </li>\n" +
    "        <style-item ui-field=\"modelSelected\" class=\"active\"></style-item>\n" +
    "    </template>\n" +
    "    <template ui-field=\"treeItemSimpleParent\">\n" +
    "        <li ui-field=\"root\" class=\"list-group-item\">\n" +
    "            <i ui-field=\"openCloseElement\" style=\"margin-right:  10px;\"></i>\n" +
    "            <span ui-field=\"valuePanel\"></span>\n" +
    "        </li>\n" +
    "        <style-item ui-field=\"openStyle\" class=\"fa fa-plus-square-o\"></style-item>\n" +
    "        <style-item ui-field=\"closeStyle\" class=\"fa fa-minus-square-o\"></style-item>\n" +
    "        <style-item ui-field=\"modelSelected\" class=\"active\"></style-item>\n" +
    "    </template>\n" +
    "\n" +
    "    <template ui-field=\"treeItemSimpleCheckbox\">\n" +
    "        <li class=\"list-group-item\" ui-field=\"root\">\n" +
    "                <span style=\"margin-left:  48px;\">\n" +
    "                    <dn-checkbox ui-field=\"checkBox\" view=\"SIMPLE\"></dn-checkbox>\n" +
    "                  <span ui-field=\"valuePanel\"></span>\n" +
    "                </span>\n" +
    "        </li>\n" +
    "    </template>\n" +
    "    <template ui-field=\"treeItemSimpleParentCheckbox\">\n" +
    "        <li ui-field=\"root\" class=\"list-group-item\">\n" +
    "            <i ui-field=\"openCloseElement\" style=\"margin-right:  30px;\"></i>\n" +
    "            <dn-checkbox ui-field=\"checkBox\" view=\"SIMPLE\"></dn-checkbox>\n" +
    "            <span ui-field=\"valuePanel\"></span>\n" +
    "        </li>\n" +
    "        <style-item ui-field=\"openStyle\" class=\"fa fa-plus-square-o\"></style-item>\n" +
    "        <style-item ui-field=\"closeStyle\" class=\"fa fa-minus-square-o\"></style-item>\n" +
    "    </template>\n" +
    "</template>\n" +
    "<!--   TABLE  -->\n" +
    "<template ui-field=\"tableUi\">\n" +
    "\n" +
    "    <template ui-field=\"filterPanel\">\n" +
    "        <div ui-field=\"root\" class=\"d-flex\">\n" +
    "            <div ui-field=\"mainPanel\" class=\"input-group input-group-sm\">\n" +
    "                <dn-autocomplete ui-field=\"ac\" template-id=\"acc\"></dn-autocomplete>\n" +
    "                <div ui-field=\"valueHolder\"></div>\n" +
    "            </div>\n" +
    "            <button ui-field=\"clear\" class=\"btn btn-sm btn-outline-secondary ml-2\">x</button>\n" +
    "        </div>\n" +
    "        <style-item ui-field=\"booleanMainPanelStyle\"\n" +
    "                    class=\"d-flex justify-content-between align-items-center\"></style-item>\n" +
    "        <template ui-template=\"acc\">\n" +
    "            <div ui-field='root' class='input-group-prepend'>\n" +
    "                <dn-button ui-field='button' class='btn btn-outline-secondary btn-sm dropdown-toggle'>\n" +
    "                    <span ui-field='buttonText'>Choose ...</span>\n" +
    "                </dn-button>\n" +
    "                <div ui-field='listPanel' class='autocomplete-scroll-panel'>\n" +
    "                    <dn-text-box ui-field='textBox'></dn-text-box>\n" +
    "                    <div class='scroll-style'>\n" +
    "                        <dn-list ui-field=\"list\"></dn-list>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </template>\n" +
    "    </template>\n" +
    "\n" +
    "    <template ui-field=\"tableRowExpanderItem\">\n" +
    "        <td ui-field=\"root\">\n" +
    "            <i ui-field=\"openClosedElement\" class=\"fa fa-close\"></i>\n" +
    "        </td>\n" +
    "        <style-item ui-field=\"openStyle\" class=\"fa fa-plus-square-o\"></style-item>\n" +
    "        <style-item ui-field=\"closeStyle\" class=\"fa fa-minus-square-o\"></style-item>\n" +
    "    </template>\n" +
    "\n" +
    "    <template ui-field=\"tableCheckboxColumn\">\n" +
    "        <td ui-field=\"root\">\n" +
    "            <dn-checkbox ui-field=\"checkBox\" view=\"SIMPLE\"\n" +
    "                         style=\"margin-left: 12px\"></dn-checkbox>\n" +
    "        </td>\n" +
    "    </template>\n" +
    "\n" +
    "    <template ui-field=\"tableHeaderCheckbox\">\n" +
    "        <td ui-field=\"root\">\n" +
    "            <dn-checkbox ui-field=\"checkBox\" style=\"margin-left: 12px;\"></dn-checkbox>\n" +
    "            <span ui-field=\"textPanel\"></span>\n" +
    "        </td>\n" +
    "    </template>\n" +
    "\n" +
    "    <template ui-field=\"footerCell\">\n" +
    "        <td ui-field=\"root\">\n" +
    "        </td>\n" +
    "    </template>\n" +
    "\n" +
    "    <template ui-field=\"tableBarUi\">\n" +
    "\n" +
    "        <template ui-field=\"tableBar\">\n" +
    "            <div ui-field=\"root\">\n" +
    "\n" +
    "            </div>\n" +
    "        </template>\n" +
    "        <template ui-field=\"columnChooseBar\">\n" +
    "            <div ui-field=\"root\">\n" +
    "\n" +
    "            </div>\n" +
    "        </template>\n" +
    "        <template ui-field=\"tableBarGroupByUi\">\n" +
    "            <template ui-field=\"tableBarItem\">\n" +
    "                <div ui-field=\"root\" class=\"row p-1\">\n" +
    "                    <div class=\"col-1\">\n" +
    "                        <i ui-field=\"close\" class=\"fa fa-close\"></i>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-2\">\n" +
    "                        <span ui-field=\"actionLabel\"></span>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-2\">\n" +
    "                        <span ui-field=\"columnName\"></span>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-6\">\n" +
    "                        <div class=\"row\" ui-field=\"panel\">\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-1\">\n" +
    "                        :::\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </template>\n" +
    "            <template ui-field=\"tableBarPanel\">\n" +
    "                <div ui-field=\"root\">\n" +
    "                    <div ui-field=\"contentPanel\" class=\"p-2\"></div>\n" +
    "                    <div ui-field=\"dropDownHolder\" class=\"pl-2 mb-3 mt-3\"></div>\n" +
    "                </div>\n" +
    "            </template>\n" +
    "        </template>\n" +
    "    </template>\n" +
    "\n" +
    "    <template ui-field=\"tableTreeItemSimpleParent\">\n" +
    "        <tr ui-field=\"root\">\n" +
    "            <td ui-field=\"openCloseCell\">\n" +
    "                <div class=\"horizontal-div\">\n" +
    "                    <i ui-field=\"openCloseElement\"></i>\n" +
    "                    <div style=\"width: 10px;\"></div>\n" +
    "                    <div ui-field=\"valuePanel\"></div>\n" +
    "                </div>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "        <style-item ui-field=\"openStyle\" class=\"fa fa-plus-square-o\"></style-item>\n" +
    "        <style-item ui-field=\"closeStyle\" class=\"fa fa-minus-square-o\"></style-item>\n" +
    "    </template>\n" +
    "\n" +
    "    <template ui-field=\"tableMain\">\n" +
    "        <style-item ui-field=\"rowHeight\" class=\"49\"></style-item>\n" +
    "        <div ui-field=\"root\" class=\"table-main\">\n" +
    "            <div ui-field=\"headerBarRow\">\n" +
    "                <!--header bar content here-->\n" +
    "            </div>\n" +
    "            <div>\n" +
    "                <table ui-field=\"tableHeader\" class=\"table-header table table-bordered fixed-table table-header-style\">\n" +
    "                    <colgroup ui-field=\"headerColgroupPanel\"></colgroup>\n" +
    "                    <tbody ui-field=\"headerBodyPanel\">\n" +
    "                    <tr ui-field=\"headerRow\">\n" +
    "                        <!--header content here-->\n" +
    "                    </tr>\n" +
    "                    </thead>\n" +
    "                </table>\n" +
    "            </div>\n" +
    "            <div ui-field=\"tableContentPanel\" class=\"table-content-panel scroll-style\" style=\"padding-right: 1px\">\n" +
    "                <table ui-field=\"tableContent\" class=\"table table-bordered fixed-table\">\n" +
    "                    <colgroup ui-field=\"contentColgroupPanel\"></colgroup>\n" +
    "                    <tbody ui-field=\"rowsPanel\">\n" +
    "                    <!--main content here-->\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "            </div>\n" +
    "            <div ui-field=\"footerPanel\">\n" +
    "                <table ui-field=\"tableFooter\" class=\"table-header table table-bordered fixed-table\">\n" +
    "                    <colgroup ui-field=\"tableFooterColGroup\"></colgroup>\n" +
    "                    <tbody ui-field=\"footerBodyPanel\">\n" +
    "                    <tr ui-field=\"tableFooterRow\">\n" +
    "                        <!--footer content here-->\n" +
    "                    </tr>\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "            </div>\n" +
    "            <div ui-field=\"footerPagerPanel\">\n" +
    "                <!--pager goes here-->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </template>\n" +
    "    <template ui-field=\"tableRow\">\n" +
    "        <tr ui-field=\"root\"></tr>\n" +
    "        <style-item ui-field=\"modelSelected\" class=\"table-primary\"></style-item>\n" +
    "    </template>\n" +
    "    <template ui-field=\"tableColumn\">\n" +
    "        <td ui-field=\"root\"></td>\n" +
    "    </template>\n" +
    "\n" +
    "    <template ui-field=\"tableColumnSortHeader\">\n" +
    "        <td ui-field=\"root\">\n" +
    "            <div ui-field=\"textPanel\"></div>\n" +
    "            <div style=\"position: relative;\" class=\"pull-right\">\n" +
    "                <div style=\"right: 1px;top: -19px;position:absolute;\">\n" +
    "                    <div ui-field=\"sortIcon\" class=\"pull-right header-s2\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </td>\n" +
    "        <style-item ui-field=\"sortUpStyle\" class=\"fa fa-sort-down pull-right\"></style-item>\n" +
    "        <style-item ui-field=\"sortDownStyle\" class=\"fa fa-sort-up pull-right\"></style-item>\n" +
    "    </template>\n" +
    "    <template ui-field=\"tableColumnMenuHeader\">\n" +
    "        <td ui-field=\"root\">\n" +
    "            <div ui-field=\"textPanel\"></div>\n" +
    "\n" +
    "            <div style=\"position: relative;\" class=\"pull-right\">\n" +
    "                <div style=\"left: -100px;top: -19px;position:absolute;\">\n" +
    "                    <div ui-field=\"filterIconPanel\" class=\"fa fa-filter pull-right header-s2\"></div>\n" +
    "                    <div ui-field=\"groupByIconPanel\" class=\"fa fa-group pull-right header-s2\"></div>\n" +
    "                    <div ui-field=\"sortIconPanel\" class=\"pull-right header-s2\"></div>\n" +
    "                </div>\n" +
    "                <!--fa fa-sort-->\n" +
    "                <div style=\"right: 1px;top: -30px;position:absolute;\">\n" +
    "                    <div ui-field=\"menuHolder\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </td>\n" +
    "        <style-item ui-field=\"sortStyle\" class=\"fa fa-sort pull-right\"></style-item>\n" +
    "        <style-item ui-field=\"sortUpStyle\" class=\"fa fa-sort-down pull-right\"></style-item>\n" +
    "        <style-item ui-field=\"sortDownStyle\" class=\"fa fa-sort-up pull-right\"></style-item>\n" +
    "    </template>\n" +
    "\n" +
    "    <template ui-field=\"tableColumnFilterHeader\">\n" +
    "        <td ui-field=\"root\">\n" +
    "            <div ui-field=\"textPanel\" style=\"font-weight: bold\"></div>\n" +
    "            <div ui-field=\"sortIconPanel\" class=\"pull-right header-s2\"></div>\n" +
    "            <div ui-field=\"filterIconPanel\" class=\"fa fa-filter pull-right header-s2\"></div>\n" +
    "            <div ui-field=\"filterPanelElement\"></div>\n" +
    "        </td>\n" +
    "    </template>\n" +
    "\n" +
    "</template>\n" +
    "<!--  DROPDOWN MULTILEVEL   -->\n" +
    "<template ui-field=\"dropDownMultiLevelUi\">\n" +
    "    <template ui-field=\"dropdown\">\n" +
    "        <div class=\"dropdown\" ui-field=\"root\">\n" +
    "            <button ui-field=\"button\" class=\"btn btn-secondary dropdown-toggle\">\n" +
    "\n" +
    "            </button>\n" +
    "            <div ui-field=\"dropDownMenu\" class=\"dropdown-menu\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <style-item ui-field=\"dropDownMenuShowStyle\" class=\"show\"></style-item>\n" +
    "    </template>\n" +
    "    <template ui-field=\"dropdownItem\">\n" +
    "        <a ui-field=\"root\" class=\"dropdown-item\" href=\"javascript:void(0)\"></a>\n" +
    "    </template>\n" +
    "    <template ui-field=\"dropdownItemHasChildren\">\n" +
    "        <a ui-field=\"root\" class=\"dropdown-item\" href=\"javascript:void(0)\">\n" +
    "            <span ui-field=\"textPanel\"></span>\n" +
    "            <span style=\"position: absolute;right: 5px;\">\n" +
    "            <i class=\"fa fa-angle-right\"></i>\n" +
    "        </span>\n" +
    "        </a>\n" +
    "    </template>\n" +
    "    <template ui-field=\"dropdownPanelHasChildren\">\n" +
    "        <div ui-field=\"root\" class=\"dropdown-menu dropdownPanel\">\n" +
    "        </div>\n" +
    "    </template>\n" +
    "</template>\n" +
    "<!--  AUTOCOMPLETE  -->\n" +
    "<template ui-field=\"autocomplete\">\n" +
    "    <div ui-field='root' class='autocomplete'>\n" +
    "        <dn-button ui-field='button' class='btn btn-secondary dropdown-toggle'>\n" +
    "            <span ui-field='buttonText'>Choose ...</span>\n" +
    "        </dn-button>\n" +
    "        <div ui-field='listPanel' class='autocomplete-scroll-panel'>\n" +
    "            <dn-text-box ui-field='textBox'></dn-text-box>\n" +
    "            <div class='scroll-style'>\n" +
    "                <dn-list ui-field=\"list\"></dn-list>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</template>\n" +
    "<!--  AUTOCOMPLETE  TREE-->\n" +
    "<template ui-field=\"autocompleteTree\">\n" +
    "    <div ui-field='root' class='autocomplete'>\n" +
    "        <dn-button ui-field='button' class='btn btn-secondary dropdown-toggle'>\n" +
    "            <span ui-field='buttonText'>Choose ...</span>\n" +
    "        </dn-button>\n" +
    "        <div ui-field='listPanel' class='autocomplete-scroll-panel'>\n" +
    "            <dn-text-box ui-field='textBox'></dn-text-box>\n" +
    "            <div class='scroll-style'>\n" +
    "                <dn-tree ui-field=\"tree\"></dn-tree>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</template>\n" +
    "<!--AUTOCOMPLETE MULTISELECT-->\n" +
    "<template ui-field=\"autocompleteMultiSelect\">\n" +
    "    <template ui-field=\"rootView\">\n" +
    "        <div ui-field='root'\n" +
    "             class='autocomplete autocomplete-container autocomplete-container-multi autocomplete-container-active'>\n" +
    "            <ul ui-field=\"selectionPanel\" class=\"autocomplete-choices\">\n" +
    "            </ul>\n" +
    "            <div ui-field='listPanel' class='autocomplete-scroll-panel'>\n" +
    "                <dn-text-box ui-field='textBox'></dn-text-box>\n" +
    "                <div ui-field=\"listOrTreePanel\" class='scroll-style'>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </template>\n" +
    "    <template ui-field=\"itemView\">\n" +
    "        <li class=\"search-choice\" ui-field=\"root\">\n" +
    "            <span ui-field=\"mainPanel\"></span>\n" +
    "            <a class=\"fa fa-close\" style=\"position: relative;right: -16px\" ui-field=\"removeBtn\"></a>\n" +
    "        </li>\n" +
    "    </template>\n" +
    "</template>\n" +
    "<!--PAGER-->\n" +
    "<template ui-field=\"pagerUi\">\n" +
    "    <template ui-field=\"pager\">\n" +
    "        <ul ui-field=\"root\" class=\"pagination\">\n" +
    "            <li><span ui-field=\"textPanel\" style=\"margin-right: 15px\"></span></li>\n" +
    "            <li ui-field=\"first\" class=\"page-item\">\n" +
    "                <a class=\"page-link\" href=\"javascript:void(0)\" aria-label=\"First\">\n" +
    "                    <span aria-hidden=\"true\">&laquo;</span>\n" +
    "                    <span class=\"sr-only\">First</span>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "            <li ui-field=\"previous\" class=\"page-item\">\n" +
    "                <a class=\"page-link\" href=\"javascript:void(0)\" aria-label=\"Previous\">\n" +
    "                    <span aria-hidden=\"true\">&laquo;</span>\n" +
    "                    <span class=\"sr-only\">Previous</span>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "            <li class=\"pageItem\">\n" +
    "                <dn-integer-box ui-field=\"numberField\"></dn-integer-box>\n" +
    "                <!--<input ui-field=\"pageNumberField\" class=\"form-control\" type=\"text\">-->\n" +
    "            </li>\n" +
    "            <li ui-field=\"next\" class=\"page-item\">\n" +
    "                <a class=\"page-link\" href=\"javascript:void(0)\" aria-label=\"Next\">\n" +
    "                    <span aria-hidden=\"true\">&raquo;</span>\n" +
    "                    <span class=\"sr-only\">Next</span>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "            <li ui-field=\"last\" class=\"page-item\">\n" +
    "                <a class=\"page-link\" href=\"javascript:void(0)\" aria-label=\"Last\">\n" +
    "                    <span aria-hidden=\"true\">&raquo;</span>\n" +
    "                    <span class=\"sr-only\">Last</span>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <style-item ui-field=\"disabledStyle\" class=\"disabled\"/>\n" +
    "    </template>\n" +
    "    <template ui-field=\"pagerItem\">\n" +
    "        <li ui-field=\"root\" class=\"page-item\">\n" +
    "            <a ui-field=\"textPanel\" class=\"page-link\" href=\"javascript:void(0)\">1</a>\n" +
    "        </li>\n" +
    "    </template>\n" +
    "</template>\n" +
    "<template ui-field=\"pagerListUi\">\n" +
    "    <template ui-field=\"pager\">\n" +
    "        <ul ui-field=\"root\" class=\"pagination justify-content-center\">\n" +
    "            <!---->\n" +
    "        </ul>\n" +
    "    </template>\n" +
    "    <template ui-field=\"pagerItem\">\n" +
    "        <li ui-field=\"root\" class=\"page-item\">\n" +
    "            <a ui-field=\"textPanel\" class=\"page-link\" href=\"javascript:void(0)\">1</a>\n" +
    "        </li>\n" +
    "    </template>\n" +
    "</template>\n" +
    "\n" +
    "<template ui-field=\"treeCellIconView\">\n" +
    "    <li ui-field=\"root\" class=\"list-group-item\">\n" +
    "        <a>\n" +
    "            <i ui-field=\"iconPanel\" class=\"fa fa-envelope-open\"></i>\n" +
    "            <span ui-field=\"valuePanel\"></span>\n" +
    "        </a>\n" +
    "    </li>\n" +
    "    <style-item ui-field=\"modelSelected\" class=\"active\"></style-item>\n" +
    "</template>\n" +
    "<template ui-field=\"treeCellParentIconView\">\n" +
    "    <li ui-field=\"root\" class=\"list-group-item\">\n" +
    "        <a href=\"javascript:void(0)\">\n" +
    "            <i ui-field=\"iconPanel\" class=\"fa fa-bus\"></i>\n" +
    "            <span ui-field=\"valuePanel\"></span>\n" +
    "            <span class=\"pull-right-container\">\n" +
    "                <i ui-field=\"openCloseElement\" class=\"fa fa-angle-down pull-right\"></i>\n" +
    "                 </span>\n" +
    "        </a>\n" +
    "    </li>\n" +
    "    <style-item ui-field=\"openStyle\" class=\"fa fa-angle-left\"></style-item>\n" +
    "    <style-item ui-field=\"closeStyle\" class=\"fa fa-angle-down\"></style-item>\n" +
    "</template>\n" +
    "<template ui-field=\"filterPanelList\">\n" +
    "    <div ui-field=\"root\" class=\"d-flex\">\n" +
    "        <div class=\"btn-group btn-group-sm\" style=\"width: 100%;\">\n" +
    "            <dn-autocomplete ui-field=\"ac\" template-id=\"acc\"></dn-autocomplete>\n" +
    "            <div ui-field=\"valueHolder\"></div>\n" +
    "        </div>\n" +
    "        <button ui-field=\"clear\" class=\"btn btn-sm btn-outline-secondary ml-2\">x</button>\n" +
    "    </div>\n" +
    "    <template ui-template=\"acc\" ui-field=\"accTemplate\">\n" +
    "        <div ui-field='root' class='btn-group btn-group-sm'>\n" +
    "            <dn-button ui-field='button' class='btn btn-sm btn-outline-secondary dropdown-toggle'>\n" +
    "                <span ui-field='buttonText'>Choose ...</span>\n" +
    "            </dn-button>\n" +
    "            <div ui-field='listPanel' class='autocomplete-scroll-panel'>\n" +
    "                <dn-text-box ui-field='textBox'></dn-text-box>\n" +
    "                <div class='scroll-style'>\n" +
    "                    <dn-list ui-field=\"list\"></dn-list>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </template>\n" +
    "    <template ui-field=\"autocompleteMs\">\n" +
    "        <template ui-field=\"rootView\">\n" +
    "            <div ui-field='root' style=\"width: 100%;\"\n" +
    "                 class='autocomplete autocomplete-container autocomplete-container-multi autocomplete-container-active'>\n" +
    "                <ul ui-field=\"selectionPanel\" class=\"autocomplete-choices\" style=\"min-width: auto;\">\n" +
    "                </ul>\n" +
    "                <div ui-field='listPanel' class='autocomplete-scroll-panel'>\n" +
    "                    <dn-text-box ui-field='textBox'></dn-text-box>\n" +
    "                    <div ui-field=\"listOrTreePanel\" class='scroll-style'>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </template>\n" +
    "        <template ui-field=\"itemView\">\n" +
    "            <li class=\"search-choice\" ui-field=\"root\">\n" +
    "                <span ui-field=\"mainPanel\"></span>\n" +
    "                <a class=\"fa fa-close\" style=\"position: relative;right: -16px\" ui-field=\"removeBtn\"></a>\n" +
    "            </li>\n" +
    "        </template>\n" +
    "    </template>\n" +
    "</template>\n" +
    "\n" +
    "<!--SIDEMENU-->\n" +
    "<template ui-field=\"sidemenu\">\n" +
    "    <aside ui-field=\"root\" class=\"col-12 col-md-3 col-xl-2 border-right scroll-style\" style=\"max-height: 100%\">\n" +
    "        <div class=\"d-flex flex-row-reverse justify-content-between align-items-center d-md-block\">\n" +
    "            <div class=\"w-100 ml-3 ml-md-0\">\n" +
    "                <form>\n" +
    "                    <dn-text-box ui-field=\"searchBox\" addclass=\"w-100\"></dn-text-box>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "            <hr class=\"d-none d-md-block mb-2\">\n" +
    "            <button ui-field=\"navBtn\" class=\"navbar-toggler d-block d-md-none border\">\n" +
    "                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" role=\"img\"\n" +
    "                     focusable=\"false\">\n" +
    "                    <path stroke=\"#333\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" stroke-width=\"2\"\n" +
    "                          d=\"M4 7h22M4 15h22M4 23h22\"></path>\n" +
    "                </svg>\n" +
    "            </button>\n" +
    "        </div>\n" +
    "        <nav class=\"navbar navbar-expand-md p-0\">\n" +
    "            <div ui-field=\"navbarPanel\" class=\"navbar-collapse collapse\">\n" +
    "                <!--            <dn-tree ui-field=\"tree\" ></dn-tree>-->\n" +
    "                <div ui-field=\"treeHolder\" class=\"pb-4\"></div>\n" +
    "            </div>\n" +
    "        </nav>\n" +
    "    </aside>\n" +
    "    <template ui-field=\"treeSideTemplate\">\n" +
    "        <template ui-field=\"treeMain\">\n" +
    "            <ul ui-field=\"root\" class=\"nav flex-column w-100 demo-nav\"></ul>\n" +
    "            <style-item ui-field=\"rowHeight\" class=\"49\"></style-item>\n" +
    "        </template>\n" +
    "        <template ui-field=\"treeItemSimple\">\n" +
    "            <li ui-field=\"root\" class=\"nav-item\">\n" +
    "                <a href=\"javascript:void(0)\" class=\"nav-link\">\n" +
    "                    <span ui-field=\"iconParent\" style=\"display: none\" class=\"mr-3\">\n" +
    "                      <i ui-field=\"iconPanel\" class=\"fa fa-user\"></i>\n" +
    "                    </span>\n" +
    "                    <span ui-field=\"valuePanel\" class=\"d-inline-flex mr-auto\">Loremipsum</span>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "            <style-item ui-field=\"modelSelected\" class=\"active\"></style-item>\n" +
    "        </template>\n" +
    "        <template ui-field=\"treeItemSimpleParent\">\n" +
    "            <li ui-field=\"root\" class=\"nav-item\">\n" +
    "                <a href=\"javascript:void(0)\" class=\"nav-link dropdown-toggle collapsed\" ui-field=\"valuePanelParent\">\n" +
    "                    <span ui-field=\"iconParent\" style=\"display: none\" class=\"mr-3\">\n" +
    "                      <i ui-field=\"iconPanel\" class=\"fa fa-user\"></i>\n" +
    "                    </span>\n" +
    "                    <span ui-field=\"valuePanel\" class=\"d-inline-flex mr-auto\">Loremipsum</span>\n" +
    "                    <i ui-field=\"openCloseElement\" class=\"pull-right\"></i>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "            <style-item ui-field=\"openStyle\" class=\"\"></style-item>\n" +
    "            <style-item ui-field=\"closeStyle\" class=\"collapsed\"></style-item>\n" +
    "        </template>\n" +
    "    </template>\n" +
    "\n" +
    "    <style-item ui-field=\"collapsedStyle\" class=\"collapsed\"></style-item>\n" +
    "    <style-item ui-field=\"showNavBarPanelStyle\" class=\"show\"></style-item>\n" +
    "</template>";