import { Component} from "@stencil/core";


@Component({
  tag: "cmp-a"
})
export class Cmpa {

  componentWillLoad() {
    console.log("cmp-a will load");
  }

  componentDidLoad() {
    console.log('cmp-a did load');
  }

  render() {
      return (
        <slot/>
      );
    }
  }