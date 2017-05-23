import Base from './Base';

class Text extends Base {
  applyProps(props) {
    super.applyProps(props);

    // This hack is needed to retrieve heightOfString.
    // Need to fix
    this.root.page = { margins: 0 };

    const width = this.root.widthOfString(`${props.children}`);
    const height = this.root.heightOfString(`${props.children}`);

    this.layout.setWidth(width);
    this.layout.setHeight(height);
  }

  appendChild(child) {
    this.children = child;
  }

  removeChild(child) {
    this.children = null;
  }

  async render() {
    const { fontSize = 18, color = 'black' } = this.style;
    const { left, top } = this.getAbsoluteLayout();

    this.root
      .fillColor(color)
      .fontSize(fontSize)
      .text(this.children, left, top);
  }
}

export default Text;
