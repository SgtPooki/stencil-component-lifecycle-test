import { Component, h } from "@stencil/core";

@Component({
  tag: "cmp-b"
})
export class Cmpb {

  componentWillLoad() {
    console.log("cmp-b will load", performance.now());
  }

  componentDidLoad() {
    console.log('cmp-b did load', performance.now());
  }

  render() {
    console.log('cmp-b render', performance.now());
      return (
        <div>{performance.now()}</div>
      );
    }
  }
