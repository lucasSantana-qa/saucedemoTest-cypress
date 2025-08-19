const locators = {
    LOGIN: {
        USERNAME: '[data-test="username"]',
        PASSWD: '[data-test="password"]',
        BTN_LOGIN: '[data-test="login-button"]'
    },
    HOME: {
        INVENTORY_CONTAINER: '[data-test="inventory-container"]',
        ITEM_LIST: "//div[@data-test='inventory-list']",
        BTN_SIDEBAR: '#react-burger-menu-btn',
        BTN_LOGOUT: '#logout_sidebar_link',
        BTN_ADD_TO_CART: '[data-test="add-to-cart-sauce-labs-backpack"]',
        BTN_REMOVE_ITEM: '[data-test="remove-sauce-labs-backpack"]',
        ICON_QTY_ITEM: '[data-test="shopping-cart-badge"]',
        BTN_CART: '[data-test="shopping-cart-link"]'
    },
    CART: {
        ITEM_NAME: '[data-test="inventory-item-name"]',
        PRICE: '[data-test="inventory-item-price"]',
    }

}

export default locators