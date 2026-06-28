type VideoEmbedProps = {
  src: string;
  title: string;
};

function getGoogleDriveEmbedUrl(url: string) {
  const match = url.match(/\/file\/d\/([^/]+)/);
  if (!match) return url;

  return `https://drive.google.com/file/d/${match[1]}/preview`;
}

export default function VideoEmbed({ src, title }: VideoEmbedProps) {
  const embedUrl = getGoogleDriveEmbedUrl(src);

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="relative aspect-video">
        <iframe
          src={embedUrl}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    </div>
  );
}