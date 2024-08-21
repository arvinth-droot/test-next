import { revalidatePath } from "next/cache";

export async function GET(request) {
  // to revalidate the cache , we need to hit => {webUrl/api/revalidate?path={path of the page to revalidate}} http://localhost:3000/api/revalidate?path=/products/tamarind-pepko-kerala-spices
  // to revalidate the cache , we need to hit => {webUrl/api/revalidate?path={path of the page to revalidate}} http://localhost:3000/api/revalidate?path=/products/tamarind-pepko-kerala-spices
  //! revalidatePath(path, "page"); type can be page for exact urls like http://localhost:3000/api/revalidate?path=/products/tamarind-pepko-kerala-spices
  //! revalidatePath(path, "layout"); type can be page for exact urls like http://localhost:3000/api/revalidate?path=/products <- to revalidate all pages under /products

  const path = request.nextUrl.searchParams.get("path");

  if (path) {
    revalidatePath(path, "layout");
    return Response.json({ revalidated: true, now: Date.now(), path });
  }

  return Response.json({
    revalidated: false,
    now: Date.now(),
    message: "Missing path to revalidate",
  });
}