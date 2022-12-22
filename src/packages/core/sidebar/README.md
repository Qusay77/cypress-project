# Usage

-  To use this package import package from "@packages/core-sidebar" and put it on the top of your component to cover all content in the bottom of it 

-  You can send multiple children inside sidebar package to add it as content inside sidebar 

-  Default Value for this package to swap from left (If you want to change it send props right) 

-  You can change width as you want by send props width as string in % or px 

-  You Can Change Custom Burger Icon by send customBurgerIcon props (type of this prop boolean or html image) 

- For Example :-

> customBurgerIcon={ `<img src="img/icon.svg" />` } to change Icon

> customBurgerIcon={false} to remove Icon (If you want to remove Icon send isOpen prop (boolean value true or false) to package to work fine to open and close on any button or div in your application )

# Styling
You can custmize all style attribute
```javascript
var styles = {

/* Position and sizing of burger button */
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },

/* Color/shape of burger icon bars */
  bmBurgerBars: {
    background: '#373a47'
  },

  /* Color/shape of burger icon bars on hover*/
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  
  /* Position and sizing of clickable close cross button */
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },

  /* Color/shape of close button cross */
  bmCross: {
    background: '#bdc3c7'
  },
  
  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },

  /* General sidebar styles */
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },

  /* Wrapper for item list */
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },

  /* Individual item */
  bmItem: {
    display: 'inline-block'
  },

  /* Styling of overlay */
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}
```

- ** If you want to Read or Know more about react-burger-menu you can use this link :- **

`link` : <https://www.npmjs.com/package/react-burger-menu>
