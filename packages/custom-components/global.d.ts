declare module "vue" {
  export interface GlobalComponents {
    McBlock: (typeof import("@mobilecustom/components"))["McBlock"];
    McCarousel: (typeof import("@mobilecustom/components"))["McCarousel"];
    McContainer: (typeof import("@mobilecustom/components"))["McContainer"];
    McCube: (typeof import("@mobilecustom/components"))["McCube"];
    McImage: (typeof import("@mobilecustom/components"))["McImage"];
    McNotice: (typeof import("@mobilecustom/components"))["McNotice"];
    McTitle: (typeof import("@mobilecustom/components"))["McTitle"];
    Preview: (typeof import("@mobilecustom/components"))["Preview"];
    customComponents: (typeof import("@mobilecustom/components"))["customComponents"];
  }

  interface ComponentCustomProperties {}
}

export {};
