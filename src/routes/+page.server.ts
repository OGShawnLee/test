import { BLOB_READ_WRITE_TOKEN } from "$env/static/private";
import { error } from "@sveltejs/kit";
import { put } from "@vercel/blob";

export const actions = {
  upload: async ({ request }) => {
    const form = await request.formData();
    const file = form.get("file") as File;

    if (!file) {
      throw error(400, { message: "No file to upload." });
    }

    const { url } = await put(file.name, file, { access: "public",
    token: BLOB_READ_WRITE_TOKEN
});
    return { uploaded: url };
  },
};
