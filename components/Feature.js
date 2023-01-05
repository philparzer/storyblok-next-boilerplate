import { storyblokEditable } from "@storyblok/react";
 
const Feature = ({ blok }) => (
  <div className="" {...storyblokEditable(blok)}>
    {blok.name}
  </div>
);
 
export default Feature;
