import { Component, h } from "@stencil/core";


@Component({
  tag: "cmp-a"
})
export class Cmpa {

  componentWillLoad() {
    console.log("cmp-a will load", performance.now());
  }

  componentDidLoad() {
    console.log('cmp-a did load', performance.now());
  }

  render() {
    console.log('cmp-a render', performance.now());
      return (
        <div>{performance.now()}</div>
      );
    }
  }
