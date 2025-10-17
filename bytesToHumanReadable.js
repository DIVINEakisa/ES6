function formatBytes(bytes) {
  if (bytes === 0) return "0 Bytes";
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const result = (bytes / Math.pow(1024, i)).toFixed(2);
  return `${result} ${sizes[i]}`;
}

console.log(formatBytes(1024));
console.log(formatBytes(1048576));
console.log(formatBytes(1073741824));
