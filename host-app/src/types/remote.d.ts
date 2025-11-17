// types/remote-vue.d.ts
declare module "remote-vue/VueApp" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "remote-react/App" {
  import { Element } from "react";
  export default Element;
}
