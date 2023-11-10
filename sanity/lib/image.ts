import { dataset, projectId } from "../env";
import createImageUrlBuilder from "@sanity/image-url";

const imageBuilder = createImageUrlBuilder({
  dataset: dataset || "",
  projectId: projectId || "",
});

export const urlForImage = (source: any) => {
  return imageBuilder?.image(source).auto("format").fit("max");
};
