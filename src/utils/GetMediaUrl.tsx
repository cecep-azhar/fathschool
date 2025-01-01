export function GetMediaUrl(media: string, isVideo: boolean = false) {
  if (typeof media === "string") {
    if (media.startsWith("http") || media.startsWith("https") || isVideo) {
      return `${process.env.NEXT_PUBLIC_STORAGE_URL}${media}`;
    } else {
      return media;
    }
  }

  return media;
}
