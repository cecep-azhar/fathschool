export function GetMediaUrl(media: string, isVideo: boolean = false) {
  if (typeof media === "string") {

    if (media.startsWith("img/") || media.startsWith("videos/") || media.startsWith("posts/")) {
      return process.env.NEXT_PUBLIC_STORAGE_URL + media;
    }

    return media;
  }

  return media;
}
