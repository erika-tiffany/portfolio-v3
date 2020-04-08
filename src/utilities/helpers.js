/*
 * To get the document height, get all height values found on document 
 * and documentElement and use the highest one.
 * @see https://stackoverflow.com/a/1147768
*/
export function getDocumentHeight() {
  const body = document.body;
  const html = document.documentElement;
  return Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
}