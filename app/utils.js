export function captureSnapshotFromVideo(video) {
  let canvas = document.createElement('canvas');
  const width = 200;
  const height = 150;

  canvas.width = width;
  canvas.height = height;

  let context = canvas.getContext('2d');
  context.translate(width, 0);
  context.scale(-1, 1);

  context.drawImage(video, 0, 0, width, height);

  return canvas.toDataURL('image/png');
}
