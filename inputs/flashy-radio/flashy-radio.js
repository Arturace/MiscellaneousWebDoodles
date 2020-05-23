customElements.define(`flashy-radio-group`,
  class FlashyRadioGroup extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.setAttribute(`role`, `group`);

      document.addEventListener(`DOMContentLoaded`, () => {
        // Every click on the group
        // we check if the selected checkbox was changed
        this.addEventListener('click', (e) => 
          this.visuallySelectRadio(Array
            .from(this.children)
            .filter(val => val.nodeName == `INPUT`)
            .findIndex(val => val.checked))
        );

        this.click();
      });
    }

    visuallySelectRadio(index) {
      this.style.setProperty(`--currently-selected-index`, index);
    }
  });
