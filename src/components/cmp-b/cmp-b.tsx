import { Component} from "@stencil/core";


@Component({
  tag: "cmp-b"
})
export class Cmpb {

  componentWillLoad() {
    console.log("cmp-b will load");
  }

  componentDidLoad() {
    console.log('cmp-b did load');
  }

  render() {
      return (
        <slot/>
      );
    }
  }