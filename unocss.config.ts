import { UnocssNuxtOptions } from "@unocss/nuxt";
import presetIcons from "@unocss/preset-icons/browser";

export default <UnocssNuxtOptions>{
  preflight: false,
  presets: [
    presetIcons({
      scale: 1.5,
      cdn: "https://esm.sh/",
    }),
  ],
};
