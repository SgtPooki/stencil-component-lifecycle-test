import { Component, h } from "@stencil/core";

@Component({
  tag: "cmp-c"
})
export class Cmpc {

 async componentWillLoad() {
    // uncomment to manipulate components lifecycle methods order
    //await document.querySelector('cmp-b').componentOnReady();
    console.log("cmp-c will load", performance.now());
  }

  componentDidLoad() {
    console.log('cmp-c did load', performance.now());
  }

  render() {
    console.log('cmp-c render', performance.now());
      return (
        <div>{performance.now()}</div>
      );
    }
  }
