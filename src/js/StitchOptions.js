import { Component } from 'react';

class StitchOptions extends Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: '',
      stitchOption: ''
    }
  }

  render() {
    return (
      <div>
        <section>
          <h2>Stitch Type:</h2>
          <article class='stitch knit'></article>
          <article class='stitch purl'></article>
          <article class='stitch k2tog'></article>
          <article class='stitch ssk'></article>
        </section>
        <section>
          <h2>Background Color:</h2>
          <article class='stitch red'></article>
          <article class='stitch orange'></article>
          <article class='stitch yellow'></article>
          <article class='stitch green'></article>
          <article class='stitch blue'></article>
          <article class='stitch indigo'></article>
          <article class='stitch violet'></article>
        </section>
      </div>
    )
  }
}

export default StitchOptions;