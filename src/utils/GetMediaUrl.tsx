export function GetMediaUrl(media: string, isVideo: boolean = false) {
  if (typeof media === "string") {
    const assetFolders = ["img/", "videos/", "posts/"];

    if (assetFolders.some((folder) => media.startsWith(folder))) {
      return `${process.env.NEXT_PUBLIC_STORAGE_URL}${media}`;
    }

    return media;
  }

  return media;
}
