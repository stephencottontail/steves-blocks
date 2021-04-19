import { registerBlockType } from "@wordpress/blocks";
import edit from "./toc/edit.js";
import save from "./toc/save.js";

registerBlockType("scbc/toc", {
  title: "TOC Block",
  description: "TOC Block Test",
  category: "scbc",
  attributes: {
    list: {
      type: "array",
      default: [],
    },
  },
  icon: "hidden",
  edit,
  save,
});
