import { NextResponse } from "next/server";
import { cloudinary } from "@/libs/cloudinary";
import { supabase } from "@/libs/supabase/server";
import { Readable } from "stream";

export async function POST(request: Request) {
  const authHeader = request.headers.get("authorization");
  const accessToken = authHeader?.split(" ")[1];
  // console.log("request", request);
  // console.log("accessToken", accessToken);

  if (!accessToken) {
    return NextResponse.json({ error: "No access token" }, { status: 401 });
  }

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser(accessToken);
  // console.log("user", user);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }

  if (!user) {
    return NextResponse.json({ error: "No user found" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("image") as File;
  const public_id = formData.get("public_id") as string;
  // console.log("public_id", public_id);

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  if (file.size > 5 * 1024 * 1024) {
    return NextResponse.json(
      { error: "File size limit exceeded" },
      { status: 400 }
    );
  }

  const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
  if (!allowedTypes.includes(file.type)) {
    return NextResponse.json({ error: "Invalid file type" }, { status: 400 });
  }

  try {
    const buffer = await file.arrayBuffer();
    const readableStream = Readable.from(Buffer.from(buffer));

    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "in-my-link/profile" },
        (error, result) => {
          if (error) return reject(error);
          // console.error("Error uploading to Cloudinary", error);
          resolve(result);
        }
      );
      readableStream.pipe(stream);
    });
    // console.log("result", result);
    // console.log("id", user.id);

    const { error } = await supabase
      .from("profiles")
      .update({
        profile_img: (result as CloudiNaryUploadResponse).url,
        public_id: (result as CloudiNaryUploadResponse).public_id,
        updated_at: new Date().toISOString(),
      })
      .eq("user_id", user.id);

    if (error) {
      console.error("Error saving image URL to Supabase:", error);
      throw new Error("Failed to save image URL to Supabase");
    }

    if (public_id) {
      await cloudinary.uploader.destroy(public_id);
    }

    return NextResponse.json(
      {
        profile_img: (result as CloudiNaryUploadResponse).url,
        public_id: (result as CloudiNaryUploadResponse).public_id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
