import { Component} from "@stencil/core";


@Component({
  tag: "cmp-c"
})
export class Cmpc {

 async componentWillLoad() {
    // uncomment to manipulate components lifecycle methods order 
    //await document.querySelector('cmp-b').componentOnReady();
    console.log("cmp-c will load");
  }

  componentDidLoad() {
    console.log('cmp-c did load');
  }

  render() {
      return (
        <slot/>
      );
    }
  }