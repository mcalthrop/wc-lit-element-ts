import { LitElement, customElement, html, property } from 'lit-element';

@customElement('my-element')
export class MyElement extends LitElement {
    @property() jibber: string = 'jabber';

    render() {
        return html`
            <div>text binding: ${this.jibber}</div>
        `;
    }
}
