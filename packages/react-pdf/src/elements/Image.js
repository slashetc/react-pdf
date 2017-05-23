import Base from './Base';
const request = require('request');

class Image extends Base {
  async fetchImage() {
    return new Promise((resolve, reject) => {
      request(
        {
          url: this.props.src,
          method: 'GET',
          encoding: null,
        },
        (error, response, body) => {
          if (error) {
            return reject(error);
          }
          return resolve(body);
        },
      );
    });
  }

  async render() {
    const image = await this.fetchImage();
    const { left, top, width } = this.getAbsoluteLayout();

    this.root.image(image, left, top, { width });
  }
}

export default Image;
