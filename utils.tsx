export function getPath(pathname: string) {
  const paths = pathname.split("/");
  return paths[paths.length - 1];
}
