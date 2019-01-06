# Stencil Component Lifecycle Test

Small repo, fork of Stencil starter: https://github.com/ionic-team/stencil-app-starter
created to test component lifecycle hierarchy as in docs: https://stenciljs.com/docs/component-lifecycle

Please uncomment blocks in index.html to check what's the lifecycle hierarchy.
My tests:

<cmp-a>
  <cmp-b>
    <cmp-c></cmp-c>
  </cmp-b>
</cmp-a>

is giving : 
a will load
b will load
c will load
c did load 
b did load
a did load

exactly as in docs.

<cmp-c>
  <cmp-b>
    <cmp-a></cmp-a>
  </cmp-b>
</cmp-c>

is giving:
a will load
a did load
b will load
b did load
c will load
c did load

which is wrong and seems to go with alphabetical order. should be:
c will load
b will load
a will load
a did load 
b did load
c did load


Repo is also showing how to influence this hierarchy programatically, assuming that child components know about its parent. Can be usefull when child needs some data from parent or from root component In articular when using Stencil with Redux and configuiring Redux store in root component. This may help:
 async componentWillLoad() {
    await document.querySelector('root-cmp').componentOnReady();
    // root component is loaded. if Redux store is defined/configured there (or other data required here) 
    // you are sure that it is ready to use here
    ...
    }
