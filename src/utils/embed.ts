export const convertToEmbedURL = (url: string): string => {
    // YouTube 정규식
    const youtubeRegex =
      /(?:youtu\.be\/|youtube\.com\/(?:embed\/|watch\?v=|v\/|shorts\/))([\w\-]+)/;
    // TikTok 정규식
    const tiktokRegex = /(?:tiktok\.com\/(?:@[\w.]+\/video\/|v\/))([\d]+)/;
  
    // YouTube URL 처리
    const youtubeMatch = url.match(youtubeRegex);
    if (youtubeMatch && youtubeMatch[1]) {
      return `https://www.youtube.com/embed/${youtubeMatch[1]}?`;
    }
  
    // TikTok URL 처리
    const tiktokMatch = url.match(tiktokRegex);
    if (tiktokMatch && tiktokMatch[1]) {
      return `https://www.tiktok.com/embed/${tiktokMatch[1]}`;
    }
  
    // 유효하지 않은 URL은 원래 URL 반환
    return url;
  };
  